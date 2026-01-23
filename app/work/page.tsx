import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "A collection of recent projects—each one designed to earn trust, communicate value, and make reaching out feel like the obvious next step.",
    alternates: {
        canonical: "/work",
    },
};

export default function WorkPage() {
    const clientProjects = projects.filter((project) => project.kind === "Client");
    const otherProjects = projects.filter((project) => project.kind !== "Client");
    const getGridCols = (count: number) => (count === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3");

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            <span className="text-gradient">Case Studies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Real projects with clear goals, decisions, and outcomes—built to earn trust and turn visits into inquiries.
                        </p>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Client Work */}
            <Section>
                <AnimatedSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        Client work
                    </h2>
                </AnimatedSection>
                <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(clientProjects.length)}`}>
                    {clientProjects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </Section>

            {/* Products & Experiments */}
            {otherProjects.length > 0 && (
                <Section className="bg-muted/30">
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Products & experiments
                            </h2>
                            <p className="text-muted-foreground">
                                A few side projects that show how I think about UX, product flows, and shipping quickly.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className={`mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(otherProjects.length)}`}>
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* CTA Section */}
            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you do, who you want to attract, and what’s not working today. I’ll reply within one business day.
                    </p>
                    <Link href="/contact?source=work-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
