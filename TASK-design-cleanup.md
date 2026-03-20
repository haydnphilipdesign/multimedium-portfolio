# Design Cleanup Task — Subpages, Tokens, and Case Study Template

Continue the design audit that was already completed on core pages/components. The following three items remain.

---

## 1. Color Token Cleanup (globals.css)

The `--glow`, `--glow-muted`, and `--accent-strong` CSS custom properties in `app/globals.css` are now mostly unused after the core audit replaced them with `--primary`. Clean up:

- **Search for remaining usage** of `bg-glow`, `text-glow`, `border-glow`, `text-accent-strong`, `hover:text-accent-strong`, `bg-glow/10`, `border-glow/20`, `border-glow/30`, `border-glow/35` across all files in `next-app/`.
- **Replace with the primary color equivalent**: `bg-primary`, `text-primary`, `border-primary`, `hover:text-primary`, `bg-primary/10`, `border-primary/20`, `border-primary/30`.
- **After all references are removed**, delete the `--glow`, `--glow-muted`, and `--accent-strong` token declarations from both `:root` and `.dark` blocks in `globals.css`.
- **Also update** the `.eyebrow-pill`, `.card-elevated`, and any other utility classes in `globals.css` that still reference these tokens.
- Do NOT remove `--color-glow` and `--color-glow-muted` from the `@theme inline` block until after confirming zero Tailwind class usage of `glow` anywhere.

---

## 2. Subpage Consistency Sweep

The following pages still have scattered inconsistencies from the pre-audit patterns. Apply the same fixes that were already made to the core pages:

### Files to sweep:
- `app/services/website/page.tsx`
- `app/services/landing-pages/page.tsx`
- `app/services/growth-retainers/page.tsx`
- `app/industries/page.tsx` (partially done)
- `app/industries/transaction-coordinators/page.tsx`
- `app/industries/trades/page.tsx`
- `app/industries/home-services/page.tsx`
- `app/work/[slug]/page.tsx`
- `app/lp/real-estate/page.tsx`
- `app/resources/page.tsx`
- `app/resources/tc-cover-sheet/page.tsx`
- `app/resources/tc-intake-checklist/page.tsx`
- `app/resources/tc-task-list/page.tsx`
- `app/mytcacademy/page.tsx`
- `app/mytcacademy/flyer/page.tsx`
- `app/contact/thanks/page.tsx`
- `components/marketing/HowItWorks.tsx`
- `components/ui/button.tsx`

### What to fix in each file:
1. `text-glow` → `text-primary`
2. `hover:text-accent-strong` → `hover:text-primary`
3. `border-border/65` or `border-border/70` → `border-border/60`
4. `hover:border-glow/30` or `hover:border-glow/35` → `hover:border-primary/30`
5. `rounded-[2rem]` → `rounded-2xl`
6. `shadow-[var(--shadow-elevated)]` on hover → `shadow-[var(--shadow-soft)]`
7. `hover:-translate-y-1` → `hover:-translate-y-0.5`
8. `bg-card/90` → `bg-card` (remove unnecessary opacity)
9. Remove any `.grain` divs (e.g. `<div className="grain absolute inset-0 pointer-events-none" />`)
10. Remove any `.bg-hero-gradient` overlay divs from non-hero sections

### Do NOT change:
- Any content/copy
- Component structure or layout logic
- Animation timing or Framer Motion config
- Anything in `client-portal/` (separate app)

---

## 3. Case Study Page Template Audit (`app/work/[slug]/page.tsx`)

This is the most content-heavy page and deserves its own focused pass. Read the full file first, then address:

### Typography hierarchy
- Ensure heading sizes step down consistently (H1 → H2 → H3)
- Section headings should use `font-bold` consistently
- Body text should use `text-muted-foreground` with `leading-relaxed`

### Image presentation
- Hero image and process step images should have consistent border-radius (`rounded-2xl`)
- Remove any `shadow-[var(--shadow-elevated)]` in favor of `shadow-[var(--shadow-soft)]`
- Image containers should use consistent `border border-border/60`

### Process timeline / steps
- Cards should follow the same hover pattern: `hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]`
- Step numbering or visual indicators should use `text-primary` not `text-glow`

### Outcomes section
- Metric cards should have consistent spacing, borders, and radius
- Values should be visually prominent without glow effects

### CTA section
- Should match the pattern used on the homepage: `rounded-2xl border border-border/60 bg-card/80`
- No grain or hero-gradient overlays
- Use `btn-primary` for the main action

### Tags/pills
- Tool tags and category pills should use `border-border/60` consistently
- Active/hover states should use `border-primary/30` not `border-glow/30`

---

## Verification

After all changes, run `npx next build` from the `next-app/` directory to confirm no build errors.
