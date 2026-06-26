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
                            <div className="mb-7 inline-flex items-center gap-3">
                                <span className="status-dot !h-2 !w-2" />
                                <span className="mono-label !tracking-[0.16em] text-muted-foreground">
                                    Poconos, PA — Taking 2 projects / month
                                </span>
                            </div>

                            <h1 className="mb-6 font-display text-[2.6rem] font-medium leading-[1.02] text-foreground sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]">
                                Your website should make agents take you{" "}
                                <em className="font-display italic text-primary">seriously</em> before you ever pick up the phone.
                            </h1>

                            <p className="mb-9 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                I design and build websites for transaction coordinators and real estate professionals — so when an agent visits your site, calling you feels like the obvious next step.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact?source=home-hero" className="btn btn-primary group">
                                    Book a free discovery call
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                                <Link href="/work" className="btn btn-secondary">
                                    View selected work
                                </Link>
                            </div>

                            <div className="mt-10 max-w-xl border-t border-rule pt-5">
                                <p className="text-sm font-medium leading-relaxed text-foreground/70">
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
                        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface-2 shadow-[var(--shadow-elevated)]">
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
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/85 via-background/30 to-transparent px-5 pb-5 pt-12">
                                <div>
                                    <p className="font-display text-lg text-foreground">Haydn</p>
                                    <p className="mono-meta mt-0.5">Designer + Developer</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
