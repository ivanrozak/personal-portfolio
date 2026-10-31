import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "lenis/dist/lenis.css";
import "./globals.scss";
import Provider from "./provider";
import NavigationBar from "@/component/NavigationBar";
import { GoogleTagManager } from "@next/third-parties/google";
import { openGraphDefaults, twitterDefaults } from "@/lib/social-metadata";
import SiteShell from "@/component/portfolio/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivan-rozak.vercel.app"),
  title: { default: "Ivan Rozak — Fullstack Engineer", template: "%s | Ivan Rozak" },
  description:
    "I turn business ideas into websites and web apps, from the first interface to production. Explore selected work by Ivan Rozak, a fullstack engineer in Jakarta.",
  icons: {
    icon: [
      { url: "/main_icon.webp?v=ir", type: "image/webp", sizes: "1024x1024" },
      { url: "/favicon-32x32.png?v=ir", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=ir", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico?v=ir",
    apple: [{ url: "/apple-touch-icon.png?v=ir", sizes: "180x180", type: "image/png" }],
  },
  openGraph: openGraphDefaults,
  twitter: twitterDefaults,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Provider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <NavigationBar />
          <SiteShell>{children}</SiteShell>
        </Provider>
      </body>
      <GoogleTagManager gtmId="G-998STYP66L" />
    </html>
  );
}
