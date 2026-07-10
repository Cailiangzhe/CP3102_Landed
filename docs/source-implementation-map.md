# Week 6 Official Source Implementation Map

| Source ID | Organisation | Checklist use | Verified |
|---|---|---|---|
| `ica-student-pass` | ICA Singapore | IPA and Student's Pass preparation | 10 Jul 2026 |
| `jcu-international-admissions` | JCU Singapore | Admission-document preparation | 10 Jul 2026 |
| `jcu-accommodation` | JCU Singapore | Accommodation preparation | 10 Jul 2026 |
| `jcu-arrival-pickup` | JCU Singapore | Arrival pick-up, immigration and customs guidance | 10 Jul 2026 |
| `jcu-pre-arrival-system` | JCU Singapore | Login portal to register flight details and request pick-up/accommodation | 10 Jul 2026 |
| `moneysense-budgeting` | MoneySense Singapore | First-month budgeting | 10 Jul 2026 |

## Correction note (10 Jul 2026)

The original draft had `jcu-pre-arrival` and `jcu-arrival-pickup` swapped: each `sourceId`'s title did not match the actual page at its URL. Verified by opening both URLs directly:

- The URL previously under `jcu-pre-arrival` (`.../current-students/pre-arrival-information`) is actually titled "Arrival Pick-Up Information" and covers pick-up, immigration and customs — renamed to `jcu-arrival-pickup`.
- The URL previously under `jcu-arrival-pickup` (`services.jcu.edu.sg/PreArrSystem`) is a login portal titled "JCU Pre Arrival System" — renamed to `jcu-pre-arrival-system`.

**Action required:** if any checklist task in the app (e.g. in `app.js` or `index.html`) already references the old IDs `jcu-pre-arrival` or `jcu-arrival-pickup`, update those references to the new IDs above before merging, or the links will break.

## Implementation rules

- URLs are stored once in `landed-app/assets/js/sources.js`.
- Checklist tasks reference a stable `sourceId`.
- The interface displays the official organisation and `Last verified` date.
- Source links open in a new tab with `noopener noreferrer`.
- The team must reopen all links before `v1.0` and update the verification date.
- If a link becomes unavailable, remove the link from the UI until a verified replacement is found.

## Neutrality and safety

The Week 6 slice does not recommend a particular landlord, bank, telco, healthcare provider or transport product. Landed organises preparation and sends users to official services; it does not perform transactions or give binding advice.

*Last updated: 10 July 2026.*
