# Multimedium — Credibility Review & Implementation Plan

**Date:** 2026-10-20
**Subject:** https://www.multimedium.dev (live) and this repository at `06bffd2` (identical to `main`)
**Goal:** Make Multimedium read as a professional, credible business that real estate professionals — transaction coordinators (TCs), agents, teams, and brokerages — would confidently hire.
**Status:** Review and plan only. Nothing in the site has been changed.

Finding labels used throughout:

- **Defect**: observed and reproducible.
- **Hypothesis**: reasoned from evidence, but not measured.
- **Judgment**: a creative or strategic call.

Priority: **P0** fix before anything else (credibility risk) · **P1** core of the redesign · **P2** worthwhile follow-up.
Effort: **S** under half a day · **M** 1–3 days · **L** 4+ days.

---

## 0. Executive summary

The site is technically sound. It is fast (desktop LCP ≈ 0.5 s; throttled mobile LCP ≈ 1.0–1.7 s), axe-clean on every main page, keyboard-navigable, and visually calm. The problems are about **strategy and proof**, not engineering:

1. **The homepage has drifted away from real estate.** The September revamp replaced a real estate / TC position with "Good businesses deserve better websites." Real estate is now a secondary "specialty" section halfway down the page. Agents and brokerages are never named on the homepage, and the agents page can only be reached through the footer → "Who I work with" → a card.
2. **The TC demo sites hurt credibility more than they help.** The Pro demo shows fabricated stats ("500+ transactions", "15+ states") and six testimonials from invented named people, all on multimedium.dev. Its hero is visibly broken, with an image card that collapses into a large empty panel. All of the demos use grey placeholder logos and stock photos, which contradicts "custom."
3. **There are two parallel pricing systems with the same prices.** One-page $750 / Full $1,500 / $3,000+ appears on Services, and TC Starter $750 / Growth $1,500 / Pro $3,000+ appears on TC Packages. The package bullets are vague ("A custom page plan and deeper visual direction"). A buyer can't tell how many pages they get, how long it takes, who writes the copy, or how many revisions are included.
4. **Proof is thin, and the best credibility asset is hidden.** There are four real client projects, no testimonials, and no rendered outcomes. Case studies use the same template headings on every page ("A site built around the business.") and captions like "Website detail / 01". The most persuasive true fact in the repo is that your mom has been a TC since 2013 and that you build TC software (Norma, UtilitySheet). Today that fact appears only on two resource pages.
5. **The site is too big for the business behind it.** It has 6 industry pages (3 with no relevant work), 3 service subpages, a design Lab of fictional concepts, a Products page, personal projects, and 4 static demo sites. That makes 49 public routes for a solo practice with four client projects. Breadth makes a specialist look like a generalist.
6. **The repo contains conflicting strategy documents from earlier rebuilds.** These include `AUDIT.md`, `SEO_AUDIT.md`, `kimi-tc-packages.md`, `tc-packages-codex-brief.md`, `TASK-design-cleanup.md`, and `ai-business-context.md`, which has outdated hosting terms. They partly explain the inconsistency: each AI pass read a different "truth."

**Recommendation:** Make targeted improvements, not a rebuild. Keep the stack, the visual foundation, the form, and the data model. Reposition around real estate professionals with TCs first, shrink the site to about 8 public pages, merge the two pricing systems into one, remove the demos, and turn the four real projects into proper case studies.

---

## 1. What the business needs to communicate

### 1.1 What the site communicates vs. what I infer

| Question | What the live site actually says | What I infer (from repo docs, data, and context) |
|---|---|---|
| What is offered? | Custom websites ($1,500+), one-page sites ($750+), hosting & support ($59/mo), and TC packages at the same prices. | A solo design + development practice. It also has software products (Norma, UtilitySheet, Client Portal) that show technical depth. |
| Who is it for? | "Small & service businesses" (home `<title>`, meta, hero). Real estate is described as "a specialty." | The revenue focus is TCs, through referral partners (My TC Academy) and Facebook groups (`content/marketing/facebook/`). Agents, teams, and brokerages are aspirational, and there is no client work for them yet. |
| What problems does it solve? | Generic problems: "look the part," "easier for the right customers to get in touch." | For TCs: agents don't understand what you handle or how to start a file, and intake runs through scattered emails and texts. For agents: a brokerage template site that doesn't differentiate. |
| Why Multimedium? | "One person. Every step." "Direct access to your designer." | Insider knowledge of TC work (family background + software built for TCs), one accountable person, fast custom code, and transparent starting prices. |
| What should a visitor do next? | "Start a project" → `/contact` (clear and consistent). | Same. A booking link and phone number exist in config/context but aren't shown on the site. |
| Remaining doubts | See §1.2. | |

### 1.2 Doubts a prospective real estate client would still have

- "Has he built a site for an agent or team like mine?" **No such work is shown.**
- "Can my site show listings (IDX/MLS)?" **The site never mentions it.** For agents this is often the first question.
- "What exactly do I get for $1,500? How many pages? Who writes it? How long does it take? How many revisions?" **Not stated on the site.**
- "Do I own the site if I stop paying $59/month?" **Not stated.**
- "Can I trust a solo person to be around after launch?" This is partly answered, but there are no client quotes to back it.
- "Is that demo testimonial real?" **The demos plant this doubt.**

### 1.3 Why the positioning is unclear

The latest revamp (`6371dd3`, "Revamp portfolio website design and content") moved to a generalist frame. The homepage's second section is titled "Different businesses. The same care." It features a wellness retreat (Blissful Existence) beside a TC company. Meanwhile the title, meta keywords, and OG alt still target "real estate web design and transaction coordinator websites." The metadata and the message now disagree.

### 1.4 Recommended direction (grounded in what exists)

> **Multimedium designs and builds websites for real estate professionals, starting with transaction coordinators and the agents and teams they work with. Every site is built by one person, Haydn, who grew up around TC work and builds software for TCs, so your site explains your services the way agents think about them and makes it simple to hire you or start a file.**

Everything in that statement is supported by facts already in the repo. The family background is on `/resources/tc-task-list` and in `/resources/what-every-tc-website-needs`. The software is real and live (normatc.com, utilitysheet.com).

---

## 2. Inventory of what was reviewed

**Method:** I crawled the live site with headless Chromium. Each route was loaded at 1440×900 and 390×844, with the full page scrolled, screenshots captured, and metadata, headings, links, console errors, and failed requests recorded. I ran axe-core (WCAG 2 A/AA) on 8 key pages, checked keyboard tab order on the homepage, and measured LCP/CLS/transfer size with the Performance API (mobile runs throttled to ~1.6 Mbps / 150 ms latency). I tested the demo links and the `/work?industry=tc` filter by clicking them. I read the code for every page and component and checked import usage.

### 2.1 Routes reviewed (all returned 200 unless noted)

