import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
    const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;

    const socialLinks = [
        { label: "LinkedIn", href: linkedinUrl },
        { label: "GitHub", href: githubUrl },
        { label: "Facebook", href: facebookUrl },
    ].filter((link): link is { label: string; href: string } => Boolean(link.href));

    return (
        <footer className="relative border-t border-border/60 bg-background/80 backdrop-blur-sm">
            <div className="grain pointer-events-none absolute inset-0" />
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-md px-1 py-1 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent-strong"
                        >
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-glow" />
                            Multimedium
                        </Link>
                        <p className="max-w-md text-sm text-muted-foreground">
                            TC-first web design for real estate ops teams and service businesses that need stronger trust, clearer messaging, and more qualified inquiries.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Poconos, PA • Remote-friendly
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link href="/contact?source=footer" className="btn-primary text-sm">
                                Talk about your project
                            </Link>
                            {schedulingUrl && (
                                <a
                                    href={schedulingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="touch-target inline-flex items-center gap-1.5 rounded-lg px-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Book a call
                                    <IconArrowUpRight className="h-3.5 w-3.5" stroke={1.8} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Explore
                        </p>
                        <nav className="space-y-2.5">
                            <Link href="/services" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Services
                            </Link>
                            <Link href="/work" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Case Studies
                            </Link>
                            <Link href="/about" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                About
                            </Link>
                            <Link href="/contact?source=footer" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Industries
                        </p>
                        <nav className="space-y-2.5">
                            <Link href="/industries/transaction-coordinators?source=footer" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Transaction Coordinators
                            </Link>
                            <Link href="/industries/trades?source=footer" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Trades & Service Businesses
                            </Link>
                            <Link href="/industries/home-services?source=footer" className="touch-target inline-flex w-fit items-center rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Home Services
                            </Link>
                            {socialLinks.length > 0 && (
                                <div className="pt-1">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                        Social
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="touch-target inline-flex items-center rounded-md px-1 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>

                <div className="mt-10 border-t border-border/50 pt-6">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Multimedium. Built by Haydn.
                    </p>
                </div>
            </div>
        </footer>
    );
}
