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
        <footer className="border-t border-border/60">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                    <div className="sm:col-span-2 md:col-span-1 space-y-4">
                        <Link
                            href="/"
                            className="inline-block text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
                        >
                            Multimedium
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                            Web design for real estate professionals, transaction coordinators, and HOAs — clearer messaging, a professional presence, and more qualified inquiries.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Poconos, PA
                        </p>
                    </div>

                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Explore
                        </p>
                        <nav className="flex flex-col items-start gap-2">
                            <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Services
                            </Link>
                            <Link href="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Case Studies
                            </Link>
                            <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                About
                            </Link>
                            <Link href="/contact?source=footer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Industries
                        </p>
                        <nav className="flex flex-col items-start gap-2">
                            <Link href="/lp/real-estate?source=footer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Real Estate Agents
                            </Link>
                            <Link href="/industries/transaction-coordinators?source=footer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Transaction Coordinators
                            </Link>
                            <Link href="/industries/homeowners-associations?source=footer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                HOAs
                            </Link>
                            <Link href="/industries/trades?source=footer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Trades & Services
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Connect
                        </p>
                        <div className="flex flex-col items-start gap-2">
                            <Link href="/contact?source=footer" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                                Get in touch
                            </Link>
                            {schedulingUrl && (
                                <a
                                    href={schedulingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Book a call
                                    <IconArrowUpRight className="h-3.5 w-3.5" stroke={1.8} />
                                </a>
                            )}
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                    <IconArrowUpRight className="h-3 w-3" stroke={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-border/40 pt-6">
                    <p className="text-xs text-muted-foreground">
                        &copy; {currentYear} Multimedium
                    </p>
                </div>
            </div>
        </footer>
    );
}
