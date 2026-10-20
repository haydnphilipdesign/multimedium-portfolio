# Multimedium — Visual Design Audit & Redesign Direction

**Scope:** Visual design only — color, typography, layout, spacing, UI polish, hierarchy, component variety, brand feel, design-system maturity.
**Explicitly out of scope:** content/proof/testimonials/demo-vs-client strategy, SEO, copy. (Those are tracked separately.)
**Reviewed as:** senior visual designer / brand designer / UI designer / design-systems lead.
**Date:** 2026-06-26
**Codebase basis:** `app/`, `components/`, `app/globals.css` (Tailwind v4 + shadcn + Fraunces / Space Grotesk / JetBrains Mono).

---

## 1. Executive Visual Verdict

### Overall impression
The site is **clean, competent, and consistent — and that is precisely the problem.** It looks like a well-built, tasteful Next.js + shadcn agency template that has been carefully themed: warm off-white background, muted-blue accent, soft-shadowed rounded cards, neat icon squares, balanced headings. Nothing is broken, nothing is ugly, nothing embarrasses the brand.

But this is the personal site of someone who **sells web design**. For that one job, "competent and clean" is a failing grade, because the site *is* the portfolio. A prospect's subconscious question is "would I want my site to look like *this*?" and right now the honest answer is "it looks like every other tidy service site I've seen." The work is assembled with taste, but it does not look *authored*. There is no single visual idea you'd remember thirty seconds after leaving.

The brand promise is **"websites that make it easy to trust you."** The current visual language communicates *competence and safety*, which supports trust — but it does not communicate *craft, point of view, or premium*, which is what actually closes a design sale. Trust without distinctiveness reads as "fine," and "fine" is forgettable.

### What is visually working
- **Solid, modern token foundation.** OKLCH color tokens, a coherent radius scale, fluid type ramps on heroes, reduced-motion handling, focus rings, and print styles. The *plumbing* is genuinely good.
- **Restraint and consistency.** Spacing, alignment, and grid discipline are clean. It never looks chaotic or amateur.
- **A strong font *roster*** (Fraunces + Space Grotesk + JetBrains Mono) — three good, characterful typefaces are loaded and paid for.
- **Good motion hygiene.** Framer-motion enter animations and parallax are subtle and tasteful, not gimmicky.
- **The hero has a real idea** (statement headline + portrait card + status pill). It's the most "designed" moment on the site.

### What is visually holding the site back
1. **One repeated component does ~80% of the work.** The string `rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)]` (or close kin) appears **105 times across 24 files.** Every value prop, package, FAQ, CTA, snapshot, and stat is the same soft bordered box. The eye never gets a new shape.
2. **The palette is muted to the point of having no signature.** Primary blue is `oklch(0.52 0.09 244)` — chroma **0.09**, which is barely-there saturation. Everything is slightly washed. There is no ownable color.
3. **The brand can't decide what color it is.** Light mode = muted blue; the (never-activated) dark theme flips primary to **amber/gold** `oklch(0.76 0.15 78)`. The designer hedged.
4. **Gray text everywhere.** Nearly all body copy is `text-muted-foreground` (a medium gray). It reads tentative and low-contrast.
5. **Fraunces and JetBrains Mono are underused.** Fraunces is applied to headings as a generic bold serif (the `font-display` *utility* is used **once** in the entire app). Mono is used 4 times. Two of three characterful fonts barely register.
6. **Every page has the same rhythm:** centered `max-w-6xl` column → left-aligned heading → grid of cards → repeat. No full-bleed, no asymmetry, no editorial breaks, one flat elevation level (`shadow-soft` used 109×, `shadow-elevated` 1×).

### Refine or rework?
**Keep the structure (routes, IA, content architecture, tokens plumbing) — but significantly rework the visual language.** This is not a from-scratch rebuild and not a polish pass. It's a **re-skin with a point of view**: commit to one ownable color, make Fraunces the star, kill ~half the cards, introduce 2–3 genuinely different section/layout templates, and darken the type. The bones are good; the surface is anonymous. See §8–9 for the concrete direction.

---

## 2. Color Audit

### Current palette (from `app/globals.css`)
| Token | Value | Read |
|---|---|---|
| `--background` | `oklch(0.985 0.008 95)` | Warm cream/paper — *good, distinctive choice* |
| `--foreground` | `oklch(0.28 0.02 252)` | Dark blue-slate, **not** black — soft |
| `--primary` | `oklch(0.52 0.09 244)` | Muted blue, **chroma 0.09** = very desaturated |
| `--muted-foreground` | `oklch(0.39 0.016 252)` | Medium gray — used for almost all body copy |
| `--border` | `oklch(0.86 0.012 252 / 0.7)` | Very light, low-contrast hairline |
| body bg wash | amber + blue radial gradients | Warm/cool wash — nice, but subtle |

