"use client";

import { useEffect } from "react";
import { stagger, useAnimate, useInView, useReducedMotion } from "motion/react";

export default function EditorialRow({ children, className }: { children: React.ReactNode; className: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -32px 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      animate("[data-editorial-cell]", { opacity: 1, y: 0 }, { duration: 0 });
      return;
    }
    if (!inView) return;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const controls = animate("[data-editorial-cell]", { opacity: [0, 1], y: [mobile ? 9 : 14, 0] }, {
      duration: mobile ? 0.5 : 0.6,
      delay: stagger(mobile ? 0.035 : 0.055),
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduced, animate]);

  return <div ref={scope} className={className}>{children}</div>;
}
