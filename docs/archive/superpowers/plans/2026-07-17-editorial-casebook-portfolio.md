# Editorial Casebook Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refocus Multimedium around commissioned client proof, separate products and concepts into a Lab, make case-study evidence honest, and align every fallback call to action with the existing inquiry flow.

**Architecture:** Preserve the existing Next.js App Router structure and Editorial Trust components. Recompose the homepage and Work page from existing `FeaturedProject`, `ProjectCard`, ruled-list, and CTA primitives; add one server-rendered `/lab` route; and derive client proof directly from the existing `Project` classification, approval copy, live URL, role, and year. Keep scheduling behavior conditional on `NEXT_PUBLIC_SCHEDULING_URL`, with truthful inquiry labels whenever that variable is absent.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Base UI Dialog, Tabler Icons, pnpm.

---

## File Structure

### Create

- `app/lab/page.tsx` — server-rendered archive for in-house products and clearly labeled concepts.

### Modify

- `app/page.tsx` — Proof First homepage composition.
- `app/work/page.tsx` — client-only portfolio and Lab handoff.
- `app/work/[slug]/page.tsx` — classification-aware navigation, verified client proof, and truthful project-facts language.
- `app/services/page.tsx` — inquiry fallback label.
- `app/sitemap.ts` — Lab discovery.
- `components/hero/StatementHero.tsx` — truthful primary action.
- `components/marketing/HowItWorks.tsx` — truthful inquiry action.
- `components/nav/Navbar.tsx` — Lab navigation, inquiry fallback label, and corrected mobile overlay stacking.
- `components/nav/MobileStickyCTA.tsx` — truthful inquiry fallback label.
- `components/footer/Footer.tsx` — Lab discovery; retain booking language only inside the existing scheduling-URL conditional.

### Preserve

- `content/projects.ts` — do not rewrite project history or invent testimonial/result data in this slice.
- `components/work/ProjectCard.tsx` — reuse both existing card variants.
- `components/sections/Editorial.tsx` — reuse the existing mono-label and ruled-list system.
- `components/marketing/CTA.tsx` — reuse the current CTA variants.

## Task 1: Create the implementation branch

**Files:**

- No product files

- [ ] **Step 1: Confirm the design commit and unrelated worktree state**

Run:

```powershell
git status --short
git log -2 --oneline
```

Expected:

- `docs/superpowers/specs/2026-07-17-editorial-casebook-portfolio-design.md` is committed.
- Existing unrelated changes remain limited to `.claude/settings.local.json` and `ai-business-context.md`.

- [ ] **Step 2: Create the focused branch**

Run:

```powershell
git switch -c codex/editorial-casebook-portfolio
```

Expected: branch `codex/editorial-casebook-portfolio` is checked out.

## Task 2: Make navigation and inquiry language truthful

**Files:**

- Modify: `components/nav/Navbar.tsx:11-216`
- Modify: `components/nav/MobileStickyCTA.tsx:8-64`
- Modify: `components/footer/Footer.tsx:14-24`
- Modify: `components/hero/StatementHero.tsx:74-82`
- Modify: `components/marketing/HowItWorks.tsx:55-65`
- Modify: `app/services/page.tsx:190-198`

- [ ] **Step 1: Record the failing content audit**

Run:

```powershell
rg -n "Book a free discovery call|Book a call" app components -g "*.tsx"
```

Expected before implementation:

- Contact-form links are mislabeled in `StatementHero`, `HowItWorks`, `app/page.tsx`, `app/services/page.tsx`, `app/work/page.tsx`, `Navbar`, and `MobileStickyCTA`.
- Conditional scheduling links also appear in `Navbar`, `MobileStickyCTA`, `Footer`, and `app/contact/page.tsx`; those conditional labels are valid and must remain.

- [ ] **Step 2: Add Lab and correct the Navbar fallback**

In `components/nav/Navbar.tsx`, replace `navLinks` with:

