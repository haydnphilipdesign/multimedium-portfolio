import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    as?: "section" | "div" | "article";
    size?: "default" | "narrow" | "wide" | "full";
    padding?: "default" | "large" | "none";
}

const sizeClasses = {
    default: "max-w-6xl",
    narrow: "max-w-4xl",
    wide: "max-w-7xl",
    full: "max-w-none",
};

const paddingClasses = {
    default: "py-12 sm:py-14 md:py-16 lg:py-20",
    large: "py-16 sm:py-20 md:py-24 lg:py-28",
    none: "",
};

export function Section({
    children,
    className,
    id,
    as: Component = "section",
    size = "default",
    padding = "default",
}: SectionProps) {
    return (
        <Component
            id={id}
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                sizeClasses[size],
                paddingClasses[padding],
                className
            )}
        >
            {children}
        </Component>
    );
}

// Section heading component for consistent editorial typography
interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    eyebrowIndex?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    eyebrow,
    eyebrowIndex,
    align = "left",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-8 sm:mb-10 md:mb-12 lg:mb-14",
                align === "center" && "flex flex-col items-center text-center",
                className
            )}
        >
            {eyebrow && (
                <span className="mono-label mb-5 inline-flex items-center gap-2.5">
                    {eyebrowIndex && (
                        <>
                            <span aria-hidden className="text-foreground/55">{eyebrowIndex}</span>
                            <span aria-hidden className="h-px w-5 bg-current opacity-40" />
                        </>
                    )}
                    {eyebrow}
                </span>
            )}
            <h2 className="font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "mt-5 max-w-2xl text-lg text-foreground/75 leading-relaxed text-pretty",
                        align === "center" ? "mx-auto" : "mx-0"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