### Primary / accent usage
The accent is **too quiet to be a brand.** At chroma 0.09 the blue barely separates from the gray text — on buttons it works, but as eyebrow pills, icon tints (`text-primary` on `bg-primary/10`), and link hovers it's so soft it reads as "default UI blue," not "Multimedium." A brand color should be recognizable in a 1cm swatch. This one isn't.

The accent is also **used in only one register**: small tints and the button fill. It never floods a section, never appears as a large confident field of color, never does anything bold. So even the one color you have is whispering.

### Neutral / background usage
- The **warm cream background is the single best brand decision on the site** — it's softer and more premium than the default white most templates ship with. Protect it.
- **But it's actively undermined by hardcoded `bg-white`** (pure white `#fff`), used **9×** (e.g. `app/page.tsx:155,218,316,330`, `app/services/page.tsx:179`, `app/tools/page.tsx:88`). Pure-white sections sit *colder* than the warm body and break the paper feel. These should use a token (`surface-1`/`surface-2`), not raw white.
- One section is a **hardcoded `bg-[#111827]`** dark slate (`app/page.tsx:256`). It's the only real contrast moment on the homepage — good instinct — but it's an untokenized one-off that doesn't match the actual dark-theme token (`oklch(0.14 0.012 255)`), so the "dark" identity is improvised.

### Text color & contrast
**Too much gray.** The default for body text is `text-muted-foreground` everywhere — paragraphs, list items, captions, footer links, card descriptions. `--foreground` itself is already a soft slate, not black. The result: the whole page sits in a narrow tonal band between light gray and medium gray. Headings don't punch because the body around them isn't quiet enough to contrast against. This is the single biggest reason the site feels "soft" rather than "premium."

### Is the palette distinctive?
**No.** Warm cream + muted blue + gray + soft shadows is the house style of about half of all modern service/SaaS sites. It is tasteful and it is generic. A designer's own site should pass the "screenshot test": if you put it in a lineup of ten agency sites, could a stranger pick it out? Currently, no.

### Token inconsistencies / hardcoded colors
- `bg-white` ×9 (should be a surface token).
- `bg-[#111827]` (homepage dark section) and `text-[#2a2d3a]` (`app/mytcacademy/flyer/page.tsx:59`) — raw hex, not tokens.
- `.text-gradient` is a **lie**: it's defined as flat `color: var(--primary)` (`globals.css:309`) yet named "gradient" and used **13×**. Either make it a real gradient or rename it `.text-accent`.
- **Dual brand color:** light primary = blue, dark primary = gold. Since dark mode is never activated (no theme provider/toggle exists), the gold identity is invisible dead code — but it reveals indecision.
- The full `--neutral-50…950` ramp (both light and dark) has **0 usages** in app/components. Dead.
- `--chart-1…5` (both modes) have **0 usages.** Dead (shadcn leftovers).
- `var(--glow)` is referenced in `components/work/ProjectCard.tsx:159` but **never defined** — a broken color fallback.

### Recommendation: a stronger color direction
**Commit to one ownable signature and stop hedging.** Two viable directions; pick one:

**Direction A — "Paper, Ink & Ochre" (recommended).** Keep the warm cream paper. Push `--foreground` to a near-black warm ink (e.g. `oklch(0.22 0.02 60)`) so body text is confident. Make the **signature accent the warm amber/ochre that's already latent** in the body gradients and the dark-mode primary — but at real chroma (e.g. `oklch(0.70 0.15 70)`). This *resolves the blue-vs-gold split in favor of the warmer, more ownable, less-"SaaS" option*, and ochre-on-cream reads premium and editorial (think good stationery / a well-set financial document — perfectly on-theme for TCs and real-estate trust). Reserve a deep ink-navy or oxblood as a rare secondary for dark flooded sections.

**Direction B — "Confident Blue."** If the blue equity matters, keep blue but **double the chroma** (≈`oklch(0.50 0.18 250)`) so it's a real brand blue, pair it with the warm cream (warm/cool tension is good), and add **one** secondary signature (warm amber) used sparingly. Drop the muted gray-blue everywhere else.

Either way: (1) one signature color, used both as small accent *and* as at least one large confident field per page; (2) near-black ink for primary text; (3) gray reserved for genuinely secondary text only; (4) delete the dead neutral/chart ramps and the gold/blue split.

