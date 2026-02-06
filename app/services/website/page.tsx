import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import {
    IconCheck,
    IconArrowRight,
    IconChartBar,
    IconSparkles,
    IconShieldCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Website Build / Redesign",
    description:
        "A premium website build or redesign designed to earn trust, load fast, and turn visitors into inquiries.",
    alternates: {
        canonical: "/services/website",
    },
};

const included = [
    "Kickoff workshop + page plan",
    "Custom design with real copy (not lorem ipsum)",
    "Reusable sections so new pages stay consistent",
    "SEO basics + speed + accessibility",
    "Analytics + launch checklist",
];

const expectations = [
    { label: "Typical timeline", value: "4–6 weeks" },
    { label: "Primary conversion", value: "Qualified inquiries" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const fitFor = [
    "Teams who want to look premium and credible immediately",
    "Businesses with offers that are hard to explain on a template",
    "Owners who want speed, accessibility, and a site that stays consistent over time",
];

const notFor = [
    "A quick template refresh with no messaging work",
    "Projects where nobody can review content or approve pages",
    "Sites that exist only as a brochure with no conversion goal",
];

const faq = [
    {
        q: "Do you work with existing brands?",
        a: "Yes. I can extend an existing brand system or refine it enough to support a modern site without starting from scratch.",
    },
    {
        q: "What will the site be built on?",
        a: "I typically build modern, fast sites that are easy to maintain. If you have a preferred platform or CMS, I can adapt while keeping speed and quality high.",
    },
    {
        q: "Can you write the copy?",
        a: "I help shape messaging and structure. If you want full copywriting, I can collaborate with a writer or ship strong draft copy for your review.",
    },
];

export default function WebsiteServicePage() {
    const blissful = getProjectBySlug("blissful-existence");
    const threePenn = getProjectBySlug("three-penn-properties");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const featured = [paRes, blissful, threePenn].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-25" />
                        <div className="grain absolute inset-0 pointer-events-none" />

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    ← Back to services
                                </Link>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Website build / redesign
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    For teams that need to look premium, load fast, and turn visitors into qualified inquiries—without the site turning into a patchwork over time.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/contact?source=services-website" className="btn-primary">
                                        Talk about your project
                                    </Link>
                                    <Link href="/work?source=services-website" className="btn-secondary inline-flex items-center gap-2">
                                        Browse case studies <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/65 bg-background/55 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for clarity and trust</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/65 bg-card/55 px-4 py-3"
                                            >
                                                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                                                <p className="text-sm font-semibold text-foreground text-right">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection direction="none" delay={0.02}>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                <IconSparkles className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Premium positioning</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Clear offer, proof, and process so visitors trust you before they ask about price.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                <IconShieldCheck className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Consistent system</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Reusable sections and patterns so new pages do not break the design over time.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                <IconChartBar className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Measure results</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Tracking ties to inquiries so you can improve the site based on real outcomes.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        What&apos;s included
                    </h2>
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item}>
                            <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/65">
                                <IconCheck className="w-5 h-5 text-glow mt-0.5" stroke={2} />
                                <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
                            <h3 className="text-xl font-semibold text-foreground">Great fit for</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {fitFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.06}>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
                            <h3 className="text-xl font-semibold text-foreground">Not a fit</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {notFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {featured.length > 0 ? (
                <Section className="pt-10 md:pt-14" padding="none">
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Recent builds
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Proof-focused sites and systems designed to convert without feeling like marketing fluff.
                                </p>
                            </div>
                            <Link
                                href="/work?source=services-website"
                                className="inline-flex items-center gap-2 text-foreground hover:text-glow transition-colors group"
                            >
                                <span className="font-medium">Browse all case studies</span>
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

            <Section className="rounded-[2rem] bg-muted/35">
                <div className="grid gap-10 md:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Timeline
                        </h2>
                        <p className="text-muted-foreground">
                            Typical builds run 4–6 weeks depending on scope, content readiness, and review cadence.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Budget guidance
                        </h2>
                        <p className="text-muted-foreground">
                            Most redesigns land in the $10k–$25k range depending on scope and content readiness. I&apos;ll confirm a fixed price after a short scoping call and page plan.
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            <Section>
                <AnimatedSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        FAQs
                    </h2>
                </AnimatedSection>
                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.08}>
                    {faq.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="p-6 rounded-2xl bg-card border border-border/65 h-full">
                                <p className="font-semibold text-foreground mb-3">{item.q}</p>
                                <p className="text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want to upgrade your website this quarter?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you do and what’s not working on the current site. I’ll reply with next steps and a plan within one business day.
                    </p>
                    <Link href="/contact?source=services-website-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}





