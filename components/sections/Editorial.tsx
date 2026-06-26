import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   MonoLabel — JetBrains Mono kicker that replaces the gray uppercase
   eyebrow. Optionally prefixed with a mono index (e.g. 01 — PROCESS).
------------------------------------------------------------------ */
interface MonoLabelProps {
    children: ReactNode;
    index?: string;
    className?: string;
    tone?: "accent" | "muted";
}

export function MonoLabel({ children, index, className, tone = "accent" }: MonoLabelProps) {
    return (
        <span
            className={cn(
                "mono-label inline-flex items-center gap-2.5",
                tone === "muted" && "text-muted-foreground",
                className
            )}
        >
            {index && (
                <>
                    <span aria-hidden className={tone === "accent" ? "text-foreground/55" : undefined}>
                        {index}
                    </span>
                    <span aria-hidden className="h-px w-5 bg-current opacity-40" />
                </>
            )}
            <span>{children}</span>
        </span>
    );
}

/* ------------------------------------------------------------------
   SectionOpener — Statement-style opener: mono eyebrow + large
   Fraunces headline + optional lead + optional action.
------------------------------------------------------------------ */
interface SectionOpenerProps {
    eyebrow?: string;
    eyebrowIndex?: string;
    title: ReactNode;
    lead?: ReactNode;
    align?: "left" | "center";
    action?: ReactNode;
    className?: string;
    titleClassName?: string;
    size?: "default" | "display";
}

export function SectionOpener({
    eyebrow,
    eyebrowIndex,
    title,
    lead,
    align = "left",
    action,
    className,
    titleClassName,
    size = "default",
}: SectionOpenerProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-5",
                align === "center" && "items-center text-center",
                action && align === "left" && "md:flex-row md:items-end md:justify-between md:gap-10",
                className
            )}
        >
            <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
                {eyebrow && (
                    <MonoLabel index={eyebrowIndex} className="mb-5">
                        {eyebrow}
                    </MonoLabel>
                )}
                <h2
                    className={cn(
                        "font-display text-foreground",
                        size === "display"
                            ? "text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] display-balance"
                            : "text-3xl sm:text-4xl md:text-5xl",
                        titleClassName
                    )}
                >
                    {title}
                </h2>
                {lead && (
                    <p
                        className={cn(
                            "mt-5 text-lg leading-relaxed text-foreground/75 text-pretty",
                            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"
                        )}
                    >
                        {lead}
                    </p>
                )}
            </div>
            {action && <div className="shrink-0">{action}</div>}
        </div>
    );
}

/* ------------------------------------------------------------------
   Statement — a single large Fraunces sentence with editorial air.
   For "quiet" rhythm moments. Supports italic emphasis via markup.
------------------------------------------------------------------ */
interface StatementProps {
    eyebrow?: string;
    eyebrowIndex?: string;
    children: ReactNode;
    className?: string;
}

export function Statement({ eyebrow, eyebrowIndex, children, className }: StatementProps) {
    return (
        <div className={cn("grid gap-8 md:grid-cols-[0.32fr_0.68fr] md:gap-12", className)}>
            {eyebrow ? (
                <div className="md:pt-3">
                    <MonoLabel index={eyebrowIndex}>{eyebrow}</MonoLabel>
                </div>
            ) : (
                <div className="hidden md:block" />
            )}
            <p className="font-display text-2xl leading-snug text-foreground text-balance sm:text-3xl md:text-[2.4rem] md:leading-[1.16]">
                {children}
            </p>
        </div>
    );
}

/* ------------------------------------------------------------------
   PullQuote — Fraunces italic editorial punctuation.
------------------------------------------------------------------ */
export function PullQuote({
    children,
    cite,
    className,
}: {
    children: ReactNode;
    cite?: string;
    className?: string;
}) {
    return (
        <figure className={cn("border-l-2 border-primary/60 pl-6 sm:pl-8", className)}>
            <blockquote className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl md:text-[2.1rem]">
                {children}
            </blockquote>
            {cite && <figcaption className="mono-meta mt-5">{cite}</figcaption>}
        </figure>
    );
}

/* ------------------------------------------------------------------
   RuledList / RuledRow — the ledger-line signature motif. Replaces
   card grids for value props, process, "what's included", etc.
------------------------------------------------------------------ */
export function RuledList({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={cn("ledger", className)}>{children}</div>;
}

interface RuledRowProps {
    index?: string;
    title: ReactNode;
    children?: ReactNode;
    meta?: ReactNode;
    action?: ReactNode;
    className?: string;
}

export function RuledRow({ index, title, children, meta, action, className }: RuledRowProps) {
    return (
        <div
            className={cn(
                "ledger-row grid gap-x-6 gap-y-2 py-6 sm:py-7 md:grid-cols-[3.5rem_1fr_auto] md:items-baseline md:gap-x-8",
                className
            )}
        >
            {index ? (
                <span className="font-mono text-sm text-primary md:pt-1">{index}</span>
            ) : (
                <span className="hidden md:block" />
            )}
            <div>
                <h3 className="font-display text-xl text-foreground sm:text-2xl">{title}</h3>
                {children && (
                    <div className="mt-2 max-w-2xl text-base leading-relaxed text-foreground/72">
                        {children}
                    </div>
                )}
            </div>
            {meta && <div className="mono-meta md:pt-1.5 md:text-right">{meta}</div>}
            {action && <div className="md:pt-1">{action}</div>}
        </div>
    );
}

/* ------------------------------------------------------------------
   FeatureRow — a simple hairline-ruled definition row (label + body)
   for "great fit", spec lists, comparisons without boxes.
------------------------------------------------------------------ */
export function CheckRow({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <li className={cn("ledger-row flex items-baseline gap-3 py-3.5", className)}>
            <span aria-hidden className="mt-0.5 text-primary">
                —
            </span>
            <span className="text-base leading-relaxed text-foreground/80">{children}</span>
        </li>
    );
}
