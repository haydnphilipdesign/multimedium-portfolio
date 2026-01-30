"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const contactHref = `/contact?source=${encodeURIComponent(
        pathname === "/" ? "nav-home" : `nav${pathname.replaceAll("/", "-")}`
    )}`;

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

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                showBackdrop
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/10 py-3 sm:py-4"
                    : "bg-transparent py-4 sm:py-5 md:py-6"
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors hover:text-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                    >
                        Multimedium
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                    isActive(link.href)
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-accent rounded-lg -z-10"
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

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-center gap-2">
                            {schedulingUrl && (
                                <a
                                    href={schedulingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary inline-flex items-center text-sm"
                                >
                                    Book a Call
                                </a>
                            )}
                            <Link
                                href={contactHref}
                                className="btn-primary inline-flex items-center text-sm"
                            >
                                Talk about your project
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground hover:text-glow transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-glow focus:ring-offset-2 focus:ring-offset-background"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? (
                            <IconX className="h-6 w-6" stroke={1.5} />
                        ) : (
                            <IconMenu2 className="h-6 w-6" stroke={1.5} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="pt-6 pb-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={isActive(link.href) ? "page" : undefined}
                                        className={cn(
                                            "block px-4 py-3 text-base font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                            isActive(link.href)
                                                ? "text-foreground bg-accent"
                                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4 space-y-2">
                                    {schedulingUrl && (
                                        <a
                                            href={schedulingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary w-full text-center block text-sm"
                                        >
                                            Book a Call
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
