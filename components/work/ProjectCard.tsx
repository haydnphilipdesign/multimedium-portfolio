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
        <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-glow/30 hover:shadow-xl hover:shadow-glow/5">
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {!imageError ? (
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    // Fallback gradient placeholder
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
                        }}
                    />
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                        {project.category}
                    </span>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 transform translate-x-2 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                        <IconArrowUpRight className="w-5 h-5" stroke={2} />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {project.tagline}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{project.role.split(",")[0]}</span>
                </div>
            </div>

            {/* Hover border glow effect */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: `inset 0 0 0 1px ${project.color}33`,
                }}
            />
        </div>
    );

    if (prefersReducedMotion) {
        return (
            <Link href={`/work/${project.slug}`} className="block">
                {cardContent}
            </Link>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            <Link href={`/work/${project.slug}`} className="block">
                {cardContent}
            </Link>
        </motion.div>
    );
}

// Compact version for grid displays
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
                className="group block relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-glow/30"
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
                                background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-sm font-medium text-foreground truncate">
                            {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
