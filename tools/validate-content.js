const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const scripts = ["sources.js", "checklists.js", "support-content.js"];
const context = { window: {} };
vm.createContext(context);

scripts.forEach((file) => {
  const filePath = path.join(root, "landed-app", "assets", "js", file);
  vm.runInContext(fs.readFileSync(filePath, "utf8"), context, { filename: file });
});

const sources = context.window.LANDED_SOURCES || {};
const stages = context.window.LANDED_STAGES || [];
const guides = context.window.LANDED_GUIDES || [];
const faqs = context.window.LANDED_FAQS || [];
const tasks = stages.flatMap((stage) => stage.tasks || []);
const taskIds = tasks.map((task) => task.id);
const sourceReferences = [
  ...tasks.map((task) => task.sourceId),
  ...guides.flatMap((guide) => guide.sourceIds || []),
  ...faqs.map((faq) => faq.sourceId).filter(Boolean)
];

const duplicateTaskIds = [...new Set(taskIds.filter((id, index) => taskIds.indexOf(id) !== index))];
const missingSourceIds = [...new Set(sourceReferences.filter((id) => !sources[id]))];
const invalidUrls = Object.entries(sources)
  .filter(([, source]) => {
    try {
      const parsed = new URL(source.url);
      return parsed.protocol !== "https:";
    } catch {
      return true;
    }
  })
  .map(([id]) => id);
const incompleteSources = Object.entries(sources)
  .filter(([, source]) => !source.category || !source.organisation || !source.title || !source.verifiedOn)
  .map(([id]) => id);

const report = {
  stages: stages.length,
  tasks: tasks.length,
  tasksPerStage: stages.map((stage) => `${stage.id}:${stage.tasks.length}`),
  guides: guides.length,
  faqs: faqs.length,
  sources: Object.keys(sources).length,
  duplicateTaskIds,
  missingSourceIds,
  invalidUrls,
  incompleteSources
};

console.log(JSON.stringify(report, null, 2));

const hasErrors = stages.length !== 4
  || tasks.length !== 23
  || guides.length !== 7
  || faqs.length !== 8
  || duplicateTaskIds.length
  || missingSourceIds.length
  || invalidUrls.length
  || incompleteSources.length;

if (hasErrors) process.exit(1);
