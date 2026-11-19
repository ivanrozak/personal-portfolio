import type { Metadata } from "next";
import { openGraphDefaults, twitterDefaults } from "@/lib/social-metadata";
import { projects, portfolioTagline } from "@/lib/data";
import ProjectFilter from "@/component/ProjectFilter";

export const metadata: Metadata = {
  title: "Projects",
  description: portfolioTagline,
  openGraph: { ...openGraphDefaults, title: "Projects | Ivan Rozak", description: portfolioTagline, url: "/projects" },
  twitter: { ...twitterDefaults, title: "Projects | Ivan Rozak", description: portfolioTagline },
};

export default function ProjectPage() {
  return <>
    <header className="archive-intro" data-reveal="intro">
      <span className="mono">Projects · {projects.length}</span>
      <h1>All projects.<span>Things I’ve helped build.</span></h1>
    </header>
    <ProjectFilter projects={projects} />
  </>;
}
