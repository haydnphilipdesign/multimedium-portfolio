import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Website Build / Redesign",
    description:
        "A premium website build or redesign built to earn trust, load fast, and turn visitors into inquiries.",
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
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl space-y-6">
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            ← Back to services
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Website build / redesign
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            For teams that need to look premium, load fast, and turn visitors into qualified inquiries—without the site turning into a patchwork over time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact?source=services-website" className="btn-primary">
                                Talk about your project
                            </Link>
                            <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                                Browse case studies <IconArrowRight className="w-4 h-4" stroke={2} />
                            </Link>
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
                            <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/50">
                                <IconCheck className="w-5 h-5 text-glow mt-0.5" stroke={2} />
                                <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="bg-muted/30">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                        FAQs
                    </h2>
                </AnimatedSection>
                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.08}>
                    {faq.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="p-6 rounded-2xl bg-card border border-border/50 h-full">
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
