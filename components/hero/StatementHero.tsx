"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

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
            <div className="hero-grid absolute inset-0 opacity-25" />

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
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
                                <span className="status-dot !h-2 !w-2" />
                                Taking on 1–2 projects each month
                            </div>

                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="text-gradient">Websites that turn visitors into clients.</span>
                            </h1>

                            <p className="mb-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
                                I design and build websites for service businesses — strategy, messaging, design, and code in one loop so your site makes reaching out feel obvious.
                            </p>

                            <p className="mb-9 text-sm text-muted-foreground">
                                Projects start at <span className="font-semibold text-foreground">$750</span> depending on scope, with optional hosting &amp; maintenance from <span className="font-semibold text-foreground">$59/month</span>.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact?source=home-hero" className="btn-primary group">
                                    Start a conversation
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
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.35 }}
                        style={{ y: disableParallax ? 0 : cardY }}
                        className="relative mx-auto w-full max-w-md"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/40 shadow-[var(--shadow-soft)]">
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
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-5 pb-5 pt-10">
                                <p className="text-sm font-medium text-foreground">Haydn</p>
                                <p className="text-xs text-muted-foreground">Designer + Developer</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
