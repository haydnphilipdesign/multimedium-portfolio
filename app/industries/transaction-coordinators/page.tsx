import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, SectionOpener, RuledRow, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getProjectBySlug, type Project } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import { getBreadcrumbStructuredData, getFaqStructuredData, getServiceStructuredData } from "@/lib/structuredData";
import {
    IconChecklist,
    IconBolt,
    IconCalendarEvent,
    IconClock,
    IconFileText,
    IconShieldCheck,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Web Design for Transaction Coordinators",
    description:
        "Web design for transaction coordinators — professional messaging, fast mobile performance, and a clear intake flow that filters out poor-fit agents. Built by someone who grew up in the TC world.",
    path: "/industries/transaction-coordinators",
    keywords: [
        "transaction coordinator website design",
        "web design for transaction coordinators",
        "real estate transaction coordinator website",
        "transaction coordinator website",
        "tc website packages",
    ],
});

const outcomes = [
    {
        icon: IconCalendarEvent,
        title: "More qualified calls",
        description:
            "A page that makes your offer obvious and pushes one primary action: book a call.",
    },
    {
        icon: IconShieldCheck,
        title: "Credibility agents can verify",
        description:
            "Your services, your process, and who you work with — stated plainly enough that the wrong leads filter themselves out.",
    },
    {
        icon: IconBolt,
        title: "Fast on mobile",
        description:
            "Agents will open your site from their phone between showings. It has to load fast and read cleanly there first.",
    },
];

const included = [
    {
        icon: IconFileText,
        title: "Messaging + page plan",
        description:
            "We define the offer, who it’s for (and who it’s not), and the pages needed to convert.",
    },
    {
        icon: IconChecklist,
        title: "Lead capture that filters",
        description:
            "Forms, questions, and routing that turn “inquiries” into qualified conversations.",
    },
    {
        icon: IconClock,
        title: "Simple systems (optional)",
        description:
            "Optional add-ons if you want them: onboarding flows, intake checklists, and follow-up automation—without overbuilding.",
    },
];

const expectations = [
    { label: "Primary conversion", value: "Booked discovery calls" },
    { label: "Lead quality", value: "Fit-filtered inquiries" },
    { label: "Systems-ready", value: "Intake + follow-up automation" },
];

const automationBullets = [
    "Conditional intake (buyer/listing/dual, 1–2 buyers/sellers)",
    "Required-field enforcement (prevents half-filled submissions)",
    "Auto-formatted intake summary (email + optional PDF cover sheet)",
    "“Missing info” callouts so you catch it immediately",
    "Optional naming conventions + routing",
];

const automationPackages = [
    {
        name: "Automation Starter",
        price: "$350–$650",
        bullets: [
            "Conditional intake + required fields",
            "Clean formatted email summary",
            "Basic branding (logo/header)",
        ],
        bestFor: "Part-time or low-volume TCs",
    },
    {
        name: "Automation Pro",
        price: "$750–$1,500",
        bullets: [
            "Everything in Starter",
            "Branded PDF cover sheet output",
            "Missing-info summary / callouts",
        ],
        bestFor: "Steady volume, wants consistent file starts",
    },
    {
        name: "Ops Workflow",
        price: "$1,500–$3,500",
        bullets: [
            "Everything in Pro",
            "Integrations (Drive/Zapier/Make) + routing",
            "Folder/task workflow + utility intake PDF if needed",
        ],
        bestFor: "Busy solo TC or small team",
    },
];

const faqs = [
    {
        q: "How much does a transaction coordinator website cost?",
        a: "TC website packages start at $595 for a tightly scoped one-page credibility site. TC Starter is $795, TC Growth is $1,495, and TC Pro starts at $2,495+ for fuller custom builds. The right package depends on whether you need credibility only, a simple agent action flow, a dedicated submit workflow, or a deeper team/referral system.",
    },
    {
        q: "Do I need a website if I get all my TC clients through referrals?",
        a: "Yes. Even referral-based leads will Google you before reaching out. A professional website validates what the referral already told them — and gives agents something to share when they recommend you. Without one, you're relying entirely on trust you haven't built yet.",
    },
    {
        q: "Do you write the copy?",
        a: "Yes. Positioning and copy are part of the build. We make the offer obvious, add proof, and write the sections that prevent low-fit leads from booking.",
    },
    {
        q: "Can you add a lead qualification flow?",
        a: "Yes. We can build forms that route, tag, and filter leads so you spend time on the right calls. If you already use a CRM, we can integrate with it.",
    },
    {
        q: "Do I need Jotform?",
        a: "No. I can build this with the tools you already use (Google Forms, Jotform, etc.), or recommend the simplest option for your workflow.",
    },
    {
        q: "Are you selling software?",
        a: "No—this is a done-for-you setup service (plus optional support). You own the account/tools; I configure the workflow and templates.",
    },
    {
        q: "What if I am a solo TC?",
        a: "That can still be a fit. The key is positioning: clear scope, clear process, and proof that you run a real operation.",
    },
    {
        q: "How long does it take?",
        a: "Once we have your offer, proof assets, and preferred lead flow, builds can move quickly. I will give you a concrete timeline after a short intake.",
    },
];

