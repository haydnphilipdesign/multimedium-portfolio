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
                                Poconos, PA • Taking on 2 projects per month
                            </div>

                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                                Your website should make agents take you seriously before you ever pick up the phone.
                            </h1>

                            <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                                I design and build websites for transaction coordinators and real estate professionals, so when an agent visits your site, calling you feels like the obvious next step.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact?source=home-hero" className="btn-primary group">
                                    Book a free discovery call
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                                <Link href="/work" className="btn-secondary">
                                    View selected work
                                </Link>
                            </div>

                            <div className="mt-9 max-w-2xl border-y border-border/70 py-4">
                                <p className="text-sm font-medium text-foreground">
                                    Trusted by transaction coordinators, real estate teams, and service businesses in Pennsylvania and beyond.
                                </p>
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
                                    src="/haydn.webp"
                                    alt="Haydn, founder of Multimedium, a web design studio serving the Poconos and real estate professionals"
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
