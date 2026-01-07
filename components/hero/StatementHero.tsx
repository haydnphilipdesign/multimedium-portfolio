"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Match the exact yellow from the photo
const BRAND_YELLOW = "#E8C72E";
const BRAND_YELLOW_DARK = "#D4B429";

export function StatementHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-15%"]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ backgroundColor: BRAND_YELLOW }}
        >
            {/* Subtle grain texture */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Main content grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24 lg:py-0">

                    {/* Left: Text content */}
                    <motion.div
                        className="order-2 lg:order-1"
                        style={{
                            opacity: isMounted ? contentOpacity : 1,
                            y: isMounted ? contentY : 0,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {/* Availability badge */}
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-black/20 bg-black/5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-50" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                                </span>
                                <span className="text-sm text-black/80 font-medium">
                                    Available for new projects
                                </span>
                            </div>

                            {/* Main headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
                                I build websites
                                <br />
                                that convert.
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-black/70 max-w-lg mb-10 leading-relaxed">
                                Strategy-led design and clean Next.js builds.
                                Premium look, fast load, inevitable contact.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-black/90 transition-all duration-300 hover:scale-[1.02]"
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
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-black/20 text-black font-medium hover:bg-black/5 hover:border-black/30 transition-all duration-300"
                                >
                                    View Work
                                </Link>
                            </div>

                            {/* Quick stats */}
                            <div className="flex gap-8 mt-12 pt-8 border-t border-black/10">
                                <div>
                                    <div className="text-2xl font-bold text-black">4-6</div>
                                    <div className="text-sm text-black/60">Week launches</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-black">95+</div>
                                    <div className="text-sm text-black/60">Lighthouse scores</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-black">100%</div>
                                    <div className="text-sm text-black/60">Custom builds</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero image - blends with background */}
                    <motion.div
                        className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            {/* The image - no container styling, just blends */}
                            <Image
                                src="/haydn.png"
                                alt="Haydn - Web Designer & Developer"
                                width={600}
                                height={800}
                                className="w-full h-auto"
                                priority
                                sizes="(min-width: 1024px) 40vw, 80vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom location tag */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-black/50 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                    opacity: isMounted ? contentOpacity : 1,
                }}
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Poconos, PA • Remote Worldwide</span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                    opacity: isMounted ? contentOpacity : 1,
                }}
            >
                <motion.div
                    className="w-2 h-2 rounded-full bg-black/40"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div className="w-px h-12 bg-black/20" />
            </motion.div>
        </section>
    );
}
