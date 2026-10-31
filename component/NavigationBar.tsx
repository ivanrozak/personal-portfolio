"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { InquiryButton } from "./portfolio/ProjectInquiry";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";

export default function NavigationBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => setOpen(false), [pathname]);
  const links = [{ href: "/#projects", label: "Selected work" }, { href: "/#services", label: "How I help" }, { href: "/#about", label: "About" }];
  return <header className="site-header">
    <div className="site-nav page-width">
      <Link href="/" className="wordmark" aria-label="Ivan Rozak home">ivan rozak.</Link>
      {pathname === "/projects" ? <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to home</Link> : <>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          <InquiryButton className="button button-small">Let’s talk <ArrowUpRight size={15} /></InquiryButton>
        </nav>
        <button ref={menuButton} className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      </>}
    </div>
    <AnimatePresence initial={false}>{open && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.25 }} onKeyDown={e => { if (e.key === "Escape") { setOpen(false); menuButton.current?.focus(); } }}>
      {links.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={20} /></Link>)}
      <InquiryButton onOpen={() => setOpen(false)}>Let’s talk<ArrowUpRight size={20} /></InquiryButton>
    </motion.nav>}</AnimatePresence>
  </header>;
}