| Group | Routes | Indexable? |
|---|---|---|
| Core | `/`, `/work`, `/services`, `/about`, `/contact`, `/tc-packages` | Yes |
| Service subpages | `/services/website`, `/services/landing-pages`, `/services/growth-retainers` | Yes |
| Industries | `/industries`, `…/real-estate-professionals`, `…/transaction-coordinators`, `…/real-estate-coaches`, `…/trades`, `…/home-services`, `…/homeowners-associations` | Yes |
| Secondary sections | `/lab`, `/tools` | Yes |
| Resources | `/resources` + `tc-task-list`, `tc-cover-sheet`, `tc-intake-checklist`, `what-every-tc-website-needs` (3 PDFs) | Yes |
| Client case studies | `/work/pa-real-estate-support`, `/work/tag-landing-page`, `/work/three-penn-properties`, `/work/blissful-existence` | Yes |
| Product / concept / personal pages | `/work/{norma, norma-intake, utility-sheet, client-portal, nomad-gear, velvet-rose, gentlemans-blade, pop-playground, northpoint-realty, momentum-coaching, clarity-growth, peppers-portal, workout-tracker}` | noindex |
| Unlisted / utility | `/mytcacademy`, `/mytcacademy/flyer`, `/review`, `/contact/thanks` | noindex |
| Legacy | `/lp/real-estate` (308 → `/industries/real-estate-professionals`) | — |
| Demos (static HTML in `public/demos`) | `/demos/starter`, `/demos/growth` (+ services, careers, submit), `/demos/pro` (+ services, about, testimonials, submit, careers), `/demos/presence` (**orphan**: no longer linked from the packages) | noindex |
| Error | `/this-page-does-not-exist` → 404 | noindex |

That makes 49 routes, each viewed at two widths. External links were also checked: all four client sites respond. `parealestatesupport.com` now redirects to `poconotc.com`.

### 2.2 What I could not access or verify

