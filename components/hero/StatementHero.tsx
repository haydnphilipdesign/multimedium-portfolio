"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function StatementHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24"
        >
            <div className="absolute inset-0 bg-hero-gradient opacity-60" />
            <div className="grain absolute inset-0 pointer-events-none" />
            {/* Subtle grid pattern */}
            <div className="hero-grid absolute inset-0 opacity-40" />

            {/* Main content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-[1fr_auto] gap-10 sm:gap-12 lg:gap-16 items-center py-10 sm:py-12 md:py-0">

                    {/* Left: Text content */}
                    <motion.div
                        className="max-w-2xl"
                        style={{
                            opacity: prefersReducedMotion ? 1 : contentOpacity,
                            y: prefersReducedMotion ? 0 : contentY,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Availability badge - selective framing */}
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/35 bg-primary/10">
                                <span className="relative flex h-2 w-2">
                                    {!prefersReducedMotion && (
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/70 opacity-80" />
                                    )}
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                                </span>
                                <span className="text-sm text-foreground/85 font-medium">
                                    Taking on 1–2 new projects per month
                                </span>
                            </div>

                            {/* Main headline - outcome focused */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
                                Websites that generate
                                <br />
                                <span className="text-glow">
                                    qualified leads—not just traffic.
                                </span>
                            </h1>

                            {/* Subheadline - transformation focused */}
                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
                                Conversion-first web design + development for service businesses and SaaS teams. Clear positioning, clean copy, and fast pages that make reaching out feel easy.
                            </p>

                            <p className="text-sm text-muted-foreground/85 max-w-xl mb-10">
                                Built with accessibility + tracking from day one—so you can measure what’s working and improve it.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {schedulingUrl ? (
                                    <a
                                        href={schedulingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold"
                                    >
                                        <span>Book a call</span>
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                ) : (
                                    <Link
                                        href="/contact?source=home-hero"
                                        className="btn-primary group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold"
                                    >
                                        <span>Talk about your project</span>
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
                                )}
                                <Link
                                    href="/work"
                                    className="btn-secondary inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-medium"
                                >
                                    Browse case studies
                                </Link>
                            </div>

                            {schedulingUrl ? (
                                <p className="mt-5 text-sm text-muted-foreground/85 max-w-xl">
                                    Prefer email?{" "}
                                    <Link
                                        href="/contact?source=home-hero"
                                        className="text-foreground/85 underline underline-offset-4 hover:text-foreground transition-colors"
                                    >
                                        Send a message
                                    </Link>
                                    .
                                </p>
                            ) : null}
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero image - bold yellow against dark */}
                    <motion.div
                        className="relative flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div className="absolute -inset-6 sm:-inset-8 bg-glow/20 rounded-3xl blur-3xl" />

                            {/* Image container */}
                            <motion.div
                                className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]"
                                style={{
                                    scale: prefersReducedMotion ? 1 : imageScale,
                                }}
                            >
                                <Image
                                    src="/haydn.png"
                                    alt="Haydn - Web Designer & Developer"
                                    width={480}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 420px, (min-width: 640px) 360px, 300px"
                                />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute z-20 bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
            >
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                <motion.div
                    className="w-5 h-8 rounded-full border border-border/70 flex items-start justify-center p-1.5"
                    animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-1 h-1.5 rounded-full bg-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
