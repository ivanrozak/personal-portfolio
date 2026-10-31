"use client";

import { useCallback, useEffect, useRef } from "react";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { ProjectInquiryProvider } from "@/component/portfolio/ProjectInquiry";

export default function Provider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeLenis = useRef<Lenis>();
  const scrollLocked = useRef(false);
  const handleDialogChange = useCallback((open: boolean) => {
    scrollLocked.current = open;
    if (open) activeLenis.current?.stop();
    else activeLenis.current?.start();
  }, []);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const setup = () => {
      lenis?.destroy();
      lenis = undefined;
      if (!preference.matches) lenis = new Lenis({ autoRaf: true, lerp: 0.085, smoothWheel: true, syncTouch: false, anchors: { offset: -88 } });
      activeLenis.current = lenis;
      if (scrollLocked.current) lenis?.stop();
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { preference.removeEventListener("change", setup); lenis?.destroy(); activeLenis.current = undefined; };
  }, [pathname]);
  return <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}><ProjectInquiryProvider onOpenChange={handleDialogChange}>{children}</ProjectInquiryProvider></MotionConfig>;
}
