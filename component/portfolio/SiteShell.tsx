"use client";

import { usePathname } from "next/navigation";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wide = pathname === "/" || pathname === "/projects";
  return <main id="main-content" tabIndex={-1} className={wide ? "" : "legacy-content"}>{children}</main>;
}
