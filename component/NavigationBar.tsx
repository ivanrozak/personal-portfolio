"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./portfolio/ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function NavigationBar() {
  const pathname = usePathname();
  return <header className="site-nav">
    <Link href="/" className="site-nav-identity" aria-label="Ivan Rozak home">
      <Image src="/static/hero-portrait.webp" alt="" width={64} height={64} priority />
      <span>Ivan Rozak</span>
    </Link>
    <nav aria-label="Main navigation" className="site-nav-links">
      {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      <ThemeToggle />
    </nav>
  </header>;
}
