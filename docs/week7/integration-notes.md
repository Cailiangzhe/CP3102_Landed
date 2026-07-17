# Week 7 MVP Integration Notes

## Release target

The Week 7 preview is a feature-complete candidate for usability testing. It contains four active checklist stages, seven Topic Guides, eight FAQ items, a 20-source official directory and saved progress across 23 tasks.

## Script loading order

1. `assets/js/sources.js`
2. `assets/js/checklists.js`
3. `assets/js/support-content.js`
4. `assets/js/app.js`

The scripts expose structured content on `window` and require no build tool.

## Integration checks

1. Open the Journey and confirm all four stages are enabled.
2. Confirm task counts are 6, 5, 6 and 6, for a total of 23.
3. Open each stage and confirm every task has an official source and date.
4. Mark tasks in two different stages and confirm overall progress updates.
5. Refresh and confirm progress remains saved.
6. Cancel Reset once, then confirm it and verify progress returns to zero.
7. Open Topic Guides, FAQ and Official Links from the header.
8. Confirm browser Back/Forward is not required for the in-page views.
9. Check keyboard focus, FAQ expansion and checkbox labels.
10. Repeat at 360px and desktop width with no horizontal scrolling.
11. Confirm the console has no errors or missing resource requests.

## Content integrity checks

- Every checklist `sourceId` exists in `sources.js`.
- Every guide and FAQ source reference exists.
- Every task ID is unique.
- Only official sources are listed.
- No raw research or usability response data is present.

Run the repeatable data check from the repository root:

```powershell
node tools/validate-content.js
```

## Release gate

This preview may move to usability testing after all integration checks pass and the team records the real Week 7 review decision. It is not `v1.0`; usability findings and final link verification remain required.

*Integration owner: Liangzhe. Prepared 17 July 2026.*