---

## 3. Typography Audit

### Font pairing
The pairing is **good on paper and underused in practice.** Fraunces (high-contrast display serif with optical-sizing + SOFT/WONK axes — characterful and premium) + Space Grotesk (geometric, slightly quirky grotesque) + JetBrains Mono is a genuinely tasteful trio. The problem is execution, not selection.

### Fraunces usage
Fraunces is wired to all headings via `globals.css:205-224` (`h1–h4 { font-family: var(--font-brand-display) }`), but it is always rendered as `font-bold tracking-tight` — i.e. as a **generic bold serif.** None of the things that make Fraunces *Fraunces* are used:
- **No italic.** Fraunces' italic is gorgeous and is the obvious tool for pull-quotes and emphasis. The one italic on the site is the homepage testimonial.
- **No optical-size display moment.** At hero sizes Fraunces should be allowed to show its high contrast and fine details; instead it's bolded and tightened into submission.
- **The `font-display` utility is used exactly once** in the entire app (`app/page.tsx:318`, the testimonial). So the display font is essentially being used by accident (via the global h-rule) rather than as an intentional device.

Fraunces is doing maybe 30% of the work it could. It should be the **face of the brand.**

### Space Grotesk usage
Fine but invisible — it's the body/`font-sans` default and renders as competent neutral sans. It has more personality than it's being allowed (its alternate characters, wider tracking at small sizes for labels). Acceptable as-is, but it's carrying the whole site while the more interesting fonts sit idle.

### JetBrains Mono usage
Loaded, then used **4 times** (`font-mono` on a couple of timeline labels). A mono face is one of the cheapest ways to get an editorial, "designed-by-someone" feel — metadata, kicker labels, numbers, prices, step indices. It's being wasted.

### Type scale & heading hierarchy
- Heroes scale well (`text-4xl … lg:text-7xl`). Good.
- But below the hero, **headings collapse into a narrow band**: section H2s are almost all `text-2xl/3xl md:text-3xl/4xl`, sub-heads `text-lg/xl`, body `text-sm/base`. The jump from H2 → body is small, and *most body is the small `text-sm` muted gray.* So after the hero, the page is tonally and typographically flat.
- Eyebrows are monotonous: `text-xs uppercase tracking-wider text-muted-foreground` on nearly every section. Consistent, yes — but it's the same gray whisper introducing every block.

### Body text readability / overuse of gray
Covered in §2, but typographically: primary reading copy should be near-black at a comfortable size. Right now it's medium-gray `text-muted-foreground` at `text-sm`/`text-base`. It's *readable* but it never feels authoritative. **Reserve gray for captions and metadata; make real paragraphs dark.**

### Opportunities for more editorial / premium typography
1. **Make Fraunces the hero of the whole site, not just the hero section.** Big display H2s in Fraunces, occasional **Fraunces italic** for emphasis words and pull-quotes.
2. **Build a mono label system** for kickers, prices, step numbers, metadata (e.g. `01 / PROCESS` in JetBrains Mono) — replaces the gray uppercase eyebrow and instantly reads "designed."
3. **Widen the scale.** Introduce a true display tier (clamp to ~`text-6xl/7xl`) for section openers on key pages, and let quiet sections have *one* big sentence instead of a heading+grid.
4. **Darken and slightly enlarge body copy**; tighten measure (`max-w-prose`) for long passages.
5. Use **drop-the-eyebrow** moments: sometimes a section should open with a huge Fraunces statement and nothing else.

---

## 4. Layout & Spacing Audit

### Page rhythm
Every page is the **same instrument played at the same tempo**: a stack of centered `max-w-6xl` (`components/sections/Section.tsx`) sections, each = left-aligned heading + supporting line + a grid of cards. Home, Services, TC Packages, Industries, Tools, About all share this skeleton. Predictability is good for usability and *bad* for a design portfolio, because there's no surprise, no crescendo, no quiet-then-loud.

### Section spacing
Spacing values themselves are fine (`py-12 … lg:py-20`, `large` variant `lg:py-28`). The issue isn't the amount of space, it's that **the spacing is uniform** — every section breathes identically, so nothing feels emphasized. Premium editorial layouts vary density deliberately: a huge airy statement, then a dense data block.

### Grid usage
Almost everything is a symmetrical 2/3/4-up card grid. There is no:
- full-bleed / edge-to-edge section,
- asymmetric editorial split (e.g. 1/3 sticky label + 2/3 content),
- intentional overlap or offset,
- oversized index/contents moment,
- horizontal-scroll or stepped layout.

