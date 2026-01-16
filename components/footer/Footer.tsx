import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
    const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;

    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <Link
                            href="/"
                            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-glow"
                        >
                            Multimedium
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Poconos, PA • Remote friendly
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link
                            href="/services"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Services
                        </Link>
                        <Link
                            href="/work"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Work
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact?source=footer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Contact
                        </Link>
                        {schedulingUrl && (
                            <a
                                href={schedulingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Book a Call
                            </a>
                        )}
                    </nav>
                </div>

                {(linkedinUrl || githubUrl || facebookUrl) && (
                    <div className="mt-8 flex items-center justify-center gap-6 text-sm">
                        {linkedinUrl && (
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                LinkedIn
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                GitHub
                            </a>
                        )}
                        {facebookUrl && (
                            <a
                                href={facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Facebook
                            </a>
                        )}
                    </div>
                )}

                <div className="mt-8 border-t border-border/40 pt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Multimedium. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
