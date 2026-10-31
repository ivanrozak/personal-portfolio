import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "lenis/dist/lenis.css";
import "./globals.scss";
import Provider from "./provider";
import NavigationBar from "@/component/NavigationBar";
import { GoogleTagManager } from "@next/third-parties/google";
import SiteShell from "@/component/portfolio/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivan-rozak.vercel.app"),
  title: { default: "Ivan Rozak — Fullstack Engineer", template: "%s | Ivan Rozak" },
  description:
    "I turn business ideas into websites and web apps, from the first interface to production. Explore selected work by Ivan Rozak, a fullstack engineer in Jakarta.",
  openGraph: {
    type: "website",
    url: "https://ivan-rozak.vercel.app",
    title: "Ivan Rozak",
    description:
      "I am a full-stack software engineer who basically just enjoys creating things.",
    siteName: "IvanRozak",
    images: [{ url: "https://ivan-rozak.vercel.app/apple-touch-icon.png?" }],
  },
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
