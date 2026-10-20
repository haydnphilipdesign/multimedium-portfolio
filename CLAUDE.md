# CLAUDE.md

Marketing site for **Multimedium**, Haydn's solo web design business for real estate professionals (transaction coordinators, agents, brokerages). Next.js 16 App Router, React 19, Tailwind CSS 4, pnpm.

## Read before changing content or design

1. `docs/brand/brief.md`: **source of truth** for positioning, audiences, voice, proof rules, naming, prices, and site structure. It wins over every other doc.
2. `docs/site-audit/2026-10-20-real-estate-credibility-review-and-plan.md`: the phased plan. Check its "Decisions log" for what's done and what's next.
3. `docs/brand/copy-deck.md`, `docs/brand/packages-and-sop.md`, `docs/brand/case-studies.md`: approved copy, package terms, case studies.

`docs/archive/` holds superseded strategy docs from earlier rebuilds. **Never follow them.**

## Hard rules

- **No invented proof.** Never add fictional clients, testimonials, names, stats, logos, or results, including in demos or placeholders. Outcomes in `content/projects.ts` need a confirmed source. Concept work is never shown as client work.
- **No demo sites and no Lab.** They were removed deliberately.
- **Prices and package details** come only from `docs/brand/packages-and-sop.md`. Don't restate them differently anywhere.
- **Naming:** "Multimedium" (one capital M). Norma = the core TC app; Norma Suite = the family (Norma, Norma Intake, Norma Reports, UtilitySheet). Separate shipped products from plans.
- **Voice:** first person singular ("I"), plain and specific. See brief §3 for the words to avoid.
- **Links:** → for internal links, ↗ only for external.
- Don't add motion or animation libraries. Keep pages fast and axe-clean.

## Commands

```bash
pnpm dev          # local dev server
pnpm build        # production build (must pass before committing)
pnpm lint         # eslint (must pass)
pnpm test:review  # review form tests
node --test tests/contact.test.mjs
```

## Layout

- `app/`: routes. `content/`: project, service, and package data. `components/marketing/Studio.tsx`: shared page sections. `app/globals.css`: design tokens and studio styles.
- Redirects live in `next.config.ts`. When removing or renaming a URL, add a single-hop permanent redirect (see the redirect map in brief §8).
