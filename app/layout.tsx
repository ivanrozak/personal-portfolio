import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Provider from "./provider";
import NavigationBar from "@/component/NavigationBar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Ivan Rozak",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
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
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <NavigationBar />
          <div className="max-w-3xl mx-auto px-6 py-12">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