### Repetition & density
- `rounded-2xl border border-border/60 bg-card` ×105.
- Icon-square pattern (`w-10/11 h-10/11 rounded-lg/xl border bg-muted/50 text-primary`) ×34.
- Inline-duplicated eyebrow pill (`bg-primary/10 text-primary border border-primary/30`) ×16 — even though a `.eyebrow-pill` utility *exists* and is used **0 times.**
- Single elevation: `shadow-soft` ×109 vs `shadow-elevated` ×1 → everything floats at the same height, so nothing feels primary.

### Too safe / templated?
**Yes — decisively.** This is the layout vocabulary of a careful template build. It's safe, and safety is the enemy of a designer's storefront.

### Opportunities for stronger visual storytelling
- Introduce **2–3 reusable "editorial" section templates** to break the card monotony: (a) a **ruled list / ledger** template (hairline dividers, big mono numbers, no boxes) for value props, process, "great fit," what's-included; (b) an **asymmetric statement spread** (sticky kicker + large Fraunces statement + supporting column); (c) a **full-bleed flooded-color or dark** template for contrast/CTA.
- Add **one signature recurring motif** (see §9) so pages feel authored, not assembled.
- Choreograph at least the homepage as quiet → dense → quiet → dark → quiet, instead of even-tempo cards throughout.

---

## 5. Component & UI Audit

### Cards — *the core problem*
There is effectively **one card** reused everywhere: `rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6/7/8`. It's used for value props, packages, FAQs, CTAs, stats, snapshots, process steps, "great fit," add-ons. When everything is a card, the card stops meaning anything.
- **Stop using cards for:** value props (About `values`), "great fit / best results" lists (Services), process steps (HowItWorks), "what's included" grids, case-study Goals/Constraints/Delivered, FAQ. These should become **ruled lists, numbered editorial rows, or inline definitions.**
- **Keep cards for:** genuinely card-like objects — **project thumbnails** and **pricing tiers** — where a contained, comparable object is the right metaphor. Even there, give them more art direction (see below).
- The shadcn `Card` component (`components/ui/card.tsx`) is **imported by 0 app files** — 105 cards are hand-rolled div strings while the "real" component rots unused. Either adopt 2–3 real card *variants* (e.g. `flat`, `elevated`, `feature`) or commit to the utility approach and build `.card-*` classes (note `.card-elevated` exists in CSS and is used 0×).

### Buttons — two systems, one of them dead
- The dominant system is CSS `.btn-primary` / `.btn-secondary` (pill, `border-radius: 999px`, gradient fill) — used across all pages.
- The shadcn `Button` (`rounded-lg`, `h-8`, small) is imported in only **3 files** (forms). So there are two visual button languages; pages use pills, forms use small rounded rects.
- On the TC pricing cards the two collide: `className={... pkg.featured ? "btn-primary" : "btn-secondary"}` is layered with `rounded-lg px-4 py-2.5` (`app/tc-packages/page.tsx:393-397`), so utility classes fight the `.btn-*` rules (pill radius vs `rounded-lg`, custom padding vs `.btn` padding). **Unify on one button system.**

### Navigation
Competent and standard. The pill-in-pill nav (logo + segmented nav pill + "Book a call" pill) is a familiar 2023–2024 pattern; the animated active indicator (`layoutId`) is a nice touch. It reads as "good template nav." Fine to keep; consider letting the logo wordmark carry more brand (Fraunces, not the current `font-semibold` sans).

### Footer
Generic 4-column link farm where **every link is `text-muted-foreground`** → gray-on-cream, very low contrast, visually inert. It's the least-designed surface on the site. Opportunity: a footer is a free branding moment — big Fraunces wordmark, a real sign-off line, mono metadata (location, "taking 2 projects / month"), stronger contrast.

### Project cards
The most *designed* card (browser-chrome dots, 16/10 image, hover lift, year/role meta, concept badge). Good instinct. But: the three gray "browser dots" appear on **every** card identically and become noise; the card is image-led which is right, but the images are shown small in a grid. **For a design portfolio, the work should be hero-sized, not thumbnail-sized.** Consider a featured/large variant and far bigger screenshots.

### Pricing / package cards
Standard SaaS 4-up with a `ring-1 ring-primary/20` "Most popular." Competent and clear; not distinctive. The comparison table below it (`tc-packages`) is actually one of the **better, more differentiated** layouts on the site — more of that kind of structured, non-card content is the direction.

