# Multimedium Editorial Casebook Redesign

Date: 2026-07-17
Status: Approved for implementation planning

## Objective

Make Multimedium a more focused and persuasive web-design portfolio without replacing its established Editorial Trust identity.

The redesign should help a transaction coordinator or real-estate professional answer four questions quickly:

1. Does Haydn understand my industry?
2. Can he produce credible client work?
3. Which service fits my situation?
4. What is the honest next step?

## Success Criteria

- The homepage moves from positioning to real client proof immediately.
- The main portfolio is clearly separated from products and fictional concepts.
- Case studies use only verifiable project evidence.
- Calls to action describe an inquiry, not a booking flow that does not exist.
- Mobile navigation and fixed calls to action never overlap.
- The existing typography, palette, hero, and editorial visual language remain recognizable.
- Desktop and mobile builds pass production validation and focused browser review.

## Approved Direction

The approved direction is an editorial casebook.

It preserves the warm paper background, near-black ink, ochre accent, Fraunces display typography, mono metadata, ruled dividers, restrained motion, and personal founder presence. It changes the order and emphasis of the experience so that commissioned work becomes the primary evidence.

The site should feel like a curated professional publication rather than an exhaustive archive.

## Information Architecture

### Main navigation

The primary navigation contains:

- Home
- Work
- Lab
- Services
- Industries
- About

The existing project-inquiry action remains visually separate from these destinations.

### Work

`/work` becomes a client-only portfolio.

It shows commissioned projects as large editorial case-study entries. Products and concept work do not appear in the main project sequence. Industry query filtering continues to narrow real client work where supported.

The page language must not promise measurable business outcomes unless the associated case studies contain actual measurements.

### Lab

`/lab` becomes the home for:

1. Products built in-house
2. Clearly labeled concept and demo projects

Products appear before concepts because they demonstrate real domain expertise and implementation depth. Concepts demonstrate visual range but must remain explicitly identified as fictional or self-initiated work.

The Lab is linked from the main navigation, Work page, footer, and sitemap.

## Homepage Structure

The approved homepage structure is Proof First:

1. Existing statement hero
2. Two flagship real-client projects
3. Dark industry-depth statement
4. Concise ruled service ledger
5. Final project-inquiry call to action

### Hero

Preserve the current composition, portrait, positioning statement, status label, typography, and visual treatment.

Change the primary action from “Book a free discovery call” to “Start a project.” Keep “View selected work” as the secondary action.

### Selected work

Show two flagship client projects immediately after the hero. Use the existing large FeaturedProject treatment.

The section introduction should emphasize commissioned client work and visible design decisions. It must not make unsupported claims about measurable outcomes.

### Industry depth

Keep the existing dark, full-width industry statement. It explains that Multimedium builds from inside transaction-coordination workflows and uses products such as UtilitySheet and Norma as supporting domain evidence.

Products remain supporting evidence here, not client portfolio entries.

### Service ledger

Replace the separate audience-path, four-tier pricing-teaser, and two-column service sections with one concise ruled ledger.

The ledger should include:

- TC website packages, including the starting price
- Custom websites
- Landing pages
- Hosting, maintenance, and retainers

Detailed pricing and audience information remain on dedicated pages.

### Final action

End with one project-inquiry action using “Start a project” or equivalent truthful language.

## Case-Study Proof System

Client case studies should demonstrate value through verified evidence and design reasoning.

### Verified proof strip

When supported by repository data, show:

- Commissioned client project
- Client approval to feature
- Live status and live link
- Role and scope
- Project year
- Visible qualification or conversion structure

Do not infer performance from the existence of a design element.

### Editorial narrative

Each case study should prioritize:

1. Brief and constraint
2. Consequential design decisions
3. Delivered result

The decisions section explains why important choices were made. It should not repeat a list of deliverables without interpreting them.

### Results language

Replace broad “Results & impact” language with “Delivered result” or “Project facts” when no measured results exist.