```tsx
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/lab", label: "Lab" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
];
```

Keep the scheduling branches unchanged, but change both non-scheduling fallback labels from:

```tsx
Book a call
```

to:

```tsx
Start a project
```

Raise the dialog layers above the sticky CTA:

```tsx
<Dialog.Backdrop
    className="data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-[80] bg-overlay backdrop-blur-sm md:hidden"
/>
<Dialog.Popup
    className="data-open:animate-in data-closed:animate-out data-open:fade-in-0 data-closed:fade-out-0 data-open:slide-in-from-right-2 data-closed:slide-out-to-right-2 fixed inset-y-0 right-0 z-[90] w-full max-w-sm border-l border-border/40 bg-background/95 shadow-[var(--shadow-elevated)] outline-none supports-backdrop-filter:backdrop-blur-xl md:hidden"
>
```

- [ ] **Step 3: Correct the global mobile fallback**

In `components/nav/MobileStickyCTA.tsx`, keep the scheduling anchor labeled `Book a call`. Change only the fallback link:

```tsx
<Link
    href={primaryHref}
    className="btn-primary touch-target flex-1 justify-center gap-1.5 px-4 text-sm"
>
    Start a project
    <IconArrowRight className="h-4 w-4" stroke={1.8} />
</Link>
```

Do not change `hiddenPathPrefixes`; `/contact` and `/contact/thanks` must continue returning `null`.

- [ ] **Step 4: Add Lab to the footer**

In `components/footer/Footer.tsx`, place Lab directly after Work:

```tsx
const exploreLinks = [
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/work", label: "Work" },
    { href: "/lab", label: "Lab" },
    { href: "/tools", label: "Tools" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact?source=footer", label: "Contact" },
];
```

Leave the conditional footer scheduling link labeled `Book a call`; it only renders when `schedulingUrl` exists.

- [ ] **Step 5: Correct static contact-form actions**

Use these exact label replacements:

```tsx
// components/hero/StatementHero.tsx
Start a project

// components/marketing/HowItWorks.tsx
Start a project

// app/services/page.tsx
primary={{ label: "Start a project", href: "/contact?source=services" }}
```

Do not change the destinations or source parameters.

- [ ] **Step 6: Run focused static verification**

Run:

```powershell
pnpm exec eslint components/nav/Navbar.tsx components/nav/MobileStickyCTA.tsx components/footer/Footer.tsx components/hero/StatementHero.tsx components/marketing/HowItWorks.tsx app/services/page.tsx
rg -n "Book a free discovery call" app components -g "*.tsx"
```

Expected:

- ESLint exits `0`.
- The second command returns no matches.

- [ ] **Step 7: Commit navigation and inquiry behavior**

Run:

```powershell
git add components/nav/Navbar.tsx components/nav/MobileStickyCTA.tsx components/footer/Footer.tsx components/hero/StatementHero.tsx components/marketing/HowItWorks.tsx app/services/page.tsx
git commit -m "Refine navigation and inquiry actions"
```

## Task 3: Recompose the homepage around proof

**Files:**

- Modify: `app/page.tsx:1-306`

- [ ] **Step 1: Record the current section order**

Run:

```powershell
rg -n "Who it's for|Selected work|Pricing|Tools built from inside|Ways to work together|Let's talk" app/page.tsx
```

Expected before implementation: audience paths and pricing appear before the industry-depth and service sections.

- [ ] **Step 2: Replace the service and audience data with one ledger**

Remove `nichePages` and `packageTeasers`. Replace `services` with:

