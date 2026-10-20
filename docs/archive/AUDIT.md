# Portfolio Audit — March 2026

## 1. Badge/Label Overload

**ProjectCard** (`components/work/ProjectCard.tsx`) has 6-7 distinct metadata elements per card:
- Kind badge ("Client") overlaid on image
- Category badge ("Web Design") overlaid on image
- Year badge overlaid on image
- Up to 3 tag pills below the title ("Web Design", "Motion Design", "React")
- Role text in footer
- "View project details" link in footer
- "Live preview available" below footer

The tags largely duplicate the category badge. "Web Design" appears as both a category overlay AND a tag pill on the same card.

**Case study detail hero** (`app/work/[slug]/page.tsx:127-143`) stacks category badge + year + up to 4 tag pills all on one line, then a 4-column metadata grid below.

**Eyebrow pills on every single section** — this is the most recognizable "AI template" pattern. Almost every section opens with a small rounded pill: "Specialty lanes", "Selected work", "What I build", "Browse work", "Spotlight", "Services", "About", "How I work", "Industry focus", "Contact", "Studio promise", "System snapshot", "Step 1/2/3/4". A real designer uses these sparingly, maybe once per page. Currently there are 3-4 per page.

### Fix
- Strip badges from ProjectCard. Remove kind badge, remove tag pills entirely. Keep only a subtle year somewhere and let the title/tagline/image speak for the project.
- On case study detail pages, remove the row of tag pills from the hero. The category and year can live in the metadata grid below.
- Remove eyebrow pills from most sections. Use them max once per page, and only when the label genuinely helps the visitor orient (not as decoration).

---

## 2. Card-in-Card-in-Card Nesting

The hero (`components/hero/StatementHero.tsx`) has: outer card container > photo card > gradient overlay card > "Haydn" info card > PLUS a separate "Studio promise" card below. That's 4 levels of nested bordered/rounded containers in one component.

The services page hero has stat cards nested inside the hero card. The website service page has expectation cards nested inside a card nested inside the hero.

### Fix
- Flatten the hero. Show the photo cleanly without wrapping it in multiple card layers. Remove the "Studio promise" sub-card entirely.
- On service pages, pull the stat/expectation info out of nested cards. Either integrate it into the hero text or show it as a simple list.

---

## 3. Copy Issues

### Repetitive vocabulary across the entire site
- "conversion-focused" / "conversion-first" — appears on nearly every page
- "earn trust" / "builds trust" / "trust-first" / "high-trust" — on every page
- "qualified inquiries" — on most pages
- "make reaching out feel like the obvious next step" — appears twice verbatim
- "I'll reply within one business day" — 3+ times

### Same CTA everywhere
"Talk about your project" is used on every single page, in the navbar, the footer, the mobile sticky CTA, and every page-level CTA section. It stops registering after the first time.

### Jargon that prospects don't use
"authority-first messaging", "conversion-first approach", "proof signals", "lead flows", "portal-ready workflows". Prospects are small business owners — they say "I need a better website" not "I need authority-first messaging."

### Over-qualification
The "Great fit if" / "Best results when" paired cards appear on the services index AND all three service detail pages. This pattern of qualifying/disqualifying yourself repeatedly reads as insecure, not confident. One mention is strategic; four is anxious.

### Fix
- Vary the CTA copy across pages. "Talk about your project" on the homepage, something different on services, something different on case studies, etc.
- Replace jargon with plain language throughout. Write copy the way a prospect would describe their problem.
- Reduce repetition of "conversion-focused", "trust", "qualified inquiries" — find different ways to express these ideas on different pages.
- Remove "Great fit if" / "Best results when" from service detail pages. Keep one instance on the services index page if needed.

---

## 4. Homepage Structural Bloat

The homepage has 8 sections: Hero > Proof Points > Specialties > Featured Work > What I Build > Services > How It Works > CTA. That's too many for a portfolio homepage.

