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
                {/* Static background */}
                <div className="absolute inset-0 bg-hero-gradient" />
                <div className="grain absolute inset-0" />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm text-muted-foreground">
                            <IconSparkles className="w-4 h-4 text-glow" stroke={1.5} />
                            <span>Haydn • Poconos, PA • Available for new builds</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                            Websites that{" "}
                            <span className="text-gradient">look premium</span>
                            <br />
                            and convert.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
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
            {/* Background Layer - Moves slowest on scroll */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y: backgroundY,
                    x: useTransform(mouseXSpring, [-1, 1], ["-2%", "2%"]),
                }}
            >
                {/* Gradient orbs */}
                <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[oklch(0.3_0.15_280/0.3)] to-transparent blur-3xl" />
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-[oklch(0.25_0.12_320/0.25)] to-transparent blur-3xl" />
                <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-[oklch(0.28_0.1_250/0.2)] to-transparent blur-3xl" />
            </motion.div>

            {/* Midground Layer - Decorative shapes */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    y: midgroundY,
                    x: useTransform(mouseXSpring, [-1, 1], ["-4%", "4%"]),
                }}
            >
                {/* Floating geometric elements */}
                <div className="absolute top-[15%] left-[15%] w-24 h-24 border border-border/20 rounded-2xl rotate-12 opacity-40" />
                <div className="absolute top-[25%] right-[20%] w-16 h-16 bg-gradient-to-br from-glow/10 to-transparent rounded-full" />
                <div className="absolute bottom-[30%] left-[25%] w-32 h-32 border border-glow/10 rounded-full opacity-30" />
                <div className="absolute top-[40%] right-[10%] w-20 h-20 border border-border/15 rounded-lg -rotate-6 opacity-50" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
              linear-gradient(oklch(1 0 0 / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, oklch(1 0 0 / 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </motion.div>

            {/* Grain overlay */}
            <div className="grain absolute inset-0 pointer-events-none" />

            {/* Foreground Layer - Text content, moves against scroll */}
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
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground"
                    >
                        <IconSparkles className="w-4 h-4 text-glow" stroke={1.5} />
                        <span>Haydn • Poconos, PA • Available for new builds</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]"
                    >
                        Websites that{" "}
                        <span className="text-gradient glow-text">look premium</span>
                        <br />
                        and convert.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
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
                        <Link href="/contact" className="btn-primary">
                            Start a Project
                        </Link>
                        <Link href="/work" className="btn-secondary">
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
                        className="flex flex-col items-center gap-2 text-muted-foreground"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <IconArrowDown className="w-4 h-4" stroke={1.5} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
