# Week 7 Content Decisions

## Scope

Week 7 expands the approved Before Arrival slice into the complete first-month MVP. The app now contains four stages:

1. Before Arrival - 6 tasks.
2. Arrival Day - 5 tasks.
3. First Week - 6 tasks.
4. First Month - 6 tasks.

## Research-led priorities

- Immigration, accommodation and immediate arrival actions appear first.
- Transport, mobile connection, campus systems, attendance, money and healthcare receive dedicated tasks or guides.
- Both timeline and topic-based navigation are available.
- Every important action links to an official source with a verification date.

## Writing rules

- Begin each task with an action verb.
- Keep explanations to one or two short sentences.
- Describe what to check, not what legal, medical, visa, financial or housing decision to make.
- Use `Do this first` only for time-sensitive or safety-relevant tasks.
- Do not rank or endorse commercial providers.
- Do not copy detailed official requirements that may change.

## Structured content contract

Checklist tasks use:

```javascript
{
  id: "unique-task-id",
  title: "Action-oriented title",
  summary: "Short plain-English explanation.",
  sourceId: "matching-source-id",
  priority: "high" // or "normal"
}
```

Topic Guides and FAQ are stored separately in `support-content.js`. URLs remain centralised in `sources.js`.

## Scope control

No login, chatbot, personalised recommendation, booking, payment, reminder or multilingual feature is added. The next iteration is limited to usability findings, high-value fixes and final evidence.

*Content owner: Bo Yuan. Updated 17 July 2026.*
