# Week 8 Final Review Agenda

**Date:** 24 July 2026  
**Time:** TBC by team  
**Location:** TBC by team  
**Chair:** Liangzhe  
**Minute taker:** Bo Yuan  
**Expected attendees:** Liangzhe, Yuting, Shiheng Wang, Sihan Zhong, Bo Yuan, Zhihao

## Purpose

Decide whether the Week 8 Landed release candidate is ready to merge and publish,
while recording the absence of external target-user usability testing honestly.

## Agenda

1. Confirm attendance and conflicts of interest.
2. Review Week 8 scope: four stages, 23 tasks, seven guides, eight FAQ items and 20 sources.
3. Review Shiheng's JCU-aligned responsive UI and two project logos.
4. Review Yuting's internal validation report and testing limitation.
5. Review Sihan's accessibility, privacy and ethics audit.
6. Review Bo's content and repository documentation changes.
7. Review Zhihao's final live-link audit and restricted pages.
8. Run Liangzhe's content and release validation commands.
9. Review open defects and classify each as blocking or non-blocking.
10. Decide whether to approve merge and GitHub Pages deployment.
11. Assign final owners and deadlines.

## Required evidence during the meeting

```powershell
node tools/validate-content.js
node tools/validate-release.js
node tools/check-links.js
```

The team should also open the final desktop and mobile screenshots under
`docs/week8/screenshots/`.

## Decisions required

- Release candidate approved or rejected.
- Any blocking issue and owner.
- Whether restricted automated link results were manually opened successfully.
- Final merge order.
- Person responsible for checking the deployed GitHub Pages URL.
- Exact wording about the missing external usability test in the final report.

*Agenda prepared by Bo Yuan for the actual Week 8 final review.*