```tsx
const services = [
    {
        title: "TC Website Packages",
        description: "Presence, Starter, Growth, and Pro tiers built around how transaction coordinator businesses actually work.",
        href: "/tc-packages",
        meta: "From $595",
    },
    {
        title: "Custom Websites",
        description: "A complete website or redesign for agents, teams, brokerages, coaches, and select service businesses.",
        href: "/services/website",
        meta: "4–6 weeks",
    },
    {
        title: "Landing Pages",
        description: "Focused pages for campaigns, recruiting, referral partners, and single-offer conversion paths.",
        href: "/services/landing-pages",
        meta: "1–3 weeks",
    },
    {
        title: "Hosting, Maintenance & Retainers",
        description: "Ongoing support that keeps the site fast, useful, and easier to improve after launch.",
        href: "/services/growth-retainers",
        meta: "Ongoing",
    },
];
```

- [ ] **Step 3: Render two flagship projects immediately after the hero**

Change:

```tsx
const featuredProjects = getHomeFeaturedProjects().slice(0, 3);
```

to:

```tsx
const featuredProjects = getHomeFeaturedProjects().slice(0, 2);
```

Move the existing Selected Work section so it is the first section after `<StatementHero />`. Use:

```tsx
<Section id="work" size="wide" padding="large">
    <AnimatedSection>
        <SectionOpener
            eyebrow="Selected work"
            eyebrowIndex="01"
            title="Real client work, shown big."
            lead="Commissioned websites with clear briefs, deliberate design decisions, and live results you can inspect."
            action={
                <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                    Browse client work
                    <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke={1.9} />
                </Link>
            }
        />
    </AnimatedSection>

    <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
        {featuredProjects.map((project, index) => (
            <FeaturedProject
                key={project.slug}
                project={project}
                index={index}
                reverse={index % 2 === 1}
            />
        ))}
    </div>
</Section>
```

- [ ] **Step 4: Keep industry depth as the contrast section**

Place the existing dark `Tools built from inside the industry` section immediately after Selected Work. Update its tools link to point to Lab:

```tsx
<Link
    href="/lab"
    className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-ink-foreground transition-colors hover:text-flood"
>
    Explore the Lab
    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
</Link>
```

- [ ] **Step 5: Replace the remaining middle sections with one ruled service ledger**

After the dark section, render:

```tsx
<Section padding="large">
    <AnimatedSection>
        <SectionOpener
            eyebrow="Ways to work together"
            eyebrowIndex="02"
            title="Choose the simplest path that fits."
            lead="Start with a focused TC package, a custom site, a campaign page, or ongoing support."
        />
    </AnimatedSection>

    <AnimatedSection className="mt-12">
        <RuledList>
            {services.map((service, index) => (
                <RuledRow
                    key={service.title}
                    index={String(index + 1).padStart(2, "0")}
                    title={service.title}
                    meta={service.meta}
                    action={
                        <Link
                            href={service.href}
                            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                            Learn more
                            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    }
                >
                    {service.description}
                </RuledRow>
            ))}
        </RuledList>
    </AnimatedSection>
</Section>
```

Remove the old audience-path section, package-price ledger, two-column service section, `ServiceRow` helper, and their unused imports.

- [ ] **Step 6: Correct the homepage closer**

Use:

```tsx
<CTAFlooded
    eyebrow="Let's talk"
    title="Ready for a website that brings in better leads?"
    body="Tell me what you're working on. I'll reply within one business day with a clear next step."
    primary={{ label: "Start a project", href: "/contact?source=home-cta" }}
    secondary={{ label: "View selected work", href: "/work" }}
/>
```

- [ ] **Step 7: Verify the homepage file**

Run:

```powershell
pnpm exec eslint app/page.tsx
rg -n "Who it's for|Transaction coordinator website packages|Book a free discovery call" app/page.tsx
```

Expected:

- ESLint exits `0`.
- The removed standalone section headings and inaccurate CTA label do not appear.

- [ ] **Step 8: Commit the Proof First homepage**

Run:

```powershell
git add app/page.tsx
git commit -m "Refocus homepage on client proof"
```

## Task 4: Split the client portfolio from the Lab

**Files:**

