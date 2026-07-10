(function () {
  "use strict";

  const STORAGE_KEY = "landed.completedTasks.v1";
  const stages = Array.isArray(window.LANDED_STAGES) ? window.LANDED_STAGES : [];
  const sources = window.LANDED_SOURCES || {};
  let completedTasks = readCompletedTasks();

  const elements = {
    journeyView: document.querySelector("#journey-view"),
    checklistView: document.querySelector("#checklist-view"),
    stageGrid: document.querySelector("#stage-grid"),
    taskList: document.querySelector("#task-list"),
    checklistLabel: document.querySelector("#checklist-label"),
    checklistTitle: document.querySelector("#checklist-title"),
    checklistDescription: document.querySelector("#checklist-description"),
    completedCount: document.querySelector("#completed-count"),
    taskCount: document.querySelector("#task-count"),
    progressPercent: document.querySelector("#progress-percent"),
    progressBar: document.querySelector("#progress-bar"),
    resetButton: document.querySelector("#reset-progress"),
    backButton: document.querySelector("#back-to-journey"),
    contentVersion: document.querySelector("#content-version"),
  };

  function readCompletedTasks() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return new Set(Array.isArray(stored) ? stored : []);
    } catch (error) {
      console.warn("Landed could not read saved progress.", error);
      return new Set();
    }
  }

  function saveCompletedTasks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedTasks]));
    } catch (error) {
      console.warn("Landed could not save progress on this device.", error);
    }
  }

  function availableTasks() {
    return stages.flatMap((stage) => Array.isArray(stage.tasks) ? stage.tasks : []);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderStages() {
    elements.stageGrid.replaceChildren();

    stages.forEach((stage, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "stage-card";
      card.disabled = !stage.available;
      card.setAttribute("aria-label", stage.available ? `Open ${stage.title} checklist` : `${stage.title}, coming in Week 7`);

      card.append(
        createElement("span", "stage-number", String(index + 1)),
        createElement("h3", "", stage.title),
        createElement("p", "", stage.summary),
        createElement("span", "stage-status", stage.available ? `${stage.tasks.length} tasks available` : "Coming in Week 7")
      );

      if (stage.available) {
        card.addEventListener("click", () => openStage(stage.id));
      }
      elements.stageGrid.append(card);
    });
  }

  function openStage(stageId) {
    const stage = stages.find((item) => item.id === stageId && item.available);
    if (!stage) return;

    elements.checklistLabel.textContent = stage.when;
    elements.checklistTitle.textContent = stage.title;
    elements.checklistDescription.textContent = stage.description;
    renderTasks(stage.tasks);
    elements.journeyView.hidden = true;
    elements.checklistView.hidden = false;
    elements.backButton.focus();
    elements.checklistView.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderTasks(tasks) {
    elements.taskList.replaceChildren();
    tasks.forEach((task) => elements.taskList.append(createTaskCard(task)));
  }

  function createTaskCard(task) {
    const card = createElement("article", "task-card");
    const checkbox = document.createElement("input");
    const content = createElement("div", "task-content");
    const title = createElement("h3", "", task.title);
    const summary = createElement("p", "", task.summary);
    const meta = createElement("div", "task-meta");
    const source = sources[task.sourceId];

    checkbox.type = "checkbox";
    checkbox.id = `task-${task.id}`;
    checkbox.checked = completedTasks.has(task.id);
    checkbox.setAttribute("aria-label", `Mark ${task.title} as completed`);
    card.classList.toggle("is-complete", checkbox.checked);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) completedTasks.add(task.id);
      else completedTasks.delete(task.id);
      card.classList.toggle("is-complete", checkbox.checked);
      saveCompletedTasks();
      updateProgress();
    });

    if (task.priority === "high") {
      meta.append(createElement("span", "priority-label", "Do this first"));
    }

    if (source) {
      const link = createElement("a", "source-link", `Official source: ${source.organisation}`);
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      meta.append(link, createElement("span", "", `Last verified ${source.verifiedOn}`));
    }

    content.append(title, summary, meta);
    card.append(checkbox, content);
    return card;
  }

  function updateProgress() {
    const tasks = availableTasks();
    const validIds = new Set(tasks.map((task) => task.id));
    const complete = [...completedTasks].filter((id) => validIds.has(id)).length;
    const percent = tasks.length ? Math.round((complete / tasks.length) * 100) : 0;

    elements.completedCount.textContent = String(complete);
    elements.taskCount.textContent = String(tasks.length);
    elements.progressPercent.textContent = `${percent}%`;
    elements.progressBar.style.width = `${percent}%`;
  }

  elements.backButton.addEventListener("click", () => {
    elements.checklistView.hidden = true;
    elements.journeyView.hidden = false;
    const firstAvailableStage = document.querySelector(".stage-card:not([disabled])");
    firstAvailableStage?.focus();
    elements.journeyView.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.resetButton.addEventListener("click", () => {
    if (!completedTasks.size) return;
    if (!window.confirm("Reset all saved Landed checklist progress on this device?")) return;
    completedTasks = new Set();
    saveCompletedTasks();
    updateProgress();
    document.querySelectorAll(".task-card input[type='checkbox']").forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.closest(".task-card")?.classList.remove("is-complete");
    });
  });

  elements.contentVersion.textContent = window.LANDED_CONTENT_VERSION || "Week 6 preview";
  renderStages();
  updateProgress();
})();
