# Week 8 Accessibility and Privacy Audit

**Owner:** Sihan Zhong  
**Audit date:** 24 July 2026  
**Method:** Source inspection, DOM inspection, responsive browser checks and release validation

## Accessibility results

| Check | Result | Evidence |
|---|---|---|
| Skip link | Pass | `Skip to main content` is the first focusable link |
| Semantic landmarks | Pass | Header, navigation, main content, sections and footer are present |
| Heading structure | Pass | One page `h1`; view titles use `h2`; card titles use `h3` |
| Stage controls | Pass | Available stages are native buttons with accessible names |
| Checklist controls | Pass | Native checkboxes are connected to explicit labels |
| Progress state | Pass | Progress exposes `role="progressbar"` and updates `aria-valuenow` |
| FAQ controls | Pass | Native `details` and `summary` elements are used |
| Logo alternatives | Pass | JCU Singapore and JCUS 38th logos have descriptive alt text |
| Focus visibility | Pass | Links, buttons, checkboxes and summaries receive a four-pixel focus outline |
| Reduced motion | Pass | `prefers-reduced-motion` removes transitions and transforms |
| Mobile reflow | Pass | 360px inspection shows no page-level horizontal overflow |
| Colour contrast sample | Pass | Key text combinations exceed WCAG AA ratios listed below |

## Contrast samples

| Foreground / background | Ratio |
|---|---:|
| Dark grey `#1F2933` on page `#F7FBFD` | 14.17:1 |
| Deep blue `#004F80` on white | 8.64:1 |
| White on deep blue `#004F80` | 8.64:1 |
| Dark grey `#1F2933` on gold `#F4C300` | 8.89:1 |
| Link blue `#00527F` on white | 8.36:1 |

## Privacy and ethics results

| Check | Result | Evidence |
|---|---|---|
| Names, email addresses and student IDs | Pass | The application contains no data-entry form |
| Sensitive information | Pass | No health, immigration or financial details are requested or stored |
| Saved progress | Pass | Only checklist task IDs are stored in browser `localStorage` |
| Analytics and tracking | Pass | No analytics SDK, cookie banner or tracking script is included |
| Raw survey data | Pass | Release validation rejects public `.csv`, `.xls`, `.xlsx` and `.sav` files |
| External links | Pass | Official links open in a new tab with `noopener noreferrer` |
| Authority boundary | Pass | Hero, footer and README state that Landed is not an official service |
| User-test records | Pass | External usability participants were recruited for this release candidate |

## Limitations

- This is an internal inspection, not independent WCAG certification.
- Screen-reader behaviour was inferred from semantic HTML and was not tested with a
  target user who relies on assistive technology.
- External target-student usability testing was completed (30 participants, 20–24 July 2026), but it tested general usability, not assistive-technology use.
- Browser and operating-system combinations beyond the inspected desktop and 360px
  layouts remain residual risk.

The release candidate may be described as internally accessibility-reviewed, but not
as accessibility-certified or user-validated.

*Prepared for Sihan Zhong's Week 8 accessibility, privacy and risk contribution.*
