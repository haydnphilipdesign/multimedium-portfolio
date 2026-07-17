import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, SectionOpener, RuledRow } from "@/components/sections/Editorial";
import { CTADark } from "@/components/marketing/CTA";
import { getProjectBySlug, type Project } from "@/content/projects";
import {
    IconArrowRight,
    IconCircleCheck,
    IconRocket,
    IconTrendingUp,
    IconCrown,
    IconFileText,
    IconPalette,
    IconChecklist,
    IconDeviceMobile,
    IconBolt,
    IconHeadset,
    IconUsers,
    IconShieldCheck,
    IconExternalLink,
} from "@tabler/icons-react";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
    getServiceStructuredData,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
    title: "Transaction Coordinator Website Packages",
    description:
        "Transaction coordinator website packages from $595 to $2,495+. Four tiers built around credibility, clearer service messaging, agent next steps, and intake workflows.",
    path: "/tc-packages",
    keywords: [
        "transaction coordinator website packages",
        "transaction coordinator website design pricing",
        "transaction coordinator website cost",
        "tc website packages",
        "how much does a transaction coordinator website cost",
    ],
});

const packages = [
    {
        name: "TC Presence",
        icon: IconShieldCheck,
        price: "$595",
        description:
            "A streamlined one-page credibility site so agents see a real business instead of only a Facebook profile or unfinished DIY site.",
        bestFor: "New solo TCs with little or no deal flow who need to look legitimate quickly.",
        timeline: "Fast turnaround",
        pages: "1 proven layout",
        features: [
            "One-page website built from a proven TC-focused layout",
            "Your logo, colors, photos, and basic business details applied",
            "Guided copy based on your answers, not full custom copywriting from scratch",
            "Mobile-responsive design, basic SEO/meta setup, and Open Graph preview",
            "Clear contact CTA so agents know the next step",
            "One draft and one light refinement pass",
            "Tightly scoped: no embedded intake form, submit page, or custom section strategy",
        ],
        cta: "Start with Presence",
        demoHref: "/demos/presence/",
    },
    {
        name: "TC Starter",
        icon: IconRocket,
        price: "$795",
        description:
            "A one-page site with a simple intake or contact flow so agents know who you are, what you do, and how to start working with you.",
        bestFor: "Solo TCs beginning to work with agents who need more than an online business card.",
        timeline: "1–2 weeks",
        pages: "1 page + action flow",
        features: [
            "Everything in TC Presence",
            "Embedded intake/contact form section or simple submit workflow",
            "More complete service explanation and stronger CTA flow",
            "Basic file-start instructions to reduce back-and-forth",
            "Mobile-friendly design, SEO/meta setup, and custom link preview",
            "One refinement round and launch support",
            "3 months of managed hosting included — a $177 value",
        ],
        cta: "Choose Starter",
        demoHref: "/demos/starter/",
    },
    {
        name: "TC Growth",
        icon: IconTrendingUp,
        price: "$1,495",
        description:
            "A polished multi-page website with dedicated service positioning and a submit-a-file workflow for a more established operation.",
        bestFor: "Established TCs who want stronger branding, better service communication, and a real intake workflow.",
        timeline: "3–4 weeks",
        pages: "Multi-page",
        featured: true,
        features: [
            "Recommended structure: Home, Services, Submit a File, and About or Careers",
            "Dedicated submit/intake page with embedded forms such as Jotform, Cognito, Tally, or Typeform",
            "Strategic service positioning and collaborative copywriting",
            "Services, process, and proof laid out so agents understand the value faster",
            "SEO/meta setup, Open Graph preview, polished interactions, and stronger visual presentation",
            "6 months of managed hosting included — a $354 value",
            "30 days of post-launch support for minor tweaks and adjustments",
        ],
        cta: "Choose Growth",
        demoHref: "/demos/growth/",
    },
    {
        name: "TC Pro",
        icon: IconCrown,
        price: "$2,495+",
        description:
            "A fuller custom website for TC teams, coaches, referral-driven operators, and higher-volume businesses.",
        bestFor: "Teams, coaches, referral partners, and operators who need deeper trust-building and conversion strategy.",
        timeline: "4–6 weeks",
        pages: "5+ pages",
        features: [
            "Everything in Growth, plus additional pages shaped around your exact workflow and team structure",
            "Fully written or more heavily supported copy, with review rounds built in",
            "Deep discovery call to align on brand, audience, and competitive positioning before design starts",
            "Advanced intake options, including multi-step or conditional forms when scoped",
            "Referral partner landing pages for coaches, mentors, or partner programs",
            "Testimonials and social proof placed where they actually influence the decision",
            "Analytics setup if appropriate and stronger conversion strategy",
            "12 months of managed hosting included — a $708 value",
            "60-day post-launch support window for updates and refinements",
        ],
        cta: "Request a Pro proposal",
        demoHref: "/demos/pro/",
    },
];