Structural facts such as page count, live status, implemented pathways, integrations, and mobile-first delivery are acceptable when they are directly verifiable.

### Future testimonials and measurements

Testimonial and measured-outcome sections render only when real data exists.

A testimonial requires:

- The actual quote
- The person’s name
- Their role or relationship to the project

A measured result requires:

- The metric
- The measurement period
- A credible source or client confirmation

Missing proof never creates an empty placeholder.

## Conversion Language

No scheduling system will be added in this redesign.

When `NEXT_PUBLIC_SCHEDULING_URL` is absent, use:

- Start a project
- Tell me about your project
- Send project details

Do not use “Book a call” or “Book a free discovery call” for links that open the inquiry form.

If a scheduling URL is configured in the future, components that already support it may use “Book a call” for the direct scheduling action.

## Mobile Behavior

### Default state

The global mobile bar contains:

- Browse work
- Start a project

### Navigation open

The mobile navigation backdrop and drawer render above the global sticky action bar. The sticky bar must not remain visually exposed or interactive over the drawer.

### Contact routes

The global sticky action bar remains hidden on `/contact` and `/contact/thanks`.

The contact form is the sole primary action on those routes.

### Development-only controls

Next.js development controls are not part of the production interface and should not drive product changes. Verification should distinguish those controls from site-owned fixed elements.

## Components and Data Boundaries

### Existing components to preserve

- `StatementHero`
- `FeaturedProject`
- `ProjectCard`
- `Section`
- `SectionOpener`
- Ruled editorial rows and lists
- Existing CTA variants

### Components and routes to change

- `app/page.tsx`: reorder and reduce homepage sections
- `app/work/page.tsx`: render client work only and introduce the Lab path
- `app/lab/page.tsx`: new products-and-concepts archive
- `app/work/[slug]/page.tsx`: add verified proof and revise results language
- `Navbar`, `MobileStickyCTA`, and `Footer`: add Lab and truthful fallback actions
- `StatementHero` and shared marketing CTAs: truthful inquiry language
- `app/sitemap.ts`: include Lab

### Data sources

Continue using the existing classification selectors:

- `getClientProjects`
- `getClientProjectsByIndustry`
- `getProductProjects`
- `getConceptProjects`
- `getConceptProjectsByIndustry`

Do not duplicate project classification logic in page components.

## Error and Empty States

- Unknown project slugs continue to use the existing not-found behavior.
- Empty Lab categories do not render an empty section.
- Industry-filtered Work pages render only matching client work.
- Missing testimonials and measurements render nothing.
- Missing scheduling configuration produces an inquiry action, not a broken or mislabeled booking action.
- Existing external concept links retain their external-link behavior.

## Accessibility

- Preserve the skip link, semantic heading order, and current visible focus treatment.
- Keep mobile controls at the existing touch-target size.
- Ensure the open navigation prevents interaction with obscured page controls.
- Keep fixed elements from covering page content or form controls.
- Preserve reduced-motion handling in existing animated components.
- Verify contrast and legibility for small mono labels and muted supporting text.

## Verification

### Static verification

- Run lint on changed files or the repository lint command.
- Run the production build.
- Confirm no newly introduced broken internal links.

### Browser verification

Review at a desktop viewport and a 390-pixel mobile viewport:

- Homepage
- Work
- Lab
- One real-client case study
- Mobile homepage
- Open mobile navigation
- Contact

Confirm:

- Homepage order matches the approved structure.
- Only client projects appear on Work.
- Products and concepts appear on Lab with accurate labels.
- Client case studies contain no unsupported performance claims.
- Inquiry actions use truthful language.
- Mobile fixed layers do not overlap.
- Contact routes contain no global sticky action bar.

## Out of Scope

- Adding a scheduling provider
- Inventing or drafting client testimonials
- Claiming unmeasured conversion or revenue results
- Replacing the established Editorial Trust identity
- Redesigning every service, industry, or resource page
- Adding new backend capabilities
- Deploying or pushing changes without separate authorization
