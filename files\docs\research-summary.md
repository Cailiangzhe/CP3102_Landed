# Week 6 Survey Research Summary

## Purpose

The survey was used as lightweight product discovery for Landed. It explored which first-month tasks students found difficult, where they looked for information, and which product features they considered useful.

The survey was anonymous and did not request names, student IDs, email addresses or sensitive personal information.

## Sample and data-quality note

- Total responses shown in the Google Forms summary: **27**.
- Current JCU international students: **21 (77.8%)**.
- Recently graduated JCU international students: **2 (7.4%)**.
- Respondents who selected **No** on the eligibility question: **4 (14.8%)**.
- Eligible target respondents: **23**.

The published Google Forms charts include all 27 responses because the four ineligible respondents continued into later sections. Consequently, the percentages below are useful for exploratory product prioritisation but must not be presented as eligible-only final statistics. Before the final report, export the response spreadsheet, filter Question 1 to the two eligible answers, and regenerate the final charts using the 23 eligible responses.

Only aggregate charts and this summary should remain in the public repository. Raw response exports should be kept in the team's restricted Google Drive folder.

## Main findings from the current aggregate charts

### First-month confidence and timing

- Mean confidence before arrival was **3.0 out of 5**.
- Support was needed across the whole journey rather than at one isolated point:
  - Before arrival: 6 responses (22.2%).
  - Arrival day: 4 responses (14.8%).
  - First week: 6 responses (22.2%).
  - First month: 6 responses (22.2%).
  - Did not need much support: 5 responses (18.5%).

**Design decision:** retain the four-stage journey. No stage should be removed.

### Most difficult tasks

The most frequently selected difficult or confusing tasks were:

1. Opening a bank account - 13 responses (48.1%).
2. Finding accommodation - 12 responses (44.4%).
3. Student's Pass and immigration requirements - 11 responses (40.7%).
4. Managing first-month expenses - 10 responses (37.0%).
5. Public transport / EZ-Link and buying a SIM card - 8 responses each (29.6%).

When asked what should be completed first after arrival, Student's Pass / immigration was the most common answer (37.0%), followed by buying a SIM card or mobile plan (29.6%).

**Design decision:** use visible `Do this first` labels for urgent actions. Banking, accommodation, Student's Pass, SIM and budgeting require the strongest content coverage.

### Why information was difficult

The strongest barriers were:

- Not knowing which tasks were most urgent - 9 responses (33.3%).
- Being unsure which sources were trustworthy - 9 responses (33.3%).
- Information spread across too many websites - 8 responses (29.6%).
- Too much information at once - 6 responses (22.2%).

**Design decision:** each task needs a short explanation, a clear stage and a direct official-source link. Avoid long blocks of copied official text.

### Current information sources

- Social media - 16 responses (59.3%).
- Singapore government websites - 10 responses (37.0%).
- Friends or senior students - 10 responses (37.0%).
- JCU materials and search engines - 8 responses each (29.6%).

The mean rating for ease of finding reliable information was **3.22 out of 5**.

**Design decision:** Landed should combine the accessibility of peer guidance with the traceability of official sources. It should not present peer advice as authoritative.

### Preferred organisation and features

- Topic-based organisation was preferred by 44.4%.
- Timeline organisation was preferred by 33.3%.
- Step-by-step checklists were the highest selected feature (48.1%).
- Important reminders or deadlines followed at 37.0%.
- Topic guides and student tips each received 33.3%.
- **96.3%** considered saved progress very useful or somewhat useful.

**Design decision:** provide both stage-based navigation and topic guides. Implement static priority labels in the MVP; automated notifications remain out of scope. Saved progress is a required MVP feature.

## Week 6 product priorities

1. Build one complete Before Arrival checklist as the first usable vertical slice.
2. Save checklist completion in the browser.
3. Show overall progress clearly.
4. Link every important task to a named official source and verification date.
5. Expand to the remaining three stages and topic guides in Week 7.

## Evidence retained

- `docs/week4/Interview Questions.pdf` - survey instrument.
- `docs/week4/Interview Graph.pdf` - aggregate Google Forms charts.
- Restricted team Drive - raw responses and eligible-only spreadsheet analysis.

## Limitations

- The sample is small and intended for product discovery, not population-level conclusions.
- Four ineligible respondents are included in the current Google Forms overview charts.
- Most respondents were bachelor's students, so other study levels are less represented.
- The survey measures reported preferences; later usability testing must validate actual behaviour with the working product.

*Prepared for the Week 6 Landed build. Last updated: 10 July 2026.*
