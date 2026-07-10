# Week 6 Checklist Content Decisions

## Selected vertical slice

Week 6 implements **Before Arrival** as the first complete product slice. It was chosen because the survey showed that students needed support before arrival as well as later, and because preparation affects accommodation, immigration and first-day readiness.

## Included tasks

1. Review IPA and Student's Pass requirements.
2. Confirm JCU admission documents.
3. Arrange suitable accommodation.
4. Read JCU pre-arrival information.
5. Plan airport-to-accommodation travel.
6. Prepare a first-month budget.

## Writing rules

- Every task begins with an action verb.
- Explanations describe what to check, not what legal, financial or medical decision to make.
- High-risk topics link to the official source instead of copying detailed requirements.
- Commercial providers are not ranked or endorsed.
- `Do this first` appears only on immigration, admission-document and accommodation preparation tasks.

## Week 7 content contract

New stages must use the same JavaScript structure:

```javascript
{
  id: "unique-task-id",
  title: "Action-oriented title",
  summary: "Short plain-English explanation.",
  sourceId: "matching-source-id",
  priority: "high" // or "normal"
}
```

Content authors must not change `app.js` or CSS while adding tasks. Source authors must not duplicate URLs inside checklist content.

*Last updated: 10 July 2026.*
