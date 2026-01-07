"use client";

import { useRef, useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Link from "next/link";
import { IconArrowDown, IconSparkles } from "@tabler/icons-react";

export function HeroParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Mouse position for pointer parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    // Scroll progress for scroll parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Transform values for different layers based on scroll
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const midgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => {
        // Detect touch device
        const checkTouch = () => {
            setIsTouchDevice(
                "ontouchstart" in window || navigator.maxTouchPoints > 0
            );
        };
        checkTouch();

        // Check reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleMotionChange);
        return () => mediaQuery.removeEventListener("change", handleMotionChange);
    }, []);

    // Handle mouse move for pointer parallax (desktop only)
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isTouchDevice || prefersReducedMotion) return;

        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        // Normalize mouse position to -1 to 1 range
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        mouseX.set(x);
        mouseY.set(y);
    };

    // Reduced motion: simple static layout with fade-in
    if (prefersReducedMotion) {
        return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
                {/* Static background with visible gradients */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.4)_0%,_transparent_70%)]" />
                    <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(236,72,153,0.3)_0%,_transparent_70%)]" />
                    <div className="absolute bottom-[-10%] left-[40%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0%,_transparent_70%)]" />
                </div>
                <div className="grain absolute inset-0" />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-sm text-purple-200">
                            <IconSparkles className="w-4 h-4 text-purple-400" stroke={1.5} />
                            <span>Haydn • Poconos, PA • Available for new builds</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                            Websites that{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">look premium</span>
                            <br />
                            and convert.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                            Strategy-led design and clean Next.js builds that ship fast, load fast,
                            and make contacting you feel inevitable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Start a Project
                            </Link>
                            <Link href="/work" className="btn-secondary">
                                View Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-[120vh] flex items-start justify-center overflow-hidden bg-background"
        >
            {/* Background Layer - Vibrant gradient orbs */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y: backgroundY,
                    x: useTransform(mouseXSpring, [-1, 1], ["-3%", "3%"]),
                }}
            >
                {/* Large purple orb - top left */}
                <div
                    className="absolute top-[-15%] left-[0%] w-[800px] h-[800px] rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
                    }}
                />
                {/* Pink/magenta orb - right side */}
                <div
                    className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.15) 40%, transparent 70%)",
                    }}
                />
                {/* Blue orb - bottom center */}
                <div
                    className="absolute bottom-[0%] left-[30%] w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)",
                    }}
                />
                {/* Cyan accent - bottom right */}
                <div
                    className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 60%)",
                    }}
                />
            </motion.div>

            {/* Midground Layer - Decorative elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    y: midgroundY,
                    x: useTransform(mouseXSpring, [-1, 1], ["-5%", "5%"]),
                }}
            >
                {/* Floating geometric elements with glow */}
                <div className="absolute top-[12%] left-[12%] w-32 h-32 border-2 border-purple-500/40 rounded-3xl rotate-12 shadow-[0_0_30px_rgba(139,92,246,0.3)]" />
                <div className="absolute top-[22%] right-[18%] w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.2)]" />
                <div className="absolute bottom-[35%] left-[20%] w-40 h-40 border border-blue-500/30 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.2)]" />
                <div className="absolute top-[45%] right-[8%] w-28 h-28 border border-cyan-500/25 rounded-2xl -rotate-12 shadow-[0_0_35px_rgba(34,211,238,0.15)]" />
                <div className="absolute bottom-[25%] right-[25%] w-20 h-20 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-xl rotate-45" />

                {/* Animated floating dots */}
                <motion.div
                    className="absolute top-[30%] left-[8%] w-3 h-3 rounded-full bg-purple-400/60"
                    animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[50%] right-[15%] w-2 h-2 rounded-full bg-pink-400/50"
                    animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-[40%] left-[35%] w-2.5 h-2.5 rounded-full bg-blue-400/50"
                    animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Grid pattern overlay - slightly more visible */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </motion.div>

            {/* Grain overlay */}
            <div className="grain absolute inset-0 pointer-events-none" />

            {/* Foreground Layer - Text content */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-[20vh]"
                style={{
                    y: foregroundY,
                    opacity: textOpacity,
                }}
            >
                <motion.div
                    style={{
                        x: useTransform(mouseXSpring, [-1, 1], ["1%", "-1%"]),
                        y: useTransform(mouseYSpring, [-1, 1], ["1%", "-1%"]),
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-sm text-purple-200"
                    >
                        <IconSparkles className="w-4 h-4 text-purple-400" stroke={1.5} />
                        <span>Haydn • Poconos, PA • Available for new builds</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]"
                    >
                        Websites that{" "}
                        <span
                            className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                            style={{
                                textShadow: "0 0 80px rgba(139, 92, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)"
                            }}
                        >
                            look premium
                        </span>
                        <br />
                        and convert.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
                    >
                        Strategy-led design and clean Next.js builds that ship fast, load fast,
                        and make contacting you feel inevitable.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-purple-500/30 bg-purple-500/10 text-white font-medium backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                        >
                            View Work
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-[-30vh] left-1/2 -translate-x-1/2"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-purple-300/70"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <IconArrowDown className="w-4 h-4" stroke={1.5} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
