# Week 4 — Build-Ready Baseline

**Period:** 8–14 June 2026
**Goal:** Finish research, requirements, design and a brand-new project skeleton so the
team can officially begin development in **Week 5**.

> Week 4 builds a *foundation*, not a finished website. No Checklist functionality is
> implemented yet, and no old prototype code is copied in. The repository should show a
> realistic, incremental project start-up — the team can prove **why** the design was
> chosen, and Week 5 development can begin directly from the approved design.

> **Honesty rule (carry-forward):** never record results that don't exist. Survey
> findings and the tutor's ethics confirmation are marked *pending* until they are real.
> Update the status columns below from actual evidence — do not pre-tick them.

---

## Deliverables & owners

| # | Deliverable | Owner | Status |
|---|-------------|-------|:------:|
| 1 | Project scope + MVP requirements (`docs/requirements.md`) | Bo | ⬜ |
| 2 | `docs/future-work.md` (out-of-scope / next semester) | Bo | ⬜ |
| 3 | Provisional persona (`docs/persona.md`) | Bo | ⬜ |
| 4 | Project README (`README.md`) + this Week-4 README | Bo | ✅ |
| 5 | Week-4 meeting agenda + minutes (`docs/meetings/`) | Bo | ⬜ |
| 6 | Prioritisation survey — designed & published | Shiheng | ⬜ |
| 7 | Survey response summary (`docs/research-summary.md`) | Shiheng | ⬜ *pending responses* |
| 8 | Sitemap + user flows (`docs/sitemap.md`) | Yuting | ⬜ |
| 9 | Low-fidelity, mobile-first wireframes (`docs/wireframes/`) | Yuting | ⬜ |
| 10 | Design system (`docs/design-system.md`) | Yuting | ⬜ |
| 11 | Clean `landed-app/` project skeleton | Yuting | ⬜ |
| 12 | Ethics + anonymous-data rules; risk update | Sihan | ⬜ *tutor confirmation pending* |
| 13 | Initial official resources + source-credibility checks | Zhihao | ⬜ |
| 14 | Backlog, scope control, tutor liaison | Liangzhe | ⬜ |

*Legend: ✅ done · 🔄 in progress · ⬜ not started.*

---

## Scope confirmed for the MVP

**Product scope:** the **first month** after arrival for JCU Singapore international
students. JCU Singapore is the launch case (a navigator, not an authority).

**Four-stage user journey:** Before Arrival → Arrival Day → First Week → First Month.

**In scope (MVP):** four-stage checklist · saved checklist progress · topic guides ·
FAQ · official-links directory · mobile-friendly UI.

**Out of scope this semester** → `docs/future-work.md`: whole-of-Singapore version ·
AI chatbot · accounts/login · anything that has Landed give binding advice.

---

## Lightweight user research (status)

- **Survey:** a prioritisation survey of **under 5 minutes**, targeting ~20–30 responses.
  *An insufficient number of responses must not block development.*
- **Summarise once responses exist:** which tasks users find most confusing · the most
  urgent first-week tasks · problems users hit with official information.
- **One provisional persona**, clearly labelled as *to be validated by the survey* —
  not presented as a research finding until data supports it.
- **Data handling:** anonymous, non-sensitive responses only; rules recorded with Sihan;
  **ethics requirements to be confirmed with the tutor** (record the confirmation, or a
  dated follow-up, here ➜ _________).

---

## Design (status)

- **Sitemap:** Home · Checklist · Guides · FAQ · Official Links · About / Disclaimer.
- **Core user flow:** open the site → see the current stage → enter the checklist →
  complete steps → view official sources.
- **Wireframes:** mobile-first, low-fidelity.
- **Design system:** primary/secondary colours · typography hierarchy · button, card and
  nav styles · mobile breakpoint.

## Project skeleton (status)

A brand-new development directory, **not** copied from `draft one/` or `draft two/`:

```text
landed-app/
├── index.html
└── assets/
    ├── css/styles.css
    └── js/app.js
```

Skeleton files contain titles, comments and links between files only — no functionality
yet.

---

## Week 4 Build-Ready Review (meeting)

One formal meeting; minutes filed in `docs/meetings/`. Agenda must cover:

- Survey & persona results (as far as real data allows)
- Confirmation of MVP scope
- Approval of the sitemap and wireframes
- Team tasks and workload
- Status of tutor ethics confirmation
- Week 5 development task allocation
- Risks, decisions, owners, deadlines

---

## Commit plan

Each member makes at least one meaningful commit — spread across the week, **not** dumped
in one weekend upload, and **never** by copying `draft one/` or `draft two/`.

1. `docs: define clean-slate project scope and MVP requirements`
2. `docs: add survey plan and research summary`
3. `docs: add persona, sitemap and user flows`
4. `docs: add low-fidelity wireframes and design system`
5. `chore: create clean landed-app project structure`
6. `docs: add week 4 review and meeting minutes`

---

## Completion criteria — done when all are true

- [ ] Survey published; **current** results summarised (whatever real responses exist)
- [ ] Persona, requirements, sitemap and wireframes complete
- [ ] MVP and out-of-scope items clearly defined
- [ ] Tutor ethics confirmation recorded **or** a clear follow-up established
- [ ] Brand-new `landed-app/` skeleton pushed to GitHub
- [ ] No old prototype code reused
- [ ] Meeting agenda and minutes complete
- [ ] Every member has a traceable contribution
- [ ] Team has formally approved moving into Week 5 development

**A complete website is _not_ required this week.** The outcome that matters: the team can
prove why the design was chosen, and Week 5 development can begin directly from the
approved baseline.
