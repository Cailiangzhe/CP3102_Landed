#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "landed-app/assets/js/sources.js");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(sourcePath, "utf8"), sandbox, { filename: sourcePath });

const sources = Object.entries(sandbox.window.LANDED_SOURCES || {});
const timeoutMs = Number(process.env.LINK_TIMEOUT_MS || 20000);
const jsonOutput = process.argv.includes("--json");

function classify(status) {
  if (status >= 200 && status < 400) return "reachable";
  if ([401, 403, 429].includes(status)) return "restricted";
  return "broken";
}

async function checkLink([id, source]) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(source.url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "accept": "text/html,application/xhtml+xml",
        "user-agent": "Mozilla/5.0 Landed-Week8-Link-Audit/1.0"
      }
    });
    if (response.body) await response.body.cancel();
    return {
      id,
      organisation: source.organisation,
      title: source.title,
      requestedUrl: source.url,
      finalUrl: response.url,
      status: response.status,
      result: classify(response.status)
    };
  } catch (error) {
    return {
      id,
      organisation: source.organisation,
      title: source.title,
      requestedUrl: source.url,
      finalUrl: null,
      status: null,
      result: "network-error",
      error: error.name === "AbortError" ? `timeout after ${timeoutMs}ms` : error.message
    };
  } finally {
    clearTimeout(timer);
  }
}

(async () => {
  const results = [];
  for (const source of sources) results.push(await checkLink(source));

  const summary = {
    checkedAt: new Date().toISOString(),
    total: results.length,
    reachable: results.filter((item) => item.result === "reachable").length,
    restricted: results.filter((item) => item.result === "restricted").length,
    broken: results.filter((item) => item.result === "broken").length,
    networkErrors: results.filter((item) => item.result === "network-error").length
  };

  if (jsonOutput) {
    console.log(JSON.stringify({ summary, results }, null, 2));
  } else {
    console.table(results.map(({ id, organisation, status, result, finalUrl }) => ({
      id,
      organisation,
      status: status ?? "-",
      result,
      finalUrl: finalUrl || "-"
    })));
    console.log(JSON.stringify(summary, null, 2));
  }

  if (summary.broken || summary.networkErrors) process.exitCode = 1;
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});