const allPackagesInclude = [
    {
        icon: IconDeviceMobile,
        title: "Mobile-first design",
        description:
            "Built to look and work properly on phones, tablets, and desktops — not retrofitted from a desktop layout.",
    },
    {
        icon: IconPalette,
        title: "Brand-tailored visuals",
        description:
            "Your colors, logo, and overall look are applied throughout instead of pulled from a generic template.",
    },
    {
        icon: IconChecklist,
        title: "Search-ready setup",
        description:
            "Technical SEO groundwork so your site shows up in local search and looks polished when shared.",
    },
    {
        icon: IconBolt,
        title: "Performance-tuned",
        description:
            "Fast-loading pages built on modern infrastructure — faster sites feel more professional and convert better.",
    },
    {
        icon: IconFileText,
        title: "Copywriting support",
        description:
            "You won't be left staring at a blank page. Every tier includes hands-on copy support — from guided to fully written.",
    },
    {
        icon: IconHeadset,
        title: "Guided launch",
        description:
            "I handle domain connection, go-live checks, and post-launch tweaks. You're not on your own when it's time to ship.",
    },
];

const addOns = [
    {
        name: "Custom domain setup",
        description: "Help buying your domain and connecting it to your site.",
        price: "Varies",
    },
    {
        name: "Managed hosting",
        description: "Keeps your site live, secure, and monitored each month. Each package includes a free introductory period before billing begins.",
        price: "$59/mo",
    },
    {
        name: "Logo design",
        description: "A custom logo if you want a more polished brand look.",
        price: "From $300",
    },
    {
        name: "Extra pages",
        description: "Add more pages now or later as your business grows.",
        price: "$200–400 each",
    },
    {
        name: "Ongoing website support",
        description: "For ongoing edits, updates, or hands-on help after launch.",
        price: "Custom",
    },
];

const faqs = [
    {
        q: "Which package is right for me?",
        a: "If you need credibility only, choose TC Presence. If you want a one-page site plus a simple agent action flow, choose TC Starter. TC Growth is the sweet spot for serious TCs with active deal flow who need stronger positioning and a submit-a-file workflow. TC Pro is for teams, coaches, referral-driven operators, and more custom conversion systems.",
    },
    {
        q: "Can I upgrade later?",
        a: "Yes. Every package is built on the same design system, so upgrading from Presence to Starter, Starter to Growth, or Growth to Pro doesn't mean starting over. Your branding, colors, and content can carry forward.",
    },
    {
        q: "Can I just build this myself on Wix or Squarespace?",
        a: "Yes, you can. But many new TCs start there and end up with a half-finished site, generic copy, and no clear workflow for agents to submit a file. These packages are for TCs who want the site handled properly so they can focus on getting clients and closing files.",
    },
    {
        q: "How is TC Presence different from discounted custom work?",
        a: "TC Presence is a constrained product: a one-page credibility site built from a proven layout, with your branding and guided copy applied. It does not include intake forms, a separate submit page, custom section ordering, deep strategy, or full copywriting from scratch.",
    },
    {
        q: "Do you help with the wording?",
        a: "Yes. You do not have to write everything from scratch. Presence and Starter include guided copy support, Growth includes collaborative copywriting, and Pro includes fully written or more heavily supported copy depending on scope.",
    },
    {
        q: "Will my website be easy to manage?",
        a: "Yes. These sites are built to be fast, reliable, and easy to host without locking you into a clunky template builder. If you want something you can update yourself or a content management system, we can talk through the best fit.",
    },
    {
        q: "Do you offer hosting?",
        a: "Yes. Managed hosting is available at $59/month. Starter includes 3 months, Growth includes 6 months, and Pro includes 12 months. Presence can add managed hosting if you want me to handle it. Ongoing edits or content changes are handled separately under a website support plan.",
    },
    {
        q: "I was referred by a TC coach. Is there a referral perk?",
        a: "If you were referred by one of our referral partners, mention them when you reach out. Referral perks vary by partner and are discussed during your initial conversation.",
    },
];

