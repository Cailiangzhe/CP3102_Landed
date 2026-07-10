# Ethics and Risk Update

## 1. Purpose

This document records the ethics rules, anonymous data handling guidelines, and risk updates for the Week 4 research activities of the Landed project.

The project aims to help new international students at JCU Singapore manage important tasks during their first month after arrival.

During Week 4, the team will conduct a short prioritisation survey to understand which tasks students find confusing or urgent. The survey is intended only for lightweight product discovery and must not collect sensitive personal information.

---

## 2. Survey Ethics Rules

The Week 4 survey should follow these rules:

* Participation must be voluntary.
* Participants should be informed that the survey is for a university project.
* The survey should take less than five minutes.
* Responses should remain anonymous.
* Participants should be allowed to stop at any time.
* No sensitive personal information should be collected.
* Survey results should only be used for research and design decisions.
* Only summarised and anonymised findings should be included in the GitHub repository.

---

## 3. Data That Must Not Be Collected

The survey must not request:

* full name;
* student ID;
* passport number;
* FIN number;
* phone number;
* personal email address;
* home address;
* date of birth;
* medical information;
* financial information;
* immigration document details; or
* screenshots of personal documents.

Raw survey responses containing identifiable information must not be uploaded to GitHub.

---

## 4. Acceptable Survey Questions

The survey may ask general questions such as:

* Which tasks were most confusing after arriving in Singapore?
* Which tasks were most urgent during the first week?
* Which official websites were difficult to understand?
* Which checklist categories would be most helpful?
* Would you prefer short instructions, official links, or both?

Optional background questions should remain broad and anonymous, such as:

* Are you a current international student?
* How long have you studied in Singapore?
* Which stage was most difficult: before arrival, arrival day, first week, or first month?

---

## 5. Anonymous Data Handling Rules

The team should:

1. Collect only information needed to prioritise platform features.
2. Avoid collecting identifying information.
3. Review survey settings before publishing.
4. Use aggregated findings, such as counts, percentages, and common themes.
5. Store only anonymised summaries in the public GitHub repository.
6. Avoid publishing raw survey responses.
7. Delete unnecessary raw data after summarising the results.
8. Ask the tutor for confirmation before conducting any activity involving personal data.

---

### 6. Tutor Ethics Confirmation

Tutor ethics confirmation: Confirmed verbally with tutor in Week 3.

The tutor confirmed that the team may conduct a short anonymous prioritisation survey as long as no sensitive personal information is collected and only anonymised summary results are used in the project documentation.

The exact confirmation date must be checked against the team's Week 3 meeting record before the final report. Until that date is added, the confirmation is recorded as verbally confirmed with a documentation follow-up open.

### Follow-Up Owner

Sihan Zhong

### Current Status

**Confirmed verbally; exact date documentation pending.**

---

## 7. Week 4 Risk Register

| ID | Risk                                             | Likelihood | Impact | Mitigation Action                                                                                                   | Owner    | Status |
| -- | ------------------------------------------------ | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| R1 | Survey receives fewer than 20 responses          | Medium     | Low    | Continue development using available responses and clearly record the sample size.                                  | Shiheng  | Closed — 27 total / 23 eligible |
| R2 | Survey accidentally collects identifying data    | Low        | High   | Use anonymous settings and review all questions before publishing.                                                  | Sihan    | Monitoring |
| R3 | Raw survey responses are uploaded to GitHub      | Low        | High   | Remove raw exports from the public tree; retain aggregate charts and summaries only; audit Git history if sensitive content is found. | Sihan | Mitigation in progress |
| R4 | Project scope becomes too broad                  | Medium     | High   | Limit the MVP to JCU Singapore students during the first month after arrival. Move extra ideas to `future-work.md`. | Liangzhe | Open   |
| R5 | Team starts coding before the design is approved | Medium     | Medium | Complete requirements, sitemap, persona, and wireframes before implementation.                                      | Liangzhe | Closed — Week 6 design baseline added |
| R6 | Old prototype code is reused                     | Medium     | High   | Create a clean `landed-app/` structure and verify that old code is not copied.                                      | Yuting   | Closed — clean-slate scaffold used |
| R7 | Official information becomes outdated            | Medium     | Medium | Use official links, keep summaries brief, and record the review date.                                               | Zhihao   | Open   |
| R8 | Tutor ethics confirmation date is not documented | Low        | Medium | Check the Week 3 meeting record and add the exact date before the final report.                                     | Sihan    | Open documentation action |
| R9 | Ineligible survey responses distort analysis     | Medium     | Medium | Filter Question 1 to the two eligible answers and regenerate final statistics from 23 responses.                   | Shiheng  | Open before final report |

---

## 8. Week 6 Data and Testing Controls

During Week 6, the team must confirm that:

* the survey does not collect sensitive information;
* the tutor ethics status is recorded;
* open risks have clear owners;
* mitigation actions are documented;
* raw survey responses are removed from the current public tree;
* aggregate findings clearly distinguish 27 total responses from 23 eligible responses; and
* later usability testing rules will be prepared before testing begins.

## Last Updated

10 July 2026
