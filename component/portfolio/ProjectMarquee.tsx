"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useAnimationFrame, useMotionValue } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import type { Project } from "@/lib/data";
import { portfolioTagline } from "@/lib/data";
import { BlurText, Reveal } from "./Reveal";

function PreviewCard({ project, clone = false }: { project: Project; clone?: boolean }) {
  return <a href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={clone ? -1 : undefined} className="preview-card" aria-label={`${project.title} — visit website (opens in a new tab)`}>
    <div className="preview-image">
      <Image src={project.image} alt="" width={840} height={526} sizes="(max-width: 767px) 286px, 420px" />
      <div className="preview-description"><p>{project.previewDescription ?? project.description}</p></div>
    </div>
    <div className="preview-caption"><h3>{project.title}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
    <p className="touch-description">{project.previewDescription ?? project.description}</p>
  </a>;
}

function Track({ projects, reverse = false, paused, onCardHover, onCardFocus }: { projects: Project[]; reverse?: boolean; paused: boolean; onCardHover: (hovered: boolean) => void; onCardFocus: (focused: boolean) => void }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const width = useRef(0);
  const initialized = useRef(false);
  const keyboardFocus = useRef(false);
  const navigating = useRef(false);
  const navigation = useRef<ReturnType<typeof animate> | null>(null);
  const position = useMotionValue(0);
  const speed = useMotionValue(reverse ? 16 : -20);
  const enabled = useRef(false);

  useLayoutEffect(() => {
    const measure = () => {
      const nextWidth = group.current?.getBoundingClientRect().width ?? 0;
      width.current = nextWidth;
      if (!initialized.current && nextWidth > 0) {
        position.set(-nextWidth);
        initialized.current = true;
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (group.current) observer.observe(group.current);
    return () => observer.disconnect();
  }, [position]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    const update = () => { enabled.current = media.matches; };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const controls = animate(speed, paused ? 0 : reverse ? 16 : -20, {
      type: "tween", duration: paused ? 0.18 : 0.3, ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [paused, reverse, speed]);

  useEffect(() => () => { navigation.current?.stop(); }, []);

  useAnimationFrame((_, delta) => {
    if (!enabled.current || !width.current || navigating.current) return;
    let next = position.get() + speed.get() * Math.min(delta, 40) / 1000;
    if (!keyboardFocus.current) {
      const size = width.current;
      next = -size - (((-next - size) % size + size) % size);
    }
    position.set(next);
  });

  return <div ref={viewport} className={`marquee-window ${reverse ? "marquee-window-reverse" : ""}`} onPointerOver={event => {
    if (event.pointerType !== "touch" && (event.target as Element).closest(".preview-card")) onCardHover(true);
  }} onPointerOut={event => {
    const next = event.relatedTarget;
    if (!(next instanceof Element) || !viewport.current?.contains(next) || !next.closest(".preview-card")) onCardHover(false);
  }} onFocusCapture={event => {
    if (!(event.target instanceof HTMLElement) || !event.target.closest(".preview-card")) return;
    keyboardFocus.current = true;
    onCardFocus(true);
    navigation.current?.stop();
    const bounds = event.target.getBoundingClientRect();
    const left = Math.max(8, viewport.current?.getBoundingClientRect().left ?? 0);
    const right = Math.min(window.innerWidth - 8, viewport.current?.getBoundingClientRect().right ?? window.innerWidth);
    const shift = bounds.left < left ? left - bounds.left : bounds.right > right ? right - bounds.right : 0;
    navigating.current = Math.abs(shift) > 0.5;
    if (navigating.current) {
      navigation.current = animate(position, position.get() + shift, { type: "tween", duration: 0.28, ease: [0.16, 1, 0.3, 1], onComplete: () => { navigating.current = false; } });
    }
  }} onBlurCapture={event => {
    if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
    keyboardFocus.current = false;
    navigation.current?.stop();
    navigating.current = false;
    onCardFocus(false);
  }}>
    <motion.div ref={track} className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`} style={{ x: position }}>
      {[0, 1, 2, 3, 4].map(copy => <div ref={copy === 1 ? group : undefined} className="marquee-group" key={copy} aria-hidden={copy !== 1 ? true : undefined}>
        {projects.map(project => <PreviewCard key={project.title} project={project} clone={copy !== 1} />)}
      </div>)}
    </motion.div>
  </div>;
}

export default function ProjectMarquee({ projects }: { projects: Project[] }) {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const shouldPause = paused || hovered || focused;
  const swipe = useRef<HTMLDivElement>(null);
  const step = (direction: number) => {
    const distance = (swipe.current?.querySelector("a")?.getBoundingClientRect().width ?? 286) + 20;
    swipe.current?.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return <section id="projects" className="project-showcase section-space" data-paused={paused} data-motion-state={shouldPause ? "paused" : "running"} aria-labelledby="projects-heading">
    <div className="section-heading page-width">
      <div><h2 id="projects-heading"><BlurText text="Projects" /></h2><p>{portfolioTagline}</p></div>
      <Link className="button button-outline desktop-archive-link" href="/projects">View all projects<ArrowUpRight size={18} /></Link>
    </div>
    <Reveal className="marquee-desktop">
      <Track projects={projects.slice(0, 3)} paused={shouldPause} onCardHover={setHovered} onCardFocus={setFocused} />
      <Track projects={projects.slice(3, 6)} reverse paused={shouldPause} onCardHover={setHovered} onCardFocus={setFocused} />
    </Reveal>
    <div className="project-swipe" ref={swipe} aria-label="Selected projects, swipe or use arrow buttons to explore" data-lenis-prevent-touch onKeyDown={e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); step(e.key === "ArrowRight" ? 1 : -1); } }}>
      {projects.map(project => <PreviewCard key={project.title} project={project} />)}
    </div>
    <div className="showcase-controls page-width">
      <span className="desktop-hint">Hover or focus a project to explore</span>
      <button className="pause-button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? <Play size={14} /> : <Pause size={14} />}{paused ? "Resume motion" : "Pause motion"}</button>
      <span className="swipe-hint">Swipe to explore<ArrowRight size={18} /></span>
      <div className="swipe-buttons"><button aria-label="Previous project" onClick={() => step(-1)}><ArrowLeft size={18} /></button><button aria-label="Next project" onClick={() => step(1)}><ArrowRight size={18} /></button></div>
    </div>
    <div className="mobile-archive-link page-width"><Link href="/projects" className="button button-light">View all projects<ArrowUpRight size={20} /></Link></div>
  </section>;
}
