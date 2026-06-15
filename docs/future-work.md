# Future Work

Ideas intentionally **out of scope** for this semester's MVP, recorded here so scope
stays controlled and nothing is lost.

**In scope for TR2 2026:** the **first month** after arrival for new international
students at **JCU Singapore** (see [`requirements.md`](requirements.md)). Everything
below is deferred or deliberately excluded — **none of it is a commitment for this
trimester.**

We split future work into two kinds:

- **Deferred** — sensible next steps once the MVP is built and validated.
- **Deliberately excluded** — things that would push Landed from a *navigator* into an
  *authority* or a *transaction service*. These stay out on principle, not just timing.

---

## Deferred (post-MVP / future semesters)

### Wider audience & scale
- **Whole-of-Singapore version** — extend beyond JCU to other institutions and a general
  newcomer audience. The model is designed to generalise; JCU Singapore is only the
  launch case.
- **Other JCU intakes / campuses** — adapt content per intake and location.

### Smarter guidance
- **AI chatbot / assistant** — answer free-text questions on top of the structured
  checklist. *Deliberately not the MVP:* the whole argument is that a student arriving
  cold needs a pre-arranged route, not another answer box (see the "Why not just ask AI?"
  section of the proposal/README).
- **Personalised recommendations** — tailor the checklist to a student's situation
  (e.g. on-campus vs off-campus, scholarship status).
- **Reminders & notifications** — time-based nudges ("your first week starts now").

### Accounts & cross-device
- **User accounts / login** — replace browser local storage so progress follows the
  student across devices.
- **Cloud progress sync** — the server-side counterpart to accounts.
- **Multilingual / translation** — content in languages common among incoming students.

### Platform
- **Native mobile app** — the MVP is a mobile-*friendly web* app; a packaged iOS/Android
  app is a later option.

---

## Deliberately excluded (out of principle, not just timing)

Landed is a **navigator, not an authority** — it explains and links to official sources;
it does not perform or replace them. The following would cross that line, so they stay
out:

- **Booking accommodation** — Landed points to housing options; it does not broker or
  book tenancies.
- **Selling / activating SIM cards, opening bank accounts, payments** — Landed links to
  the official or provider steps; it never transacts on a student's behalf, and it does
  not endorse specific commercial providers.
- **Binding legal, visa, medical or financial advice** — always deferred to the official
  source, with a clear disclaimer.

Keeping these out is what makes Landed responsible for a student team to run, and easy
for a school to adopt.

---

## Why keep this list

Recording out-of-scope ideas here — rather than building them — is the team's main
defence against **scope creep** (risk R4 in [`ethics-and-risk.md`](ethics-and-risk.md)).
Revisit this list after the MVP is built and usability-tested in Weeks 7–8.

*Last updated: 13 June 2026*
