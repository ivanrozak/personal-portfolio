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
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
