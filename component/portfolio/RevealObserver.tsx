"use client";

import { useEffect } from "react";

declare global {
  interface Window { __revealReady?: boolean }
}

/**
 * Reveals every `[data-reveal]` element as it scrolls into view by setting `data-revealed`.
 * The hidden state only applies once the inline script in the root layout sets `data-motion="on"`,
 * so content stays visible without JavaScript and for reduced-motion users.
 */
export default function RevealObserver() {
  useEffect(() => {
    window.__revealReady = true;
    if (document.documentElement.dataset.motion !== "on") return;
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-revealed", "");
        io.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px" });
    const scan = () => document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach(element => io.observe(element));
    let frame = 0;
    const mutations = new MutationObserver(() => { cancelAnimationFrame(frame); frame = requestAnimationFrame(scan); });
    scan();
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mutations.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return null;
}
