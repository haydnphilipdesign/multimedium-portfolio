"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function StatementHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [isMounted, setIsMounted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);

    // Smooth spring for mouse tracking
    const springConfig = { damping: 30, stiffness: 150 };
    const mouseXSpring = useSpring(mousePosition.x, springConfig);
    const mouseYSpring = useSpring(mousePosition.y, springConfig);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center overflow-hidden bg-black"
        >
            {/* Background gradient - warm amber tones */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-black to-black" />

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    x: useTransform(mouseXSpring, [0, 1], ["-3%", "3%"]),
                    y: useTransform(mouseYSpring, [0, 1], ["-3%", "3%"]),
                }}
            >
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500/8 blur-[80px]" />
            </motion.div>

            {/* Noise/grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Main content grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-20 lg:py-0">

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
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                                </span>
                                <span className="text-sm text-amber-200/90 font-medium">
                                    Available for new projects
                                </span>
                            </div>

                            {/* Main headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                                I build websites
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                                    that convert.
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
                                Strategy-led design and clean Next.js builds.
                                Premium look, fast load, inevitable contact.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-[1.02]"
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
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    View Work
                                </Link>
                            </div>

                            {/* Quick stats */}
                            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-bold text-white">4-6</div>
                                    <div className="text-sm text-white/50">Week launches</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">95+</div>
                                    <div className="text-sm text-white/50">Lighthouse scores</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">100%</div>
                                    <div className="text-sm text-white/50">Custom builds</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero image */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-w-md lg:max-w-none mx-auto">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent blur-2xl" />

                            {/* Image container with mask */}
                            <motion.div
                                className="relative h-full rounded-2xl overflow-hidden"
                                style={{
                                    scale: isMounted ? imageScale : 1,
                                    y: isMounted ? imageY : 0,
                                }}
                            >
                                {/* Gradient overlay on image */}
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:from-transparent" />

                                {/* The image */}
                                <Image
                                    src="/haydn.png"
                                    alt="Haydn - Web Designer & Developer"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                />
                            </motion.div>

                            {/* Floating accent elements */}
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent backdrop-blur-sm"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-transparent backdrop-blur-sm"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom location tag */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/40 text-sm"
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
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
                <motion.div
                    className="w-2 h-2 rounded-full bg-amber-500"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
}
