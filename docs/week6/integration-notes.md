# Week 6 Integration Notes

## Release target

`v0.1-week6` provides one complete Before Arrival checklist with saved progress and verified source links.

## Script loading order

The HTML must load scripts in this order:

1. `assets/js/sources.js`
2. `assets/js/checklists.js`
3. `assets/js/app.js`

The application reads `window.LANDED_SOURCES` and `window.LANDED_STAGES`. No module bundler or build step is required.

## Manual integration test

1. Serve `landed-app/` through a local web server.
2. Confirm four stage cards appear.
3. Confirm only Before Arrival is enabled.
4. Open Before Arrival and check a task.
5. Refresh the page and confirm the task remains checked.
6. Confirm the count, percentage and progress bar update.
7. Open every official link and confirm it uses a new tab.
8. Use Reset progress; cancel once, then confirm once.
9. Repeat at 360px and desktop width.

## GitHub Pages

The workflow publishes only `landed-app/`. After the workflow is merged, the repository owner must open **Settings -> Pages** and select **GitHub Actions** as the source. The expected public URL is:

`https://cailiangzhe.github.io/CP3102_Landed/`

## Merge order

1. Sihan - data and ethics cleanup.
2. Shiheng - research summary.
3. Zhihao - official-source data.
4. Bo - checklist content.
5. Yuting - HTML, CSS and design documents.
6. Liangzhe - application logic, deployment and final integration test.

Use normal merge commits rather than squash so each member's authored commit remains visible.