### FAQ sections
`<details>` with a `+` text glyph that doesn't rotate or animate to `×`/`−` (`tc-packages.tsx:686`). Functional, plain. Minor, but a rotating line-icon and a hairline-divider list (instead of stacked cards) would feel more crafted.

### CTA sections
The "Ready for a website that brings in better leads?" centered-card CTA is **near-identical on Home, About, Services, Work, and TC Packages.** Same box, same centered heading, same two buttons. This repetition makes the site feel looped. Vary them — at least one should be a full-bleed flooded-color statement.

### Icon treatments
The **icon-square** (`inline-flex w-11 h-11 rounded-xl border bg-muted/50 text-primary`) is the quintessential "tasteful AI template" tell, repeated 34×. Options: drop icons entirely in favor of big mono numerals; or use a single hairline line-icon *inline* with the heading; or keep icons but make them larger, unboxed, and in the signature color.

### Empty states / awkward gaps
- Testimonial section renders only if a real testimonial exists (`getBestTestimonial()` returns null) — so on the live site that whole section silently disappears, which can leave a rhythm gap between "Two ways to find the right fit" and the CTA. Not wrong (it's honest), but the layout should be designed to *not need* it rather than have a hole where proof goes.
- `ProjectCardCompact` references the undefined `var(--glow)` — its fallback gradient is broken if an image ever fails.

### Which components to redesign or diversify
1. **Cards → split into 3 intentional variants + introduce non-card list/row templates** (highest impact).
2. **CTA section → 2–3 variants**, one full-bleed.
3. **Buttons → unify to one system.**
4. **Icon-squares → replace with numerals or inline line-icons.**
5. **Footer → rebrand.**
6. **ProjectCard → add a large/featured image-led variant.**

---

## 6. Page-by-Page Visual Audit

### Homepage (`app/page.tsx`)
Best page, because the hero has an idea. After the hero it becomes a card parade: niche cards → project cards → package teaser cards → (good) dark slate statement → service path cards → CTA card. The lone dark `#111827` section is the only contrast and proves the page *needs* more rhythm like it. Issues: `bg-white` sections fighting the cream; five different "grid of boxes"; the CTA repeats a pattern seen on four other pages. **Re-choreograph for quiet/dense/dark rhythm; cut card count ~40%.**

### About (`app/about/page.tsx`)
Hero is a bordered card (so even the page intro is a box). Values are three icon-square cards; "How I work" is a muted box with primary-dot bullets; toolbox is pill tags; CTA is another card. It's pleasant and entirely templated. This page is a chance for **personality and authorship** (it's literally about the designer) and currently has none of the warmth a Fraunces-led editorial layout would give. **Biggest gap between intent and execution.**

### Services (`app/services/page.tsx`)
Hero card + 3 stat boxes, then "Great fit / Best results" twin cards with primary-dot bullets, then a niche-links card, then `bg-white` "two ways to work" path cards, then HowItWorks cards, then CTA card. Functional hub; visually it's seven variations of the same box. The **primary-dot bullet list** (`w-1.5 h-1.5 rounded-full bg-primary`) recurs here and on Home, About, and case studies — a tic worth replacing with hairline-ruled rows.

### Website service page (`app/services/website/page.tsx`)
Same template family (4 card occurrences of the core string). Not separately reviewed in depth — visually indistinguishable from the other service pages, which is itself the finding: **service pages aren't visually differentiated from each other.**

### Landing pages service page (`app/services/landing-pages/page.tsx`)
Same. 5 core-card occurrences. Same hero-card-then-grids skeleton.

### Growth retainers page (`app/services/growth-retainers/page.tsx`)
Same. 5 core-card occurrences. Same skeleton.

> The three service detail pages, the six industry pages, and the resources pages all share one template. Consistency is fine; **visual sameness across 12+ pages is the issue.** They should share *structure* but vary *texture* (different opening device, different signature section per category).

### Work / portfolio (`app/work/page.tsx`)
Hero is again a bordered card. Then 3 stacked card grids (client / products / concept). For the **portfolio of a web designer, this is the page that must dazzle**, and it's a tidy thumbnail grid. Screenshots are small; there's no large featured piece, no "open" full-bleed showcase. **Make the work big.** This page should arguably break the `max-w-6xl` container.

### Individual project pages (`app/work/[slug]/page.tsx`)
The most content-rich template and the most box-heavy: meta header, hero image (good — large 16/9), summary card, jump-link pills, Challenge/Solution columns, Snapshot cards (Goals/Constraints), Deliverables cards, process. The hero image is the right instinct; everything around it is the same `bg-card` box with primary-dot bullets and centered `text-3xl` headings. **Case studies should read like an editorial spread** (big imagery, pull-quotes in Fraunces italic, ruled metadata) — they're currently a stack of boxes around one image.

