import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { contact } from "@/lib/data";
import { focusAreas, freelanceSummary, resumeProducts, resumeRoles, resumeSummary, resumeUpdated, skillRows } from "@/lib/resume";
import { openGraphDefaults, twitterDefaults } from "@/lib/social-metadata";
import SocialLinks from "@/component/portfolio/SocialLinks";
import { revealIndex } from "@/lib/reveal";

const description = "Resume of Ivan Rozak, software engineer in Jakarta. Lead Web Developer at YesDok, 5+ years shipping web, mobile, desktop, and real-time systems.";

export const metadata: Metadata = {
  title: "Resume",
  description,
  openGraph: { ...openGraphDefaults, title: "Resume | Ivan Rozak", description, url: "/resume" },
  twitter: { ...twitterDefaults, title: "Resume | Ivan Rozak", description },
};

export default function ResumePage() {
  return <>
    <section className="resume-intro" aria-labelledby="resume-heading" data-reveal="intro">
      <p className="mono">Resume · Updated {resumeUpdated}</p>
      <h1 id="resume-heading">Ivan Rozak<span>Software Engineer</span></h1>
      <p className="resume-summary">{resumeSummary}</p>
      <div className="resume-actions">
        <a className="pill pill-primary" href={contact.resumePdf} download>Download PDF<Download size={14} aria-hidden="true" /></a>
        <SocialLinks include={["LinkedIn", "GitHub", "Email"]} />
        <span className="divider-vertical" aria-hidden="true" />
        <p className="status"><span className="status-dot" aria-hidden="true" />Open to full-time and remote roles</p>
      </div>
    </section>

    <div className="focus-grid">
      {focusAreas.map((area, index) => <div key={area.title} className="focus-item" data-reveal="content" style={revealIndex(index)}><h2>{area.title}</h2><p>{area.stack}</p></div>)}
    </div>

    <section className="section resume-section" aria-labelledby="resume-experience">
      <div className="resume-section-heading" data-reveal><span className="mono section-label">01</span><h2 id="resume-experience">Experience</h2></div>
      <div>
        {resumeRoles.map(role => <article key={role.company} className="resume-entry" data-reveal="content">
          <div className="resume-entry-head">
            {role.logo && <span className="company-badge" aria-hidden="true"><Image src={role.logo} alt="" width={44} height={44} /></span>}
            <div className="resume-entry-name"><h3>{role.company}<span>{role.place}</span></h3><p className="mono-plain" data-place={role.place}>{role.period}</p></div>
          </div>
          <p className="resume-role">{role.role}</p>
          <ul className="resume-points">{role.points.map(point => <li key={point}>{point}</li>)}</ul>
        </article>)}
      </div>
    </section>

    <section className="section resume-section" aria-labelledby="resume-products">
      <div className="resume-section-heading" data-reveal><span className="mono section-label">02</span><h2 id="resume-products">Independent products</h2><p>Built solo, end to end. Both are now run by separate teams.</p></div>
      <div>
        {resumeProducts.map(product => <article key={product.name} className="resume-entry" data-reveal="content">
          <div className="resume-entry-name"><h3>{product.name}<span>{product.meta}</span></h3><a className="resume-link" href={product.url} target="_blank" rel="noopener noreferrer">{product.url.replace("https://", "")}<ArrowUpRight size={14} aria-hidden="true" /></a></div>
          <ul className="resume-points">{product.points.map(point => <li key={point}>{point}</li>)}</ul>
          <p className="mono-plain">{product.stack}</p>
        </article>)}
        <article className="resume-entry" data-reveal="content">
          <div className="resume-entry-name"><h3>Selected freelance work<span>2023 — Present</span></h3></div>
          <p className="work-card-description">{freelanceSummary}</p>
        </article>
      </div>
    </section>

    <section className="section resume-section" aria-labelledby="resume-skills">
      <div className="resume-section-heading" data-reveal><span className="mono section-label">03</span><h2 id="resume-skills">Skills & education</h2></div>
      <dl className="skill-list">{skillRows.map((row, index) => <div key={row.label} className="skill-row" data-reveal="content" style={revealIndex(Math.min(index, 4))}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
    </section>
  </>;
}
