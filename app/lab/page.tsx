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
