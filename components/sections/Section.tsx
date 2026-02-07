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

// Section heading component for consistent typography
interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    align = "left",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-8 sm:mb-10 md:mb-12 lg:mb-14",
                align === "center" && "text-center",
                className
            )}
        >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed text-pretty",
                        align === "center" ? "mx-auto" : "mx-0"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
