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
