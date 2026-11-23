## Project Overview

`portfolio-studio` is a new Astro-based personal site for Ira Fernando. It is a hybrid studio, not a résumé microsite: the primary surfaces are writing, photography, and selective work case studies tied together by the theme `observation as craft`.

## Repository Map

- `src/content/`: file-based editorial content for essays, notes, photo stories, and work entries
- `src/pages/`: route entrypoints and collection detail pages
- `src/components/` and `src/layouts/`: reusable UI primitives and shared page shell
- `src/data/` and `src/utils/`: site copy, navigation, and content-curation logic
- `public/assets/photos/`: curated photography assets shipped with the site
- `tests/`: Vitest coverage for the curation helpers
- `docs/`: architecture and product notes

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Test: `npm run test`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Verify: `npm run verify`

## Working Agreements

- Read the nearest `AGENTS.md` before editing files in scope.
- Keep this file product-specific. Reusable harness logic belongs in `CodexSkills`, not here.
- Prefer targeted validation first, then the broader verify command.
- Do not change generated files unless the source and generation path are both updated.
- Keep edits minimal and local to the task.

## Brand & Design System Linkage (Hydrogen v2)

For shared brand tokens, typography, and case study styling:

- **Canonical Brand Kit:** `../hydrogen-brand-kit-v2/`
- **Design Tokens:** `../hydrogen-brand-kit-v2/tokens/`
- **Brand Assets:** `../hydrogen-brand-kit-v2/assets/` and `svg/`

## Review Expectations

- Call out user-visible risks and untested paths.
- State exactly which commands were run.
- Record migrations or follow-up work explicitly.