- **Contact form submission.** I did not submit it, so I did not send you a real inquiry. I inspected the code and field labeling only, so email delivery, the Resend config, and the thank-you redirect are **untested**.
- **Analytics and Search Console.** I have no access to traffic, conversion, or indexing data. A web search for the domain returned nothing, which is inconclusive. Verify indexing in Google Search Console.
- **Whether `summittc.com`, `clearpathclosings.com`, and `apextc.co` belong to real businesses.** The connection failed from this environment. The demos use them for canonicals and `mailto:` links.
- **Client permission** to feature PA RESS, Three Penn, and Blissful Existence. Only TAG has an approval note in `content/projects.ts`.
- **Whether the PA RESS outcome numbers (+42% intake completion, +37% branded impressions) are real.** They are stored in `projects.ts` but not currently rendered.
- **Screen readers, Safari/iOS, Windows high-contrast mode, and a full Lighthouse run.** Not performed.
- Twice during the crawl, a static JS chunk returned 502 and briefly broke `/work/blissful-existence` and `/mytcacademy`. **It did not reproduce on retry**, so I am treating it as transient (it may have been this environment's network path). Watch Vercel logs before treating it as a defect.

---

## 3. Findings

### 3.1 Positioning & audience fit

| # | Where | Issue | Why it matters | Change | P / Effort / Type |
|---|---|---|---|---|---|
| A1 | Home hero (`app/page.tsx`) | H1 "Good businesses deserve better websites." No audience or industry is named. | A TC or agent can't tell in five seconds that this is for them. Any agency could use this headline. | Lead with real estate professionals (copy in §6.5). | P1 / S / Judgment |
| A2 | Home "Selected work" | "Different businesses. The same care." pairs TAG with a wellness retreat. | It signals "generalist" right after the hero, which undercuts specialist trust. | Show only real estate work on the homepage. Keep Blissful on `/work` lower down. | P1 / S / Judgment |
| A3 | Navigation (`components/nav/Navbar.tsx`) | Nav is Work · Services · About · TC websites. Agents, teams, and brokerages have no entry point. `/industries/real-estate-professionals` is reachable only through footer → `/industries` → card. | Your second-priority audience is three clicks deep. | Nav: Work · Transaction coordinators · Agents & teams · Pricing · About · **Start a project**. | P1 / S / Defect (IA) |
| A4 | `/industries/*` | Six pages share one template with an identical H2 ("Clear information. A confident first impression.") and about 200 words each. Trades, home services, and HOA have no relevant work. The coaches/brokerages page uses TC work as proof. | Thin, near-duplicate pages dilute the niche, add maintenance, and are weak for SEO. | Keep two audience pages (TCs; agents & teams). Remove the other four and the hub, with redirects. | P1 / M / Judgment |
| A5 | Metadata (`app/layout.tsx`) | Default title "Custom Web Design for Small Businesses", while the keywords target real estate. | The metadata and the message disagree. | Rewrite site title and description around real estate (§6.5). | P1 / S / Defect |
| A6 | Brokerages | Named on two industry pages, but there is no brokerage work and no IDX/MLS story. | Promising brokerage sites without proof or IDX capability invites a bad first call. | Don't market brokerages yet. Mention "teams and small brokerages" only in the Custom tier until you have proof or an IDX answer. | P1 / S / Judgment |

### 3.2 Credibility & proof

| # | Where | Issue | Why it matters | Change | P / Effort / Type |
|---|---|---|---|---|---|
| C1 | `/demos/pro/index.html`, `/demos/pro/testimonials.html` | Fabricated stats ("500+ transactions supported in the last 12 months", "15+ states", "<24 hrs") and six testimonials from invented named people ("Rachel Simmons, Expansion Team Lead, 56 closings in 6 months"), served from multimedium.dev. | A small banner doesn't stop a screenshot. To a skeptical TC, it looks like you are comfortable inventing proof. It also contradicts your own rule in `projects.ts` ("Do NOT invent testimonials"). | Remove the demos (see §4.2). | **P0 / S / Defect** |
| C2 | `/demos/pro` hero | The image card renders a short photo above a large empty dark panel (verified at a 1440 viewport, not only in full-page captures). | The "premium" tier example looks broken. | Removed along with the demos. | **P0 / S / Defect** |
| C3 | All demos | Grey placeholder logo boxes ("APEX TC", "Summit TC"), stock photos, and a template look. `mailto:` and canonical tags point to fictional domains that may belong to someone else. | It implies the packages are templates and undercuts "custom." | Removed along with the demos. | P0 / S / Defect |
| C4 | Case study template (`app/work/[slug]/page.tsx`) | Every client case study uses the same H2s ("A site built around the business." / "What the site needed to solve." / "How I approached it."), gallery captions say "Website detail / 01", there are no outcomes, no quote, and the "Built with" row lists benefits rather than tools. `projects.ts` already holds `process[].title/description`, `goals`, and `whyItWorks`, but they aren't rendered. | The page reads as filler and loses the details that prove expertise. | Rebuild the template: project-specific headline, *who the client is*, the problem in their words, 3 annotated screenshots (from `process[]`), "what changed", outcome (verified only), client quote (if collected), and a related package. | P1 / M / Defect |
| C5 | `projects.ts` (PA RESS) | `outcomes` contains "+42% intake completion" and "+37% branded search impressions." They are not rendered, which is good, but their source is unknown. | If they are real, they are your strongest proof. If not, they are a liability for the next AI pass, which may render them. | Verify them with the client and a source. If unverifiable, delete them from the data. | P0 / S / Hypothesis |
| C6 | Home, About | The insider story (mom has been a TC since 2013, plus Norma/UtilitySheet built for TCs) is missing from Home and About. It appears only on `/resources/tc-task-list` and `/resources/what-every-tc-website-needs`. | This is the one differentiator a competitor can't copy, and the June audit already flagged it as the most valuable sentence on the site. | Put it in the home "Why me" section and in the About intro (§6.5). | P1 / S / Judgment |
| C7 | Site-wide | No testimonials and no client logos. A `/review` page exists, but no quotes are shown anywhere. | Real estate buyers rely heavily on referrals and social proof. | Collect 2–4 quotes (PA RESS, TAG, Three Penn, Jennifer Cortes / Structured Closings). Until then, show client names + live links, not empty proof blocks. | P1 / M (mostly outreach) / Judgment |
| C8 | Home founder photo | A casual photo (tank top, woods). Real is right; the previous AI portrait was correctly removed. | For brokerages and teams, it reads as hobbyist rather than business. | Take a new *real* photo: business-casual clothing, plain or office background, good light. Don't use AI. | P2 / S / Judgment |
| C9 | `/work/pa-real-estate-support` | `externalUrl` is parealestatesupport.com, which redirects to poconotc.com. | It's a minor detail, but a redirect on your flagship proof looks careless. | Link the current domain and confirm the client's current name. | P2 / S / Defect |
| C10 | Products naming | The same product appears as "Norma Suite" (home, about), "Norma" (`/work/norma`), and "NormaTC" (`/resources`). | Inconsistent naming makes products look less real. | Pick one name per product and use it everywhere. | P2 / S / Defect |
| C11 | Proof gap: agents/teams | There is no agent or team client work. The only agent-like example is NorthPoint Realty, a fictional concept. | Agents will ask for it. Using a concept as proof would repeat the demo problem. | Be honest. On the agents page, lead with what an agent site includes plus related real work (Three Penn, PA RESS as a TC trusted by Pocono Realtors). Make "first agent/team case study" a business goal. | P1 / S / Judgment |

### 3.3 Services, packages & pricing

| # | Where | Issue | Why it matters | Change | P / Effort / Type |
|---|---|---|---|---|---|
| S1 | `/services` vs `/tc-packages` | There are two naming systems for the same three price points ($750 / $1,500 / $3,000+). | The buyer must work out that "One-page website" = "TC Starter." It doubles the copy to maintain and lets prices drift apart. | One package set for all real estate clients on one **Pricing** page. Audience pages describe what each tier looks like *for them*. | P1 / M / Judgment |
| S2 | `content/tc-packages.ts` | Features are abstract: "A custom page plan and deeper visual direction", "Scoped integrations and workflow improvements", "A launch and support plan matched to the build". | There are no page counts, timelines, revision rounds, or copy responsibility, so buyers can't compare tiers. | Concrete deliverables (draft in §6.6, needs your confirmation). | P1 / S (copy) / Defect |
| S3 | `/services/growth-retainers` | The slug says "growth retainers," but the page is "Hosting, maintenance & support." | It is a leftover from an earlier offer, and the URL contradicts the page. | Fold into Pricing (`/pricing#hosting`) and redirect. | P1 / S / Defect |
| S4 | Hosting | "$59/month, first month included" is consistent on the site, but the $59 coverage is vague ("Routine maintenance for your agreed setup"). Ownership after cancellation is not stated. `ai-business-context.md` still says Pro includes the "first year of hosting." | Ongoing cost is a common objection, and stale internal docs could reintroduce wrong terms. | List what's included (hosting, SSL, updates, backups?, X small edits/month?) and state site ownership. Fix or archive the stale doc. | P1 / S / Defect |
| S5 | Pricing repetition | On the homepage, prices appear in the hero, all three offer cards, an FAQ answer, the CTA band, and the mobile sticky bar. | Repetition makes the site feel salesy and price-led. | Show the price once in the hero line and once in the pricing summary. Remove the CTA-band note. | P2 / S / Judgment |
| S6 | `/services` "More than the pages" | It promises "Integrations and basic automations" and links to `/tools`. | It is vague and opens scope questions without answering them. | Replace with concrete examples in the Custom tier (e.g., "connect your intake form to Cognito, Jotform, or your CRM"). Confirm which tools you support. | P2 / S / Judgment |

### 3.4 Conversion path

| # | Where | Issue | Why it matters | Change | P / Effort / Type |
|---|---|---|---|---|---|
| V1 | Site-wide | The primary CTA "Start a project" is consistent and well placed (nav, hero, sticky mobile bar, closing band). | It works. | Keep it. | — / — / Observed strength |
| V2 | `/contact` | There is no phone number and no booking link, even though `NEXT_PUBLIC_SCHEDULING_URL` is supported and your phone is in the JSON-LD. | Many agents and TCs prefer a quick call. | Add "Prefer to talk? Book a 20-minute call" (if you want calls) and show the phone if you're comfortable. | P1 / S / Judgment (needs your input) |
| V3 | `/contact` form | 6 required fields plus a message, with budget and timeline required. The pre-fill from package links (`?package=…&budgetRange=…`) works well. | Qualification is valuable. Making timeline required is the likeliest abandonment point. | Keep budget required. Make timeline optional. Rename the message label to "What does your business do, and what should the website help with?" | P2 / S / Hypothesis |
| V4 | Demo links on packages | "Explore an example ↗" sends buyers *away* to a different-looking site that has its own "Submit a File" CTAs and fictional emails. | It is a high-intent exit at the decision point. | Removed. Replace with on-page "What's included" and real screenshots. | P0 / S / Judgment |
| V5 | `components/nav/MobileStickyCTA.tsx` | It says "Custom websites from $1,500" on every page, including TC pages where $750 is the relevant entry price. | Minor message mismatch. | Make it "Start a project" + "Reply within 1 business day" (no price), or contextual per section. | P2 / S / Defect |

### 3.5 Visual design

The current editorial system is the best visual direction the site has had: warm paper background, deep ink, a single blue primary, Manrope with Fraunces italic accents, generous spacing, and hairline rules. **Keep it.** The issues are discipline and imagery.

| # | Where | Issue | Change | P / Effort / Type |
|---|---|---|---|---|
| D1 | Headings site-wide | Nearly every H2 uses a line break + italic serif tail ("Different businesses. *The same care.*", "*work as hard as you do.*", "*I'll be the one building it.*"). A signature move used everywhere becomes a tic. | Use the italic accent once per page, in the hero only. | P1 / S / Judgment |
| D2 | `.project-cta` button | The lime-green button on the navy band adds a third accent color that is used nowhere else. | Use the primary blue, or white on navy. | P2 / S / Defect (consistency) |
| D3 | Arrows | "↗" (conventionally "external") is used on internal links: "Start a project ↗", "Explore ↗", "View project ↗". "Explore the work ↓" navigates to `/work` instead of scrolling. | Use → for internal links, ↗ only for external sites, and never ↓ for navigation. | P2 / S / Defect |
| D4 | Hero screenshot | The PA RESS homepage is shown at about 40% scale, so its text is unreadable. That site's own look (saturated blue gradient, big stat chips) is louder than your brand. | Show a tighter, legible crop (e.g., its "Start Transaction" intake), framed in a consistent browser chrome, or pair desktop and mobile. | P1 / S / Judgment |
| D5 | Decorative filler | "✳" asterisks, the "Real businesses. Thoughtfully built." note bar, and the "Built around your business / Custom design & code…" expertise strip. | Remove. Replace the strip with real client names (proof bar). | P1 / S / Judgment |
| D6 | Two design languages | `/resources`, its children, `/mytcacademy`, and `/review` still use the older icon-card / pill / gradient style (`components/sections/Editorial.tsx`, `Section.tsx`, `AnimatedSection.tsx`). | Restyle them to the studio system so the site feels like one brand. | P1 / M / Defect |
| D7 | Wordmark | The nav shows the "m." badge + "multimedium.", while the footer shows "multimedium." without the badge. Your brief writes "MultiMedium"; the site writes "Multimedium". | Pick one brand spelling and one lockup. | P2 / S / Defect (needs your input) |
| D8 | Eyebrow labels | Poetic labels ("Your next chapter", "A specialty, built on experience", "Before we talk") carry no information. | Use functional labels ("Pricing", "Client work", "FAQ") or drop them. | P2 / S / Judgment |

### 3.6 Copy

The tone is calm and pleasant, but much of it is **interchangeable**: it could sit on any designer's site. Specific examples:

| Current | Problem | Proposed |
|---|---|---|
| "Good businesses deserve better websites." | No audience; generic. | "Websites for the people who get deals to the closing table." |
| "Custom websites that make your business look the part—and make it easier for the right customers to get in touch." | Generic benefit. | "I design and build websites for transaction coordinators, agents, and real estate teams — sites that explain what you do in plain terms, look as organized as you are, and make it easy for the right people to hire you or start a file." |
| "Different businesses. The same care." | Signals "generalist." | (section replaced) "Recent work for real estate businesses" |
| "A website that fits where you're going." / "Starting fresh, outgrowing your old site…" | Vague. | "Three ways to work together" + concrete tiers |
| "Especially fluent in real estate." | Buries the niche. | Moves to the hero; the section becomes "Why real estate pros hire me" (see §6.5) |
| "Let's make your website work as hard as you do." / eyebrow "Your next chapter" | Cliché. | "Tell me about your business. I'll reply within one business day with questions or a recommended scope." |
| Services H1 "Thoughtful design. Capable development." | About you, not the buyer; "capable" is faint praise. | (Page merged into Pricing) "Clear pricing. Defined scope. No surprises." |
| "Your business, looking its best." | Generic. | (Removed with service subpages) |
| Case study "A site built around the business." on every project | Template filler. | Project-specific, e.g. PA RESS: "Turning a DIY site into a clear way for agents to start a transaction." |
| Gallery captions "Website detail / 01" | No information. | Use `process[].title`: "Clear hero messaging", "Service breakdown & trust signals", "Intake form integration". |
| PA RESS: "A component library empowers future landing pages and campaigns." | Jargon for a TC. | "The site is built from reusable sections, so new service pages can be added without a redesign." |
| TC Pro: "Scoped integrations and workflow improvements" | Abstract. | "Multi-step intake connected to the tools you already use (e.g., Cognito Forms or Jotform)" *(confirm which tools)* |
| Industry page H2 "Clear information. A confident first impression." (on 5 pages) | Duplicated. | (Pages removed or rewritten) |
| About H1 "Your designer. Your developer. Same person." | Fine, but misses the real differentiator. | "I'm Haydn. I build websites for real estate professionals — and I grew up around the work." |

### 3.7 Usability & accessibility

- **Observed strengths:** axe-core found no WCAG 2 A/AA violations on `/`, `/tc-packages`, `/contact`, `/work/pa-real-estate-support`, `/about`, `/resources`, or `/mytcacademy`. There is a skip link, focus is visible on every element in the first 8 tab stops, form fields are properly labeled (wrapping `<label>`s), the error message uses `role="alert"` and moves focus, there is no horizontal scroll at 390 px on any route, and the mobile menu is a proper dialog (Base UI).
- **U1 (Defect, P2/S):** The demo "Back to Packages" link fails contrast (3.49:1, `#b5774e` on `#3b2f2f`) and points to `/tc-packages#packages`, an anchor that doesn't exist. This is moot once the demos are removed.
- **U2 (Defect, P2/S):** The 404 page is Next's unbranded default ("404: This page could not be found."), with no navigation back into the site. Add `app/not-found.tsx` with links to Work, Pricing, and Contact.
- **U3 (Hypothesis, P2/S):** Several text links fall under 24 px in height on mobile (2–6 per page, e.g., "Explore ↗"). That passes WCAG 2.2 target-spacing in most cases, but the main CTAs should get comfortable padding.
- Not tested: screen readers (VoiceOver/NVDA) and Windows high-contrast mode.

### 3.8 Technical quality, SEO & maintainability

| # | Where | Issue | Change | P / Effort / Type |
|---|---|---|---|---|
| T1 | `/mytcacademy` | `<title>` is "My TC Academy Students — Private Referral \| Multimedium \| Multimedium" (brand duplicated). | Remove "\| Multimedium" from the page title string. | P2 / S / Defect |
| T2 | `/` | `<title>` "Custom Web Design for Small & Service Businesses" has no brand (the template doesn't apply at root). | Set an absolute title with the brand. | P1 / S / Defect |
| T3 | `/tc-packages` | The `next/link` points to static demo HTML, which triggers RSC prefetches that 404 (3 console errors per page view). | Removed with the demos. If any static HTML link remains, use a plain `<a>`. | P2 / S / Defect |
| T4 | Demos | Canonicals point to `https://www.clearpathclosings.com/`, `https://www.apextc.co/`, and `https://multimedium.dev/demos/...` (apex host). | Removed with the demos. | P0 / S / Defect |
| T5 | `app/sitemap.ts` | Lists off-target pages (trades, home services, HOA, lab, tools). `lastModified = new Date()` stamps every URL with the build time. | Regenerate it from the final sitemap and use real modified dates or omit them. | P1 / S / Defect |
| T6 | Dead code | Never imported: `components/hero/HeroParallax.tsx`, `StatementHero.tsx` (which contains an unsupported claim, "Trusted by … real estate teams…"), `components/haydn-portrait.tsx` (used only by StatementHero), `components/marketing/CTA.tsx`, `HowItWorks.tsx`, `components/ui/{alert-dialog,badge,card,combobox,dropdown-menu,field,select,input-group,button,input,label,separator,textarea}.tsx` (they only import each other). `framer-motion` is used only by the dead heroes, and `shadcn` is a runtime dependency for a CLI. | Delete them. Remove `framer-motion` and `shadcn` (and `class-variance-authority` if nothing else uses it) from `package.json`. | P1 / S / Defect |
| T7 | `app/globals.css` | 1,900 lines with leftovers from at least three design eras (`--glow`, `--flood`, `--ink`, `.ledger`, `.btn-on-ink`, grain, etc.). About 95–110 KB of CSS transfers per page. | Prune after the legacy pages are restyled. Target under 40 KB. | P2 / M / Defect |
| T8 | Repo root | Stray files: `codex-og-*.log`, `output/playwright/*.png`, and six overlapping strategy docs (`AUDIT.md`, `SEO_AUDIT.md`, `SEO_STRATEGY.md`, `PRIORITY_NEXT_STEPS.md`, `TASK-design-cleanup.md` (it references a nonexistent `next-app/` path), `kimi-tc-packages.md`, `tc-packages-codex-brief.md`). `ai-business-context.md` and `product-marketing-context.md` disagree on pricing and hosting. `README.md` describes Inter and the parallax hero, neither of which is used. | Create **one** source-of-truth brief (`docs/brand/brief.md`: positioning, audiences, packages, voice, proof rules). Move the rest to `docs/archive/`. Rewrite the README. Add a `CLAUDE.md` that points every future AI session to the brief. *This is the single most effective guard against another inconsistent rebuild.* | P1 / S / Defect |
| T9 | `public/demos/` | 844 KB of separate HTML/CSS/JS, with `next.config.ts` rewrites and an orphaned `presence` demo. | Delete the folder and rewrites, then add redirects. | P0 / S / Defect |
| T10 | Contact anti-spam | No Turnstile widget appears on the live form; it falls back to the honeypot + signed token. | Fine unless spam appears. Set the Turnstile keys if it does. | P2 / S / Hypothesis |
| T11 | Performance | Strong: desktop LCP ~0.5 s, CLS 0; throttled mobile LCP 1.0–1.7 s, about 170 KB JS. | Keep it. Don't add motion libraries back. | — / — / Observed strength |

---

## 4. Keep / improve / merge / replace / remove

### 4.1 Pages, sections, features

| Item | Decision | Reasoning / where its job goes |
|---|---|---|
| Home | **Improve (rewrite)** | The structure is fine. The message, sections, and proof change (§6.5). |
| `/work` | **Improve** | Real estate work first, Blissful last under "Other work." Drop the "Transaction coordination / Real estate" filter chips (only 4 projects). Remove the links to Lab and Products. |
| `/work/[slug]` client case studies | **Improve (template rebuild)** | See C4. |
| `/tc-packages` + `/industries/transaction-coordinators` | **Merge** → `/transaction-coordinators` | Both are TC landing pages with overlapping content. |
| `/industries/real-estate-professionals` + `/industries/real-estate-coaches` | **Merge** → `/agents-and-teams` | One honest page for agents, teams, and small brokerages. |
| `/industries` (hub), `/industries/{trades,home-services,homeowners-associations}` | **Remove** (redirect) | No relevant work, off-strategy, thin. The FAQ answers "Do you work outside real estate?" |
| `/services`, `/services/{website,landing-pages,growth-retainers}` | **Merge** → `/pricing` | One place for all tiers, hosting, and what's included. |
| `/about` | **Improve** | Add the origin story, a "Software I build" section (replacing `/tools`), and a new photo. |
| `/tools` | **Merge into About** | Products prove depth, but a standalone page reads as a second business. Link to normatc.com / utilitysheet.com. |
| `/work/{norma, norma-intake, utility-sheet, client-portal}` | **Remove** (redirect → `/about#software`) | A two-sentence description + live link on About does the job with less to maintain. |
| `/lab` + 7 concept pages | **Remove** | Fictional concepts read like a student portfolio and invite confusion with client work. Their role ("shows visual range") is better served by real work and a clean site. |
| `/work/{peppers-portal, workout-tracker}` (personal) | **Remove** | Not relevant to buyers. |
| `/demos/*` (4 sites) | **Remove** | See §4.2. |
| `/resources` + 3 PDFs + guide | **Keep, restyle** | Real lead magnets for TCs, used in your Facebook strategy and SEO. Remove the "Tools you can use" section (duplicates products). Link from the TC page and footer. |
| `/mytcacademy`, `/mytcacademy/flyer` | **Keep, restyle; update links** | Live referral channel. Point package links to the new pages. Keep noindex. |
| `/review` | **Keep** | It is the testimonial collection tool you need. |
| `/contact`, `/contact/thanks` | **Keep, small edits** | See V2 and V3. |
| `/lp/real-estate` | **Keep as a redirect** | Retarget to `/agents-and-teams` directly to avoid a chain. |
| Home expertise strip, "Real businesses. Thoughtfully built." note | **Replace** | Replace with a proof bar of real client names. |
| Home "Hosting & support" offer card | **Merge** | It becomes a line under the pricing summary. |
| Mobile sticky CTA | **Keep, simplify** | V5. |
| Process section (3 steps) | **Keep, add timing** | Clear and honest. Add "what I need from you" and typical durations. |
| FAQ (`<details>`) | **Keep, rewrite questions** | Make them real estate-specific (§6.5). |
| JSON-LD / OG images / sitemap / robots | **Keep, update** | Align with the new IA. Remove FAQ schema for deleted pages. |

### 4.2 The TC package demo sites: decision **remove**

**What they currently do well:** They let a TC picture the *structure* each tier buys: a one-pager vs. a site with Services / Submit a File / Careers pages. That role is real.

**Why they still should go:**

1. **Fabricated proof on your domain** (C1). This is the opposite of what the site needs to signal.
2. **Visible quality problems** (C2, C3, U1): a broken hero on the premium tier, placeholder logos, stock imagery, and a contrast failure. A buyer judges your quality by your examples.
3. **They imply the packages are templates.** They contradict "custom," and their copy ("Apex becomes the coordination engine…") is generic in exactly the way you want to avoid.
4. **They pull buyers off the page at the decision point** (V4), into a different brand with its own CTAs.
5. **Maintenance:** separate HTML/CSS/JS outside the design system, Next rewrites, prefetch errors, and a forgotten fourth demo.

**How their job is handled afterward:**

- Each tier lists **the actual pages** it includes, for each audience. For example, the Full website tier for a TC is "Home · Services · Start a File · About · Contact."
- Each tier shows **one real, annotated screenshot**. Starter shows the TAG one-pager; Full website shows the PA RESS service and intake pages; Custom shows Three Penn's tenant/investor routing (or Structured Closings if it can be added).
- A short "Here's what a Start-a-File page includes" block with a real screenshot of PA RESS's intake.
- If a buyer wants a live example, the case study links to the real client site.

**Tradeoff:** You lose a full clickable preview for Starter and Pro. That is acceptable: real work beats a staged fiction, and the Growth demo was modeled on a real project (Structured Closings) that could be shown directly.

---

## 5. What should be removed, consolidated, or deleted (summary)

- **Pages (redirect):** `/industries`, `/industries/{trades,home-services,homeowners-associations,real-estate-coaches,real-estate-professionals,transaction-coordinators}`, `/services` + 3 subpages, `/tc-packages`, `/tools`, `/lab`, 13 non-client `/work/*` pages, and all `/demos/*`.
- **Code:** `components/hero/*`, `components/haydn-portrait.tsx`, `components/marketing/{CTA,HowItWorks,IndustryDetail,ServiceDetail}.tsx`, `components/sections/{Editorial,Section}.tsx` and `components/motion/AnimatedSection.tsx` (after restyling resources/review/mytcacademy), unused `components/ui/*`, `components/work/ProjectCard.tsx` (replace its one use in mytcacademy with `ProjectTile`), and the `public/demos/` folder + `next.config.ts` rewrites.
- **Content data:** the concept and personal entries in `content/projects.ts`, unverified outcomes, and `content/services.ts` (replaced by one `content/packages.ts`).
- **Dependencies:** `framer-motion`, `shadcn` (and possibly `class-variance-authority`, `tw-animate-css`).
- **Repo clutter:** stray logs, `output/`, and superseded strategy docs (→ `docs/archive/`).

---

## 6. Recommended final direction

### 6.1 Positioning statement

> Multimedium designs and builds websites for real estate professionals — first and foremost transaction coordinators and TC companies, and the agents and teams they serve. Every site is planned, written with you, designed, and built by one person, Haydn, who grew up around TC work and builds software for TCs. The result is a site that explains your services the way agents and clients think about them, looks as organized as you are, and makes it simple to hire you or start a file.

### 6.2 Audience hierarchy

1. **Transaction coordinators & TC companies** (primary): the proof (PA RESS, TAG), products, resources, and referral partners all point here.
2. **Agents & real estate teams** (secondary): adjacent and clearly named, but honest about the proof gap. This becomes primary once you land one agent/team case study.
3. **Small brokerages** (tertiary): mentioned only in the Custom tier until there is proof and a clear answer on IDX/MLS.
4. **Everyone else:** not marketed. The FAQ says you take occasional work outside real estate by referral, and Blissful Existence stays on `/work` as "Other work."

**Tradeoff:** Dropping generalist positioning may cost occasional non-real-estate inquiries. In exchange, every page now speaks directly to the people you most want to hire you, and referrals from TC coaches land on a site that is unmistakably for their students.

### 6.3 Sitemap & navigation

```
/                         Home
/work                     Client work (4–5 real projects)
/work/[slug]              Case studies (client only)
/transaction-coordinators TC websites (merges /tc-packages + industries/transaction-coordinators)
/agents-and-teams         Agent & team websites (merges industries/real-estate-professionals + coaches)
/pricing                  Packages, hosting & care, what's included, FAQ (merges /services/*)
/about                    Haydn, origin story, software I build (absorbs /tools)
/contact (+ /thanks)      Inquiry form, booking link, email/phone
/resources (+ 4 children) Free TC templates & guide (footer + TC page)
Unlisted (noindex): /mytcacademy, /mytcacademy/flyer, /review
```

**Primary nav:** Work · Transaction coordinators · Agents & teams · Pricing · About · **[Start a project]**
On mobile, the same five links appear in the menu, plus the CTA in the menu and the sticky bar.
**Footer:** brand line; email (and phone if approved); Work, TC websites, Agent websites, Pricing, About, Free TC resources, Contact; © line.

### 6.4 Purpose & primary action per page

| Page | Purpose | Primary action | Secondary |
|---|---|---|---|
| Home | In 10 seconds: who this is for, why Haydn, what it costs, proof. | Start a project | Choose your path (TC / Agents) |
| TC websites | Show a TC exactly what their site will do for agents, with TC proof and packages in TC terms. | Start a project (package pre-selected) | Free TC resources |
| Agents & teams | Show agents what a better-than-brokerage-template site includes, with honest related work. | Start a project | See pricing |
| Pricing | One source of truth for tiers, deliverables, timelines, hosting, and ownership. | Start a project (tier pre-selected) | — |
| Work | Proof. | Open a case study | Start a project |
| Case study | Detailed proof that matches a buyer's situation. | "Start a project like this" | Visit live site |
| About | Trust in the person: background, process, software. | Start a project | — |
| Contact | Qualified inquiry with minimal friction. | Send inquiry | Book a call / email |

### 6.5 Homepage outline with proposed copy

1. **Hero**
   - Eyebrow: *Web design for transaction coordinators, agents & teams*
   - H1: **Websites for the people who get deals to the closing table.**
   - Support: *I'm Haydn. I design and build websites for transaction coordinators, agents, and real estate teams — sites that explain what you do in plain terms, look as organized as you are, and make it easy for the right people to hire you or start a file.*
   - Primary CTA: **Start a project** → `/contact?source=home-hero` · Secondary: *See pricing →*
   - Price line: *One-page sites from $750 · Full websites from $1,500*
   - Visual: a legible, framed crop of real client work (PA RESS intake + TAG on mobile).
2. **Proof bar:** *Recent work for* PA Real Estate Support Services · Transaction Authority Group · Three Penn Properties (wordmarks only with permission; text otherwise), each linking to its case study.
3. **Choose your path:** two cards.
   - *Transaction coordinators & TC companies.* "Show agents exactly what you handle and give them one clear way to start a file." → TC websites
   - *Agents & teams.* "A site that's yours, not your brokerage's template, with clear paths for buyers, sellers, and referral partners." → Agents & teams
4. **Featured case study (PA RESS):** problem → what was built → 2 annotated screenshots → (verified outcome or client quote, only if available) → *Read the case study →*
5. **Why real estate pros hire me** (three facts, no adjectives):
   - *I know the work.* "My mom has been a transaction coordinator since 2013, and I build software for TCs, including Norma and UtilitySheet. You won't have to explain what a cover sheet is."
   - *One person, start to finish.* "The person on your first call writes the plan, designs the site, builds it, and answers your email after launch."
   - *Fast, and yours.* "Hand-coded, mobile-first sites that load quickly." Add an ownership statement once confirmed.
6. **Pricing summary:** three tiers in one row (name, price, one-line scope, timeline) + *Hosting & care: $59/month after your first month.* → *Full pricing details →*
7. **How it works:** 3 steps with durations and "what I need from you."
8. **Meet Haydn:** new photo, two sentences, *More about me →*
9. **FAQ (real estate-specific):** "Can my site show MLS listings?" (answer after you decide) · "Do I own my website?" · "What do you need from me to get started?" · "How long does it take?" · "Do you work outside real estate?" ("Occasionally, by referral. Most of my work is for real estate professionals.")
10. **Closing CTA:**
    - H2: **Tell me about your business.**
    - Body: *I'll reply within one business day with a few questions or a recommended scope. No pressure, and no newsletter.*
    - Button: **Start a project**

**Site title / meta:** "Real Estate & Transaction Coordinator Websites | Multimedium". Description: "Custom websites for transaction coordinators, agents, and real estate teams, designed and built by Haydn. One-page sites from $750, full websites from $1,500."

**TC page hero:**
- H1: **Websites for transaction coordinators that agents can say yes to.**
- Support: *Before an agent sends you a file, they look you up. I build TC websites that make what you handle, how you work, and how to start a file obvious — so the next step is a submitted file, not a phone tag.*

**Agents page hero:**
- H1: **Your own real estate website — not another brokerage template.**
- Support: *For agents and teams who want a site that shows who you serve, where you work, and why clients choose you, with clear paths for buyers, sellers, and referral partners.*
- This hero depends on your IDX answer.

**About intro:**
- H1: **I'm Haydn. I build websites for real estate professionals.**
- Body: *I grew up around transaction coordination — my mom has been a TC since 2013 — and I've since built software for TCs, including Norma and UtilitySheet. That background shapes how I plan a site: what agents need to see, how files get started, and what makes a real estate business look trustworthy online. I'm based in the Poconos and work with clients across Pennsylvania and beyond.*

### 6.6 Services, packages, portfolio & demos: how they relate

**One package set** (`content/packages.ts`) feeds Pricing, the TC page, and the Agents page. Audience pages render the same tiers with an audience-specific "pages you'll get" line. Draft figures come from your internal docs and **need confirmation** (Q8):

| | **One-page site** — $750 | **Full website** — $1,500 | **Custom build** — from $3,000 |
|---|---|---|---|
| For | New solo TCs or agents who need a credible home fast | Established TCs and agents ready for a complete site | TC companies, teams, small brokerages |
| Pages | 1 scrolling page (services, about, contact) | Up to 4–5 pages. TC: Home · Services · Start a File · About. Agent: Home · Buy · Sell · About · Contact | 5+ pages: team bios, partner/referral pages, careers |
| Copy | You provide the details; I shape and edit | I draft, you review | I write it from a discovery session |
| Forms | Contact or simple file-start form | Intake connected to your form tool | Multi-step intake, scoped integrations |
| Timeline | ~1–2 weeks | ~3–4 weeks | ~4–6 weeks |
| Revisions | [confirm] | [confirm] | [confirm] |
| Hosting & care | First month included, then $59/mo (same for every tier). Includes: [confirm list]. Ownership: [confirm]. | | |

**Plain names beat Starter/Growth/Pro.** A buyer instantly knows what "One-page site" means. If you want to keep the TC-branded names for referral partners, use them only on `/mytcacademy`, mapped one-to-one.

**Portfolio and case studies** are the evidence layer. Each tier links to the case study that matches it (TAG → One-page; PA RESS → Full; Three Penn → Custom).
**Products** (Norma, UtilitySheet) are a credibility footnote on About and the TC page ("I also build software for TCs"). They are not a separate portfolio.
**Demos:** none.

### 6.7 Visual direction

- **Foundation (keep):** the warm off-white paper background, deep navy ink, **one** blue accent (current primary), Manrope for UI/body/headings, Fraunces italic used **once per page** for a single hero phrase, hairline rules, and generous whitespace. This already feels considered and calm, which suits buyers who value organization.
- **Type scale:** H1 64/1.05 desktop → 40 mobile; H2 40 → 30; H3 22; body 18/1.6; small 14. Max line length 68ch. Functional eyebrows only.
- **Layout:** a 1240 px container, a 12-column grid, and fewer bordered boxes. Use rules and whitespace to separate sections. Alternate paper and a light tint band at most twice per page.
- **Imagery:** real client work only, in a **consistent** browser frame (and phone frame for mobile shots), cropped so text is legible, with a one-line annotation per shot. A new real founder photo in a matching tone. No stock, no AI imagery, no fictional brands.
- **Color discipline:** remove lime and the leftover glow/flood/ledger tokens. Define tokens once in `:root`. The dark navy band is reserved for the closing CTA.
- **Interaction:** → for internal links, ↗ only for external. Subtle hover states (underline offset, 2 px lift on cards at most). Native `<details>` for the FAQ. No parallax or scroll-jacking (keep the current no-motion-library performance). Respect `prefers-reduced-motion`.
- **Proof styling:** client quotes set large in Fraunces (the one place, besides the hero, where the serif may appear), with name, role, and company.

---

## 7. Implementation plan

### Necessary corrections vs. optional enhancements

- **Necessary:** everything P0, the positioning and IA work (Phases 1–3 core), the case study template, a single pricing source, redirects, dead-code removal, and the brief/CLAUDE.md.
- **Optional:** new founder photo, wordmark refresh, CSS pruning below 40 KB, Turnstile, a booking link (if you want calls), a client logo bar (needs permission), and contextual sticky-bar copy.

### Phase 0 — Immediate credibility fixes (ship now; independent of everything else)

| Deliverable | Files | Effort | Acceptance criteria |
|---|---|---|---|
| Remove demo links and demos; redirect `/demos/*` → `/tc-packages` | `components/marketing/TCPackages.tsx`, `public/demos/`, `next.config.ts` | S | No `/demos` URLs return 200; no "Explore an example" links; no console 404s on `/tc-packages` |
| Fix `/mytcacademy` duplicate brand in title; brand the home title; add a branded `app/not-found.tsx` | `app/mytcacademy/page.tsx`, `app/page.tsx`, `app/layout.tsx`, new `app/not-found.tsx` | S | Titles verified in rendered HTML; 404 page shows nav + 3 links |
| Verify or delete PA RESS outcome numbers; update its URL to the current domain | `content/projects.ts` | S | Every number in `projects.ts` has a documented source or is gone |
| Delete `StatementHero.tsx` (unsupported "Trusted by…" claim) and other dead components | `components/hero/*`, etc. | S | `pnpm build` and `pnpm lint` pass |

### Phase 1 — Positioning, IA & content decisions

**Depends on:** your answers to §8 (Q1–Q8 block this phase).

| Deliverable | Effort | Acceptance criteria |
|---|---|---|
| `docs/brand/brief.md`: positioning, audience hierarchy, voice, proof rules ("no invented proof; concepts never shown as work"), packages, and approved facts | S | One document. Every older strategy doc moved to `docs/archive/` with a pointer. A `CLAUDE.md` at the root links to it. |
| Final sitemap + redirect map (§7.6) | S | Every current URL maps to a 200 page or a single-hop 301/308 |
| Package spec `content/packages.ts` (names, prices, pages per audience, copy responsibility, timeline, revisions, hosting inclusions, ownership) | S | No vague bullets. Each tier states pages, timeline, and who writes the copy. |
| Proof inventory: which clients approve being shown, quotes collected (via `/review`), verified outcomes, Structured Closings yes/no | M (outreach) | A list with an approval status per client; at least 2 quotes requested |
| Copy deck for Home, TC, Agents, Pricing, About, Contact, and 4 case studies | M | Every claim traceable to the brief; no generic filler headings |

### Phase 2 — Design & copy revisions

**Depends on:** Phase 1 copy deck + package spec.

| Deliverable | Affected | Effort | Acceptance criteria |
|---|---|---|---|
| Design token cleanup (one accent, type scale, arrow rules) | `app/globals.css` | M | No lime; no glow/flood/ledger tokens; arrows follow the rules |
| Homepage design per §6.5 | `app/page.tsx`, `components/marketing/Studio.tsx` | M | Audience named in H1; real estate work only; price shown ≤ 2 times |
| Audience page template (shared component, two instances) | new `app/transaction-coordinators/page.tsx`, `app/agents-and-teams/page.tsx` | M | Each shows audience-specific pages per tier, related proof, and FAQ |
| Pricing page | new `app/pricing/page.tsx` | M | Tiers, hosting, ownership, and FAQ in one place; tier CTAs pre-fill the contact form |
| Case study template rebuild | `app/work/[slug]/page.tsx` | M | Project-specific headings; annotated screenshots from `process[]`; quote/outcome blocks render only with verified data |
| Restyle Resources, My TC Academy, Review to the studio system | `app/resources/**`, `app/mytcacademy/**`, `app/review/page.tsx` | M | No imports from `Editorial`, `Section`, or `AnimatedSection` |
| Screenshot set: consistent frames, legible crops, captions | `public/images/projects/*` | M | All client imagery is the same framing style; text is readable at display size |

### Phase 3 — Implementation, removal & consolidation

**Depends on:** Phase 2 designs. Removal can run in parallel with new pages, but redirects ship in the same deploy as the removals.

| Deliverable | Effort | Acceptance criteria |
|---|---|---|
| Build the new pages; update `Navbar`, `Footer`, `MobileStickyCTA` | M | Nav = Work · TCs · Agents & teams · Pricing · About + CTA |
| Delete removed routes and data (industries, services, tools, lab, non-client `/work/*`, `content/services.ts`, concept and personal projects) | S | `getAllProjectSlugs()` returns client projects only |
| Add the redirects in `next.config.ts` (§7.6); remove the demo rewrites | S | Each old URL resolves in one hop |
| Delete dead components and unused `components/ui/*`; remove the `framer-motion` and `shadcn` deps | S | `pnpm build` and `pnpm lint` pass; `pnpm-lock.yaml` regenerated |
| Update `app/sitemap.ts` and JSON-LD (services, FAQ) to the new IA | S | Sitemap contains only indexable final URLs |
| Update `/mytcacademy` + flyer links and contact `source`/`package` params | S | Package pre-fill works from every CTA |
| Contact tweaks (V2, V3) | S | Booking link/phone shown per your decision |

### Phase 4 — Functional, responsive, accessibility & performance verification

**Depends on:** Phase 3 on a Vercel preview.

| Check | Acceptance criteria |
|---|---|
| Automated crawl (reuse the approach in §2) at 1440 / 768 / 390 | No 4xx/5xx; no console errors; no horizontal overflow |
| axe-core on every public page | 0 serious/critical violations |
| Keyboard pass: nav, mobile dialog, FAQ, form, error state | Visible focus everywhere; dialog traps and returns focus |
| Screen reader smoke test (VoiceOver iOS or NVDA on Windows) on Home, Pricing, Contact | Headings, landmarks, and form errors announced correctly |
| Contact form end-to-end on the preview (real submission to your inbox, plus validation errors, honeypot, and package pre-fill) | Email received with source/package; thank-you page shown |
| Performance (throttled mobile) | LCP < 2.0 s on Home/TC/Pricing; CLS < 0.05; JS ≤ current ~170 KB |
| Content QA against the brief | No invented proof; prices identical everywhere; product names consistent |

### Phase 5 — Launch preparation

| Deliverable | Acceptance criteria |
|---|---|
| Redirects live; spot-check 15 old URLs including `/tc-packages`, `/demos/pro`, `/lp/real-estate` | Single-hop 308 to the intended page |
| Search Console: submit the new sitemap; inspect Home, TC, Agents, Pricing | Indexed or queued; no redirect errors |
| Update external links you control: Facebook page/posts in `content/marketing/facebook/`, the My TC Academy flyer PDF, email signature, Google Business Profile | All point to final URLs |
| OG images regenerate for new pages | Previews correct on LinkedIn/Facebook debuggers |
| Archive the old strategy docs; README rewritten | The repo root contains only app config + `README`, `CLAUDE.md`, and `docs/` |

### 7.6 Redirect map (permanent)

| From | To |
|---|---|
| `/tc-packages` | `/transaction-coordinators` |
| `/industries/transaction-coordinators` | `/transaction-coordinators` |
| `/industries/real-estate-professionals`, `/industries/real-estate-coaches`, `/lp/real-estate` | `/agents-and-teams` |
| `/industries`, `/industries/trades`, `/industries/home-services`, `/industries/homeowners-associations` | `/` |
| `/services`, `/services/website`, `/services/landing-pages` | `/pricing` |
| `/services/growth-retainers` | `/pricing#hosting` |
| `/tools`, `/work/norma`, `/work/norma-intake`, `/work/utility-sheet`, `/work/client-portal` | `/about#software` |
| `/lab`, `/work/{nomad-gear, velvet-rose, gentlemans-blade, pop-playground, northpoint-realty, momentum-coaching, clarity-growth, peppers-portal, workout-tracker}` | `/work` |
| `/demos/:path*` | `/transaction-coordinators#pricing` |

---

## 8. Closing summary

### The five most important changes

1. **Reposition the homepage and navigation around real estate professionals (TCs first).** Replace "Good businesses deserve better websites" and give agents and teams a visible path.
2. **Remove the TC demo sites.** They contain fabricated stats and testimonials, a broken Pro hero, and placeholder branding. Replace them with concrete per-tier page lists and annotated real work.
3. **Merge the two pricing systems into one concrete package set on one Pricing page**, with pages, timeline, copy responsibility, revisions, hosting inclusions, and ownership.
4. **Turn the four client projects into real case studies and put your insider story up front** (TC family background + TC software), and start collecting real quotes through `/review`.
5. **Cut the site from 49 routes to about 8 core pages**, delete dead code and dependencies, and replace the pile of conflicting AI briefs with one source-of-truth brief + `CLAUDE.md`, so the next rebuild doesn't drift.

### What is strong enough to preserve

- The editorial visual foundation (palette, Manrope + Fraunces, spacing, hairline rules).
- Performance (desktop LCP ~0.5 s, CLS 0) and the lean JS footprint.
- Accessibility basics (axe-clean main pages, skip link, focus styles, labeled form, accessible mobile dialog).
- The contact form's qualification fields, anti-spam, and `source`/`package` pre-fill tracking.
- The honest `kind: Client | Product | Concept | Personal` model in `projects.ts`, and the rule against invented testimonials.
- Transparent starting prices and the "first month of hosting included" policy.
- The TC resources (real lead magnets), the `/mytcacademy` referral mechanism, and the `/review` flow.
- Structured data, dynamic OG images, the clear "Start a project" CTA pattern, and the 3-step process.

### What to remove

The demos; the Lab and all concept pages; personal projects; the Products page (fold into About); the industries hub plus the trades, home services, HOA, and coaches pages; the three service subpages; dead components, unused shadcn UI, `framer-motion`; the lime accent and leftover tokens; decorative filler (asterisks, the expertise strip, the "Real businesses" note); and the stray logs and superseded strategy docs.

### Implementation sequence

Phase 0 (credibility fixes, now) → your answers to the questions below → Phase 1 (brief, sitemap, packages, proof outreach, copy deck) → Phase 2 (tokens → homepage → audience template → pricing → case study template → legacy restyles) → Phase 3 (build, remove, redirect in one deploy) → Phase 4 (verification on preview) → Phase 5 (launch, Search Console, external links).

### Business questions that need your input

**Blocking Phase 1:**

1. **Real estate only?** Is it acceptable to stop marketing to trades, home services, HOAs, and wellness, while keeping Blissful Existence as "Other work"?
2. **IDX/MLS:** Do you offer, or want to offer, listing search for agents (and through which provider)? If not, what's the honest answer when an agent asks?
3. **Brokerages:** Are you actively seeking brokerage projects now, or later?
4. **Structured Closings (Jennifer Cortes):** Can it become a case study? Is there any other unlisted client work?
5. **Client permissions and quotes:** Do PA RESS, Three Penn, and Blissful approve being featured? Will you ask each client, and Jennifer, for a short quote?
6. **PA RESS numbers:** Are +42% intake completion and +37% branded impressions real and documented? Also, is PA RESS a family business? (This doesn't change whether to show it; it does affect how the story is told.)
7. **Featuring the family story:** Are you comfortable putting "my mom has been a TC since 2013" on Home and About?
8. **Package facts:** page counts per tier, revision rounds, who writes the copy, typical timelines, exactly what $59/month covers, and whether the client owns the site/code and can move it.

**Needed by Phase 2 (non-blocking):**

9. Do you want calls? If so, should the booking link and phone number appear on Contact?
10. Brand spelling: "Multimedium" (site) or "MultiMedium" (your brief)? Keep the "m." badge?
11. Geography: lead with Poconos/Pennsylvania, or present yourself as national/remote?
12. Product naming and status: is it "Norma", "Norma Suite", or "NormaTC"? Are Norma, Norma Intake, UtilitySheet, and Client Portal all live and something you're comfortable pointing prospects to?
13. Will you take a new real founder photo (business-casual, plain background)?
14. Referral partners: keep the TC-branded tier names on `/mytcacademy` only? Is a page for the prospective second partner (Mandy) still planned?
