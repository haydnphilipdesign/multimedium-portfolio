"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function StatementHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

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
            className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
        >
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-0">

                    {/* Left: Text content */}
                    <motion.div
                        className="order-2 lg:order-1 max-w-2xl"
                        style={{
                            opacity: prefersReducedMotion ? 1 : contentOpacity,
                            y: prefersReducedMotion ? 0 : contentY,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {/* Availability badge */}
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10">
                                <span className="relative flex h-2 w-2">
                                    {!prefersReducedMotion && (
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                    )}
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                                </span>
                                <span className="text-sm text-amber-200/90 font-medium">
                                    Available for new projects
                                </span>
                            </div>

                            {/* Main headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                                I design and build
                                <br />
                                <span className="text-amber-400">
                                    websites that convert.
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                                Strategy-led design and clean Next.js builds.
                                Premium look, fast load, inevitable contact.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <span>Start a Project</span>
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/work"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                                >
                                    View Work
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero image - bold yellow against dark */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div className="absolute -inset-8 bg-amber-500/20 rounded-3xl blur-3xl" />

                            {/* Image container */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                                style={{
                                    scale: prefersReducedMotion ? 1 : imageScale,
                                }}
                            >
                                <Image
                                    src="/haydn.png"
                                    alt="Haydn - Web Designer & Developer"
                                    width={480}
                                    height={600}
                                    className="w-full h-auto max-w-[400px] lg:max-w-[480px]"
                                    priority
                                    sizes="(min-width: 1024px) 480px, 400px"
                                />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
            >
                <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
                <motion.div
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
                    animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-1 h-1.5 rounded-full bg-amber-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
