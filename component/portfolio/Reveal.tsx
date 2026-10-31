"use client";

import { Fragment, useEffect } from "react";
import { useAnimate, useInView, useReducedMotion, stagger } from "motion/react";

export function BlurText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -5% 0px" });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) { animate("[data-word]", { opacity: 1, filter: "none", y: 0 }, { duration: 0 }); return; }
    if (!inView) return;
    const controls = animate("[data-word]", { opacity: [0, 1], filter: ["blur(8px)", "blur(0px)"], y: [18, 0] }, { duration: 0.75, delay: stagger(0.055, { startDelay: delay }), ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduced, animate, delay]);
  return <span ref={scope} className={className} aria-label={text}>
    <span aria-hidden="true">{text.split("\n").map((line, i) => <span className="reveal-line" key={i}>
      {line.split(" ").map((word, j, words) => <Fragment key={j}><span className="reveal-word" data-word>{word}</span>{j < words.length - 1 ? " " : null}</Fragment>)}
    </span>)}</span>
  </span>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -35px 0px" });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) { animate(scope.current, { opacity: 1, y: 0 }, { duration: 0 }); return; }
    if (!inView) return;
    const controls = animate(scope.current, { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduced, animate, scope, delay]);
  return <div ref={scope} className={className}>{children}</div>;
}
