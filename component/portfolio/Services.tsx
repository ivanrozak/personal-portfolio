"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";

const services = [
  { title: "Websites that work harder", description: "A polished, responsive website that makes your offer clear. Built with performance, search visibility, and easy content management in mind.", deliverables: "Company websites · Landing pages · CMS integration · Migrations", evidence: "In practice: Ground Radar, Geolitix, Rintisan" },
  { title: "Web apps & business tools", description: "Interfaces and systems built around how your business actually works. From customer journeys to the tools your team uses every day.", deliverables: "Dashboards · API integration · Business workflows", evidence: "In practice: Rintisan Billing, Daruma, Yuk Puncak" },
  { title: "Real-time product experiences", description: "Connected experiences where timing matters, with the interface and backend working together.", deliverables: "Video consultations · WebRTC · LiveKit integration", evidence: "In practice: YesDok" },
  { title: "From existing code to production", description: "A stronger foundation for a product that already exists. I help migrate, connect, and deploy the pieces so your team can keep moving.", deliverables: "Framework migrations · TypeScript · Deployment", evidence: "In practice: Ground Radar, Rintisan Billing, Yuk Puncak" },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);
  const id = useId();
  const reduced = useReducedMotion();
  return <div className="services-accordion">{services.map((service, i) => <div className="service-item" key={service.title}>
    <h3><button id={`${id}-trigger-${i}`} aria-expanded={active === i} aria-controls={`${id}-panel-${i}`} onClick={() => setActive(active === i ? null : i)}>
      <span>{service.title}</span><motion.span aria-hidden="true" animate={{ rotate: active === i ? 180 : 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>{active === i ? <Minus size={23} /> : <Plus size={23} />}</motion.span>
    </button></h3>
    <AnimatePresence initial={false}>{active === i && <motion.div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-trigger-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }} className="service-panel">
      <div className="service-panel-inner"><p>{service.description}</p><p className="service-deliverables">{service.deliverables}</p><p className="service-evidence">{service.evidence}</p></div>
    </motion.div>}</AnimatePresence>
  </div>)}</div>;
}