const contactHref = "/contact?source=tc-packages&projectType=website";
const packagesSectionHref = "/tc-packages#packages";


export default function TCPackagesPage() {
    const paRes = getProjectBySlug("pa-real-estate-support");
    const tagProject = getProjectBySlug("tag-landing-page");
    const featured = [paRes, tagProject].filter(
        (project): project is Project => Boolean(project)
    );
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "TC Website Packages", path: "/tc-packages" },
        ]),
        getServiceStructuredData({
            name: "Transaction Coordinator Website Packages",
            description:
                "Website packages for transaction coordinators with credibility positioning, clear service messaging, agent next steps, and optional intake automation support.",
            path: "/tc-packages",
            priceRange: "$595 – $2,495+",
            audience: ["Transaction coordinators", "Transaction coordinator teams"],
        }),
        getFaqStructuredData(faqs),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            {/* Hero */}
            <Section className="pt-32 sm:pt-36 md:pt-44 pb-14 md:pb-20" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <MonoLabel className="mb-6">Built from inside the TC world</MonoLabel>
                        <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                            Website packages built{" "}
                            <span className="text-gradient">for transaction coordinators.</span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                            My mom has been a transaction coordinator since 2013. I grew up around
                            Dotloop uploads, compliance checklists, and last-minute closing changes —
                            so I know what a TC business actually needs from a website: clear trust
                            signals, an easy way to start a file, and a brand agents take seriously.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link href="#packages" className="btn btn-primary group">
                                See packages
                                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                            <Link href="/work?industry=tc" className="btn btn-secondary">
                                See TC work
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Package comparison */}
            <Section id="packages">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Pricing"
                        eyebrowIndex="01"
                        title="Choose your package"
                        lead="Four tiers designed around what the website needs to accomplish: credibility, clear services, less back-and-forth, and a next step agents can act on."
                    />
                </AnimatedSection>

                <StaggerContainer
                    className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
                    staggerDelay={0.08}
                >
                    {packages.map((pkg) => (
                        <StaggerItem key={pkg.name} className="h-full">
                            <div
                                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                                    pkg.featured
                                        ? "border-primary/45 bg-card shadow-[var(--shadow-elevated)] ring-1 ring-primary/25"
                                        : "border-border/70 bg-card shadow-[var(--shadow-soft)]"
                                }`}
                            >
                                {pkg.featured && (
                                    <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-primary px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary-foreground">
                                        Most popular
                                    </span>
                                )}

                                <p className="mono-label text-muted-foreground">{pkg.name}</p>
                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="font-display text-4xl text-foreground">{pkg.price}</span>
                                </div>
                                <div className="mono-meta mt-2 flex flex-wrap gap-x-2">
                                    <span>{pkg.pages}</span>
                                    <span aria-hidden>·</span>
                                    <span>{pkg.timeline}</span>
                                </div>

                                <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                                    {pkg.description}
                                </p>

                                <p className="mt-5 border-l-2 border-primary/40 pl-3 text-xs leading-relaxed text-foreground/70">
                                    <span className="font-semibold text-foreground">Best for:</span> {pkg.bestFor}
                                </p>

                                <ul className="mb-7 mt-6 flex-1 space-y-3 border-t border-rule pt-6">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/75">
                                            <IconCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" stroke={1.6} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-col gap-2.5">
                                    <Link
                                        href={`${contactHref}&package=${encodeURIComponent(pkg.name)}`}
                                        className={`btn btn-sm w-full ${pkg.featured ? "btn-primary" : "btn-secondary"}`}
                                    >
                                        {pkg.cta}
                                        <IconArrowRight className="h-4 w-4" stroke={2} />
                                    </Link>
                                    {pkg.demoHref ? (
                                        <a
                                            href={`${pkg.demoHref}?returnTo=${encodeURIComponent(packagesSectionHref)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full items-center justify-center gap-2 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            Preview live demo
                                            <IconExternalLink className="h-3.5 w-3.5" stroke={2} />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Comparison */}
            <Section className="border-t border-rule">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Package comparison"
                        eyebrowIndex="02"
                        title="Pick the level of business support you need"
                        lead="Page count is the smallest difference between tiers. What changes is how clearly the site explains your services, what agents can do next, and how much strategy goes into the build."
                    />
                </AnimatedSection>

                <AnimatedSection delay={0.08} direction="none">
                    <div className="mt-10 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
                        <div className="grid grid-cols-1 divide-y divide-rule text-sm md:grid-cols-5 md:divide-x md:divide-y-0">
                            <div className="bg-surface-2 p-5"><span className="mono-label text-muted-foreground">Best use</span></div>
                            {packages.map((pkg) => (
                                <div key={pkg.name} className="p-5">
                                    <p className="font-display text-lg text-foreground">{pkg.name}</p>
                                    <p className="mt-1 font-mono text-base text-primary">{pkg.price}</p>
                                    <p className="mt-3 text-foreground/70">{pkg.bestFor}</p>
                                </div>
                            ))}
                        </div>
                        {[
                            ["Primary outcome", "Look credible fast", "Add a simple agent action flow", "Operate with a dedicated submit flow", "Build authority and conversion depth"],
                            ["Intake support", "Contact CTA only", "Basic intake/contact workflow", "Dedicated submit page with embedded form", "Advanced intake options when scoped"],
                            ["Copy support", "Guided answers applied to proven copy flow", "Guided copy plus clearer service explanation", "Collaborative copywriting and positioning", "Fully written or deeply supported copy"],
                            ["Customization level", "Proven layout with light branding", "One-page build with workflow section", "Polished multi-page site", "Custom structure for teams, coaches, or referral systems"],
                        ].map((row) => (
                            <div
                                key={row[0]}
                                className="grid grid-cols-1 divide-y divide-rule border-t border-rule text-sm md:grid-cols-5 md:divide-x md:divide-y-0"
                            >
                                {row.map((cell, index) => (
                                    <div
                                        key={`${row[0]}-${index}`}
                                        className={index === 0 ? "bg-surface-2 p-5" : "p-5 text-foreground/70"}
                                    >
                                        {index === 0 ? <span className="mono-meta text-foreground">{cell}</span> : cell}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Section>

            {/* Not another DIY template — statement */}
            <Section className="border-t border-rule">
                <AnimatedSection>
                    <div className="grid gap-8 md:grid-cols-[0.4fr_0.6fr] md:gap-14">
                        <div>
                            <MonoLabel className="mb-5">Not another DIY template</MonoLabel>
                            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                                Built around how agents evaluate a TC
                            </h2>
                        </div>
                        <div className="space-y-4 text-lg leading-relaxed text-foreground/78">
                            <p>
                                Wix, Squarespace, GoDaddy, and Fiverr can give you a page. The hard part is making that page explain your services clearly, answer the questions agents ask before they contact you, and make the next step feel obvious. These packages are structured around the way transaction coordinators actually get found, evaluated, and contacted.
                            </p>
                            <p>
                                You answer guided questions about your business. I handle the structure, copy flow, design, mobile experience, launch details, and the places where generic templates usually leave TCs sounding vague.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* What every package includes — ruled rows */}
            <section className="bg-surface-1 border-t border-rule">
                <Section>
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Standard on every tier"
                            eyebrowIndex="03"
                            title="Included in every package"
                            lead="No matter which tier you choose, you get a professional foundation built for TC businesses."
                        />
                    </AnimatedSection>

                    <StaggerContainer className="mt-12 ledger border-t border-rule" staggerDelay={0.06}>
                        {allPackagesInclude.map((item, idx) => (
                            <StaggerItem key={item.title}>
                                <RuledRow index={String(idx + 1).padStart(2, "0")} title={item.title}>
                                    {item.description}
                                </RuledRow>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </section>

            {/* Add-ons — price ledger */}
            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Optional extras"
                        eyebrowIndex="04"
                        title="Add what you need"
                        lead="These can be added to any package now or later, depending on what would help your business most."
                    />
                </AnimatedSection>

                <div className="mt-10 ledger border-t border-foreground/15">
                    {addOns.map((item) => (
                        <div
                            key={item.name}
                            className="ledger-row grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5 sm:grid-cols-[14rem_1fr_auto] sm:gap-x-10"
                        >
                            <p className="font-display text-lg text-foreground">{item.name}</p>
                            <p className="col-span-2 text-sm leading-relaxed text-foreground/70 sm:col-span-1 sm:order-2 sm:max-w-md">
                                {item.description}
                            </p>
                            <span className="font-mono text-base text-foreground sm:order-3 sm:text-right">
                                {item.price}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Work samples */}
            {featured.length > 0 && (
                <Section className="border-t border-rule">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Real work"
                            eyebrowIndex="05"
                            title="Transaction coordinator websites I've built"
                            lead="Recent projects for businesses in the TC and real estate space."
                            action={
                                <Link
                                    href="/work?industry=tc"
                                    className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    Browse all TC work
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            }
                        />
                    </AnimatedSection>
                    <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* Referral partners callout */}
            <Section className="border-t border-rule">
                <AnimatedSection>
                    <div className="grid gap-10 rounded-2xl border border-border/70 bg-surface-1 p-8 shadow-[var(--shadow-soft)] sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <MonoLabel className="mb-5 inline-flex items-center gap-2">
                                <IconUsers className="h-3.5 w-3.5" stroke={1.8} />
                                For TC coaches + referral partners
                            </MonoLabel>
                            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                                Refer your students. I&apos;ll build their websites.
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-foreground/78">
                                If you run a TC course, mentorship, or coaching program, I can set up a
                                dedicated referral page for your students with a preferred perk. Your
                                students get a vetted web designer who understands the cadence of a TC
                                business, from file intake to broker compliance. You get a resource that
                                adds real value to your program instead of another generic recommendation.
                            </p>
                            <Link
                                href="/contact?source=tc-packages&projectType=referral-partnership"
                                className="btn btn-primary group mt-7"
                            >
                                Discuss a referral partnership
                                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                        <div className="rounded-2xl border border-rule bg-background/60 p-6">
                            <p className="mono-label mb-4 text-muted-foreground">How it works</p>
                            <div className="ledger border-t border-rule">
                                {[
                                    "I create a private referral page on my site for your program",
                                    "Your students reach out through that page and mention your program",
                                    "They get a clear proposal with a preferred perk included",
                                ].map((text, i) => (
                                    <div key={i} className="ledger-row flex items-start gap-4 py-4">
                                        <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                                        <p className="text-sm leading-relaxed text-foreground/80">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* FAQ — hairline list */}
            <Section className="border-t border-rule">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="FAQ"
                        eyebrowIndex="06"
                        title="Common questions"
                        lead="What TCs usually want to know before getting started."
                    />
                </AnimatedSection>

                <div className="mt-10 ledger border-t border-foreground/15">
                    {faqs.map((item) => (
                        <details key={item.q} className="group ledger-row py-1">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                                <p className="font-display text-lg text-foreground sm:text-xl">{item.q}</p>
                                <span
                                    aria-hidden
                                    className="shrink-0 font-mono text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>
                            <p className="max-w-3xl pb-6 text-base leading-relaxed text-foreground/72">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </Section>

            {/* Final CTA — dark ink closer */}
            <CTADark
                eyebrow="Start here"
                title="Ready to get your TC website handled?"
                body="Tell me where your business is right now and what you want the website to do. I'll respond within one business day with a recommended package and a clear plan."
                primary={{ label: "Start a conversation", href: contactHref }}
                secondary={{ label: "See TC work", href: "/work?industry=tc" }}
            />
        </>
    );
}
