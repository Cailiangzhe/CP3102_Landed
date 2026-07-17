# Landed Week 7 Sitemap and User Flows

## Current MVP information architecture

```text
Landed
|-- Journey
|   |-- Progress summary and Reset
|   |-- Before Arrival (6 tasks)
|   |-- Arrival Day (5 tasks)
|   |-- First Week (6 tasks)
|   `-- First Month (6 tasks)
|-- Topic Guides (7 guides)
|-- FAQ (8 questions)
`-- Official Links (20 sources grouped by category)
```

All content uses one HTML page with hash targets. Checklist progress is stored in the same browser; no account or personal data is required.

## Primary checklist flow

1. Open Landed and read the navigator disclaimer.
2. Review overall progress and the four-stage journey.
3. Open the stage that matches the current time.
4. Read one task and open its official source when confirmation is needed.
5. Mark the task complete.
6. Return to the journey and see updated overall progress.
7. Refresh and confirm that progress remains saved.

## Supporting-information flow

1. Select Topic Guides, FAQ or Official Links in the header.
2. Scan the short topic or question.
3. Open the named official source in a new tab.
4. Return to Journey when ready to complete a task.

## Navigation rules

- Main navigation is always visible before the page content.
- The current view uses `aria-current="page"`.
- Stage cards report their task count.
- Official links open in a new tab so progress remains available.
- Landed does not collect a profile or ask the user to enter personal details.
- Back to Journey returns focus to the Journey heading.

## Acceptance checks

- Each of the four stages opens in one action from Journey.
- Topic Guides, FAQ and Official Links are keyboard reachable.
- Users can distinguish Landed guidance from official instructions.
- The page has no horizontal overflow at 360px.
- Task completion remains after refresh on the same browser.

*UX/front-end owner: Shiheng. Updated 17 July 2026.*
