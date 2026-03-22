# SEO Audit

## Summary
This audit focused on building a stronger technical and on-page SEO foundation for MULTIMEDIUM without using spammy tactics or bloated content. The site already had a good page base, but the SEO setup was inconsistent across routes and the real-estate niche structure was not as clear as it should be.

Validation completed:
- `pnpm lint`
- `pnpm build`

## What Was Wrong
- Metadata quality was uneven. Many pages had a title, description, and canonical URL, but Open Graph, Twitter, and page-specific keyword targeting were not consistently strong.
- Structured data was too thin. The site had a small amount of JSON-LD, but not enough local/business detail and not enough page-level service/FAQ/breadcrumb support.
- The real-estate service structure was muddled by the `/lp/real-estate` URL. That worked as a landing page, but it was not the clearest long-term SEO path.
- Internal linking under-served the highest-value niches. The homepage and industry hub were not doing enough to reinforce real estate, transaction coordinator, and coach/brokerage topic clusters.
- The sitemap missed some relevant indexable pages and still reflected the legacy real-estate landing-page path.
- Work filter pages could generate indexable query-string variants with overlapping intent.
- Several image alt attributes were generic and could do a better job describing the asset in context.
- Copy was niche-aware in places, but the top-level structure still needed clearer intent separation between:
  - real estate website design
  - transaction coordinator website design
  - real estate coaching / brokerage websites
- Analytics was present via Vercel, but no Search Console verification or broader search-performance setup was found in the repo.

## What Changed
### Shared SEO foundation
- Added [lib/seo.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/lib/seo.ts) to standardize page metadata.
- Expanded [lib/site.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/lib/site.ts) with business/contact/location constants and absolute URL helpers.
- Upgraded [lib/structuredData.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/lib/structuredData.ts) with:
  - Organization
  - ProfessionalService
  - WebSite
  - BreadcrumbList
  - FAQPage
  - Service schema helpers
- Added [components/seo/JsonLd.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/components/seo/JsonLd.tsx) for reusable JSON-LD output.
- Strengthened global metadata in [app/layout.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/layout.tsx).

### Route and content structure
- Created a stronger permanent real-estate URL:
  - [app/industries/real-estate-professionals/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/industries/real-estate-professionals/page.tsx)
- Added a new niche page for coaches and brokerage-adjacent authority brands:
  - [app/industries/real-estate-coaches/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/industries/real-estate-coaches/page.tsx)
- Replaced the old landing-page route with a permanent redirect:
  - [app/lp/real-estate/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/lp/real-estate/page.tsx)
- Improved homepage internal links and niche signaling:
  - [app/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/page.tsx)
- Updated the industry hub and footer so the main SEO pathways now reinforce the new structure:
  - [app/industries/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/industries/page.tsx)
  - [components/footer/Footer.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/components/footer/Footer.tsx)

### Key page improvements
- Improved metadata quality on major pages including:
  - homepage
  - services index
  - website service page
  - landing page service page
  - growth retainer page
  - about
  - contact
  - resources hub
  - TC packages
  - home services / trades / HOA industry pages
  - work archive and project pages
- Added page-level JSON-LD on important money pages and FAQ-heavy pages, especially:
  - real estate professionals
  - real estate coaches
  - transaction coordinators
  - website service page
- Updated work filter metadata so filtered query-string views are `noindex, follow` instead of competing as thin/duplicate archive variants.

### Crawl assets
- Updated [app/sitemap.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/sitemap.ts) to include the new strategic pages and remove the legacy real-estate route from the sitemap.
- Existing [app/robots.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/robots.ts) remained valid and continues to point to the sitemap.

### Accessibility and image semantics
- Improved several alt attributes, including:
  - [components/work/ProjectCard.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/components/work/ProjectCard.tsx)
  - [app/work/[slug]/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/work/[slug]/page.tsx)
  - [app/about/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/about/page.tsx)
  - [components/hero/StatementHero.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/components/hero/StatementHero.tsx)

## What Still Needs Manual Input
- Confirm the canonical production domain in `NEXT_PUBLIC_SITE_URL` if it differs from `https://www.multimedium.dev`.
- Add or confirm social profile URLs in env vars if you want richer `sameAs` schema output:
  - `NEXT_PUBLIC_LINKEDIN_URL`
  - `NEXT_PUBLIC_GITHUB_URL`
  - `NEXT_PUBLIC_FACEBOOK_URL`
- If you want stronger LocalBusiness markup, provide a real business address or more exact service-area language. I only used truthful high-level location data from the repo.
- Add genuine testimonials, case studies, and market-specific proof for the real-estate and TC pages. This is one of the biggest remaining trust signals.
- Decide which local areas you actually want to own organically before creating any local service pages. Do not create city pages without real proof or relevance.
- Set up Google Search Console verification and submit the sitemap manually.
- If you want GA4 or Google Tag Manager in addition to Vercel Analytics, that needs your property/container IDs.

## Analytics / Search Setup Found
- Present:
  - Vercel Analytics in [app/layout.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/layout.tsx)
  - Vercel Speed Insights in [app/layout.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/layout.tsx)
  - Conversion tracking event after contact submission in [app/contact/thanks/ContactThanksTracker.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/contact/thanks/ContactThanksTracker.tsx)
- Not found in repo:
  - Search Console verification token
  - Google Analytics / GA4 tag
  - Google Tag Manager container

