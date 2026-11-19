"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { ProjectInquiryProvider } from "@/component/portfolio/ProjectInquiry";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
    <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}><ProjectInquiryProvider>{children}</ProjectInquiryProvider></MotionConfig>
  </ThemeProvider>;
}