- Modify: `app/work/page.tsx:1-207`
- Create: `app/lab/page.tsx`
- Modify: `app/sitemap.ts:1-116`

- [ ] **Step 1: Record the missing route and mixed portfolio**

Run:

```powershell
Test-Path app/lab/page.tsx
rg -n "Internal products|Concept & demo designs|getProductProjects|getConceptProjects" app/work/page.tsx
```

Expected before implementation:

- `Test-Path` returns `False`.
- Work imports and renders product and concept sections.

- [ ] **Step 2: Make Work client-only**

In `app/work/page.tsx`:

- Remove `ProjectCard`, `getConceptProjectsByIndustry`, and `getProductProjects` imports.
- Keep `FeaturedProject` and `getClientProjectsByIndustry`.
- Delete `productProjects`, `conceptProjects`, `getGridCols`, and both non-client sections.
- Change the default description to:

```tsx
"Commissioned website projects for real estate professionals, transaction coordinators, and service businesses—shown with honest briefs, design decisions, and live project facts."
```

Use this unfiltered hero support copy:

```tsx
{indMeta?.subheading ?? "Commissioned websites for real businesses—each shown with the brief, constraints, decisions, and delivered result."}
```

After the client-project section and before the CTA, add:

```tsx
<section className="bg-surface-1">
    <Section size="wide" padding="large">
        <AnimatedSection>
            <SectionOpener
                eyebrow="Products & experiments"
                eyebrowIndex="02"
                title="Looking for the products and concept work?"
                lead="The Lab contains software built in-house and clearly labeled design experiments. They demonstrate domain depth and range without being presented as client commissions."
                action={
                    <Link
                        href="/lab"
                        className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                    >
                        Explore the Lab
                        <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke={1.9} />
                    </Link>
                }
            />
        </AnimatedSection>
    </Section>
</section>
```

Add `IconArrowUpRight` to the Tabler import. Change the Work CTA primary label to `Start a project`.

- [ ] **Step 3: Create the Lab route**

Create `app/lab/page.tsx` with:

```tsx
import type { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionOpener } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getConceptProjects, getProductProjects } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
    title: "The Lab",
    description:
        "Products built by Multimedium and clearly labeled concept website experiments exploring design, motion, and conversion paths.",
    path: "/lab",
});

export default function LabPage() {
    const productProjects = getProductProjects();
    const conceptProjects = getConceptProjects();
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Lab", path: "/lab" },
        ]),
        getCollectionPageStructuredData({
            name: "The Multimedium Lab",
            description:
                "In-house products and clearly labeled concept website experiments by Multimedium.",
            path: "/lab",
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section size="wide" className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <p className="mono-label mb-6">Built, tested, explored</p>
                    <h1 className="max-w-4xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem] display-balance">
                        Products and design <span className="text-gradient">experiments.</span>
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                        Software built from inside real-estate operations, followed by self-initiated concept work that explores visual range. Every project is labeled for exactly what it is.
                    </p>
                </AnimatedSection>
            </Section>

            {productProjects.length > 0 && (
                <section className="bg-surface-1 mt-16 md:mt-24">
                    <Section size="wide" padding="large">
                        <AnimatedSection>
                            <SectionOpener
                                eyebrow="Built in-house"
                                eyebrowIndex="01"
                                title="Products & tools"
                                lead="Working software designed and built for transaction coordination and real-estate operations."
                            />
                        </AnimatedSection>
                        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
                            {productProjects.map((project, index) => (
                                <ProjectCard key={project.slug} project={project} index={index} />
                            ))}
                        </div>
                    </Section>
                </section>
            )}

            {conceptProjects.length > 0 && (
                <Section size="wide" padding="large">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Design range"
                            eyebrowIndex="02"
                            title="Concept & demo studies"
                            lead="Self-initiated explorations for fictional brands. These are not client commissions, and any names, statistics, or testimonials inside the mockups are placeholder content."
                        />
                    </AnimatedSection>
                    <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {conceptProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            <CTARuled
                eyebrow="Client work"
                title="Looking for commissioned projects?"
                body="The main portfolio is reserved for real client engagements, live deliverables, and verifiable project facts."
                primary={{ label: "View client work", href: "/work" }}
                secondary={{ label: "Start a project", href: "/contact?source=lab-cta" }}
            />
        </>
    );
}
```