**"What I Build" section** (`app/page.tsx:221-289`) includes implementation details like "Page templates", "Reusable CTA bands", "Proof + trust blocks", "Client portal workflows." Prospects don't care about a section library.

**Proof points overlapping hero** (`-mt-8 / -mt-10 / -mt-12` pattern) with "X client projects", "4-6 weeks", "3 industries" — this overlapping stat bar is one of the most recognizable AI-template patterns.

**Services are shown twice:** The homepage services section and the /services page show the same 3 services with similar copy.

### Fix
- Cut homepage to ~5 sections: Hero, Featured Work, Services (condensed to a simple link-list or brief cards without feature bullets), a testimonial, CTA.
- Remove the proof-points overlap bar entirely.
- Remove the "What I Build" section entirely.
- Remove or significantly condense the "Specialties" section — the industries can be discovered through navigation.
- On the homepage, services should be a brief mention with links, not full cards with feature lists and timelines. Save the detail for /services.

---

## 5. Every Page Follows the Same Template

The identical section rhythm across every page: hero card with gradient + grain > eyebrow pill > h2 > subtitle > 3-column card grid > muted background section > CTA section with card.

Individual service pages (`services/website`, `services/landing-pages`, `services/growth-retainers`) are near-identical: same hero layout, same 3 value prop cards, same "What's included" checklist grid, same "Great fit for" / "Best results when" paired cards, same featured work grid, same timeline/budget side-by-side, same FAQ grid, same bottom CTA.

### Fix
- Differentiate the service detail pages visually. They don't all need the same section structure.
- Vary section backgrounds, layouts, and rhythms between pages so the site feels intentionally designed rather than generated from a template.
- Not every page needs a grain overlay, a gradient background, and a rounded card hero. Use these selectively.

---

## 6. Missing Elements That Matter for a Design Portfolio

- No testimonials on the homepage. They're buried in individual case studies. A single strong quote on the homepage does more for trust than all those proof-point cards.
- No visible design process or personality. The About page is functional but generic.
- The hero photo is over-designed with 3 layers of UI wrapping it. A confident portfolio shows a clean photo.

### Fix
- Add one strong testimonial to the homepage (pull the best one from project data).
- Simplify the hero photo presentation.

---

## 7. What's Actually Good (Don't Break These)

- Technical foundation: Next.js App Router, good SEO setup, structured data, accessibility, reduced-motion support
- Color system and typography choices (Fraunces + Space Grotesk)
- Contact form with progressive disclosure
- Button design and hover states
- Dark mode implementation
- Scroll-triggered animations (tasteful when not overused)
- The underlying content/case study data structure is solid

---

## Summary of All Files That Need Changes

### High priority
- `components/work/ProjectCard.tsx` — strip badges and tags
- `components/hero/StatementHero.tsx` — flatten card nesting, simplify
- `app/page.tsx` — cut sections, remove proof bar, remove "What I Build", condense services
- `app/work/page.tsx` — remove eyebrow pills, reduce visual noise
- `app/work/[slug]/page.tsx` — strip tag pills from hero, reduce metadata clutter

### Medium priority
- `app/services/page.tsx` — remove over-qualification, simplify
- `app/services/website/page.tsx` — differentiate, reduce template feel
- `app/services/landing-pages/page.tsx` — differentiate, reduce template feel
- `app/services/growth-retainers/page.tsx` — differentiate, reduce template feel
- `app/about/page.tsx` — remove eyebrow pills, add personality
- `app/industries/page.tsx` — remove eyebrow pills
- `app/contact/page.tsx` — remove eyebrow pill
- `components/nav/Navbar.tsx` — vary CTA text if needed
- `components/footer/Footer.tsx` — minor copy cleanup
- `components/marketing/HowItWorks.tsx` — remove step numbering pills if over-labeled

### Copy pass (all pages)
- Replace jargon with plain language
- Vary CTAs across pages
- Reduce repetition of "conversion-focused", "trust", "qualified inquiries"
- Cut "Great fit if" / "Best results when" to one instance sitewide
