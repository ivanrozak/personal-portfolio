import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { revealIndex as revealStyle } from "@/lib/reveal";

export default function WorkCard({ project, detailed = false, headingLevel = 3, revealIndex = 0 }: { project: Project; detailed?: boolean; headingLevel?: 2 | 3; revealIndex?: number }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const meta = [project.kind ?? project.subtitle, project.year].filter(Boolean).join(" · ");
  return <a className={detailed ? "work-card work-card-detailed" : "work-card"} href={project.url} target="_blank" rel="noopener noreferrer" data-reveal="content" style={revealStyle(revealIndex)} aria-label={`${project.title} — visit website (opens in a new tab)`}>
    <div className="work-card-image"><Image src={project.image} alt={`${project.title} website preview`} width={832} height={520} sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 960px) 50vw, 340px" /></div>
    {meta && <p className="mono">{meta}</p>}
    <div className="work-card-text">
      <Heading className="work-card-title">{project.title}<ArrowUpRight size={16} aria-hidden="true" /></Heading>
      <p className="work-card-description">{project.previewDescription ?? project.description}</p>
      {detailed && project.role && <p className="mono work-card-role">{project.role}</p>}
    </div>
  </a>;
}
