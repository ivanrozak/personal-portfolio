"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/data";
import WorkCard from "./portfolio/WorkCard";

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
    <div className="archive-toolbar" data-reveal="intro" style={{ "--reveal-start": "300ms" } as React.CSSProperties}>
      <div className="archive-filters" role="group" aria-label="Filter projects by category">
        <button className={active === "all" ? "is-active" : ""} aria-pressed={active === "all"} onClick={() => setActive("all")}>All<span>{projects.length}</span></button>
        {categories.map(category => <button key={category} className={active === category ? "is-active" : ""} aria-pressed={active === category} onClick={() => setActive(category)}>{categoryLabels[category]}<span>{projects.filter(project => project.category === category).length}</span></button>)}
      </div>
      <div className="archive-search"><Search size={16} aria-hidden="true" /><label htmlFor={searchId} className="sr-only">Search projects</label><input id={searchId} type="search" placeholder="Search projects..." value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => { setQuery(""); document.getElementById(searchId)?.focus(); }}><X size={14} /></button>}</div>
    </div>
    <div className="archive-result-heading"><p className="mono" role="status" aria-live="polite" aria-atomic="true">{filtered.length} {filtered.length === 1 ? "project" : "projects"}{query.trim() ? ` matching “${query.trim()}”` : ""}</p>{(query || active !== "all") && <button onClick={reset} className="clear-filters">Clear filters<X size={13} /></button>}</div>
    <div className="work-grid archive-grid">
      <AnimatePresence initial={false} mode="popLayout">{filtered.map((project, index) => <motion.article className="archive-project" key={project.title} layout={reduced ? false : "position"} initial={false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : 8 }} transition={{ duration: reduced ? 0 : 0.25 }}>
        <WorkCard project={project} detailed headingLevel={2} revealIndex={index % 3} />
      </motion.article>)}</AnimatePresence>
    </div>
    {filtered.length === 0 && <div className="archive-empty"><h2>No projects found.</h2><p>Try a different keyword or explore all the work.</p><button className="pill pill-primary" onClick={reset}>View all projects<ArrowUpRight size={14} /></button></div>}
  </div>;
}