- [ ] **Step 4: Add Lab to the sitemap**

In `app/sitemap.ts`, place this route after `/work`:

```tsx
{
    url: `${siteUrl}/lab`,
    changeFrequency: "monthly",
    priority: 0.72,
    lastModified,
},
```

- [ ] **Step 5: Verify route separation**

Run:

```powershell
pnpm exec eslint app/work/page.tsx app/lab/page.tsx app/sitemap.ts
rg -n "getProductProjects|getConceptProjects|Internal products|Concept & demo designs" app/work/page.tsx
rg -n "getProductProjects|getConceptProjects|Products & tools|Concept & demo studies" app/lab/page.tsx
```

Expected:

- ESLint exits `0`.
- Work has no product/concept selectors or sections.
- Lab contains both selectors and both accurately labeled sections.

- [ ] **Step 6: Commit the Work/Lab split**

Run:

```powershell
git add app/work/page.tsx app/lab/page.tsx app/sitemap.ts
git commit -m "Separate client work from the Lab"
```

## Task 5: Add verified client proof to case studies

**Files:**

- Modify: `app/work/[slug]/page.tsx:1-509`

- [ ] **Step 1: Record unsupported client-results rendering**

Run:

```powershell
rg -n "Results & impact|hasResults|project.outcomes|visibleProjects = projects.filter" 'app/work/[slug]/page.tsx'
```

Expected before implementation: all project classifications render `outcomes` under “Results & impact,” and adjacent navigation uses the global featured set.

- [ ] **Step 2: Import classification selectors**

Replace the project-data import with:

```tsx
import {
    getAllProjectSlugs,
    getClientProjects,
    getConceptProjects,
    getProductProjects,
    getProjectBySlug,
    projects,
} from "@/content/projects";
```

- [ ] **Step 3: Add classification-aware state and verified proof**

Immediately after `const hasProcess = project.process.length > 0;`, replace the current `hasResults` and `hasTestimonial` declarations with the complete block below. This block must appear before `tocItems` so the TOC can use `hasProjectFacts`. Remove the later standalone `isConcept` declaration and the later global `visibleProjects`/adjacent-project block.

```tsx
const isClient = project.kind === "Client";
const isProduct = project.kind === "Product";
const isConcept = project.kind === "Concept";
const hasProjectFacts = !isClient && project.outcomes.length > 0;
const hasTestimonial = Boolean(project.testimonial);

const collectionHref = isClient ? "/work" : "/lab";
const collectionLabel = isClient ? "Back to work" : "Back to the Lab";
const visibleProjects = isClient
    ? getClientProjects()
    : isProduct
        ? getProductProjects()
        : isConcept
            ? getConceptProjects()
            : projects.filter((item) => item.kind === project.kind);
const currentIndex = visibleProjects.findIndex((item) => item.slug === slug);
const prevProject = currentIndex > 0 ? visibleProjects[currentIndex - 1] : null;
const nextProject =
    currentIndex >= 0 && currentIndex < visibleProjects.length - 1
        ? visibleProjects[currentIndex + 1]
        : null;

const verifiedProof = isClient
    ? [
        {
            value: "Commissioned",
            label: "Project type",
            description: "Real client engagement",
        },
        project.caseStudy?.approval
            ? {
                value: "Approved",
                label: "Portfolio permission",
                description: "Client-approved feature",
            }
            : null,
        project.externalUrl
            ? {
                value: "Live",
                label: "Current status",
                description: "Public website available",
            }
            : null,
        {
            value: project.year,
            label: "Delivered",
            description: project.role,
        },
    ].filter(Boolean) as {
        value: string;
        label: string;
        description: string;
    }[]
    : [];
```

