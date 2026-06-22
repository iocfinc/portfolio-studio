# Portfolio Studio

An editorial-modernist portfolio site for essays, notes, photography, and selective technical work.

## Stack

- Astro
- Astro content collections
- MDX
- Vitest

## Commands

- `npm install`
- `npm run dev`
- `npm run test`
- `npm run build`
- `npm run verify`
- `npm run stage:pages`

## Deployment Contract

`portfolio-studio` owns the source for the current public site: home, about,
writing, work, photography, shared layout, and shared visual system.

`../iocfinc.github.io` remains the GitHub Pages deployment estate. The staging
command builds this Astro project, prunes source-owned generated entries, and
copies `dist/` into that repo without deleting preserved public exceptions:

- `/archive/`
- `/archive/legacy-2019/`
- `/games/concentration/`
- legacy assets required by archive pages and static demos

Do not hand-edit generated public pages in `iocfinc.github.io` unless the source
change also lands here. Hand edits in the Pages repo should be limited to
preserved static exceptions such as archive notices, retired-demo placeholders,
or game deployment assets.
