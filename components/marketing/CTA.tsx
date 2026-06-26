import Link from "next/link";
import { ReactNode } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { MonoLabel } from "@/components/sections/Editorial";
import { cn } from "@/lib/utils";

interface CTAAction {
    label: string;
    href: string;
}

interface CTAProps {
    eyebrow?: string;
    title: ReactNode;
    body?: ReactNode;
    primary: CTAAction;
    secondary?: CTAAction;
    className?: string;
}

/* ------------------------------------------------------------------
   CTADark — full-bleed deep-ink statement. The primary contrast
   moment / page closer. (Replaces the hardcoded #111827 section.)
------------------------------------------------------------------ */
export function CTADark({ eyebrow, title, body, primary, secondary, className }: CTAProps) {
    return (
        <section className={cn("bg-ink text-ink-foreground", className)}>
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:py-28 lg:px-8">
                <div>
                    {eyebrow && (
                        <MonoLabel className="mb-6 !text-flood">{eyebrow}</MonoLabel>
                    )}
                    <h2 className="font-display text-3xl leading-tight text-ink-foreground sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                </div>
                <div className="md:pl-6">
                    {body && (
                        <p className="max-w-xl text-lg leading-relaxed text-ink-foreground/75">{body}</p>
                    )}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href={primary.href} className="btn btn-on-ink btn-primary group">
                            {primary.label}
                            <IconArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                stroke={2}
                            />
                        </Link>
                        {secondary && (
                            <Link href={secondary.href} className="btn btn-on-ink btn-secondary">
                                {secondary.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------
   CTAFlooded — full-bleed signature-ochre field. Warm, confident.
------------------------------------------------------------------ */
export function CTAFlooded({ eyebrow, title, body, primary, secondary, className }: CTAProps) {
    return (
        <section className={cn("bg-flood text-flood-foreground", className)}>
            <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
                {eyebrow && (
                    <MonoLabel className="mb-6 !text-flood-foreground/70">{eyebrow}</MonoLabel>
                )}
                <h2 className="font-display text-3xl leading-tight text-flood-foreground sm:text-4xl md:text-5xl lg:text-6xl display-balance">
                    {title}
                </h2>
                {body && (
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-flood-foreground/80">
                        {body}
                    </p>
                )}
                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href={primary.href}
                        className="btn bg-foreground text-background hover:-translate-y-px hover:bg-foreground/90"
                    >
                        {primary.label}
                    </Link>
                    {secondary && (
                        <Link
                            href={secondary.href}
                            className="btn border-foreground/30 text-foreground hover:-translate-y-px hover:bg-foreground/5"
                        >
                            {secondary.label}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------
   CTARuled — quiet editorial closer on paper, ledger-ruled, left
   aligned. The restrained option for lower-key pages.
------------------------------------------------------------------ */
export function CTARuled({ eyebrow, title, body, primary, secondary, className }: CTAProps) {
    return (
        <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8", className)}>
            <div className="ledger border-t-2 border-foreground/15 pt-10 md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-12">
                <div className="max-w-2xl">
                    {eyebrow && <MonoLabel className="mb-5">{eyebrow}</MonoLabel>}
                    <h2 className="font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    {body && (
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75">{body}</p>
                    )}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-0">
                    <Link href={primary.href} className="btn btn-primary group">
                        {primary.label}
                        <IconArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            stroke={2}
                        />
                    </Link>
                    {secondary && (
                        <Link href={secondary.href} className="btn btn-secondary">
                            {secondary.label}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
