"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCircleCheckFilled } from "@tabler/icons-react";

const trustSignals = [
    "TC + real estate ops focus",
    "Fast, mobile-first builds",
    "Focused scope options for smaller teams",
];

export function StatementHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const update = () => setIsMobile(mediaQuery.matches);

        update();
        mediaQuery.addEventListener("change", update);

        return () => mediaQuery.removeEventListener("change", update);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
    const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.25]);
    const contentY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-10%"]);
    const disableParallax = prefersReducedMotion || isMobile;

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-20 sm:pt-28 md:pt-32"
        >
            <div className="absolute inset-0 bg-hero-gradient opacity-75" />
            <div className="grain absolute inset-0 pointer-events-none" />
            <div className="hero-grid absolute inset-0 opacity-35" />

            <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 py-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.48fr)] md:gap-14 lg:gap-16">
                    <motion.div
                        style={{
                            opacity: disableParallax ? 1 : contentOpacity,
                            y: disableParallax ? 0 : contentY,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="max-w-3xl"
                        >
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-glow/30 bg-card/75 px-4 py-2 text-sm text-foreground shadow-[var(--shadow-soft)] backdrop-blur-md">
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-glow" />
                                Taking on 1 to 2 projects each month
                            </div>

                            <h1 className="mb-6 text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="text-gradient">Websites built to win trust and generate qualified leads.</span>
                            </h1>

                            <p className="mb-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
                                Built from strong TC and real estate experience, now helping small and medium local businesses across industries. Strategy, messaging, design, and build stay in one loop so your site earns trust fast and makes contacting you feel obvious.
                            </p>

                            <p className="mb-9 text-sm text-muted-foreground">
                                Most engagements land between <span className="font-semibold text-foreground">$5k and $25k</span>, with focused landing-page scopes for smaller budgets.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact?source=home-hero" className="btn-primary group">
                                    Talk about your project
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                                {schedulingUrl ? (
                                    <a
                                        href={schedulingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                    >
                                        Book a call
                                    </a>
                                ) : (
                                    <Link href="/work" className="btn-secondary">
                                        Browse case studies
                                    </Link>
                                )}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {trustSignals.map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
                                    >
                                        <IconCircleCheckFilled className="h-3.5 w-3.5 text-glow" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.35 }}
                        style={{ y: disableParallax ? 0 : cardY }}
                        className="relative mx-auto w-full max-w-md"
                    >
                        <div className="absolute -inset-8 rounded-[2.2rem] bg-glow/16 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[1.75rem] border border-border/75 bg-card/86 p-4 shadow-[var(--shadow-elevated)] backdrop-blur-lg">
                            <div className="relative overflow-hidden rounded-2xl border border-border/55 bg-muted/40">
                                <motion.div style={{ scale: disableParallax ? 1 : imageScale }}>
                                    <Image
                                        src="/haydn.png"
                                        alt="Haydn - Web Designer & Developer"
                                        width={520}
                                        height={620}
                                        className="h-auto w-full"
                                        priority
                                        sizes="(min-width: 1024px) 420px, (min-width: 768px) 380px, 100vw"
                                    />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/55 to-transparent p-4">
                                    <div className="inline-flex flex-col rounded-lg border border-border/60 bg-background/88 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur-md">
                                        <p className="text-sm font-medium text-foreground">Haydn · Designer + Developer</p>
                                        <p className="text-xs text-muted-foreground">One person from strategy to launch</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-2xl border border-border/60 bg-background/88 p-4">
                                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-glow/30 bg-glow/10 px-2.5 py-1 text-[11px] font-medium text-foreground">
                                    Studio promise
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Professional quality without agency bloat: clear communication, realistic timelines, and pages that convert.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
