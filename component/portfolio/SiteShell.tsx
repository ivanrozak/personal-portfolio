"use client";

import { usePathname } from "next/navigation";

const framedRoutes = ["/", "/projects", "/resume"];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <main id="main-content" tabIndex={-1} className={framedRoutes.includes(pathname) ? "" : "legacy-content"}>{children}</main>;
}
