# Portfolio Studio Architecture

## Goal

Ship a static personal studio that can replace the old `iocfinc.github.io` résumé page with a more durable editorial structure.

## Content Model

- `essays`: longform writing with deck, tags, and reading time
- `notes`: shorter notebook-style observations
- `photo-stories`: image-led narratives with ordered gallery images
- `work`: selective case studies with outcomes and stack metadata

All content is file-based under `src/content/` so publishing stays low-friction and repo-native.

## Rendering Model

- Astro static pages render collection indexes and detail pages at build time.
- Shared navigation and metadata live in `src/data/site.ts`.
- Content curation rules live in `src/utils/content.ts`.

## Visual System

- Base-inspired system discipline translated into local Astro/CSS
- `Manrope` for interface, navigation, body, and display hierarchy
- Neutral off-white/white surfaces, charcoal ink, restrained blue accent
- 1px separators, 8px radii, compact metadata, and mobile-first wrapping
- Real photography assets in `public/assets/photos/`

## Deployment

The repo is designed for static hosting. `portfolio-studio` is the source for
current generated pages. `../iocfinc.github.io` is the public GitHub Pages
estate and also preserves route exceptions that should not be deleted during a
source build:

- `/archive/`
- `/archive/legacy-2019/`
- `/games/concentration/`
- legacy assets required by archive pages and static demos

Use `npm run stage:pages` to build, prune source-owned generated entries, and
copy `dist/` into the Pages repo. The staging command intentionally preserves
the public archive/game strata listed above.
