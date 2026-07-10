# Survey Data Management

## Public repository rule

The public GitHub repository may contain:

- the survey instrument;
- aggregate charts;
- anonymised counts and percentages;
- a research summary;
- design decisions derived from the findings; and
- documented limitations.

It must not contain:

- raw individual response exports;
- names, student IDs or email addresses;
- free-text responses that could identify a participant;
- spreadsheet links that grant access to raw responses; or
- immigration, financial, medical or other sensitive personal data.

## Storage and access

- Raw responses remain in a restricted team Google Drive folder.
- Access is limited to the project team and tutor where required.
- Public documentation uses aggregate results only.
- The team removes unnecessary raw exports after the assessment retention period or according to tutor guidance.

## Week 6 correction

The raw all-responses PDF previously uploaded under `docs/week4/` must be removed from the current public branch. The aggregate `Interview Graph.pdf` and `research-summary.md` are sufficient public evidence.

Because Git retains earlier versions, the team must check whether the PDF contains identifying or sensitive information. If it does, the repository owner must temporarily restrict access and coordinate a Git history purge. If it contains no identifying information, deleting it from the current tree still corrects the public-documentation practice, while the process issue should be acknowledged in the risk record.

## Analysis rule

Only the 23 respondents who selected one of the two eligible answers in Question 1 belong to the target sample. The final report must regenerate statistics from that filtered dataset instead of presenting the 27-response overview as eligible-only evidence.

*Owner: Sihan Zhong. Last updated: 10 July 2026.*
