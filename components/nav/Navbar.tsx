"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@base-ui/react/dialog";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries/transaction-coordinators", label: "For TCs" },
    { href: "/work", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;
    const showBackdrop = isScrolled || isOpen;
    const contactHref = useMemo(() => {
        const source =
            pathname === "/" ? "nav-home" : `nav${pathname.replaceAll("/", "-")}`;
        return `/contact?source=${encodeURIComponent(source)}`;
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4",
                    showBackdrop ? "bg-background/70 backdrop-blur-xl" : "bg-transparent"
                )}
            >
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className={cn(
                            "relative flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5",
                            showBackdrop
                                ? "border border-border/70 bg-background/90 shadow-[var(--shadow-soft)]"
                                : "border border-transparent bg-background/35 supports-backdrop-filter:backdrop-blur-md"
                        )}
                    >
                        <Link
                            href="/"
                            className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <div className="flex items-center">
                                <div>
                                    <p className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                                        Multimedium
                                    </p>
                                    <p className="hidden text-xs text-muted-foreground sm:block">
                                        TC-first web design studio
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center gap-1 rounded-full border border-border/65 bg-background/80 p-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href === "/contact" ? contactHref : link.href}
                                    aria-current={isActive(link.href) ? "page" : undefined}
                                    className={cn(
                                        "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                        isActive(link.href)
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 rounded-full border border-border/70 bg-accent -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-2">
                            {schedulingUrl && (
                                <a
                                    href={schedulingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Book a call
                                </a>
                            )}
                            <Link
                                href={contactHref}
                                className="btn-primary inline-flex items-center text-sm"
                            >
                                Talk about your project
                            </Link>
                        </div>

                        <Dialog.Trigger
                            className="md:hidden p-2 text-foreground hover:text-glow transition-colors rounded-lg"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? (
                                <IconX className="h-6 w-6" stroke={1.5} />
                            ) : (
                                <IconMenu2 className="h-6 w-6" stroke={1.5} />
                            )}
                        </Dialog.Trigger>
                    </div>
                </nav>
            </header>

            <Dialog.Portal>
                <Dialog.Backdrop
                    className="data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-[60] bg-overlay backdrop-blur-sm md:hidden"
                />
                <Dialog.Popup
                    className="data-open:animate-in data-closed:animate-out data-open:fade-in-0 data-closed:fade-out-0 data-open:slide-in-from-right-2 data-closed:slide-out-to-right-2 fixed inset-y-0 right-0 z-[70] w-full max-w-sm border-l border-border/40 bg-background/95 shadow-[var(--shadow-elevated)] outline-none supports-backdrop-filter:backdrop-blur-xl md:hidden"
                >
                    <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                    <div className="flex h-full flex-col p-6">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold tracking-tight text-foreground hover:text-glow transition-colors rounded-md px-2 py-1 -mx-2 -my-1"
                            >
                                Multimedium
                            </Link>
                            <Dialog.Close
                                className="p-2 text-foreground hover:text-glow transition-colors rounded-lg"
                                aria-label="Close menu"
                            >
                                <IconX className="h-6 w-6" stroke={1.5} />
                            </Dialog.Close>
                        </div>

                        <p className="mt-2 text-xs text-muted-foreground">
                            Built for transaction coordinators, real estate ops teams, and service businesses that want clearer, higher-converting websites.
                        </p>

                        <div className="mt-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href === "/contact" ? contactHref : link.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-current={isActive(link.href) ? "page" : undefined}
                                    className={cn(
                                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                                        isActive(link.href)
                                            ? "text-foreground bg-accent border border-border/65"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto pt-6 space-y-3 border-t border-border/40">
                            {schedulingUrl && (
                                <a
                                    href={schedulingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-secondary w-full text-center block text-sm"
                                >
                                    Book a call
                                </a>
                            )}
                            <Link
                                href={contactHref}
                                onClick={() => setIsOpen(false)}
                                className="btn-primary w-full text-center block text-sm"
                            >
                                Talk about your project
                            </Link>
                        </div>
                    </div>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
