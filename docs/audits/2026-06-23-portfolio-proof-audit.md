# Portfolio Proof Audit

Date: 2026-06-23  
Linear: DIO-95 under DIO-69  
Scope: non-destructive audit for stale claims, links, demos, contact behavior, accessibility, route health, and mobile layout risk.

## Success Criteria

Outcome: give DIO-69 a source-backed credibility reset baseline before homepage positioning, playbooks, content cadence, or event gallery work begins.

Non-goals:

- Do not rewrite public positioning in this task.
- Do not delete archive or game content without explicit approval.
- Do not stage or publish changes to `iocfinc.github.io`.
- Do not move reusable ADLC or agent-harness logic into this product repo.

Done when:

- Root route, About route, Work route, Writing route, Photography route, Archive route, and Game/experiment route are audited.
- stale claims, retired demos, Udacity/Heroku references, contact behavior, accessibility, and mobile layout risks are recorded.
- Validation evidence and proposed fix tickets are present.

## Route Audit

| Surface               | Route                   | Source owner                            | Current status               | Findings                                                                                                                                                                                                                 |
| --------------------- | ----------------------- | --------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Root route            | `/`                     | `portfolio-studio`                      | Current Astro source exists. | The homepage routes to writing, photography, work, `/archive/`, and `/games/concentration/`. It already frames the site as "AI systems, field notes, and proof," but the Release 1 proof-router work remains for DIO-96. |
| About route           | `/about/`               | `portfolio-studio`                      | Current Astro source exists. | Contact behavior is a direct `mailto:` link. No live contact form claim exists in source-owned pages.                                                                                                                    |
| Work route            | `/work/`                | `portfolio-studio`                      | Current Astro source exists. | Three current case studies are present. No source-owned work route links to the old Heroku demo. The next proof gap is stronger case-study evidence, not route repair.                                                   |
| Writing route         | `/writing/`             | `portfolio-studio`                      | Current Astro source exists. | Essays and notes render from collections. The Symphony essay includes local dev-server evidence from a prior game run, which is acceptable as build-log provenance.                                                      |
| Photography route     | `/photography/`         | `portfolio-studio`                      | Current Astro source exists. | One photo story exists with local assets and alt text. Event/gallery model remains future work for DIO-99.                                                                                                               |
| Archive route         | `/archive/`             | `iocfinc.github.io` preserved exception | Preserved static exception.  | Archive index honestly marks older versions and points the retired Sentiment Analyzer to a placeholder instead of a dead Heroku app.                                                                                     |
| Game/experiment route | `/games/concentration/` | `iocfinc.github.io` preserved exception | Preserved static exception.  | Game route remains live as the current experiment surface. Future `/experiments` IA is planned but not implemented.                                                                                                      |

## Stale Claims And Retired Demo Findings

- Current source-owned pages do not expose the old Heroku Sentiment Analyzer as a live demo.
- The Pages estate contains `/archive/retired/sentiment-analyzer/`, which clearly states that the Heroku-era demo is no longer live.
- Preserved legacy archive content still contains Udacity-era positioning and deep-learning job-search language. It is acceptable as archive provenance, but it should remain visually and semantically separated from current positioning.
- The legacy archive still ships old contact-form assets such as `inc/sendEmail.php` and contact-form JavaScript. Current source-owned pages do not use them, but the preserved files are a future cleanup/security review candidate.
- Planned routes from the DIO-69 brief are not yet shipped: `/playbooks`, `/experiments`, `/now`, and `/services`.

## Link And Contact Audit

Internal source-owned links observed:

- `/`
- `/writing`
- `/photography`
- `/work`
- `/about`
- `/archive/`
- `/games/concentration/`
- generated collection routes under `/writing/`, `/writing/notes/`, `/photography/`, and `/work/`

Contact behavior:

- Current contact behavior is `mailto:iraoliverfernando@gmail.com` in the About page and footer.
- No source-owned route depends on the old PHP contact form.
- Legacy contact-form files remain in the Pages estate only as preserved archive/static material.

External or suspicious links:

- Source-owned current pages have no live external Heroku demo link.
- Legacy archive links to old Udacity project repositories. These should stay archived or be labeled as historical if surfaced outside `/archive/`.
- The previous `https://iocfinc-base.herokuapp.com/sentiment_analyzer` proof should be treated as retired, not live.

