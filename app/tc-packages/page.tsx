import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/sections/Section";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
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
    IconSparkles,
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
            <div className="relative overflow-hidden border-b border-border/40">
                <Section className="pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-20" padding="none">
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/60 mb-6">
                                <IconShieldCheck className="w-4 h-4 text-primary" stroke={1.5} />
                                Built by someone who grew up in the TC world
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                Website packages built{" "}
                                <span className="text-gradient">
                                    specifically for transaction coordinators.
                                </span>
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                                My mom has been a transaction coordinator since 2013. I grew up
                                around Dotloop uploads, compliance checklists, and last-minute
                                closing changes — so I know what a TC business actually needs
                                from a website: clear trust signals, an easy way to start a
                                file, and a brand agents take seriously.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="#packages"
                                    className="btn-primary inline-flex items-center justify-center gap-2"
                                >
                                    See packages
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                                <Link
                                    href="/work?industry=tc"
                                    className="btn-secondary inline-flex items-center justify-center gap-2"
                                >
                                    See TC work
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>
            </div>

            {/* Package comparison */}
            <Section id="packages">
                <AnimatedSection>
                    <SectionHeading
                        title="Choose your package"
                        subtitle="Four tiers designed around what the website needs to accomplish: credibility, clear services, less back-and-forth, and a next step agents can act on."
                    />
                </AnimatedSection>

                <StaggerContainer
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                    staggerDelay={0.08}
                >
                    {packages.map((pkg) => (
                        <StaggerItem key={pkg.name}>
                            <div
                                className={`relative h-full rounded-2xl border bg-card shadow-[var(--shadow-soft)] p-7 flex flex-col ${
                                    pkg.featured
                                        ? "border-primary/40 ring-1 ring-primary/20"
                                        : "border-border/60"
                                }`}
                            >
                                {pkg.featured && (
                                    <span className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                                        Most popular
                                    </span>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                        <pkg.icon className="w-5 h-5" stroke={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {pkg.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-foreground">
                                        {pkg.price}
                                    </span>
                                    <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                                        <span>{pkg.pages}</span>
                                        <span>&middot;</span>
                                        <span>{pkg.timeline}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    {pkg.description}
                                </p>

                                <div className="rounded-xl border border-border/60 bg-muted/25 p-3 mb-5">
                                    <p className="text-xs font-medium text-muted-foreground">
                                        <strong className="text-foreground">Best for:</strong>{" "}
                                        {pkg.bestFor}
                                    </p>
                                </div>

                                <ul className="space-y-2.5 mb-6 flex-1">
                                    {pkg.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                                        >
                                            <IconCircleCheck
                                                className="mt-0.5 h-4 w-4 text-primary shrink-0"
                                                stroke={1.6}
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-col gap-2.5">
                                    <Link
                                        href={`${contactHref}&package=${encodeURIComponent(pkg.name)}`}
                                        className={`inline-flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                                            pkg.featured
                                                ? "btn-primary"
                                                : "btn-secondary"
                                        }`}
                                    >
                                        {pkg.cta}
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                    {pkg.demoHref ? (
                                        <a
                                            href={`${pkg.demoHref}?returnTo=${encodeURIComponent(packagesSectionHref)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            Preview live demo
                                            <IconExternalLink className="w-3.5 h-3.5" stroke={2} />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Comparison */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                            Package comparison
                        </span>
                        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                            Pick the level of business support you need
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            The difference is not just page count. It is how clearly the site explains your services, how much action it gives agents, and how much strategic support goes into the build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.08} direction="none">
                    <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)]">
                        <div className="grid grid-cols-1 divide-y divide-border/60 text-sm md:grid-cols-5 md:divide-x md:divide-y-0">
                            <div className="bg-muted/35 p-5 font-semibold text-foreground">Best use</div>
                            {packages.map((pkg) => (
                                <div key={pkg.name} className="p-5">
                                    <p className="font-semibold text-foreground">{pkg.name}</p>
                                    <p className="mt-1 text-primary font-semibold">{pkg.price}</p>
                                    <p className="mt-3 text-muted-foreground">{pkg.bestFor}</p>
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
                                className="grid grid-cols-1 divide-y divide-border/60 border-t border-border/60 text-sm md:grid-cols-5 md:divide-x md:divide-y-0"
                            >
                                {row.map((cell, index) => (
                                    <div
                                        key={`${row[0]}-${index}`}
                                        className={index === 0 ? "bg-muted/35 p-5 font-semibold text-foreground" : "p-5 text-muted-foreground"}
                                    >
                                        {cell}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
                        <div className="relative max-w-3xl">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                                Not another DIY template
                            </span>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                Built around how agents evaluate a TC
                            </h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                Wix, Squarespace, GoDaddy, and Fiverr can give you a page. The hard part is making that page explain your services clearly, answer the questions agents ask before they contact you, and make the next step feel obvious. These packages are structured around the way transaction coordinators actually get found, evaluated, and contacted.
                            </p>
                            <p className="mt-3 text-muted-foreground leading-relaxed">
                                You answer guided questions about your business. I handle the structure, copy flow, design, mobile experience, launch details, and the places where generic templates usually leave TCs sounding vague.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* What every package includes */}
            <div className="relative rounded-2xl bg-muted/35">
                <Section>
                    <AnimatedSection>
                        <SectionHeading
                            title="Included in every package"
                            subtitle="No matter which tier you choose, you get a professional foundation built for TC businesses."
                        />
                    </AnimatedSection>

                    <StaggerContainer
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        staggerDelay={0.08}
                    >
                        {allPackagesInclude.map((item) => (
                            <StaggerItem key={item.title}>
                                <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                        <item.icon className="w-5 h-5" stroke={1.5} />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </div>

            {/* Add-ons */}
            <Section>
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                            Optional extras
                        </span>
                        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                            Add what you need
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            These can be added to any package now or later, depending on what would help your business most.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-8 grid gap-3 max-w-2xl">
                    {addOns.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card px-5 py-3.5"
                        >
                            <div>
                                <p className="text-sm text-foreground font-medium">
                                    {item.name}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                                {item.price}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Work samples */}
            {featured.length > 0 && (
                <Section className="relative overflow-hidden border-t border-border/40">
                    <div className="pointer-events-none absolute -top-28 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                                Real work
                            </span>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                Transaction coordinator websites I&apos;ve built
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                Recent projects for businesses in the TC and real estate space.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
                        {featured.map((project, index) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                    <AnimatedSection className="mt-10">
                        <Link
                            href="/work?industry=tc"
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                        >
                            Browse all TC work
                            <IconArrowRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                stroke={2}
                            />
                        </Link>
                    </AnimatedSection>
                </Section>
            )}

            {/* Referral partners callout */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                                    <IconUsers className="w-3.5 h-3.5" stroke={1.5} />
                                    For TC coaches + referral partners
                                </span>
                                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                    Refer your students. I&apos;ll build their websites.
                                </h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                    If you run a TC course, mentorship, or coaching program, I can
                                    set up a dedicated referral page for your students with a
                                    preferred perk. Your students get a vetted web designer who
                                    understands the cadence of a TC business, from file intake to
                                    broker compliance. You get a resource that adds real value to
                                    your program instead of another generic recommendation.
                                </p>
                                <Link
                                    href="/contact?source=tc-packages&projectType=referral-partnership"
                                    className="mt-6 btn-primary inline-flex items-center justify-center gap-2"
                                >
                                    Discuss a referral partnership
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/55 backdrop-blur-sm p-6">
                                <p className="text-sm font-semibold text-foreground">
                                    How it works
                                </p>
                                <div className="mt-4 space-y-4">
                                    {[
                                        { step: "1", text: "I create a private referral page on my site for your program" },
                                        { step: "2", text: "Your students reach out through that page and mention your program" },
                                        { step: "3", text: "They get a clear proposal with a preferred perk included" },
                                    ].map((item) => (
                                        <div key={item.step} className="flex items-start gap-4">
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-border/60 bg-muted/50 text-xs font-semibold text-foreground shrink-0">
                                                {item.step}
                                            </span>
                                            <p className="text-sm text-muted-foreground">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* FAQ */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Common questions
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            What TCs usually want to know before getting started.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-10 grid gap-4 md:max-w-4xl">
                    {faqs.map((item) => (
                        <details
                            key={item.q}
                            className="group rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-5 open:bg-card/80 transition-colors"
                        >
                            <summary className="cursor-pointer list-none">
                                <div className="flex items-start justify-between gap-6">
                                    <p className="text-base font-semibold text-foreground">
                                        {item.q}
                                    </p>
                                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/60 text-muted-foreground group-open:text-foreground shrink-0">
                                        +
                                    </span>
                                </div>
                            </summary>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="relative flex flex-col items-center text-center">
                            <IconSparkles className="w-8 h-8 text-primary mb-4" stroke={1.5} />
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Ready to get a website that works for your TC business?
                            </h2>
                            <p className="mt-3 max-w-2xl text-muted-foreground">
                                Tell me about your business, where you are in your journey, and
                                what you want your website to accomplish. I&apos;ll respond within
                                one business day with a clear plan.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={contactHref}
                                    className="btn-primary inline-flex items-center justify-center gap-2"
                                >
                                    Start a conversation
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                                <Link
                                    href="/work?industry=tc"
                                    className="btn-secondary inline-flex items-center justify-center gap-2"
                                >
                                    See TC work
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
