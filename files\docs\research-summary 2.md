# Survey Research Summary and Week 7 Decisions

## Purpose

The anonymous Landed survey was used for lightweight product discovery. It asked JCU Singapore international students which first-month tasks were difficult, where they looked for information and which guide features would be useful.

## Sample and data-quality note

- Total responses in the Google Forms overview: **27**.
- Current JCU international students: **21 (77.8%)**.
- Recently graduated JCU international students: **2 (7.4%)**.
- Respondents who selected **No** on the eligibility question: **4 (14.8%)**.
- Eligible target respondents: **23**.

The Google Forms overview percentages include all 27 responses because the four ineligible respondents continued into later sections. The findings below are suitable for exploratory product prioritisation, but they are not eligible-only final statistics. Yuting must privately filter Question 1 to the two eligible answers and regenerate final charts before the final report. The raw response spreadsheet must not be uploaded to GitHub.

## Main aggregate findings

### Support is needed across all four stages

Mean confidence before arrival was **3.0 out of 5**. Support was reported before arrival, on arrival day, during the first week and during the first month.

**Product decision:** retain all four journey stages and make each stage directly available in the Week 7 MVP.

### High-priority tasks

The current aggregate charts place banking, accommodation, Student's Pass requirements, first-month expenses, public transport and mobile connection among the strongest problem areas.

**Product decision:** cover these topics in the checklist and Topic Guides. Use `Do this first` only for time-sensitive immigration, arrival, accommodation, attendance and healthcare preparation.

### Information quality problems

Common barriers included not knowing which tasks were urgent, uncertainty about trustworthy sources, information spread across websites and too much information at once.

**Product decision:** every task uses one action title, a short explanation and a named official source with a verification date. Landed does not copy long official instructions.

### Preferred product structure

The overview indicates demand for both topic-based information and timeline organisation. Step-by-step checklists were the strongest feature preference, and **96.3%** rated saved progress as very or somewhat useful in the unfiltered overview.

**Product decision:** combine the four-stage journey with Topic Guides, FAQ and an Official Links directory. Keep saved progress in the browser.

## Week 7 implementation trace

| Research need | Week 7 response |
|---|---|
| Know what is urgent | Stage ordering and `Do this first` labels |
| Trust the information | Official source name and `Last verified` date |
| Avoid information overload | Short task cards and collapsible FAQ |
| Use both timeline and topics | Journey plus seven Topic Guides |
| Keep track of work | One saved progress count across all stages |
| Use the guide on a phone | Mobile-first layout checked at 360px |

## Limitations

- The sample supports design decisions, not population-level claims.
- Four ineligible respondents remain in the current overview charts.
- Most respondents were bachelor's students, so other study levels are less represented.
- Survey preferences do not prove usability; the working MVP requires observed usability testing.

*Research owner: Yuting. Updated for the Week 7 MVP preview on 17 July 2026.*