Remove the old global `visibleProjects` block and do not duplicate it later in the file.

- [ ] **Step 4: Update TOC and collection links**

Use:

```tsx
hasProjectFacts ? { href: "#project-facts", label: "Project facts" } : null,
```

instead of the old Results item.

Change the hero back link to:

```tsx
<Link
    href={collectionHref}
    className="touch-target mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
>
    <IconArrowLeft className="w-4 h-4" stroke={1.5} />
    {collectionLabel}
</Link>
```

Change the breadcrumb collection entry to:

```tsx
{ name: isClient ? "Case Studies" : "Lab", path: collectionHref },
```

- [ ] **Step 5: Render verified proof after the hero image**

Immediately after the hero-image `Section`, add:

```tsx
{verifiedProof.length > 0 && (
    <Section size="wide" padding="none" className="mb-16 md:mb-24">
        <AnimatedSection>
            <div className="grid border-y border-rule sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-rule">
                {verifiedProof.map((item) => (
                    <div key={item.label} className="py-6 sm:px-6 lg:first:pl-0">
                        <p className="font-display text-2xl text-foreground">{item.value}</p>
                        <p className="mono-label mt-2 text-muted-foreground">{item.label}</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </Section>
)}
```

- [ ] **Step 6: Stop rendering unsupported client outcomes**

Replace the Outcomes section with:

```tsx
{hasProjectFacts && (
    <Section id="project-facts">
        <AnimatedSection>
            <h2 className="mb-12 font-display text-3xl text-foreground sm:text-4xl">
                Project facts
            </h2>
        </AnimatedSection>

        <StaggerContainer className="grid border-y border-rule md:grid-cols-3 md:divide-x md:divide-rule" staggerDelay={0.1}>
            {project.outcomes.map((outcome, index) => (
                <StaggerItem key={index}>
                    <div className="py-8 md:px-8 md:first:pl-0">
                        <p className="font-display text-4xl text-foreground md:text-5xl">
                            {outcome.value}
                        </p>
                        <p className="mono-label mt-3 text-muted-foreground">{outcome.metric}</p>
                        <p className="mt-3 text-base leading-relaxed text-foreground/70">
                            {outcome.description}
                        </p>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    </Section>
)}
```

This keeps clearly labeled product/concept facts while preventing unverified client performance metrics from rendering.

- [ ] **Step 7: Keep future proof conditional**

Do not change the existing testimonial guard:

```tsx
{project.testimonial && (
    <Section id="testimonial" size="narrow" padding="large">
        ...
    </Section>
)}
```

No testimonial placeholder should render.

- [ ] **Step 8: Verify the case-study template**

Run:

```powershell
pnpm exec eslint 'app/work/[slug]/page.tsx'
rg -n "Results & impact|id=\"results\"|hasResults" 'app/work/[slug]/page.tsx'
rg -n "verifiedProof|Commissioned|Project facts|collectionHref" 'app/work/[slug]/page.tsx'
```

Expected:

- ESLint exits `0`.
- Old results language and state are absent.
- Verified proof, project facts, and collection-aware navigation are present.

- [ ] **Step 9: Commit the proof system**

Run:

```powershell
git add 'app/work/[slug]/page.tsx'
git commit -m "Make case study proof verifiable"
```

## Task 6: Run full static verification

**Files:**

- All modified files from Tasks 2–5

- [ ] **Step 1: Run repository lint**

Run:

```powershell
pnpm lint
```

Expected: exit `0` with no ESLint errors.

- [ ] **Step 2: Run the production build**

Run:

```powershell
pnpm build
```

Expected:

- Next.js build exits `0`.
- `/lab` appears in the generated route list.
- Existing dynamic `/work/[slug]` pages still generate.

