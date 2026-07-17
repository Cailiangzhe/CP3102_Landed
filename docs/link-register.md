# Week 7 Official Link Register

All links below were opened or confirmed through the official organisation's current page on **17 July 2026**. The app stores each URL once in `landed-app/assets/js/sources.js`; checklist and support content reference its source ID.

| Source ID | Organisation | Used for |
|---|---|---|
| `ica-student-pass` | ICA Singapore | IPA and Student's Pass tasks |
| `ica-arrival-card` | ICA Singapore | Entry information and SG Arrival Card |
| `jcu-international-admissions` | JCU Singapore | Admission documents |
| `jcu-accommodation` | JCU Singapore | Accommodation planning and check-in |
| `jcu-pre-arrival-system` | JCU Singapore | Pre-arrival details and requests |
| `changi-transport` | Changi Airport | Airport-to-accommodation transport |
| `lta-journey` | Land Transport Authority | Public transport routes and payment |
| `imda-sim-registration` | IMDA Singapore | SIM registration safeguards |
| `jcu-orientation` | JCU Singapore | Orientation activities |
| `jcu-current-students` | JCU Singapore | Student systems directory |
| `jcu-learning-technologies` | JCU Singapore | LearnJCU and technology support |
| `jcu-attendance-insurance` | JCU Singapore | Attendance and medical insurance |
| `singpass-registration` | Singpass | Registration eligibility and guides |
| `moneysense-budgeting` | MoneySense Singapore | Budgeting principles |
| `jcu-living-costs` | JCU Singapore | Student living-cost guide |
| `cea-renting` | Council for Estate Agencies | Private tenancy checks |
| `jcu-student-support` | JCU Singapore | Student support directory |
| `jcu-counselling` | JCU Singapore | Counselling and wellbeing support |
| `jcu-learning-centre` | JCU Singapore | Academic and learning support |
| `scdf-emergency` | Singapore Civil Defence Force | Emergency medical information |

## Review rules

- Use official institutional or government pages; do not replace them with blogs or commercial comparison sites.
- Do not recommend a landlord, bank, telco, clinic or transport product.
- Keep copied detail minimal because official requirements can change.
- Reopen every URL before the final `v1.0` release and update `verifiedOn`.
- If a source becomes unavailable, remove its UI link until an official replacement is verified.

## Corrected Week 6 defect

The old task ID `jcu-pre-arrival` had no matching object in `sources.js`. Week 7 replaces it with `jcu-pre-arrival-system` and uses Changi Airport's official transport page for airport travel. The automated content check must report zero missing source IDs.

*Owner: Zhihao. Updated 17 July 2026.*
