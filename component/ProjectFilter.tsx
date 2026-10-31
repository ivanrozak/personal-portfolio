"use client";

import { useId, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/data";
import { Reveal } from "./portfolio/Reveal";

type FilterValue = ProjectCategory | "all";
const categoryLabels: Record<ProjectCategory, string> = { professional: "Client work", experiment: "Independent", team: "Team", "open-source": "Open source" };

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");
  const searchId = useId();
  const reduced = useReducedMotion();
  const categories = (Object.keys(categoryLabels) as ProjectCategory[]).filter(category => projects.some(project => project.category === category));
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return projects.filter(project => (active === "all" || project.category === active) && `${project.title} ${project.subtitle ?? ""} ${project.description} ${project.role ?? ""} ${project.tech.join(" ")}`.toLocaleLowerCase().includes(term));
  }, [projects, active, query]);
  const reset = () => { setActive("all"); setQuery(""); };
  return <div className="archive-browser">
    <div className="archive-toolbar">
      <div className="archive-filters" role="group" aria-label="Filter projects by category">
        <button className={active === "all" ? "is-active" : ""} aria-pressed={active === "all"} onClick={() => setActive("all")}>All<span>{projects.length}</span></button>
        {categories.map(category => <button key={category} className={active === category ? "is-active" : ""} aria-pressed={active === category} onClick={() => setActive(category)}>{categoryLabels[category]}<span>{projects.filter(project => project.category === category).length}</span></button>)}
      </div>
      <div className="archive-search"><Search size={18} aria-hidden="true" /><label htmlFor={searchId} className="sr-only">Search projects</label><input id={searchId} type="search" placeholder="Search projects..." value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => { setQuery(""); document.getElementById(searchId)?.focus(); }}><X size={16} /></button>}</div>
    </div>
    <div className="archive-result-heading"><p role="status" aria-live="polite" aria-atomic="true">{filtered.length} {filtered.length === 1 ? "project" : "projects"}{query.trim() ? ` matching “${query.trim()}”` : ""}</p>{(query || active !== "all") && <button onClick={reset} className="clear-filters">Clear filters<X size={14} /></button>}</div>
    <div className="archive-grid">
      <AnimatePresence initial={false} mode="popLayout">{filtered.map(project => <motion.article className="archive-project" key={project.title} layout={reduced ? false : "position"} initial={false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : 8 }} transition={{ duration: reduced ? 0 : 0.25 }}>
        <Reveal>
          <a className="archive-project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — visit website (opens in a new tab)`}>
            <div className="archive-project-image"><Image src={project.image} alt={`${project.title} website preview`} width={832} height={520} sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 46vw, 30vw" /></div>
            <div className="archive-project-title"><h2>{project.title}</h2><ArrowUpRight size={20} aria-hidden="true" /></div>
          </a>
          <p className="project-meta">{project.subtitle ?? categoryLabels[project.category]}{project.year && <> · <time>{project.year}</time></>}</p>
          <p className="archive-project-description">{project.description}</p>
          {project.role && <p className="project-role">{project.role}</p>}
          {project.repoUrl && <a className="text-link project-source" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Source code<ArrowUpRight size={14} /></a>}
        </Reveal>
      </motion.article>)}</AnimatePresence>
    </div>
    {filtered.length === 0 && <div className="archive-empty"><h2>No projects found.</h2><p>Try a different keyword or explore all the work.</p><button className="button" onClick={reset}>View all projects<ArrowUpRight size={18} /></button></div>}
  </div>;
}
