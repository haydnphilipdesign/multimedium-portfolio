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

    const exploreLinks = [
        { href: "/services", label: "Services" },
        { href: "/industries", label: "Industries" },
        { href: "/work", label: "Work" },
        { href: "/lab", label: "Lab" },
        { href: "/tools", label: "Tools" },
        { href: "/resources", label: "Resources" },
        { href: "/about", label: "About" },
        { href: "/contact?source=footer", label: "Contact" },
    ];

    const industryLinks = [
        { href: "/industries/real-estate-professionals?source=footer", label: "Real Estate Professionals" },
        { href: "/industries/transaction-coordinators?source=footer", label: "Transaction Coordinators" },
        { href: "/industries/real-estate-coaches?source=footer", label: "Coaches & Brokerages" },
        { href: "/tc-packages?source=footer", label: "TC Website Packages" },
        { href: "/services/website?source=footer", label: "Custom Websites" },
        { href: "/services/landing-pages?source=footer", label: "Landing Pages" },
        { href: "/services/growth-retainers?source=footer", label: "Hosting & Retainers" },
        { href: "/industries/homeowners-associations?source=footer", label: "HOAs" },
        { href: "/industries/trades?source=footer", label: "Trades & Services" },
    ];

    return (
        <footer className="border-t border-foreground/15 bg-surface-1">
            {/* Brand band */}
            <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
                <div className="grid gap-10 border-b border-rule pb-12 md:grid-cols-[1.4fr_1fr] md:items-end md:pb-14">
                    <div>
                        <p className="mono-label mb-5">Web design · Poconos, PA</p>
                        <Link href="/" className="inline-block">
                            <span className="font-display text-5xl text-foreground transition-colors hover:text-primary sm:text-6xl md:text-7xl">
                                Multimedium
                            </span>
                        </Link>
                        <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/75">
                            Websites that make it easy to trust you. I design and build sites for
                            transaction coordinators, real estate professionals, and the businesses
                            around them.
                        </p>
                    </div>
                    <div className="md:text-right">
                        <Link href="/contact?source=footer" className="btn btn-primary group">
                            Start a project
                            <IconArrowUpRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                stroke={2}
                            />
                        </Link>
                        <p className="mono-meta mt-5">Currently taking 2 projects / month</p>
                    </div>
                </div>

                {/* Link columns */}
                <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <p className="mono-label mb-5 text-muted-foreground">Explore</p>
                        <nav className="flex flex-col items-start gap-2.5">
                            {exploreLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="sm:col-span-2">
                        <p className="mono-label mb-5 text-muted-foreground">Services & Industries</p>
                        <nav className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {industryLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className="mono-label mb-5 text-muted-foreground">Connect</p>
                        <div className="flex flex-col items-start gap-2.5">
                            <Link
                                href="/contact?source=footer"
                                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                            >
                                Contact Haydn
                            </Link>
                            {schedulingUrl && (
                                <a
                                    href={schedulingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-primary"
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
                                    className="inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-primary"
                                >
                                    {link.label}
                                    <IconArrowUpRight className="h-3 w-3" stroke={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-rule py-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="mono-meta">&copy; {currentYear} Multimedium</p>
                    <p className="mono-meta">Designed &amp; built in the Poconos</p>
                </div>
            </div>
        </footer>
    );
}
