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

## 6. Tutor Ethics Confirmation

The team should confirm the following points with the tutor:

* Whether a short anonymous prioritisation survey is permitted.
* Whether written consent is required.
* Whether the survey needs a short information statement.
* Whether raw responses may be stored privately during the project.
* Whether later usability testing requires a separate consent process.

### Current Status

Tutor ethics confirmation: **Pending**

### Follow-Up Owner

Sihan Zhong

### Target Follow-Up Date

14 June 2026

---

## 7. Week 4 Risk Register

| ID | Risk                                             | Likelihood | Impact | Mitigation Action                                                                                                   | Owner    | Status |
| -- | ------------------------------------------------ | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| R1 | Survey receives fewer than 20 responses          | Medium     | Low    | Continue development using available responses and clearly record the sample size.                                  | Shiheng  | Open   |
| R2 | Survey accidentally collects identifying data    | Low        | High   | Use anonymous settings and review all questions before publishing.                                                  | Sihan    | Open   |
| R3 | Raw survey responses are uploaded to GitHub      | Low        | High   | Publish only anonymised summaries and aggregated findings.                                                          | Sihan    | Open   |
| R4 | Project scope becomes too broad                  | Medium     | High   | Limit the MVP to JCU Singapore students during the first month after arrival. Move extra ideas to `future-work.md`. | Liangzhe | Open   |
| R5 | Team starts coding before the design is approved | Medium     | Medium | Complete requirements, sitemap, persona, and wireframes before Week 5 development.                                  | Liangzhe | Open   |
| R6 | Old prototype code is reused                     | Medium     | High   | Create a clean `landed-app/` structure and verify that old code is not copied.                                      | Yuting   | Open   |
| R7 | Official information becomes outdated            | Medium     | Medium | Use official links, keep summaries brief, and record the review date.                                               | Zhihao   | Open   |
| R8 | Tutor ethics requirements are not confirmed      | Medium     | High   | Contact the tutor and record the response or follow-up status.                                                      | Sihan    | Open   |

---

## 8. Week 5 Preparation

Before Week 5 begins, the team should confirm that:

* the survey does not collect sensitive information;
* the tutor ethics status is recorded;
* open risks have clear owners;
* mitigation actions are documented;
* raw survey responses are not publicly uploaded; and
* later usability testing rules will be prepared before testing begins.

## Last Updated

13 June 2026
