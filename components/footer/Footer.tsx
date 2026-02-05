import Link from "next/link";

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
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <Link
                            href="/"
                            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-glow rounded-md px-2 py-1 -mx-2 -my-1"
                        >
                            Multimedium
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Poconos, PA • Remote-friendly
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link
                            href="/services"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md px-2 py-1 -mx-2 -my-1"
                        >
                            Services
                        </Link>
                        <Link
                            href="/industries/transaction-coordinators?source=footer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md px-2 py-1 -mx-2 -my-1"
                        >
                            For TCs
                        </Link>
                        <Link
                            href="/work"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md px-2 py-1 -mx-2 -my-1"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md px-2 py-1 -mx-2 -my-1"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact?source=footer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md px-2 py-1 -mx-2 -my-1"
                        >
                            Contact
                        </Link>
                        {schedulingUrl && (
                            <a
                                href={schedulingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md px-2 py-1 -mx-2 -my-1"
                            >
                                Book a call
                            </a>
                        )}
                    </nav>

                    {socialLinks.length > 0 && (
                        <div className="flex items-center justify-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md px-2 py-1 -mx-2 -my-1"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-8 border-t border-border/40 pt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Multimedium. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
