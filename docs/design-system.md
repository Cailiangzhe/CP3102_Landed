# Landed Design System - Week 7 MVP

## Design principles

1. **Calm before clever:** the interface should reduce pressure, not add novelty.
2. **Sequence first:** users should immediately see when a task belongs.
3. **Official and traceable:** sources and verification dates stay close to the task.
4. **Mobile first:** the primary layout must work at 360px before desktop polish.
5. **Plain English:** short sentences, familiar labels and no unexplained abbreviations.

## Colour tokens

| Token | Hex | Use |
|---|---:|---|
| Navy | `#123B5D` | Brand, stage markers, primary headings |
| Navy dark | `#0B2941` | High-contrast headings |
| Teal | `#168C87` | Progress, links, interactive emphasis |
| Teal dark | `#0F6F6B` | Accessible link text on light backgrounds |
| Gold | `#F3B43F` | Caution, urgency and disclaimer accent |
| Ink | `#172B3A` | Body text |
| Muted | `#5D6D78` | Supporting text and metadata |
| Surface | `#FFFFFF` | Cards and content panels |
| Soft surface | `#F3F7F9` | Page background |

## Typography

- Font stack: `Inter, Arial, Helvetica, sans-serif`.
- Hero heading: responsive `2.5rem` to `5rem`, strong but brief.
- Section headings: `1.35rem` to `2rem`.
- Body text: browser default `1rem` with at least `1.5` line height.
- Metadata and labels: no smaller than `0.76rem`; do not use them for essential instructions.

## Components

### Stage card

- Shows sequence number, stage title, one-sentence purpose and availability state.
- Available cards use a button element.
- Future cards are disabled and labelled `Coming in Week 7`.

### Task card

- Uses a native checkbox with an explicit accessible label.
- Contains a short task title and plain-English explanation.
- Shows a `Do this first` label only for genuinely urgent tasks.
- Names the official organisation and displays `Last verified`.

### Progress panel

- Displays completed count, total available count and percentage.
- Progress is stored locally and never sent to a server.
- Reset requires explicit confirmation.

### Main navigation

- Shows Journey, Topic Guides, FAQ and Official Links.
- Uses hash targets so the current view can be bookmarked.
- Marks the current view with `aria-current="page"` and a visible background.

### Topic guide, FAQ and source card

- Topic guides show a relevant stage, three short actions and official links.
- FAQ items use native `details` and `summary` elements.
- Source cards show category, organisation, title and verification date.
- Support content does not recommend commercial providers.

## Responsive behaviour

- Four journey columns above 900px.
- Two journey columns from 621px to 900px.
- One column at 620px and below.
- Page margins reduce to 12px per side on small phones.
- No fixed-width content or horizontal scrolling.

## Accessibility baseline

- Semantic heading order and landmark elements.
- Visible keyboard focus.
- Native buttons, links and checkboxes.
- Colour is never the only indicator of completion or availability.
- Reduced-motion preference disables non-essential transitions.
- Progress exposes a labelled `progressbar` state.
- Dynamic completion changes use a polite live region.

*UX/front-end owner: Shiheng. Last updated: 17 July 2026.*
