import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Logo / Name */}
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

                    {/* Navigation */}
                    <nav className="flex gap-8">
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
                            href="/contact"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-border/40 pt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Multimedium. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