## Page Targets
| Page | Primary intent / target |
| --- | --- |
| `/` | real estate web design, transaction coordinator websites, niche web design studio |
| `/services` | web design services, landing pages, growth retainers |
| `/services/website` | website build / redesign service |
| `/services/landing-pages` | landing page design, lead generation funnels |
| `/services/growth-retainers` | SEO and website growth retainers |
| `/industries/real-estate-professionals` | real estate website design, brokerage website design |
| `/industries/transaction-coordinators` | web design for transaction coordinators, TC website design |
| `/industries/real-estate-coaches` | website design for real estate coaches, consultant/brokerage authority sites |
| `/tc-packages` | transaction coordinator website packages |
| `/resources` | transaction coordinator resources |
| `/resources/tc-task-list` | transaction coordinator task list template |
| `/resources/tc-cover-sheet` | transaction coordinator cover sheet template |
| `/resources/tc-intake-checklist` | transaction coordinator intake checklist |
| `/work` | case studies / proof |
| `/about` | brand trust / founder credibility |
| `/contact` | conversion / inquiry |

## Second Pass Findings
This second pass was harsher and focused less on whether the site had metadata at all, and more on whether each indexable page actually deserves to rank for the terms it hints at.

### High impact
- `Code-level, fixed:` The portfolio was still leaking topical dilution through the sitemap and project metadata. [app/sitemap.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/sitemap.ts) had been listing every project route, including off-niche and non-featured work. I changed that so only featured case studies are in the sitemap, and I updated [app/work/[slug]/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/work/[slug]/page.tsx) so non-featured project pages are `noindex, follow`.
- `Code-level, fixed:` Filtered work archives were still self-canonicalizing query-string URLs even though they were already treated as thin variants. I updated [app/work/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/work/page.tsx) so filtered views canonicalize to `/work`, which is a cleaner consolidation signal.
- `Code-level, fixed:` Several commercially important pages were still too generic in their H1 and intro copy. I tightened targeting on [app/services/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/services/page.tsx), [app/services/landing-pages/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/services/landing-pages/page.tsx), [app/services/growth-retainers/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/services/growth-retainers/page.tsx), [app/industries/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/industries/page.tsx), [app/resources/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/resources/page.tsx), and [app/tc-packages/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/tc-packages/page.tsx) so the primary keyword intent is clearer above the fold.
- `Code-level, fixed:` Schema coverage was still patchy on pages already trying to rank. I expanded [lib/structuredData.ts](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/lib/structuredData.ts) and added breadcrumb / collection / service / FAQ / creative-work schema to key pages including [app/work/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/work/page.tsx), [app/work/[slug]/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/work/[slug]/page.tsx), [app/services/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/services/page.tsx), [app/services/landing-pages/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/services/landing-pages/page.tsx), [app/services/growth-retainers/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/services/growth-retainers/page.tsx), [app/industries/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/industries/page.tsx), [app/resources/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/resources/page.tsx), [app/resources/tc-task-list/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/resources/tc-task-list/page.tsx), [app/resources/tc-cover-sheet/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/resources/tc-cover-sheet/page.tsx), [app/resources/tc-intake-checklist/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/resources/tc-intake-checklist/page.tsx), and [app/tc-packages/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/tc-packages/page.tsx).
- `Marketing/content/business input needed:` The biggest remaining weakness is still evidence, not markup. The real-estate, TC, coach, trades, and home-services pages make credible promises, but several still rely on positioning language more than hard proof. To rank well for commercial terms, these pages need stronger niche-specific testimonials, before/after stories, market-specific outcomes, screenshots, and named case studies. Without that, some pages still read like polished sales pages rather than obvious best results.

### Medium impact
- `Code-level, fixed:` Internal linking was still too light in the shared navigation for non-homepage discovery. I added a persistent `Resources` link in [components/footer/Footer.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/components/footer/Footer.tsx) and tightened contextual linking inside the work archive hero in [app/work/page.tsx](/Users/haydn/Documents/web-design-portfolio/new-website/next-app/app/work/page.tsx).
- `Marketing/content/business input needed:` `/industries/trades` and `/industries/home-services` still sit close together in intent. They are not duplicates, but the differentiation is not strong enough yet to confidently expect both to perform unless you decide exactly how you want to split them:
  - `trades` = contractors / remodeling / specialty trades
  - `home-services` = HVAC / plumbing / electrical / urgent in-home service
  If you want both pages indexed long term, they each need distinct proof, examples, and language that makes the split obvious.
- `Marketing/content/business input needed:` `/services`, `/services/website`, and some niche industry pages still compete around broad “web design” intent. The fix is not more metadata. It is stronger offer positioning:
  - what is the flagship offer?
  - which vertical is the real growth bet?
  - which supporting pages are sales support pages vs standalone ranking pages?
- `Marketing/content/business input needed:` The resource pages are better structured now, but they still need a clearer business model behind them if you want them to become real SEO assets. Right now they are useful, but they are still mostly lead magnets. To earn stronger rankings, each should eventually have richer explanatory copy, use cases, screenshots, and deeper “how to use this” guidance.

### Low impact
- `Code-level, fixed:` The work archive heading previously undersold the site’s niche focus. That is now sharper, but the page is still primarily a proof page, not a major keyword target. That is fine.
- `Code-level, fixed:` Resource and package pages now send clearer topical signals through headings and schema, which should help understanding and SERP presentation over time.
- `Marketing/content/business input needed:` If local SEO is a real growth channel, the site still needs a deliberate local strategy rather than occasional Poconos mentions. That means deciding whether you want to compete as:
  - a Poconos / NEPA web designer
  - a remote specialist for real-estate-adjacent businesses
  - both, with clearly separated page logic
  Right now the positioning hints at both, which is acceptable, but not especially sharp.

### Second Pass Bottom Line
- The first pass mostly solved “missing SEO setup.”
- The second pass exposed “page deserves to rank” problems.
- The technical dilution issue around project pages is now materially better.
- The next real gains will come from sharper offer hierarchy and stronger proof, not more tags.

Validation completed after second-pass fixes:
- `pnpm lint`
- `pnpm build`
