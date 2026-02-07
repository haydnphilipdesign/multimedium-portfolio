"use client";

import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type MobileBehavior = "animate" | "static";

const MOTION_EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];
const MOBILE_QUERY = "(max-width: 767px)";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    mobileBehavior?: MobileBehavior;
}

const directionVariants: Record<string, Variants> = {
    up: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -24 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0 },
    },
    none: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

function useIsMobileViewport() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia(MOBILE_QUERY);
        const update = () => setIsMobile(mediaQuery.matches);

        update();
        mediaQuery.addEventListener("change", update);
        return () => mediaQuery.removeEventListener("change", update);
    }, []);

    return isMobile;
}

function useShouldSkipMotion(mobileBehavior: MobileBehavior) {
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobileViewport();

    return prefersReducedMotion || (isMobile && mobileBehavior === "static");
}

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.45,
    mobileBehavior = "static",
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-72px" });
    const shouldSkipMotion = useShouldSkipMotion(mobileBehavior);

    const variants: Variants = directionVariants[direction];

    if (shouldSkipMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{
                duration,
                delay,
                ease: MOTION_EASE,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children animation wrapper
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    mobileBehavior?: MobileBehavior;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    mobileBehavior = "static",
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-72px" });
    const shouldSkipMotion = useShouldSkipMotion(mobileBehavior);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    if (shouldSkipMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Child item for stagger animations
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    mobileBehavior?: MobileBehavior;
}

export function StaggerItem({
    children,
    className = "",
    mobileBehavior = "static",
}: StaggerItemProps) {
    const shouldSkipMotion = useShouldSkipMotion(mobileBehavior);

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.35,
                ease: MOTION_EASE,
            },
        },
    };

    if (shouldSkipMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
