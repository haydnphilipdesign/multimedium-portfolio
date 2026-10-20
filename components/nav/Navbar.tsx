"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { IconMenu2, IconX } from "@tabler/icons-react";
const links = [
  { href: "/work", label: "Work" },
  { href: "/transaction-coordinators", label: "Transaction coordinators" },
  { href: "/agents-and-brokerages", label: "Agents & brokerages" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const contact = "/contact?source=" + encodeURIComponent("nav" + pathname);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <header className="studio-nav">
        <nav className="studio-shell" aria-label="Main navigation">
          <Link href="/" className="studio-wordmark">
            <span className="brand-symbol" aria-hidden="true">
              m.
            </span>
            multimedium<span className="brand-period">.</span>
          </Link>
          <div className="desktop-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname.startsWith(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link className="btn-primary nav-project" href={contact}>
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <Dialog.Trigger
            className="mobile-menu touch-target"
            aria-label="Open menu"
          >
            <IconMenu2 size={25} />
          </Dialog.Trigger>
        </nav>
      </header>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[80] bg-ink/50" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-[90] w-full max-w-sm bg-background p-7 overflow-y-auto">
          <div className="flex justify-between items-center">
            <Dialog.Title className="text-xl">Explore Multimedium</Dialog.Title>
            <Dialog.Close className="touch-target" aria-label="Close menu">
              <IconX />
            </Dialog.Close>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="mt-10 flex flex-col gap-3"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                className="border-b border-border py-4 text-2xl"
              >
                {l.label}
              </Link>
            ))}
            <Link
              className="btn-primary mt-5"
              href={contact}
              onClick={() => setOpen(false)}
            >
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </nav>
          <p className="mt-8 text-muted-foreground">
            Websites for real estate professionals. One person, start to
            finish.
          </p>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
