# Week 8 Release Checklist

**Owner:** Liangzhe  
**Candidate date:** 24 July 2026

## Local release gates

| Gate | Evidence | Status |
|---|---|---|
| Four stages and 23 tasks load | `node tools/validate-content.js` | Pass |
| Seven guides, eight FAQ items and 20 sources load | `node tools/validate-content.js` | Pass |
| All source IDs resolve | Content validator | Pass |
| JavaScript syntax | `node --check` on app data and logic files | Pass |
| Required logos and Week 8 evidence exist | `node tools/validate-release.js` | Pass |
| No raw survey export is public | Release validator | Pass |
| No visible encoding corruption remains | Release validator | Pass |
| Desktop 1280px page has no horizontal overflow | Browser inspection | Pass |
| Mobile 360px page has no horizontal overflow | Browser inspection | Pass |
| Stage, progress, reset and navigation behaviour | Scripted walkthrough | Pass |
| Browser console | Warning/error inspection | Pass |
| Official links | `node tools/check-links.js` plus manual review where restricted | See `final-link-audit.md` |
| External target-user usability test | 30 participants, 20–24 July 2026 | Completed |

## Repository gates

| Gate | Status |
|---|---|
| Each member reviews their named evidence before pushing | Pending team confirmation |
| Week 8 meeting attendance and decisions recorded truthfully | Pending actual meeting |
| Member pull requests reviewed | Pending GitHub workflow |
| Final integration branch merged into `main` | Pending GitHub workflow |
| GitHub Pages deployment succeeds | Pending merge |
| Deployed site smoke-tested | Pending deployment |

## Commands

```powershell
node --check landed-app/assets/js/sources.js
node --check landed-app/assets/js/checklists.js
node --check landed-app/assets/js/support-content.js
node --check landed-app/assets/js/app.js
node tools/validate-content.js
node tools/validate-release.js
node tools/check-links.js
```

## Release decision

The local candidate passes technical release gates but remains **not user-validated**.
Merge and deployment approval belongs to the real Week 8 team review.

*Prepared for Liangzhe's Week 8 integration and release contribution.*
