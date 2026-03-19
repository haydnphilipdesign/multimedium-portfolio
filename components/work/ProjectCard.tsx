"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/content/projects";
import { IconArrowUpRight } from "@tabler/icons-react";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const prefersReducedMotion = useReducedMotion();
    const [imageError, setImageError] = useState(false);

    const cardContent = (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/70">
                {!imageError ? (
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(145deg, color-mix(in oklab, var(--primary) 34%, transparent), color-mix(in oklab, var(--glow) 22%, transparent))",
                        }}
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 text-[11px] font-medium text-muted-foreground/90">
                    {project.year}
                </span>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <IconArrowUpRight className="h-5 w-5" stroke={1.9} />
                </div>
            </div>

            <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {project.tagline}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    <span>{project.role.split(",")[0]}</span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors group-hover:text-primary">
                        View project
                        <IconArrowUpRight className="h-3.5 w-3.5" stroke={2} />
                    </span>
                </div>
            </div>
        </article>
    );

    if (prefersReducedMotion) {
        return (
            <Link
                href={`/work/${project.slug}`}
                className="focus-ring block h-full rounded-2xl"
            >
                {cardContent}
            </Link>
        );
    }

    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
            }}
        >
            <Link
                href={`/work/${project.slug}`}
                className="focus-ring block h-full rounded-2xl"
            >
                {cardContent}
            </Link>
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
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            <Link
                href={`/work/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {!imageError ? (
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
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
                                    "linear-gradient(145deg, color-mix(in oklab, var(--primary) 34%, transparent), color-mix(in oklab, var(--glow) 22%, transparent))",
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="truncate text-sm font-semibold text-foreground">
                            {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
