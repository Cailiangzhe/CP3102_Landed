# Landed Design System - Week 8 JCU-Aligned Playful Utility

## Design direction

Landed uses a **JCU-aligned Playful Utility** style: welcoming enough to engage a new student, but structured enough to help them finish important tasks. The interface uses the blue, gold, white and dark-grey character of the James Cook University Singapore logo while keeping Landed visually identifiable as a student project.

The interface should feel approximately 80% practical guide and 20% playful campaign. Decoration must never make the sequence, official source or task status harder to find.

## Design principles

1. **Confident, never chaotic:** use bold colour and type in the hero, then keep working areas aligned and predictable.
2. **Sequence first:** users should immediately see the four stages and know where to begin.
3. **Official and traceable:** source names and verification dates stay close to every important task.
4. **Mobile first:** the complete journey must remain readable at 360px.
5. **Motion supports meaning:** hover and completion transitions give feedback; they do not distract or block progress.
6. **Plain English:** use short sentences, familiar labels and no unexplained abbreviations.

## Colour tokens

| Token | Hex | Use |
|---|---:|---|
| JCU blue | `#0067A7` | Hero route board, brand emphasis and Before Arrival stage |
| Deep blue | `#004F80` | Borders, navigation, progress panel and First Month stage |
| Mid blue | `#1781B8` | Arrival Day stage and supporting accents |
| Dark grey | `#1F2933` | Headings and high-contrast text |
| JCU gold | `#F4C300` | Focus rings, progress, priority labels and small highlights |
| Pale blue | `#DCEFF8` | Completed states and supporting surfaces |
| Page blue-white | `#F7FBFD` | Page background |
| Surface | `#FFFFFF` | Cards and content panels |

Stage colour mapping uses one coherent blue family: Before Arrival is JCU blue, Arrival Day is mid blue, First Week is medium-deep blue and First Month is deep blue. A stage always includes text and a number, so colour is not the only identifier.

## Typography

- Use local system fonts only; the site does not depend on a font download.
- Display headings use `Arial Black, Arial, Helvetica, sans-serif`.
- Body text uses `Arial, Helvetica, sans-serif` with at least `1.48` line height.
- The hero heading is large and compact; task descriptions use conventional spacing for easier scanning.
- Metadata is no smaller than `0.74rem` and never contains essential instructions by itself.

## Visual language

- Use two- or three-pixel deep-blue borders to make controls and cards visually definite.
- Offset shadows may use the relevant stage colour. They communicate hierarchy without relying on blur.
- Rounded rectangles remain aligned in task-heavy areas. Small rotation is limited to decorative hero elements.
- The hero route board is made with HTML and CSS, not an external image. It introduces the four-stage model before the user reaches the checklist.
- Gold is reserved for current state, progress, focus and small highlights. Long reading areas stay white or pale blue.
- The supplied James Cook University Singapore logo appears in the header with a `Student project` label to preserve context without presenting Landed as an official service.
- The supplied JCUS 38th Convergence Conference logo appears beside it as the course project activity mark. The two logos remain visually separate and retain descriptive alternative text.

## Components

### Main navigation

- Shows Journey, Topic Guides, FAQ and Official Links.
- Uses hash targets so the current view can be bookmarked.
- The current view uses dark text, a gold background and a visible deep-blue border.

### Hero route board

- Summarises the route as Before, Arrival, Week 1 and Month 1.
- Uses an original CSS grid pattern and arrival stamp; no third-party visual assets are required.
- The disclaimer remains directly below the board and clearly states that Landed is not an authority.

### Stage card

- Shows sequence number, stage title, one-sentence purpose and task status.
- Uses the fixed stage colour for its number and offset shadow.
- Available cards are native buttons with visible keyboard focus.

### Task card

- Uses a native checkbox with an explicit accessible label.
- Contains a short title, plain-English explanation, official organisation and verification date.
- A completed task receives a tinted background as well as a checked control.
- `Do this first` appears only for genuinely urgent tasks.

### Progress panel

- Uses a deep-blue panel and gold progress fill for strong contrast.
- Displays completed count, total count and percentage.
- Progress is stored locally and never sent to a server.
- Reset requires explicit confirmation.

### Topic guide, FAQ and source card

- Topic guides show a relevant stage, three short actions and official links.
- FAQ items use native `details` and `summary` elements.
- Source cards show category, organisation, title and verification date.
- Supporting cards use controlled accent shadows while keeping their text surface white.

## Responsive behaviour

- Four journey columns above 960px.
- Two journey columns from 621px to 960px.
- One column at 620px and below.
- The hero route board moves below the introduction on tablets and phones.
- At 390px, route stops stack vertically and task controls remain touch friendly.
- No fixed-width content or horizontal page scrolling.

## Accessibility baseline

- Semantic landmarks and heading order are preserved.
- Focus uses a four-pixel yellow outline with clear offset.
- Native buttons, links, checkboxes, `details` and `summary` elements remain operable by keyboard.
- Colour is never the only indicator of stage, completion or availability.
- `prefers-reduced-motion` removes transitions and decorative transforms.
- Progress exposes a labelled `progressbar` state.
- Dynamic completion changes use a polite live region.

*UX/front-end owner: Shiheng. Last updated: 22 July 2026.*
