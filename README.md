# Landed

**Your first month in Singapore, sorted.**

> **Week 7 MVP preview:** all four journey stages are now available with saved
> browser progress, Topic Guides, FAQ and a verified Official Links directory.
> This version is feature-complete for usability testing, not the final validated release.

Landed turns a chaotic first month into one sequenced, plain-language checklist —
*what to do, and in what order* — with every step linked to its official source.

> **A navigator, not an authority.** Landed organises and explains information and
> links to official sources. It does **not** give binding legal, medical, visa or
> financial advice, and it does not replace official services — it points to them.

---

## The problem

James Cook University (JCU) Singapore admits new international students every
trimester, and each intake meets the same wall in its first month. Within days of
arriving, a new student must arrange housing, activate transport with an EZ-Link
card, buy a local SIM, open a bank account, register for Singpass, organise
healthcare and learn campus systems such as LearnJCU — all while meeting the ICA
requirement to maintain 90% attendance.

The information already exists, but it is **scattered and unsequenced**: government
portals are authoritative but not ordered for someone arriving cold; peer chats are
actionable but unofficial; generic relocation apps are neither Singapore-specific
nor verified. Landed is built to sit where nothing else does — **official _and_
sequenced**.

## Who it's for

New international students at JCU Singapore, in their **first month** after arrival.
JCU Singapore is the launch case; the model is designed to extend later (see
[`docs/future-work.md`](docs/future-work.md)).

---

## The product (MVP)

A **mobile-first web app** that walks a student through a four-stage journey:

| Stage | When | Example tasks |
|------|------|----------------|
| **1 · Before Arrival** | Pre-departure | Student's Pass / IPA documents · accommodation options · what to pack · airport-to-housing transport · how much money to bring |
| **2 · Arrival Day** | Touchdown | Clearing immigration · Changi to your accommodation · first EZ-Link top-up · buying a local SIM |
| **3 · First Week** | Days 1–7 | Opening a bank account · registering for Singpass · LearnJCU & student email · confirming class attendance |
| **4 · First Month** | Weeks 1–4 | Health insurance & a clinic/GP · longer-term housing · day-to-day budgeting · settling into campus & city life |

**MVP feature set**

- [x] Four-stage **checklist** with 23 sequenced, plain-language tasks
- [x] **Saved progress** stored locally in the browser
- [x] Seven **Topic Guides**
- [x] Eight-item **FAQ**
- [x] Twenty-source **Official Links** directory
- [x] Mobile-first UI with keyboard and reduced-motion support

**Out of scope this semester** (parked in [`docs/future-work.md`](docs/future-work.md)): a whole-of-Singapore version, an AI chatbot, accounts/login, and any feature that would have Landed give binding advice rather than point to official sources.

---

## Why not just ask AI?

AI is a *general answering tool*; Landed is a *school-controlled onboarding system*.
A chatbot can answer a question, but a newly arrived student often doesn't know what
to ask, what to do first, or which answer is official. Landed gives a pre-arranged,
time-based route through the first month, with each step verified and linked to its
official source.

---

## Tech stack

- **Plain HTML, CSS and JavaScript** — no framework, no build step
- **Saved progress** via the browser's `localStorage`
- **Hosting:** GitHub Pages (free, static)
- **Collaboration:** GitHub (code + docs) · WeChat (team comms)

> **Clean-slate build.** This is a fresh, from-scratch codebase. The earlier
> prototypes are **not** copied in; what carries forward is the *approved thinking*
> (scope, the four stages, the brand) from the project proposal — not prototype code.

## Run it locally

No build step — it's a static site.

```bash
# Option A: just open it
open landed-app/index.html        # macOS
start landed-app/index.html       # Windows

# Option B: serve it (recommended — needed for some browser features)
cd landed-app
python -m http.server 8000
# then visit http://localhost:8000
```

Or use the **Live Server** extension in VS Code.

The current public build is published at
[`https://cailiangzhe.github.io/CP3102_Landed/`](https://cailiangzhe.github.io/CP3102_Landed/).

---

## Repository structure

```text
landed/
├── README.md                  ← you are here
├── landed-app/                ← the web app
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       └── js/
│           ├── sources.js
│           ├── checklists.js
│           ├── support-content.js
│           └── app.js
└── docs/
    ├── requirements.md        ← MVP scope & requirements
    ├── sitemap.md             ← site structure & user flows
    ├── persona-firstyear.md   ← primary provisional persona
    ├── research-summary.md    ← survey findings and product decisions
    ├── design-system.md       ← colours, type, components, breakpoints
    ├── link-register.md       ← official-source implementation register
    ├── usability-test-plan.md ← Week 8 participant test protocol
    ├── future-work.md         ← out-of-scope / next-semester ideas
    ├── wireframes/            ← low-fidelity wireframes
    └── meetings/              ← meeting agendas & minutes
```

Weekly progress evidence lives under `docs/`, including
[`docs/week4/README_week4.md`](docs/week4/README_week4.md) and the Week 6 integration notes.

---

## Team

| Member | Role this project |
|--------|-------------------|
| **Liangzhe** | Project coordination / PM — backlog, scope control, tutor liaison |
| **Yuting** | Research & validation — survey analysis, participant recruitment, usability testing |
| **Shiheng** | UX & front-end — user flows, responsive interface and accessibility-oriented UI |
| **Sihan** | Ethics, data-handling rules, risk register |
| **Bo Yuan** | Documentation & content lead — requirements, persona, README, minutes |
| **Zhihao** | Content & sources — official resources, source-credibility checks |

---

## Status

**Week 7 - feature-complete MVP preview.** Four stages, Topic Guides, FAQ and Official
Links are implemented. Progress persists in `localStorage`, all task source IDs resolve,
and official links carry a 17 July 2026 verification date. Student usability testing,
eligible-only survey analysis and final link regression remain open before `v1.0`.

## Academic context & disclaimer

Student project for **BU3102 / CP3102 Multidisciplinary Project**, JCU Singapore,
Trimester 2, 2026. Landed is **not** an official JCU service and is **not** affiliated
with or endorsed by JCU, ICA, MOH, LTA or any agency it links to. All official actions
must be completed through the relevant official channel; always verify details against
the linked official source.