export default function TransactionCoordinatorsPage() {
    const tagProject = getProjectBySlug("tag-landing-page");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const utilitySheet = getProjectBySlug("utility-sheet");
    const normaIntake = getProjectBySlug("norma-intake");
    const featured = [paRes, tagProject, utilitySheet, normaIntake].filter(
        (project): project is Project => Boolean(project)
    );
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Transaction Coordinators", path: "/industries/transaction-coordinators" },
        ]),
        getServiceStructuredData({
            name: "Transaction Coordinator Website Design",
            description:
                "Website design and optional intake automation for transaction coordinators who need clearer positioning and better-fit leads.",
            path: "/industries/transaction-coordinators",
            priceRange: "$595 – $2,495+",
            audience: ["Transaction coordinators", "Real estate operations teams"],
        }),
        getFaqStructuredData(faqs),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">For transaction coordinators</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Websites for TCs that make booking{" "}
                                <span className="text-gradient">feel obvious.</span>
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                Professional messaging, strong design, and a clear path that filters out
                                poor-fit leads — so you spend less time &quot;selling&quot; and more time coordinating.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=tc-hero" className="btn btn-primary">Get started</Link>
                                <Link href="/tc-packages" className="btn btn-secondary group">
                                    View packages
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            </div>
                            <p className="mt-7 max-w-xl border-l-2 border-primary/50 pl-4 text-sm italic leading-relaxed text-foreground/70">
                                Built by someone who grew up watching files managed, deadlines tracked, and agents
                                coordinated — my mom has been a transaction coordinator since 2013.
                            </p>
                        </div>

                        <dl className="ledger border-t border-rule">
                            {expectations.map((item) => (
                                <div key={item.label} className="ledger-row flex items-baseline justify-between gap-6 py-4">
                                    <dt className="mono-label text-muted-foreground">{item.label}</dt>
                                    <dd className="font-display text-lg text-foreground">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <StaggerContainer className="ledger border-t border-rule" staggerDelay={0.07}>
                    {outcomes.map((item, idx) => (
                        <StaggerItem key={item.title}>
                            <RuledRow index={String(idx + 1).padStart(2, "0")} title={item.title}>
                                {item.description}
                            </RuledRow>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <section className="bg-surface-1 border-y border-rule">
                <Section>
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Scope"
                            eyebrowIndex="01"
                            title="What I build for TCs"
                            lead="A defined offer, a page agents can act on, and a structure that stays consistent as you grow."
                        />
                    </AnimatedSection>

                    <StaggerContainer className="mt-12 ledger border-t border-rule" staggerDelay={0.08}>
                        {included.map((item, idx) => (
                            <StaggerItem key={item.title}>
                                <RuledRow index={String(idx + 1).padStart(2, "0")} title={item.title}>
                                    {item.description}
                                </RuledRow>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <AnimatedSection delay={0.08} direction="none">
                        <div className="mt-8 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-base text-foreground/75">
                                Want intake + cover-sheet automation too? It&apos;s an optional add-on.
                            </p>
                            <Link href="#automation" className="btn btn-sm btn-secondary group">
                                See automation options
                                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </Section>
            </section>

            {/* Packages bridge */}
            <Section>
                <AnimatedSection>
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                        <div>
                            <MonoLabel className="mb-5">TC website packages</MonoLabel>
                            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                                Four tiers — built for how TC businesses actually work.
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-foreground/78">
                                Whether you need a fast credibility site, a simple intake/contact flow, or a
                                fuller custom build, there&apos;s a package designed for your stage. Starting at $595.
                            </p>
                            <Link href="/tc-packages" className="btn btn-primary group mt-7">
                                Compare packages
                                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                        <div className="ledger border-t border-foreground/15">
                            {[
                                { name: "TC Presence", desc: "Template-based credibility site", price: "$595" },
                                { name: "TC Starter", desc: "One-page site plus simple action flow", price: "$795" },
                                { name: "TC Growth", desc: "Multi-page site with submit workflow", price: "$1,495" },
                                { name: "TC Pro", desc: "Fuller custom site for teams or coaches", price: "$2,495+" },
                            ].map((pkg) => (
                                <div key={pkg.name} className="ledger-row flex items-baseline justify-between gap-4 py-4">
                                    <div>
                                        <p className="font-display text-lg text-foreground">{pkg.name}</p>
                                        <p className="mono-meta mt-1">{pkg.desc}</p>
                                    </div>
                                    <span className="font-mono text-base text-foreground">{pkg.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {featured.length > 0 ? (
                <Section>
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Work from the TC and real estate space
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Client sites alongside product work like{" "}
                                    <Link href="/work/norma" className="text-foreground hover:text-primary transition-colors underline underline-offset-4">
                                        Norma
                                    </Link>{" "}
                                    (early access). Products are labeled as products — they&apos;re tools I built, not client projects.
                                </p>
                            </div>
                            <Link
                                href="/work?industry=tc"
                                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                            >
                                <span className="font-medium">Browse all TC case studies</span>
                                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featured.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            ) : null}

            <section id="automation" className="bg-surface-1 border-y border-rule">
                <Section padding="none" className="py-16 sm:py-20 md:py-24">
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <MonoLabel className="mb-5">Optional add-on</MonoLabel>
                            <h2 className="font-display text-3xl text-foreground sm:text-4xl md:text-5xl display-balance">
                                Stop chasing missing info.
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-foreground/78">
                                TCs waste time tracking down missing details. This add-on forces required fields, routes submissions,
                                and outputs a clean cover-sheet style summary (email + optional PDF) so every file starts organized.
                                It&apos;s done-for-you setup in your tools — and you own the accounts.
                            </p>
                            <ul className="mt-7 ledger border-t border-rule">
                                {automationBullets.map((item) => (
                                    <CheckRow key={item}>{item}</CheckRow>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3" staggerDelay={0.08}>
                        {automationPackages.map((tier) => (
                            <StaggerItem key={tier.name} className="h-full">
                                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]">
                                    <p className="mono-label text-muted-foreground">{tier.name}</p>
                                    <p className="mt-3 font-display text-2xl text-foreground">{tier.price}</p>
                                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-rule pt-5 text-sm leading-relaxed text-foreground/75">
                                        {tier.bullets.map((bullet) => (
                                            <li key={bullet} className="flex items-start gap-2.5">
                                                <span aria-hidden className="text-primary">—</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-5 text-xs leading-relaxed text-foreground/70">
                                        <span className="font-semibold text-foreground">Best for:</span> {tier.bestFor}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <p className="mono-meta mt-6">Team builds available for higher volume / broker ops.</p>

                    <p className="mt-8 border-l-2 border-primary/50 pl-5 text-base leading-relaxed text-foreground/75">
                        <span className="font-semibold text-foreground">Best results when:</span> you&apos;re ready to
                        standardize intake and respond quickly to qualified leads.
                    </p>
                </Section>
            </section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="Free transaction coordinator templates"
                        subtitle="Templates and checklists I can auto-populate or structure around your intake (Jotform/Forms). Use them as-is, or adapt the structure for your workflow."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
                    <StaggerItem>
                        <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)]">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-task-list.webp"
                                    alt="TC Task List Sheet preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/60">
                                        Example (region-specific)
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-semibold text-foreground">TC Task List Sheet</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    A real task list built for the Poconos region—use it as a reference, then customize for your rules.
                                </p>
                                <div className="mt-5">
                                    <Link href="/resources/tc-task-list?source=tc-industry" className="btn-secondary inline-flex items-center gap-2">
                                        Get the PDF <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)]">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-cover-sheet.webp"
                                    alt="TC Cover Sheet preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/60">
                                        Cover sheet
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-semibold text-foreground">TC Cover Sheet / Quick Ref</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    A clean file-start summary you can print, email, or attach—designed to fit most TC workflows.
                                </p>
                                <div className="mt-5">
                                    <Link href="/resources/tc-cover-sheet?source=tc-industry" className="btn-secondary inline-flex items-center gap-2">
                                        Get the PDF <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)]">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-intake-checklist.webp"
                                    alt="TC Lead Intake Checklist preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/60">
                                        PDF template
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-semibold text-foreground">TC Lead Intake Checklist</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    A clean, printable lead intake checklist PDF—so you qualify faster and start every file clean.
                                </p>
                                <div className="mt-5">
                                    <Link href="/resources/tc-intake-checklist?source=tc-industry" className="btn-secondary inline-flex items-center gap-2">
                                        Get the PDF <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="FAQ"
                        eyebrowIndex="02"
                        title="Transaction coordinator website FAQ"
                        lead="Common questions from transaction coordinators before starting a website build."
                    />
                </AnimatedSection>

                <div className="mt-10 ledger border-t border-foreground/15">
                    {faqs.map((item) => (
                        <details key={item.q} className="group ledger-row py-1">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                                <p className="font-display text-lg text-foreground sm:text-xl">{item.q}</p>
                                <span aria-hidden className="shrink-0 font-mono text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                            </summary>
                            <p className="max-w-3xl pb-6 text-base leading-relaxed text-foreground/72">{item.a}</p>
                        </details>
                    ))}
                </div>
            </Section>

            <CTARuled
                eyebrow="Next step"
                title="Want a TC site that attracts better-fit leads?"
                body="Send a link to your current site (if you have one) and tell me what you want the page to do. I'll reply within one business day with next steps."
                primary={{ label: "Get started", href: "/contact?source=tc-cta" }}
                secondary={{ label: "Compare packages", href: "/tc-packages" }}
            />
        </>
    );
}


