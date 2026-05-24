"use client";
import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwicther";
import { BrandIcon } from "./icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-inherit">
          <BrandIcon />
        </Link>
        <div className="flex gap-1">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-foreground text-background"
                  : "hover:bg-accent"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