### Contact (`app/contact/page.tsx`)
Hero card + form-in-a-card (left) + expectations (right). Form uses `.form-control` utilities — clean, standard. Labels and helper text are gray. It's a perfectly fine contact form; it's also indistinguishable from any shadcn contact form. Low priority to redesign, but it could carry one brand moment (a Fraunces line, the signature color on the submit).

### TC Packages (`app/tc-packages/page.tsx`)
The most important commercial page and the **clearest showcase of the repetition problem**: 6 core-card occurrences, 6 inline eyebrow pills, icon-squares, two `from-primary/8` gradient overlays reused for the same faint effect, the FAQ `+` boxes, and a final CTA card. The **comparison table is the bright spot** — it's structured, scannable, and not a card, and it points at the right direction. The pricing cards are clear but generic SaaS. This page would benefit most from the ruled-list + flooded-CTA + mono-label treatment.

### Industry pages (`app/industries/*`)
Six pages (`transaction-coordinators`, `real-estate-professionals`, `real-estate-coaches`, `home-services`, `homeowners-associations`, `trades`) on one template: hero card with a `text-gradient` second line + a stat/expectations side panel, then alternating card grids and FAQ. `home-services` alone has 10 core-card occurrences and 6 icon-squares — it's almost entirely boxes. Visually interchangeable; only the copy changes. **Give each industry vertical one distinct visual texture** (or at least vary the hero device) so they don't feel like the same page reskinned.

### Resources / tools pages (`app/resources/*`, `app/tools/page.tsx`)
Tools page reuses ProjectCards + a `bg-white` split section. Resources pages (cover sheet, intake checklist, task list, "what every TC website needs") use the same card template (3–4 core-card occurrences each) plus print styles. Functional. These are lead-magnet/utility pages — fine to keep simpler — but they currently inherit every visual tic of the marketing pages.

---

## 7. Visual Design System Audit

### Token discipline
**Good intentions, partial follow-through.** The OKLCH token set is well-structured and surface/border/foreground tokens are mostly respected — *except* for the `bg-white` ×9 and the `#111827` / `#2a2d3a` raw hexes, which bypass the system at exactly the moments (backgrounds, a dark section) where tokens matter most.

### Reusable style patterns
The repeated patterns live as **copy-pasted utility strings**, not as components or `@apply` classes. So "the card," "the icon square," and "the eyebrow pill" exist conceptually but not as reusable primitives — which is why they drift (e.g. `border-border/60` vs `/70`, `rounded-xl` vs `rounded-2xl`, `w-10` vs `w-11`). The system *describes* these patterns (there are CSS utilities for several) but the code doesn't *use* them.

### Hardcoded color issues
- `bg-white` ×9 → should be `bg-[var(--surface-1)]` or a `bg-surface-1` token.
- `bg-[#111827]`, `text-[#2a2d3a]` → tokenize.
- `.text-gradient` = flat color (misnamed), ×13.

### Dead / unused theme code
Substantial. Candidates for deletion or activation:
| Item | Usages in app/components | Status |
|---|---|---|
| `--neutral-50…950` (light + dark) | 0 | Dead |
| `--chart-1…5` (light + dark) | 0 | Dead (shadcn leftover) |
| Entire `.dark` theme + gold primary | 0 (no theme toggle exists) | Dead/unreachable |
| `.glow-border` | 0 | Dead |
| `.glass` | 0 | Dead |
| `.card-elevated` | 0 | Dead (while 105 cards hand-roll it) |
| `.card-hover` | 0 | Dead |
| `.bg-hero-gradient` | 0 | Dead |
| `.eyebrow-pill` | 0 (inline-duplicated 16×) | Dead-but-needed |
| shadcn `Card`, `Badge`, `AlertDialog`, `Combobox`, `DropdownMenu`, `Select` | 0 imports | Dead |
| `var(--glow)` | referenced, **never defined** | Broken |

This is roughly a third of the theme layer carrying no weight. It makes the system look bigger and more mature than it behaves.

### Naming problems (classes that imply effects that aren't happening)
- **`.text-gradient`** → flat `var(--primary)`. No gradient. (`globals.css:308-311`)
- **`.tracking-tight`** → overridden to `letter-spacing: 0` (`globals.css:313-315`), i.e. "tight" actually means "normal." Confusing override of a Tailwind class.
- **`.card-hover` / `.card-elevated` / `.glass` / `.glow-border`** → named, styled, never applied; the real cards re-implement the effects inline.

