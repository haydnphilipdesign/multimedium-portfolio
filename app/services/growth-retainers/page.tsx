import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Growth Retainers",
    description:
        "Ongoing improvements so your website keeps getting clearer, faster, and higher-converting after launch.",
    alternates: {
        canonical: "/services/growth-retainers",
    },
};

const included = [
    "Monthly / quarterly experiment plan",
    "Landing pages + conversion improvements",
    "SEO roadmap + content support",
    "Reporting that ties to leads, not vanity metrics",
    "Design + dev support as you grow",
];

export default function GrowthRetainersServicePage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl space-y-6">
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            ← Back to services
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Growth retainers
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            For teams that don&apos;t want the website to be “done.” Keep improving conversion, SEO, and clarity with a reliable iteration cadence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact?source=services-retainer" className="btn-primary">
                                Talk about your project
                            </Link>
                            <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                                View work <IconArrowRight className="w-4 h-4" stroke={2} />
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
                            Cadence
                        </h2>
                        <p className="text-muted-foreground">
                            Typical retainers run monthly with clear priorities, a defined backlog, and work shipped in small, measurable increments.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Budget guidance
                        </h2>
                        <p className="text-muted-foreground">
                            Retainers are scoped around a monthly cadence and outcomes. After a quick audit, I&apos;ll propose a plan and range that matches your runway.
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want your site to keep improving after launch?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        If you have traffic but not enough inquiries, a retainer is a simple way to ship steady improvements without starting from scratch each month.
                    </p>
                    <Link href="/contact?source=services-retainer-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
