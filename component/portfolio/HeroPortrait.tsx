"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";

export default function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -32]);
  return <Reveal delay={0.2} className="portrait-reveal"><div ref={ref} className="hero-portrait">
    <div className="portrait-orbit" aria-hidden="true" />
    <motion.div className="portrait-disc" style={reduced ? undefined : { y }}>
      <Image src="/static/hero-portrait.webp" alt="Ivan Rozak" width={1254} height={1254} priority sizes="(max-width: 767px) 280px, 432px" />
    </motion.div>
    <span className="portrait-badge portrait-badge-light">Thoughtful interfaces</span>
    <span className="portrait-badge portrait-badge-dark">Reliable systems</span>
    <p className="portrait-caption">Ivan Rozak · Jakarta, Indonesia</p>
  </div></Reveal>;
}