### Opportunities to simplify & strengthen
1. **Delete** the neutral ramp, chart tokens, unused shadcn components, and the dead utilities. (Decide separately whether to *build* dark mode; if not, delete the `.dark` block too.)
2. **Promote the real patterns to primitives**: `Card` variants, `<Eyebrow>` / `<Label>` (mono), `<RuledList>`, `<SectionOpener>`, `<CTA>` variants. One source of truth each.
3. **Fix the naming lies** (`text-gradient`, `tracking-tight`) and the broken `--glow`.
4. **Add a second/third elevation step** and actually use it, so hierarchy exists.

---

## 8. Recommended Visual Direction

**Keep the structure; redesign the visual language; push toward a bolder, ownable identity — preserving all existing routes and content architecture.**

In the three-option framing you gave:
- *Keep current style and polish it* — **No.** Polishing makes a generic thing slightly shinier; it stays generic. The core issue (no point of view) survives a polish pass.
- *Keep structure, redesign visual language* — **Yes, this is the core recommendation.** Same routes, same IA, same content; new color commitment, new type expression, new section vocabulary, fewer cards.
- *Bolder new visual identity while preserving routes/content* — **Yes, lean into this within the above.** Don't just re-theme tokens; adopt a genuine creative direction (signature color + motif + editorial typography) so the site looks *authored*.

Net: **a confident re-skin with a design idea, not a rebuild and not a polish.** The token plumbing, components scaffolding, motion, and IA all survive. What changes is the *surface language*.

---

## 9. Proposed Creative Direction

**Working name: "Editorial Trust" — the warm, precise feel of a beautifully set document.**
This concept directly serves the brand promise ("websites that make it easy to trust you") and the audience (TCs, real-estate pros, coaches, professional services): it evokes good paperwork, signed contracts, and stationery — *credibility you can feel* — without being stiff.

### Color direction
- **Paper base:** keep the warm cream `--background`; eliminate raw `bg-white`.
- **Ink:** push primary text to a warm near-black (`oklch(0.22 0.02 60)`); demote gray to captions/metadata only.
- **One signature:** commit to **warm ochre/amber at real chroma** (≈`oklch(0.70 0.15 70)`) as *the* Multimedium color — resolving the current blue-vs-gold split toward the warmer, more ownable option. Use it small (labels, links, rules) *and* large (one flooded section per page).
- **One depth color:** a deep ink-navy or near-black for full-bleed contrast sections (tokenized, replacing `#111827`).
- (If the blue equity is non-negotiable, run Direction B from §2 instead — confident high-chroma blue + amber secondary — but still pick *one* primary.)

### Typography direction
- **Fraunces is the brand voice.** Large display H1/H2 in Fraunces with real optical sizing; **Fraunces italic** for emphasis words and pull-quotes.
- **JetBrains Mono becomes the label/metadata system**: kickers (`01 — PROCESS`), prices, step numbers, timelines, "Poconos, PA / 2 projects per month."
- **Space Grotesk** stays the workhorse body, now near-black and slightly larger, on a tighter measure.
- Retire the gray uppercase eyebrow as the default opener.

### Layout direction
- Replace "centered column of identical card grids" with a **kit of 4 section templates**: (1) **Statement** — big Fraunces sentence, lots of air; (2) **Ruled list / ledger** — hairline dividers + mono numerals, no boxes; (3) **Asymmetric spread** — sticky mono kicker + content; (4) **Flooded / dark full-bleed** — signature color or ink, for contrast & CTAs.
- Let key pages (Work, Home hero, case studies) **break the `max-w-6xl` container** for full-bleed imagery.

### Section rhythm
Deliberate dynamics per page: **quiet → dense → quiet → flooded → quiet.** Vary whitespace and elevation so something is always clearly primary. No more even-tempo card stacks.

### Component style
- Cards only for projects and pricing; everything else becomes ruled lists, numbered rows, or inline definitions.
- One unified pill-button system; one mono label component; one eyebrow component; 2–3 CTA variants.
- A real elevation scale (flat / raised / floating), used meaningfully.
- Icon-squares replaced by mono numerals or unboxed inline line-icons.

### Imagery, screenshots, proof blocks, editorial moments
- **Show the work big.** Large, art-directed browser screenshots — full-bleed where possible — are the single most persuasive thing a design site can do.
- **Pull-quotes** in Fraunces italic as recurring editorial punctuation.
- A **signature motif** to make pages feel authored — recommended: a thin **ruled "ledger line"** system (hairline rules with mono labels in the margin), which doubles as the list/row pattern and reinforces the paperwork/trust metaphor.

