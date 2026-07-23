(function () {
  "use strict";

  const STORAGE_KEY = "landed.completedTasks.v1";
  const stages = Array.isArray(window.LANDED_STAGES) ? window.LANDED_STAGES : [];
  const sources = window.LANDED_SOURCES || {};
  const guides = Array.isArray(window.LANDED_GUIDES) ? window.LANDED_GUIDES : [];
  const faqs = Array.isArray(window.LANDED_FAQS) ? window.LANDED_FAQS : [];
  let completedTasks = readCompletedTasks();

  const elements = {
    views: [...document.querySelectorAll("[data-view]")],
    navLinks: [...document.querySelectorAll("[data-view-link]")],
    stageGrid: document.querySelector("#stage-grid"),
    taskList: document.querySelector("#task-list"),
    guideGrid: document.querySelector("#guide-grid"),
    faqList: document.querySelector("#faq-list"),
    sourceDirectory: document.querySelector("#source-directory"),
    checklistLabel: document.querySelector("#checklist-label"),
    checklistTitle: document.querySelector("#checklist-title"),
    checklistDescription: document.querySelector("#checklist-description"),
    completedCount: document.querySelector("#completed-count"),
    taskCount: document.querySelector("#task-count"),
    progressPercent: document.querySelector("#progress-percent"),
    progressTrack: document.querySelector("#progress-track"),
    progressBar: document.querySelector("#progress-bar"),
    resetButton: document.querySelector("#reset-progress"),
    backButton: document.querySelector("#back-to-journey"),
    contentVersion: document.querySelector("#content-version"),
    statusMessage: document.querySelector("#status-message")
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
    return stages.flatMap((stage) => stage.available && Array.isArray(stage.tasks) ? stage.tasks : []);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function announce(message) {
    elements.statusMessage.textContent = "";
    window.setTimeout(() => {
      elements.statusMessage.textContent = message;
    }, 20);
  }

  function setView(viewId, options = {}) {
    const target = elements.views.find((view) => view.dataset.view === viewId);
    if (!target) return;

    elements.views.forEach((view) => {
      view.hidden = view !== target;
    });

    const activeNav = viewId === "checklist" ? "journey" : viewId;
    elements.navLinks.forEach((link) => {
      if (link.dataset.viewLink === activeNav) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    if (options.hash) history.replaceState(null, "", options.hash);
    if (options.focusSelector) document.querySelector(options.focusSelector)?.focus();
    if (options.scroll !== false) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function createSourceLink(sourceId, labelPrefix = "Official source") {
    const source = sources[sourceId];
    if (!source) return null;
    const link = createElement("a", "source-link", `${labelPrefix}: ${source.organisation}`);
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = source.title;
    return link;
  }

  function renderStages() {
    elements.stageGrid.replaceChildren();

    stages.forEach((stage, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "stage-card";
      card.dataset.stage = stage.id;
      card.disabled = !stage.available;
      card.setAttribute("aria-label", stage.available ? `Open ${stage.title} checklist` : `${stage.title}, unavailable`);

      card.append(
        createElement("span", "stage-number", String(index + 1)),
        createElement("h3", "", stage.title),
        createElement("p", "", stage.summary),
        createElement("span", "stage-status", stage.available ? `${stage.tasks.length} tasks` : "Not available")
      );

      if (stage.available) card.addEventListener("click", () => openStage(stage.id));
      elements.stageGrid.append(card);
    });
  }

  function openStage(stageId) {
    const stage = stages.find((item) => item.id === stageId && item.available);
    if (!stage) return;

    elements.checklistLabel.textContent = stage.when;
    elements.checklistTitle.textContent = stage.title;
    elements.checklistDescription.textContent = stage.description;
    elements.taskList.dataset.stage = stage.id;
    renderTasks(stage.tasks);
    setView("checklist", { hash: `#${stage.id}`, focusSelector: "#checklist-title" });
    announce(`${stage.title} checklist opened with ${stage.tasks.length} tasks.`);
  }

  function renderTasks(tasks) {
    elements.taskList.replaceChildren();
    tasks.forEach((task) => elements.taskList.append(createTaskCard(task)));
  }

  function createTaskCard(task) {
    const card = createElement("article", "task-card");
    const checkbox = document.createElement("input");
    const content = createElement("div", "task-content");
    const title = document.createElement("label");
    const summary = createElement("p", "", task.summary);
    const meta = createElement("div", "task-meta");
    const source = sources[task.sourceId];

    checkbox.type = "checkbox";
    checkbox.id = `task-${task.id}`;
    checkbox.checked = completedTasks.has(task.id);
    title.className = "task-title";
    title.htmlFor = checkbox.id;
    title.textContent = task.title;
    card.classList.toggle("is-complete", checkbox.checked);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) completedTasks.add(task.id);
      else completedTasks.delete(task.id);
      card.classList.toggle("is-complete", checkbox.checked);
      saveCompletedTasks();
      updateProgress();
      announce(`${task.title} marked ${checkbox.checked ? "complete" : "not complete"}.`);
    });

    if (task.priority === "high") meta.append(createElement("span", "priority-label", "Do this first"));

    const sourceLink = createSourceLink(task.sourceId);
    if (source && sourceLink) {
      meta.append(sourceLink, createElement("span", "verified-date", `Last verified ${source.verifiedOn}`));
    } else {
      meta.append(createElement("span", "source-warning", "Official source review required"));
      console.warn(`Missing source for task: ${task.id}`);
    }

    content.append(title, summary, meta);
    card.append(checkbox, content);
    return card;
  }

  function renderGuides() {
    elements.guideGrid.replaceChildren();
    guides.forEach((guide) => {
      const card = createElement("article", "guide-card");
      const stage = createElement("span", "guide-stage", guide.stage);
      const title = createElement("h3", "", guide.title);
      const intro = createElement("p", "", guide.intro);
      const list = document.createElement("ul");
      const links = createElement("div", "guide-links");

      guide.steps.forEach((step) => list.append(createElement("li", "", step)));
      guide.sourceIds.forEach((sourceId) => {
        const link = createSourceLink(sourceId, "Open");
        if (link) links.append(link);
      });
      card.append(stage, title, intro, list, links);
      elements.guideGrid.append(card);
    });
  }

  function renderFaqs() {
    elements.faqList.replaceChildren();
    faqs.forEach((faq) => {
      const item = document.createElement("details");
      const question = createElement("summary", "", faq.question);
      const body = createElement("div", "faq-answer");
      body.append(createElement("p", "", faq.answer));
      const link = createSourceLink(faq.sourceId, "Check");
      if (link) body.append(link);
      item.append(question, body);
      elements.faqList.append(item);
    });
  }

  function renderSourceDirectory() {
    elements.sourceDirectory.replaceChildren();
    const categories = [...new Set(Object.values(sources).map((source) => source.category || "Other"))].sort();

    categories.forEach((category) => {
      const group = createElement("section", "source-group");
      const heading = createElement("h3", "", category);
      const grid = createElement("div", "source-grid");

      Object.entries(sources)
        .filter(([, source]) => (source.category || "Other") === category)
        .sort(([, first], [, second]) => first.title.localeCompare(second.title))
        .forEach(([, source]) => {
          const card = createElement("article", "source-card");
          const organisation = createElement("span", "source-organisation", source.organisation);
          const link = createElement("a", "", source.title);
          link.href = source.url;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          card.append(organisation, link, createElement("span", "verified-date", `Last verified ${source.verifiedOn}`));
          grid.append(card);
        });

      group.append(heading, grid);
      elements.sourceDirectory.append(group);
    });
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
    elements.progressTrack.setAttribute("aria-valuenow", String(percent));
  }

  function openInitialView() {
    const hash = window.location.hash.slice(1);
    const stage = stages.find((item) => item.id === hash && item.available);
    if (stage) {
      openStage(stage.id);
      return;
    }
    const target = ["journey", "guides", "faq", "official-links"].includes(hash) ? hash : "journey";
    setView(target, { hash: `#${target}`, scroll: false });
  }

  elements.navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const viewId = link.dataset.viewLink;
      setView(viewId, { hash: `#${viewId}`, focusSelector: `#${viewId === "official-links" ? "official-links" : viewId}-title` });
    });
  });

  elements.backButton.addEventListener("click", () => {
    setView("journey", { hash: "#journey", focusSelector: "#journey-title" });
    announce("Returned to the four-stage journey.");
  });

  elements.resetButton.addEventListener("click", () => {
    if (!completedTasks.size) {
      announce("There is no saved progress to reset.");
      return;
    }
    if (!window.confirm("Reset all saved Landed checklist progress on this device?")) return;
    completedTasks = new Set();
    saveCompletedTasks();
    document.querySelectorAll(".task-card input[type='checkbox']").forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.closest(".task-card")?.classList.remove("is-complete");
    });
    updateProgress();
    announce("All saved checklist progress was reset.");
  });

  elements.contentVersion.textContent = window.LANDED_CONTENT_VERSION || "Week 7 MVP preview";
  renderStages();
  renderGuides();
  renderFaqs();
  renderSourceDirectory();
  updateProgress();
  openInitialView();
})();
