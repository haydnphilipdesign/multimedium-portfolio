"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function MobileStickyCTA() {
  const path = usePathname();
  if (
    path.startsWith("/contact") ||
    path.startsWith("/review") ||
    path.includes("/flyer")
  )
    return null;
  return (
    <aside className="mobile-project-bar" aria-label="Start a website project">
      <span>Replies within 1 business day</span>
      <Link
        href={"/contact?source=" + encodeURIComponent("mobile" + path)}
        className="btn-primary"
      >
        Start a project <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
