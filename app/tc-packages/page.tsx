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
        "Transaction coordinator website packages starting at $750. Three tiers built for how TC businesses work — from solo operators to growing teams. Includes copywriting, mobile design, and intake forms.",
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
        name: "TC Starter",
        icon: IconRocket,
        price: "$750",
        description: "A clean, professional one-page website that helps you look established quickly.",
        bestFor: "New solo TCs who need credibility and a professional web presence from day one.",
        timeline: "1–2 weeks",
        pages: "1 page",
        features: [
            "A one-page site with a hero, services overview, about section, and contact — everything agents need to reach out",
            "Mobile-friendly design so agents can look you up right from their phones",
            "Your brand colors and logo woven throughout — not a generic template",
            "Guided copywriting — you answer a few questions, I write the words",
            "Basic search setup so local agents can find you online",
            "Custom link preview image so your site looks polished when shared on social or text",
            "3 months of managed hosting included",
        ],
        cta: "A strong first step",
        demoHref: "/demos/starter/",
    },
    {
        name: "TC Growth",
        icon: IconTrendingUp,
        price: "$1,500",
        description:
            "A polished multi-page website with room to explain your services and make it easy for agents to get started.",
        bestFor: "Established TCs who want stronger branding, a real intake workflow, and room to grow.",
        timeline: "3–4 weeks",
        pages: "4 pages",
        featured: true,
        features: [
            "4 dedicated pages: Home, Services, File Submission, and Careers",
            "Online intake form so agents can submit files without phone tag — no back-and-forth to get started",
            "Collaborative copywriting — I draft every section, you refine until it sounds right",
            "Your services, process, and proof laid out so agents immediately see why you're the right TC",
            "Design that makes your business look established — clean, structured, and built to convert",
            "Custom link preview image so your site looks polished when shared",
            "6 months of managed hosting included",
            "30 days of post-launch support for minor tweaks and adjustments",
        ],
        cta: "Most popular for established TCs",
        demoHref: "/demos/growth/",
    },
    {
        name: "TC Pro",
        icon: IconCrown,
        price: "$3,000+",
        description:
            "A fully custom website for teams, coaches, or TCs ready for a more built-out brand presence.",
        bestFor: "TC teams, coaches, or operators who want their website to actively generate business.",
        timeline: "4–6 weeks",
        pages: "5+ pages",
        features: [
            "Everything in Growth, plus additional pages shaped around your exact workflow and team structure",
            "Testimonials and social proof placed where they actually influence the decision",
            "Referral or team pages for businesses that have outgrown a solo site",
            "Multi-step intake form with conditional logic for organized, higher-volume file starts",
            "Done-for-you copywriting — fully written, strategically positioned, ready to publish",
            "Custom link preview image so your site looks polished when shared",
            "12 months of managed hosting included — a $708 value",
            "60-day post-launch support window for updates and refinements",
        ],
        cta: "For teams ready to grow",
        demoHref: "/demos/pro/",
    },
];

const allPackagesInclude = [
    {
        icon: IconDeviceMobile,
        title: "Looks great on phones",
        description: "Designed to work beautifully on phones, tablets, and desktops.",
    },
    {
        icon: IconPalette,
        title: "Branding that feels like you",
        description:
            "Your colors, logo, and overall look are tailored to your business instead of pulled from a generic template.",
    },
    {
        icon: IconChecklist,
        title: "Search-friendly setup",
        description:
            "Behind-the-scenes setup that helps your site show up better in search and look polished when shared.",
    },
    {
        icon: IconBolt,
        title: "Fast-loading pages",
        description:
            "Your site is built to load quickly, which helps it feel more professional and easier to use.",
    },
    {
        icon: IconFileText,
        title: "Help with the words",
        description:
            "You won't be left staring at a blank page. Every package includes support with the wording at the level that fits that tier.",
    },
    {
        icon: IconHeadset,
        title: "Launch support",
        description:
            "Help connecting your domain and getting everything live — plus a post-launch support window for minor tweaks. You're not on your own.",
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
        a: "If you're just getting started and need a professional presence fast, TC Starter is the move. If you have active deal flow and want a real intake workflow, TC Growth is the sweet spot. If you're building a team or coaching business, TC Pro gives you everything.",
    },
    {
        q: "Can I upgrade later?",
        a: "Yes. Every package is built on the same design system, so upgrading from Starter to Growth or Growth to Pro doesn't mean starting over. Your branding, colors, and content carry forward.",
    },
    {
        q: "Do you help with the wording?",
        a: "Yes. You do not have to write everything from scratch. Starter includes guided copywriting — you answer questions and I write the words. Growth includes collaborative copywriting where I draft every section and you refine it. Pro includes done-for-you copywriting — fully written and strategically positioned from the start.",
    },
    {
        q: "Will my website be easy to manage?",
        a: "Yes. These sites are built to be fast, reliable, and easy to host without locking you into a clunky template builder. If you want something you can update yourself or a content management system, we can talk through the best fit.",
    },
    {
        q: "Do you offer hosting?",
        a: "Yes. Every package includes a free introductory period of managed hosting — 3 months with Starter, 6 months with Growth, and 12 months with Pro (a $708 value). After your intro period, hosting continues at $59/month. Ongoing edits, content changes, or hands-on support after launch would be a separate website support plan.",
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
                "Website packages for transaction coordinators with niche positioning, clear lead capture, and optional intake automation support.",
            path: "/tc-packages",
            priceRange: "$750 – $3,000+",
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
                                watching files get managed, deadlines tracked, and agents
                                coordinated through long days of Dotloop uploads, compliance
                                checklists, and last-minute closing changes. These packages
                                exist because I know what your business actually needs from a
                                website — clear trust signals, an easy way to start a file, and
                                a brand that feels like a real business.
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
                        subtitle="Three tiers designed around how TC businesses actually work — from solo operators to growing teams."
                    />
                </AnimatedSection>

                <StaggerContainer
                    className="grid gap-6 lg:grid-cols-3"
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
                                    <a
                                        href={`${pkg.demoHref}?returnTo=${encodeURIComponent(packagesSectionHref)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Preview live demo
                                        <IconExternalLink className="w-3.5 h-3.5" stroke={2} />
                                    </a>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
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
                                Transaction coordinator websites we&apos;ve built
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                Real projects for real businesses in the TC and real estate space.
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
                                    Refer your students. We&apos;ll build their websites.
                                </h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                    If you run a TC course, mentorship, or coaching program, we can
                                    create a dedicated referral page for your students with a
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
                                        { step: "1", text: "We create a private referral page on our site for your program" },
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
