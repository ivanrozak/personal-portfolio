import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Provider from "./provider";
import NavigationBar from "@/component/NavigationBar";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ivan-rozak.vercel.app"),
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
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <NavigationBar />
          <div className="max-w-3xl mx-auto px-6 py-12">{children}</div>
        </Provider>
      </body>
      <GoogleTagManager gtmId="G-998STYP66L" />
    </html>
  );
}
