import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects, portfolioTagline } from "@/lib/data";
import ProjectFilter from "@/component/ProjectFilter";
import { BlurText, Reveal } from "@/component/portfolio/Reveal";

export const metadata: Metadata = { title: "Projects", description: portfolioTagline };

export default function ProjectPage() {
  return <div className="archive-page page-width">
    <header className="archive-introduction"><h1><BlurText text="All projects" /></h1><Reveal delay={0.15}><p>{portfolioTagline}</p></Reveal></header>
    <ProjectFilter projects={projects} />
    <footer className="archive-footer"><h2>Have a project in mind?</h2><a className="text-link" href="mailto:ivanrozack@gmail.com">ivanrozack@gmail.com<ArrowUpRight size={19} /></a></footer>
  </div>;
}