- [ ] **Step 3: Run trust-boundary content audits**

Run:

```powershell
rg -n "Book a free discovery call" app components -g "*.tsx"
rg -n "Results & impact" 'app/work/[slug]/page.tsx'
rg -n "getProductProjects|getConceptProjects" app/work/page.tsx
rg -n "getProductProjects|getConceptProjects" app/lab/page.tsx
```

Expected:

- First three commands return no matches.
- Lab contains both selectors.

- [ ] **Step 4: Confirm unrelated files remain untouched**

Run:

```powershell
git status --short
git diff main...HEAD --stat
```

Expected:

- `.claude/settings.local.json` and `ai-business-context.md` retain their pre-existing state.
- The branch diff contains only the approved portfolio redesign files and planning/spec documents.

## Task 7: Perform browser verification

**Files:**

- No planned source edits; fix only defects discovered by this verification.

- [ ] **Step 1: Start the local site**

Run:

```powershell
pnpm exec next dev -p 3001
```

Expected: Next.js reports `http://localhost:3001`.

- [ ] **Step 2: Verify desktop Home at 1440 × 1000**

Confirm:

- The existing hero remains visually intact.
- Primary action reads “Start a project.”
- Two large client projects appear immediately after the hero.
- Industry-depth section follows the projects.
- A single four-row service ledger follows industry depth.
- The page ends with the flooded inquiry CTA.

- [ ] **Step 3: Verify desktop Work and Lab**

Confirm on `/work`:

- Only `kind === "Client"` projects appear.
- The Lab handoff is visible.
- The primary closer reads “Start a project.”

Confirm on `/lab`:

- Products appear before concepts.
- Both categories are explicitly labeled.
- Concept cards retain their external-demo behavior.

- [ ] **Step 4: Verify one real-client case study**

Open `/work/tag-landing-page` and confirm:

- Back link points to Work.
- Verified proof strip renders Commissioned, Approved, Live, and year/scope facts.
- No “Results & impact” section appears.
- No testimonial placeholder appears.

Open one Lab project and confirm:

- Back link points to Lab.
- Project facts may render.
- Concept disclaimer remains visible for fictional work.

- [ ] **Step 5: Verify mobile at 390 × 844**

Confirm:

- Hero text and actions reflow without horizontal overflow.
- Sticky actions read “Browse work” and “Start a project.”
- Opening the navigation fully covers the sticky bar.
- Lab appears in the mobile menu.
- `/contact` and `/contact/thanks` do not render the global sticky action bar.

- [ ] **Step 6: Review browser and server errors**

Confirm:

- No hydration errors.
- No missing-image errors.
- No 404s for `/lab` or modified internal links.
- No uncaught client exceptions.

- [ ] **Step 7: Commit any verification-only corrections**

If verification required source fixes:

```powershell
git add app/page.tsx app/work/page.tsx app/lab/page.tsx 'app/work/[slug]/page.tsx' app/services/page.tsx app/sitemap.ts components/hero/StatementHero.tsx components/marketing/HowItWorks.tsx components/nav/Navbar.tsx components/nav/MobileStickyCTA.tsx components/footer/Footer.tsx
git commit -m "Polish editorial casebook verification"
```

If no fixes were needed, do not create an empty commit.

## Task 8: Final handoff

**Files:**

- No source changes

- [ ] **Step 1: Summarize commit history and final state**

Run:

```powershell
git log --oneline main..HEAD
git status --short
```

Expected:

- Focused commits exist for inquiry/navigation, homepage, Work/Lab, and case-study proof.
- Only the user’s pre-existing unrelated changes remain unstaged.

- [ ] **Step 2: Report completion without pushing or deploying**

Handoff must include:

- Files and routes changed
- Lint/build results
- Desktop/mobile browser verification result
- Any remaining limitations, especially the lack of real testimonials
- Branch name

Do not push, deploy, or merge without separate user authorization.
