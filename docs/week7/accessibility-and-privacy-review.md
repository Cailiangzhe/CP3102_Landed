# Week 7 Accessibility and Privacy Review

## Accessibility checks

- Semantic header, navigation, main content, sections and footer are present.
- A keyboard skip link moves to the main content.
- All navigation controls, stage cards, checklist boxes, FAQ items and links are keyboard reachable.
- Visible focus styling is provided for links, buttons, checkboxes and FAQ summaries.
- Task text is connected to its checkbox with a native label.
- Progress exposes a `progressbar` role and updates `aria-valuenow`.
- Status changes are announced through a polite live region.
- Completion and availability are not shown by colour alone.
- Reduced-motion preferences disable non-essential transitions.
- The 360px layout must be checked for horizontal scrolling before acceptance.

## Privacy checks

- The website has no login, profile, analytics, form or server database.
- `localStorage` contains only completed task IDs under `landed.completedTasks.v1`.
- Clearing or resetting browser storage removes saved progress.
- The public repository contains aggregate survey findings only.
- Usability participants use anonymous codes; raw notes remain in restricted team storage.

## Safety and neutrality checks

- The hero and footer identify Landed as a student project, not an official JCU service.
- High-risk tasks link to official sources rather than copying detailed rules.
- No commercial landlord, bank, telco, clinic or transport provider is recommended.
- Emergency wording distinguishes life-threatening emergencies from non-emergency care.

## Open manual checks

- Run keyboard-only navigation in Chrome and Edge.
- Check contrast with an accessibility auditing tool.
- Test browser zoom at 200%.
- Complete the usability test with target students.

*Owner: Sihan. Prepared 17 July 2026.*
