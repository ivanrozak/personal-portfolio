import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { BlurText, Reveal } from "@/component/portfolio/Reveal";
import ProjectMarquee from "@/component/portfolio/ProjectMarquee";
import Services from "@/component/portfolio/Services";
import EditorialRow from "@/component/portfolio/EditorialRow";
import HeroPortrait from "@/component/portfolio/HeroPortrait";
import { InquiryButton } from "@/component/portfolio/ProjectInquiry";

const featuredNames = ["Yuk Puncak", "Rintisan", "RasaRasa", "Pixelleven", "Kasheer", "Sign-it"];
const featured = featuredNames.flatMap(title => projects.filter(project => project.title === title));
const steps = [
  { title: "Find the right scope", description: "We clarify your goals, users, and constraints, then define what to build first.", outcome: "A focused plan" },
  { title: "Build & review", description: "The interface and systems take shape together, with room to review the work as it develops.", outcome: "Working software" },
  { title: "Launch & hand over", description: "Deploy the product, verify the important flows, and make the next steps clear for your team.", outcome: "A production handover" },
];
const history = [
  { company: "YesDok Indonesia", date: "2022 — Present", role: "Fullstack Developer", description: "Telemedicine, real-time systems, and B2B integrations." },
  { company: "Independent client work", date: "2023 — Present", role: "Freelance Fullstack Developer", description: "Company websites, dashboards, and digital products." },
  { company: "Nashta Global Utama", date: "2020 — 2021", role: "Fullstack Developer", description: "National trade and customs infrastructure." },
];

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-heading">
      <div className="page-width">
        <div className="hero-main">
          <div className="hero-copy">
            <h1 id="hero-heading"><BlurText text={"Your next idea.\nBuilt for the\nreal world."} /></h1>
            <Reveal delay={0.28}><p className="hero-introduction">I’m Ivan, a fullstack engineer. I turn business ideas into websites and web apps—from the first interface to production.</p></Reveal>
            <Reveal delay={0.4} className="hero-actions">
              <InquiryButton className="button button-primary">Discuss your project<span className="button-arrow"><ArrowUpRight size={22} /></span></InquiryButton>
              <a className="text-link hero-secondary" href="#projects">View my work<ArrowDown size={17} /></a>
            </Reveal>
          </div>
          <HeroPortrait />
        </div>
        <Reveal delay={0.45} className="credibility">
          <p>Experience across healthcare,<br className="desktop-break" /> government, and B2B.</p>
          <ul aria-label="Selected client projects">{["YesDok", "Ground Radar", "Geolitix", "Daruma", "Sign-it"].map(name => <li key={name}>{name}</li>)}</ul>
        </Reveal>
      </div>
    </section>
    <ProjectMarquee projects={featured} />
    <section id="services" className="services section-space" aria-labelledby="services-heading">
      <div className="page-width split-section">
        <div className="section-introduction"><h2 id="services-heading"><BlurText text={"What do you\nwant to build?"} /></h2><p>A new product, a better website, or a system that finally fits the way your business works.</p><InquiryButton className="text-link">Let’s find the right approach<ArrowUpRight size={18} /></InquiryButton></div>
        <Reveal><Services /></Reveal>
      </div>
    </section>
    <section className="process editorial-process" aria-labelledby="process-heading">
      <div className="page-width">
        <div className="process-introduction"><h2 id="process-heading"><BlurText text={"A clear path\nfrom idea to launch."} /></h2><Reveal delay={0.1}><p>Start with the problem. Agree on the scope.{" "}<br className="desktop-break" />Build something your team can use.</p></Reveal></div>
        <div className="process-steps">{steps.map((step, i) => <EditorialRow key={step.title} className="process-step"><div className="step-identity" data-editorial-cell><span className="step-number">0{i + 1}</span><h3>{step.title}</h3></div><p data-editorial-cell>{step.description}</p><span className="step-outcome" data-editorial-cell>{step.outcome}</span></EditorialRow>)}</div>
      </div>
    </section>
    <section id="about" className="about-section editorial-about" aria-labelledby="about-heading"><div className="page-width editorial-about-grid">
      <div className="section-introduction"><h2 id="about-heading"><BlurText text={"One engineer.\nThe whole picture."} /></h2><p>I work across the interface, backend, and infrastructure. That means fewer gaps between how a product looks, how it works, and how it gets to your users.</p><p className="technical-foundation">TypeScript · Next.js · Nuxt.js · NestJS<br />PostgreSQL · LiveKit · Docker</p></div>
      <div className="experience-list">{history.map(item => <EditorialRow key={item.company} className="experience-row"><h3 data-editorial-cell>{item.company}</h3><span className="experience-date" data-editorial-cell>{item.date}</span><p className="experience-role" data-editorial-cell>{item.role}</p><p className="experience-description" data-editorial-cell>{item.description}</p></EditorialRow>)}</div>
    </div></section>
    <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="page-width">
      <div className="contact-main">
        <div className="contact-invitation"><h2 id="contact-heading"><BlurText text={"Let’s build\nyour next chapter."} /></h2><p>Have a project in mind or an existing product that needs a better foundation? Tell me what you’re working on.</p><InquiryButton className="button button-light">Discuss your project<ArrowUpRight size={20} /></InquiryButton><a className="contact-email" href="mailto:ivanrozack@gmail.com">ivanrozack@gmail.com</a></div>
        <Reveal className="brief-guidance"><h3>A good place to start</h3><ul>{["What are you building, and who is it for?", "What needs to change or work better?", "Do you have a timeline or budget in mind?"].map(question => <li key={question}><ArrowRight size={17} /><span>{question}</span></li>)}</ul><p>An early idea is enough to start the conversation.</p></Reveal>
      </div>
      <footer className="site-footer"><Link href="/" className="wordmark">ivan rozak.</Link><p>Based in Jakarta, Indonesia</p><nav aria-label="Social links"><a href="https://github.com/ivanrozak/" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/ivan-rozak/" target="_blank" rel="noopener noreferrer">LinkedIn</a><Link href="/blog">Blog</Link></nav></footer>
    </div></section>
  </>;
}