## Accessibility And Mobile Layout Risks

- Current source-owned pages use semantic landmarks, a primary navigation label, direct text links, and image alt text in the photo story.
- The archive route includes mobile wrapping styles and a simple document structure.
- The legacy 2019 archive is a preserved third-party template stratum and likely has older accessibility and mobile-layout assumptions.
- Screenshot evidence now covers the root and About routes at desktop/mobile widths, the source-owned Work/Writing/Photography index routes at desktop width, and the preserved Archive/Game routes at desktop/mobile widths.

## Validation Evidence

Red step:

- `npm run test -- tests/proof-audit.spec.ts` failed before this report existed with `ENOENT: no such file or directory, open 'docs/audits/2026-06-23-portfolio-proof-audit.md'`.

Source scan:

- `rg -n "href=|http|Heroku|heroku|Udacity|udacity|sentiment|contact|mailto|linkedin|github|archive|games|experiments|AI|FDE|field" src docs public README.md scripts package.json`
- `rg -n "sentiment|Heroku|heroku|Udacity|udacity|contactForm|sendEmail|php" ../iocfinc.github.io/archive ../iocfinc.github.io/inc ../iocfinc.github.io/js ../iocfinc.github.io/README.md`

Fresh validation:

- `npm run test -- tests/proof-audit.spec.ts` passed with 1 file and 2 tests.
- `npm run test` passed with 2 files and 5 tests.
- `npm run build` passed: `astro check` reported 0 errors, 0 warnings, 0 hints; Astro built 16 pages into `dist/`.
- Local route smoke passed for:
  - `dist/index.html`
  - `dist/about/index.html`
  - `dist/work/index.html`
  - `dist/writing/index.html`
  - `dist/photography/index.html`
  - `../iocfinc.github.io/archive/index.html`
  - `../iocfinc.github.io/games/concentration/index.html`
- Game route browser check passed on `http://127.0.0.1:4322/games/concentration/`: 7 network requests returned 200 and no console messages were reported.

Partial validation:

- `npm run lint` still fails because `docs/portfolio-growth-wireframe.html` has pre-existing Prettier issues. The new audit report was formatted with `npx prettier --write docs/audits/2026-06-23-portfolio-proof-audit.md tests/proof-audit.spec.ts`.
- `npm run verify` is therefore Partial: `npm run test` and `npm run build` pass, then `npm run lint` fails on `docs/portfolio-growth-wireframe.html`.

## Screenshot Evidence

Captured screenshots:

- `docs/audits/screenshots/root-desktop.png`
- `docs/audits/screenshots/root-mobile.png`
- `docs/audits/screenshots/about-desktop.png`
- `docs/audits/screenshots/about-mobile.png`
- `docs/audits/screenshots/work-desktop.png`
- `docs/audits/screenshots/writing-desktop.png`
- `docs/audits/screenshots/photography-desktop.png`
- `docs/audits/screenshots/archive-desktop.png`
- `docs/audits/screenshots/archive-mobile.png`
- `docs/audits/screenshots/game-desktop.png`
- `docs/audits/screenshots/game-mobile.png`

## Fix Tickets

- Existing DIO-96: implement homepage proof router and positioning spine after this audit baseline.
- Existing DIO-97: create repo-local content calendar for writing, social derivatives, and event posts.
- Existing DIO-98: define playbooks section and first AI readiness scorecard.
- Existing DIO-99: build Codex meetup gallery and event-report content model.
- Existing DIO-100: research AI FDE portfolio examples and service positioning.
- Proposed ticket: archive hygiene pass for legacy contact-form PHP and JavaScript assets. Decide whether they must remain for the preserved 2019 template or can be retired behind a clearer archive boundary.
- Proposed ticket: add a route/link audit script that checks source-owned routes, preserved archive/game exceptions, and retired-demo placeholders without publishing.
- Proposed ticket: add screenshot review artifacts for `/`, `/about/`, `/work/`, `/writing/`, `/photography/`, `/archive/`, and `/games/concentration/`.

## Trace-To-Eval Note

This was the first DIO-69 run using the public ADLC loop. The useful regression case is: when an agent takes on a parent story with child tasks, it should select the first agent-ready child task, preserve the parent context, add a small artifact contract test, and report MR blockers honestly when the source repo has no remote.
