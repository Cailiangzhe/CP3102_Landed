# Landed Usability Test Plan

## Objective

Test whether a new JCU Singapore international student can find the correct stage, complete a checklist task, locate an official source and understand how Landed differs from an official service.

This is usability testing of the product, not a test of the participant.

## Participants

- Target: **5 to 8** current or recently graduated JCU Singapore international students.
- Recruit 8 to 10 people to allow for cancellations.
- Participation is voluntary and anonymous.
- Do not record names, student IDs, emails, immigration details, medical details or financial details.
- Do not publish recordings or individual raw notes in the public repository.

## Five-minute test flow

1. Read the short consent and privacy statement.
2. Record pre-test confidence on a 1-5 scale.
3. Ask the participant to complete the four tasks below without coaching.
4. Record completion, time and whether help was needed.
5. Ask the short post-test questions.

## Test tasks

| ID | Participant instruction | Success condition |
|---|---|---|
| T1 | You have just arrived in Singapore. Find the checklist for today. | Opens `Arrival Day` without help. |
| T2 | Find official information about travelling from Changi Airport. | Opens the Changi Airport source from the correct task or guide. |
| T3 | Mark one task complete, return to the journey and refresh the page. | Progress changes and remains saved after refresh. |
| T4 | Find where JCU explains attendance and medical insurance. | Opens the JCU Attendance and Insurance source. |

## Observation template

Use participant codes such as `P01`; keep the mapping, if any, outside GitHub.

| Participant code | Pre confidence 1-5 | T1 independent | T1 seconds | T2 independent | T2 seconds | T3 passed | T4 independent | Help needed | Post clarity 1-5 | Post confidence 1-5 | Recommend Y/N |
|---|---:|---|---:|---|---:|---|---|---|---:|---:|---|
| P__ |  |  |  |  |  |  |  |  |  |  |  |

## Post-test questions

1. How clear was the website? `1 = Very unclear`, `5 = Very clear`.
2. How useful was the four-stage organisation? `1 = Not useful`, `5 = Very useful`.
3. How confident are you now about finding the next task? `1 = Not confident`, `5 = Very confident`.
4. Would you recommend this guide to a new international student? `Yes / No / Not sure`.
5. What was the most confusing part? Optional short answer.

## Metrics

- Independent completion rate = independent task completions / attempted tasks.
- 60-second findability rate = source-finding tasks completed within 60 seconds / source-finding attempts.
- Mean clarity and usefulness ratings.
- Confidence gain = mean post-test confidence minus mean pre-test confidence.
- Recommendation rate = Yes responses / participants.

## Decision rule

Fix an issue before final release when it blocks a task, affects more than one participant, creates a privacy or safety risk, or prevents a user from distinguishing Landed from an official service. Record lower-impact issues in `docs/future-work.md`.

## Reporting rule

Publish only aggregate metrics and anonymised themes in `docs/usability-results.md`. Do not invent results before testing occurs.

*Owner: Yuting. Prepared 17 July 2026.*
