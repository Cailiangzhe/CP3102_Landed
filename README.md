# Landed

**Your first month in Singapore, sorted.**

> **Week 8 release candidate:** four journey stages, saved browser progress,
> Topic Guides, FAQ and a 20-source Official Links directory are implemented.
> Internal product checks are complete, and external usability testing with 30 target students (20-24 July 2026) met or exceeded every pre-registered target.

Landed turns a complex first month into one sequenced, plain-English checklist:
what to do, when to do it, and where to confirm the official requirement.

> **A navigator, not an authority.** Landed organises and explains information.
> It does not give binding legal, medical, visa or financial advice. Complete
> official actions through the linked JCU or Singapore government service.

## The problem

New JCU Singapore international students need to complete immigration, housing,
transport, connectivity, finance, healthcare and campus tasks in a short period.
The information exists, but it is spread across many official services and is not
always organised in first-month order.

Landed provides a time-based route while keeping each important step connected to
an official source.

## Target users

Current and incoming JCU Singapore international students preparing for arrival or
completing their first month in Singapore.

## Product scope

| Stage | Purpose | Tasks |
|---|---|---:|
| Before Arrival | Prepare documents, accommodation, travel and budget | 6 |
| Arrival Day | Complete entry, transport and immediate setup | 5 |
| First Week | Complete pass, orientation and campus-system tasks | 6 |
| First Month | Review health, housing, finance and support | 6 |

The release candidate includes:

- 23 sequenced checklist tasks;
- saved progress in browser `localStorage`;
- seven Topic Guides;
- eight FAQ items;
- 20 official-source records;
- responsive desktop and mobile layouts;
- keyboard focus, semantic controls and reduced-motion support;
- JCU Singapore and JCUS 38th Convergence Conference project branding.

Accounts, login, AI chat, accommodation booking, payments and binding advice remain
out of scope. See [`docs/future-work.md`](docs/future-work.md).

## Run locally

No build step is required.

```powershell
cd landed-app
python -m http.server 8000
```

Open `http://localhost:8000/` in a browser. The public build is published through
GitHub Pages at <https://cailiangzhe.github.io/CP3102_Landed/> after the final
integration branch is merged.

## Validation

Run the local release checks:

```powershell
node tools/validate-content.js
node tools/validate-release.js
node tools/check-links.js
```

Week 8 evidence is stored in [`docs/week8/`](docs/week8/).

| Evidence | Status |
|---|---|
| Content structure and source-ID validation | Completed |
| Scripted internal functional walkthrough | Completed |
| Desktop and 360px responsive inspection | Completed |
| Accessibility and privacy inspection | Completed internally |
| Live official-link audit | Completed with restricted pages identified for manual review |
| External target-student usability testing | Completed - 30 participants, 20-24 July 2026 |

Internal checks verify implementation behaviour. They do not replace observation of
target users and must not be reported as external usability results.

## Repository structure

```text
.
|-- README.md
|-- landed-app/
|   |-- index.html
|   `-- assets/
|       |-- css/styles.css
|       |-- images/
|       `-- js/
|-- docs/
|   |-- week8/
|   |-- meetings/
|   `-- wireframes/
|-- tools/
|   |-- validate-content.js
|   |-- validate-release.js
|   `-- check-links.js
`-- .github/workflows/deploy-pages.yml
```

## Team

| Member | Week 8 ownership |
|---|---|
| Liangzhe | Final integration, release validation and deployment |
| Yuting | Research and internal validation reporting |
| Shiheng Wang | UX, front-end, responsive behaviour and project branding |
| Sihan Zhong | Accessibility, privacy, ethics and risk review |
| Bo Yuan | Documentation, content review and meeting records |
| Zhihao | Official-source and live-link audit |

Yuting and Shiheng's role swap remains permanent for this iteration.

## Academic context and disclaimer

Landed is a BU3102 / CP3102 Multidisciplinary Project for JCU Singapore,
Trimester 2, 2026, and the JCUS 38th Convergence Conference. The JCU and event
logos identify the academic context. Landed is not an official JCU student service
and is not endorsed by the external agencies it links to.

All source requirements can change. Users must confirm current details through the
linked official service.
