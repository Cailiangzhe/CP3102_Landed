# MVP Requirements

## 1. Project Overview

### Project Name

Landed

### Project Purpose

Landed is a mobile-friendly web platform designed to help new international students at JCU Singapore complete important tasks during their first month in Singapore.

New students often receive information from different websites, emails, and official sources. This can make it difficult to understand which tasks are urgent and what should be completed first.

Landed provides a simple checklist, short topic guides, frequently asked questions, and links to reliable official sources.

### Target Users

The primary users are new international students at JCU Singapore.

### MVP Scope

The MVP focuses only on the first month after arrival in Singapore.

The user journey is divided into four stages:

1. Before Arrival
2. Arrival Day
3. First Week
4. First Month

---

## 2. Core MVP Features

### 2.1 Four-Stage Checklist

The platform must provide a checklist divided into four stages:

| Stage          | Purpose                                        | Example Tasks                                                                            |
| -------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Before Arrival | Help students prepare before travelling        | Prepare documents, arrange accommodation, check arrival requirements                     |
| Arrival Day    | Help students complete immediate arrival tasks | Travel to accommodation, check transport options, confirm essential information          |
| First Week     | Help students complete urgent setup tasks      | Attend orientation, complete Student's Pass formalities, access university systems       |
| First Month    | Help students settle into student life         | Review attendance requirements, explore support services, complete remaining setup tasks |

Each checklist item should include:

* a short task title;
* a brief explanation;
* the recommended stage;
* a completion checkbox; and
* an official source link where relevant.

### 2.2 Checklist Progress Saving

Users must be able to mark checklist tasks as completed.

The completion status should remain available when the user returns to the website using the same browser and device.

For the MVP, checklist progress may be saved using browser local storage. A login system is not required.

### 2.3 Topic Guides

The platform must provide short topic guides for common areas, such as:

* accommodation;
* Student's Pass;
* transport;
* orientation;
* university systems;
* student support; and
* daily life setup.

Each guide should use simple language and provide official links where appropriate.

### 2.4 FAQ Page

The platform must include a Frequently Asked Questions page.

Example questions include:

* What should I complete before arriving in Singapore?
* Which tasks are most urgent during the first week?
* Where can I find official Student's Pass information?
* How do I access JCU student systems?
* Where can I find additional support?

### 2.5 Official Links Page

The platform must provide a page containing trusted external links.

Links should be grouped into categories such as:

* JCU Singapore;
* immigration and arrival;
* transport;
* university support; and
* other essential services.

The platform should not replace official instructions. It should guide users to the correct official source.

### 2.6 Mobile-Friendly User Interface

The website must work clearly on mobile devices.

The interface should include:

* readable text;
* clear navigation;
* buttons that are easy to tap;
* simple layouts;
* checklist cards;
* visible progress information; and
* responsive layouts for smaller screens.

---

## 3. Main User Flow

The main user flow is:

1. The user opens the website.
2. The user views the four stages.
3. The user selects the stage that matches their situation.
4. The user opens the checklist.
5. The user marks completed tasks.
6. The website saves checklist progress.
7. The user opens a topic guide or official source when more information is needed.

---

## 4. User Stories

| ID  | User Story                                                                                                             | Priority    |
| --- | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| US1 | As a new international student, I want to view tasks by stage so that I know what to complete first.                   | Must Have   |
| US2 | As a user, I want to mark tasks as completed so that I can track my progress.                                          | Must Have   |
| US3 | As a user, I want my checklist progress to remain saved so that I do not need to repeat completed tasks.               | Must Have   |
| US4 | As a new student, I want short topic guides so that I can understand unfamiliar processes more easily.                 | Must Have   |
| US5 | As a user, I want direct links to official sources so that I can confirm the latest information.                       | Must Have   |
| US6 | As a mobile user, I want the website to work clearly on my phone so that I can use it while travelling or settling in. | Must Have   |
| US7 | As a new student, I want to view frequently asked questions so that I can find quick answers.                          | Should Have |

---

## 5. Non-Functional Requirements

| ID   | Requirement                                                                          |
| ---- | ------------------------------------------------------------------------------------ |
| NFR1 | The website should use a mobile-first layout.                                        |
| NFR2 | Navigation should remain simple and consistent across pages.                         |
| NFR3 | Checklist progress should be saved in the browser for the MVP.                       |
| NFR4 | The platform must not collect sensitive personal information.                        |
| NFR5 | Official information should be summarised briefly and linked to the original source. |
| NFR6 | The website should use clear language suitable for new students.                     |
| NFR7 | The project should use separate HTML, CSS, and JavaScript files.                     |

---

## 6. Out of Scope

The following features are not included in the current MVP:

* AI chatbot;
* user accounts;
* cloud-based progress synchronisation;
* personalised recommendations;
* payment features;
* accommodation booking;
* SIM card purchasing;
* bank account applications;
* full Singapore-wide newcomer support;
* multilingual translation system;
* mobile application development; and
* automated notifications.

These ideas should be recorded in `future-work.md`.

---

## 7. MVP Success Criteria

The MVP will be considered successful if:

* users can view all four stages;
* users can open the checklist;
* users can mark tasks as completed;
* checklist progress remains saved in the same browser;
* users can access topic guides;
* users can find official links;
* users can read FAQ content;
* the website works clearly on mobile screens; and
* no sensitive personal information is collected.

## Last Updated

13 June 2026
