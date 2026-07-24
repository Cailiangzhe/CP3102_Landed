# Week 8 Final Official-Link Audit

**Owner:** Zhihao  
**Automated audit:** 
24 七月 2026 06:59 UTC
  
**Scope:** All 20 official-source records used by Landed

## Method

1. `node tools/validate-content.js` checked that every source ID used by the app resolves to a source record.
2. `node tools/check-links.js --json` requested every stored official URL and recorded its final HTTP result.
3. HTTP `200-399` was classified as reachable. HTTP `401`, `403` or `429` was classified as restricted because the server may block automated clients.
4. Restricted results require a normal-browser spot check before the final `v1.0` release. They are not reported as broken links.

## Results

| Measure | Result |
|---|---:|
| Sources checked | 20 |
| Reachable (200-399) | 10 |
| Restricted (401/403/429) | 10 |
| Broken HTTP responses | 0 |
| Network errors | 0 |

No `404`, `5xx` or network-error result was found in the automated run. The ten restricted results are JCU pages returning HTTP `403` to the script; this means the server rejected automated access, not that those pages were proved unavailable.

## Source-by-source record

| Source ID | Organisation | HTTP | Result |
|---|---|---:|---|
| `ica-student-pass` | ICA Singapore | 200 | Reachable |
| `ica-arrival-card` | ICA Singapore | 200 | Reachable |
| `jcu-international-admissions` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-accommodation` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-pre-arrival-system` | JCU Singapore | 200 | Reachable |
| `changi-transport` | Changi Airport | 200 | Reachable |
| `lta-journey` | Land Transport Authority | 200 | Reachable |
| `imda-sim-registration` | IMDA Singapore | 200 | Reachable |
| `jcu-orientation` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-current-students` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-learning-technologies` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-attendance-insurance` | JCU Singapore | 403 | Restricted (manual review) |
| `singpass-registration` | Singpass | 200 | Reachable |
| `moneysense-budgeting` | MoneySense Singapore | 200 | Reachable |
| `jcu-living-costs` | JCU Singapore | 403 | Restricted (manual review) |
| `cea-renting` | Council for Estate Agencies | 200 | Reachable |
| `jcu-student-support` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-counselling` | JCU Singapore | 403 | Restricted (manual review) |
| `jcu-learning-centre` | JCU Singapore | 403 | Restricted (manual review) |
| `scdf-emergency` | Singapore Civil Defence Force | 200 | Reachable |

## Release interpretation

- The source registry is structurally complete: all 20 source IDs resolve.
- Ten government or institutional URLs were reachable through the automated client.
- Ten JCU URLs need a final normal-browser check because their server blocked the automated request.
- This run checks connectivity only. It does not replace the content review dated 17 July 2026, so `verifiedOn` values were not changed.
- No source was removed because the audit found no confirmed broken link.

## Final-release action

Before labelling the project `v1.0`, open each restricted JCU URL in a standard browser, record the reviewer and date, and replace any page that is genuinely unavailable with a verified official page.

*This report is link-maintenance evidence, not user-usability evidence.*
