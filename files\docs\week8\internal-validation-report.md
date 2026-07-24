# Week 8 Internal Validation Report

**Owner:** Yuting  
**Execution date:** 24 July 2026  
**Build:** Week 8 release candidate  
**Method:** Scripted internal product walkthrough on a local static server

## Important classification

No current or recently graduated JCU Singapore international student participated in
this validation. The results below are **internal functional evidence**, not usability
research and not evidence of target-user satisfaction, comprehension or efficiency.

## Walkthrough results

| ID | Scenario | Expected result | Observed result | Status |
|---|---|---|---|---|
| IV-01 | Open the Journey view | Four ordered stage buttons appear | Four stages rendered in the intended order | Pass |
| IV-02 | Open Arrival Day | Five arrival tasks and official links appear | Five tasks rendered; source metadata present | Pass |
| IV-03 | Mark one task complete | Card state and total progress update | Checkbox, card class and progress updated | Pass |
| IV-04 | Refresh after completion | Completed task remains selected | Completion persisted in browser storage | Pass |
| IV-05 | Reset saved progress | Confirmation appears and progress returns to zero | Reset confirmed; count and percentage returned to zero | Pass |
| IV-06 | Open Topic Guides | Seven guides appear | Seven guide cards rendered | Pass |
| IV-07 | Open FAQ | Eight expandable questions appear | Eight native FAQ details elements rendered | Pass |
| IV-08 | Open Official Links | Twenty source cards appear | Twenty official-source cards rendered | Pass |
| IV-09 | Inspect 1280px layout | No horizontal page overflow | Page width remained within viewport | Pass |
| IV-10 | Inspect 360px layout | Navigation reflows and no horizontal page overflow | Two-column mobile navigation and single-column content rendered | Pass |
| IV-11 | Load project logos | Both logos load with alternative text | JCU and JCUS 38th logo assets loaded | Pass |
| IV-12 | Inspect browser console | No application warning or error | No warning or error captured | Pass |

## Findings

No blocking functional defect was found during the scripted walkthrough. The release
candidate preserved the existing checklist, progress, guide, FAQ and source behaviour
after the Week 8 visual redesign.

## What this report cannot claim

This report does not establish:

- whether a new international student understands the wording;
- whether the four stages match a target student's mental model;
- whether tasks can be found quickly without prior project knowledge;
- whether the visual design feels trustworthy or engaging to target users;
- a task-success percentage for the target population.

## Recommended report wording

> External usability testing with target international students was not completed.
> The team conducted scripted internal functional and responsive checks instead.
> These checks verified implementation behaviour but did not validate usability with
> the target population.

*Prepared for Yuting's Week 8 research and validation contribution.*