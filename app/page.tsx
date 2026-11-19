import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FiCode } from "react-icons/fi";
import { contact, experiences, featuredProjectTitles, projects } from "@/lib/data";
import LocalTime from "@/component/portfolio/LocalTime";
import SocialLinks from "@/component/portfolio/SocialLinks";
import WorkCard from "@/component/portfolio/WorkCard";
import { InquiryButton } from "@/component/portfolio/ProjectInquiry";
import { revealIndex } from "@/lib/reveal";

const featured = featuredProjectTitles.flatMap(title => projects.filter(project => project.title === title));

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-heading" data-reveal="intro">
      <LocalTime />
      <h1 id="hero-heading"><span className="hero-greeting">Hi, I’m <span className="hero-avatar" aria-hidden="true"><Image src="/static/hero-portrait.webp" alt="" fill sizes="(max-width: 640px) 64px, 100px" priority /></span> Ivan.</span><span>I like building useful software.</span></h1>
      <p className="hero-body">Software engineer from Jakarta, 5+ years in. Web, mobile, desktop, and real-time video, from the first screen to the server. These days I lead the web team at YesDok.</p>
      <div className="hero-footer">
        <SocialLinks />
        <span className="divider-vertical" aria-hidden="true" />
        <p className="status"><span className="status-dot" aria-hidden="true" />Open for new projects</p>
      </div>
    </section>

    <section id="projects" className="work-section" aria-labelledby="projects-heading">
      <div className="section-header">
        <div data-reveal><span className="mono section-label">01</span><h2 id="projects-heading" className="section-title">Selected work</h2></div>
        <span className="reveal-wrap" data-reveal style={revealIndex(1)}><Link href="/projects" className="pill" aria-label="All projects"><span>All<span className="hide-mobile"> projects</span></span><ArrowUpRight size={14} aria-hidden="true" /></Link></span>
      </div>
      <div className="work-grid">{featured.map((project, index) => <WorkCard key={project.title} project={project} revealIndex={index} />)}</div>
    </section>

    <section id="experience" className="section experience" aria-labelledby="experience-heading">
      <div className="experience-intro" data-reveal>
        <span className="mono section-label">02</span>
        <h2 id="experience-heading" className="section-title">Experience</h2>
        <Link href="/resume" className="text-arrow">Full resume<ArrowRight size={14} aria-hidden="true" /></Link>
      </div>
      <ul className="experience-list" role="list">
        {experiences.map((item, index) => <li key={item.company} className="experience-row" data-reveal="content" style={revealIndex(index)}>
          <span className="company-badge" aria-hidden="true">{item.logo ? <Image src={item.logo} alt="" width={56} height={56} /> : <FiCode size={18} />}</span>
          <div className="experience-text">
            <h3 className="experience-company">{item.company}</h3>
            <p className="experience-role">{item.role}</p>
            <p className="mono-plain experience-period">{item.period}</p>
          </div>
        </li>)}
      </ul>
    </section>

    <section id="contact" className="contact" aria-labelledby="contact-heading" data-reveal="content">
      <div>
        <span className="mono section-label">03</span>
        <h2 id="contact-heading">Have a project or<br />a role in mind?<span data-reveal style={revealIndex(1)}>Let’s talk.</span></h2>
      </div>
      <div className="contact-details">
        <p>I help teams build websites, web apps and dashboards, and real-time features. An early idea is enough to start.</p>
        <div className="contact-actions">
          <InquiryButton className="pill pill-primary">Email me<ArrowUpRight size={14} aria-hidden="true" /></InquiryButton>
          <a className="pill" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <a className="mono-plain contact-email" href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </section>
  </>;
}
