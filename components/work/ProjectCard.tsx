"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/content/projects";
import { IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

function projectLinkProps(project: Project) {
    const isConcept = project.kind === "Concept";
    return isConcept && project.externalUrl
        ? { href: project.externalUrl, target: "_blank" as const, rel: "noopener noreferrer" }
        : { href: `/work/${project.slug}` };
}

function metaLabel(project: Project) {
    if (project.kind === "Concept") return "Concept · demo";
    if (project.kind === "Product") return "Product";
    if (project.kind === "Personal") return "Personal";
    return project.role.split(",")[0];
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const prefersReducedMotion = useReducedMotion();
    const [imageError, setImageError] = useState(false);
    const isConcept = project.kind === "Concept";

    const cardContent = (
        <article className="group relative flex h-full flex-col">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/70 bg-surface-2">
                {!imageError ? (
                    <Image
                        src={project.thumbnail}
                        alt={
                            isConcept
                                ? `${project.title} — concept website design (fictional brand)`
                                : `${project.title} website design case study preview`
                        }
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(145deg, color-mix(in oklab, var(--primary) 32%, transparent), color-mix(in oklab, var(--primary) 10%, transparent))",
                        }}
                    />
                )}

                {isConcept && (
                    <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm">
                        Concept · demo
                    </span>
                )}

                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 shadow-[var(--shadow-soft)] transition-opacity duration-300 group-hover:opacity-100">
                    <IconArrowUpRight className="h-4.5 w-4.5" stroke={1.9} />
                </div>
            </div>

            <div className="flex flex-1 flex-col px-1 pt-5">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl text-foreground sm:text-[1.35rem]">
                        {project.title}
                    </h3>
                    <span className="mono-meta shrink-0">{project.year}</span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">{project.tagline}</p>
                <div className="mt-4 flex items-center justify-between border-t border-rule pt-3.5">
                    <span className="mono-meta">{metaLabel(project)}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {isConcept ? "View live demo" : "View project"}
                        <IconArrowUpRight className="h-3.5 w-3.5" stroke={2} />
                    </span>
                </div>
            </div>
        </article>
    );

    const linkProps = projectLinkProps(project);

    if (prefersReducedMotion) {
        return (
            <Link {...linkProps} className="focus-ring block h-full rounded-xl">
                {cardContent}
            </Link>
        );
    }

    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
        >
            <Link {...linkProps} className="focus-ring block h-full rounded-xl">
                {cardContent}
            </Link>
        </motion.div>
    );
}

/* ------------------------------------------------------------------
   FeaturedProject — large, image-forward, asymmetric showcase.
   For the top of Work and the homepage. Shows the work BIG.
------------------------------------------------------------------ */
export function FeaturedProject({
    project,
    index = 0,
    reverse = false,
}: ProjectCardProps & { reverse?: boolean }) {
    const prefersReducedMotion = useReducedMotion();
    const [imageError, setImageError] = useState(false);
    const isConcept = project.kind === "Concept";
    const linkProps = projectLinkProps(project);

    const body = (
        <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className={cn("relative", reverse && "md:order-2")}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/70 bg-surface-2 shadow-[var(--shadow-soft)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-elevated)]">
                    {!imageError ? (
                        <Image
                            src={project.heroImage || project.thumbnail}
                            alt={`${project.title} website design`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 55vw"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(145deg, color-mix(in oklab, var(--primary) 30%, transparent), color-mix(in oklab, var(--primary) 8%, transparent))",
                            }}
                        />
                    )}
                </div>
            </div>

            <div className={cn(reverse && "md:order-1")}>
                <div className="mono-label mb-5 flex items-center gap-2.5">
                    <span aria-hidden className="text-foreground/55">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="h-px w-5 bg-current opacity-40" />
                    <span>{metaLabel(project)}</span>
                </div>
                <h3 className="font-display text-3xl text-foreground sm:text-4xl md:text-[2.5rem] md:leading-[1.08]">
                    {project.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground/75">
                    {project.tagline}
                </p>
                <dl className="mt-7 grid max-w-md grid-cols-2 gap-y-4 border-t border-rule pt-6">
                    <div>
                        <dt className="mono-meta">Year</dt>
                        <dd className="mt-1 text-sm text-foreground">{project.year}</dd>
                    </div>
                    <div>
                        <dt className="mono-meta">Category</dt>
                        <dd className="mt-1 text-sm text-foreground">{project.category}</dd>
                    </div>
                </dl>
                <span className="mt-7 inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors group-hover:text-primary">
                    {isConcept ? "View live demo" : "Read the case study"}
                    <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke={1.9} />
                </span>
            </div>
        </article>
    );

    const link = (
        <Link {...linkProps} className="focus-ring block rounded-2xl">
            {body}
        </Link>
    );

    if (prefersReducedMotion) return link;

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
            {link}
        </motion.div>
    );
}

export function ProjectCardCompact({ project, index = 0 }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
        >
            <Link
                href={`/work/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                    {!imageError ? (
                        <Image
                            src={project.thumbnail}
                            alt={`${project.title} website design thumbnail`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(145deg, color-mix(in oklab, var(--primary) 32%, transparent), color-mix(in oklab, var(--primary) 12%, transparent))",
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="truncate text-sm font-semibold text-foreground">{project.title}</h3>
                        <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
