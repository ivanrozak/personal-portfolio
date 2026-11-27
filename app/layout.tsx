import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.scss";
import Provider from "./provider";
import NavigationBar from "@/component/NavigationBar";
import { GoogleTagManager } from "@next/third-parties/google";
import { openGraphDefaults, twitterDefaults } from "@/lib/social-metadata";
import SiteShell from "@/component/portfolio/SiteShell";
import SiteFooter from "@/component/portfolio/SiteFooter";
import { contact } from "@/lib/data";
import RevealObserver from "@/component/portfolio/RevealObserver";
import { revealBootScript } from "@/lib/reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivanrozak.com"),
  title: { default: "Ivan Rozak — Software Engineer", template: "%s | Ivan Rozak" },
  description:
    "Software engineer from Jakarta, 5+ years in. Web, mobile, desktop, and real-time video, from the first screen to the server.",
  icons: {
    icon: [
      { url: "/favicon.svg?v=i", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=i", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=i", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico?v=i",
    apple: [{ url: "/apple-touch-icon.png?v=i", sizes: "180x180", type: "image/png" }],
  },
  openGraph: openGraphDefaults,
  twitter: twitterDefaults,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Rozak",
  jobTitle: "Software Engineer",
  url: "https://ivanrozak.com",
  image: "https://ivanrozak.com/static/hero-portrait.webp",
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  worksFor: { "@type": "Organization", name: "YesDok", url: "https://yesdok.com" },
  sameAs: [contact.linkedin, contact.github],
  knowsAbout: ["TypeScript", "Next.js", "Hono", "PostgreSQL", "LiveKit", "WebRTC", "Kotlin Multiplatform", ".NET"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
        {/* Privacy-friendly analytics by Plausible */}
        <Script async src="/stats/s.js" strategy="afterInteractive" />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init({endpoint:"/stats/e"})`}
        </Script>
      </head>
      <body className={`${GeistSans.className} ${GeistSans.variable} ${GeistMono.variable}`}>
        <Provider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <div className="spotlight" aria-hidden="true" />
          <div className="frame">
            <NavigationBar />
            <SiteShell>{children}</SiteShell>
            <SiteFooter />
          </div>
          <RevealObserver />
        </Provider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
      <GoogleTagManager gtmId="G-998STYP66L" />
    </html>
  );
}