### What it should feel like to a visitor
*"This person clearly has taste and a point of view — if my site looked like this, people would take me seriously."* Warm, precise, confident, and quietly premium — like a well-designed document, not a SaaS dashboard. Calm where it should be calm, bold exactly where it counts.

---

## 10. Practical Redesign Plan

### Quick wins (hours — high impact, low risk)
1. **Darken body text:** swap default `text-muted-foreground` → `text-foreground` for real paragraphs/list items; push `--foreground` toward near-black ink. Keep gray for captions only.
2. **Commit the color:** raise primary chroma (or switch to ochre per §9), remove the light/dark blue-gold split, replace `bg-white` ×9 with a surface token, tokenize `#111827` / `#2a2d3a`.
3. **Fix the naming lies & breakage:** make `.text-gradient` a real gradient *or* rename to `.text-accent`; remove the `.tracking-tight` override; define or remove `var(--glow)`.
4. **Delete dead theme code:** neutral ramp, chart tokens, unused shadcn components, `.glow-border`/`.glass`/`.card-hover`/`.bg-hero-gradient` (decide on `.dark` separately).
5. **Unify buttons** on one system; fix the conflicting button classes on TC pricing cards.
6. **Add a second elevation step** and use it on featured cards / floating elements.
7. **Introduce one mono label** in place of the gray uppercase eyebrow on 2–3 hero pages (instant "designed" signal).

### Medium-effort improvements (days)
8. **Build the section template kit** (Statement, Ruled-list, Asymmetric spread, Flooded full-bleed) as reusable components.
9. **Convert card-heavy content to ruled lists / numbered rows:** value props, "great fit," process, "what's included," case-study Goals/Constraints/Delivered, add-ons.
10. **Make Fraunces moments:** display section openers + Fraunces-italic pull-quotes; build the `<Label>`/`<Eyebrow>` mono components and the `.eyebrow-pill` (actually use it).
11. **Redesign the FAQ and CTA** (rotating line-icon, hairline list; 2–3 CTA variants incl. one flooded).
12. **Redesign ProjectCard** into an image-forward large/featured variant; enlarge screenshots.
13. **Rebrand the footer** (Fraunces wordmark, mono metadata, higher contrast).

### Larger visual redesign moves (weeks)
14. **Page-by-page re-skin** using the new templates, choreographed for rhythm — start with **Home → Work → TC Packages → About**, then service/industry pages.
15. **Art-direct the Work and case-study pages** around large, full-bleed screenshots and editorial spreads (this is the portfolio's whole job).
16. **Introduce the signature motif** (ledger-line system) consistently.
17. **Differentiate the service/industry templates** so 12+ near-identical pages get distinct textures.
18. Decide deliberately whether to **build (and toggle) dark mode** or delete it — don't leave it half-alive.

### Not worth spending time on yet
- Building out the unused **dark theme / chart system / theme switcher** before the light identity is decided.
- **Bespoke illustration or custom iconography** — premature; typography + color + layout will carry the redesign.
- **Heavier motion / scroll choreography** beyond the tasteful baseline already present.
- **Micro-polishing the contact form / resources pages** — they're fine; fix them last.
- A **logo redesign** — the wordmark is adequate; let the type/color system do the branding first.

---

### Appendix — Evidence quick-reference
- Core card string `rounded-2xl border border-border/60 bg-card`: **105×** across 24 files.
- Icon-square pattern: **34×** across 15 files.
- Inline eyebrow pill (while `.eyebrow-pill` utility used 0×): **16×**.
- `bg-white` (hardcoded): **9×**. `bg-[#111827]`: 1×. `text-[#2a2d3a]`: 1×.
- `.text-gradient` (flat color, misnamed): **13×**. `font-display` utility: **1×**. `font-mono`: **4×**.
- `shadow-soft`: **109×** vs `shadow-elevated`: **1×** (single elevation).
- Dead tokens/utilities/components: `--neutral-*`, `--chart-*`, `.glow-border`, `.glass`, `.card-elevated`, `.card-hover`, `.bg-hero-gradient`, shadcn `Card/Badge/AlertDialog/Combobox/DropdownMenu/Select` — all 0 usages; `var(--glow)` referenced but undefined; full `.dark` theme unreachable (no toggle).
- Primary chroma: **0.09** (very desaturated). Light primary = blue (h244); dark primary = gold (h78).
