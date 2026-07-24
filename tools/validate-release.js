#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const requiredDocs = [
  "docs/week8/README_week8.md",
  "docs/week8/browser-qa-results.json",
  "docs/week8/internal-validation-report.md",
  "docs/week8/accessibility-privacy-audit.md",
  "docs/week8/content-review-log.md",
  "docs/week8/final-link-audit.md",
  "docs/week8/release-checklist.md",
  "docs/week8/release-notes.md"
];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function loadBrowserData(relativePaths) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  relativePaths.forEach((relativePath) => {
    vm.runInContext(read(relativePath), sandbox, { filename: relativePath });
  });
  return sandbox.window;
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git") return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const data = loadBrowserData([
  "landed-app/assets/js/sources.js",
  "landed-app/assets/js/checklists.js",
  "landed-app/assets/js/support-content.js"
]);
const index = read("landed-app/index.html");
const tasks = data.LANDED_STAGES.flatMap((stage) => stage.tasks || []);
const failures = [];
const checks = [];

function check(name, condition, detail) {
  checks.push({ name, passed: Boolean(condition), detail });
  if (!condition) failures.push(`${name}: ${detail}`);
}

check("Four journey stages", data.LANDED_STAGES.length === 4, `${data.LANDED_STAGES.length} found`);
check("Twenty-three tasks", tasks.length === 23, `${tasks.length} found`);
check("Seven topic guides", data.LANDED_GUIDES.length === 7, `${data.LANDED_GUIDES.length} found`);
check("Eight FAQ items", data.LANDED_FAQS.length === 8, `${data.LANDED_FAQS.length} found`);
check("Twenty official sources", Object.keys(data.LANDED_SOURCES).length === 20, `${Object.keys(data.LANDED_SOURCES).length} found`);
check("Week 8 content version", /^Week 8 release candidate/.test(data.LANDED_CONTENT_VERSION), data.LANDED_CONTENT_VERSION);
check("JCU logo referenced", index.includes("assets/images/jcu-singapore-logo.png"), index.includes("assets/images/jcu-singapore-logo.png") ? "referenced" : "missing");
check("Event logo referenced", index.includes("assets/images/jcus-38-convergence-logo.png"), index.includes("assets/images/jcus-38-convergence-logo.png") ? "referenced" : "missing");
check("Logo alternative text", index.includes('alt="James Cook University Singapore"') && index.includes('alt="JCUS 38th Convergence Conference"'), index.includes('alt="James Cook University Singapore"') && index.includes('alt="JCUS 38th Convergence Conference"') ? "present" : "missing");
check("No data-entry form", !/<form\b/i.test(index), !/<form\b/i.test(index) ? "none found" : "unexpected form element found");

[
  "landed-app/assets/images/jcu-singapore-logo.png",
  "landed-app/assets/images/jcus-38-convergence-logo.png"
].forEach((relativePath) => {
  const absolutePath = path.join(root, relativePath);
  const exists = fs.existsSync(absolutePath) && fs.statSync(absolutePath).size > 0;
  check(`${relativePath} exists`, exists, exists ? "present" : "missing or empty");
});

requiredDocs.forEach((relativePath) => {
  const exists = fs.existsSync(path.join(root, relativePath));
  check(`${relativePath} exists`, exists, exists ? "present" : "required evidence missing");
});

const publicFiles = walk(root).map((file) => path.relative(root, file).replaceAll("\\", "/"));
const rawDataFiles = publicFiles.filter((file) => /\.(csv|xlsx?|sav)$/i.test(file));
check("No raw response exports", rawDataFiles.length === 0, rawDataFiles.join(", ") || "none");

const textFiles = publicFiles.filter((file) => /\.(md|html|css|js|yml)$/i.test(file));
const encodingIssues = textFiles.filter((file) => {
  const value = read(file);
  return value.includes("\uFFFD") || value.includes("\u9225") || value.includes("\u9239");
});
check("No visible encoding corruption", encodingIssues.length === 0, encodingIssues.join(", ") || "none");

console.log(JSON.stringify({
  status: failures.length ? "failed" : "passed",
  checks,
  failures
}, null, 2));

if (failures.length) process.exitCode = 1;