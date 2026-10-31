import { Plus } from "lucide-react";
import { SiDocker, SiHono, SiNestjs, SiNextdotjs, SiNuxt, SiPostgresql, SiReact } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Reveal } from "./Reveal";

const featured = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Nuxt", Icon: SiNuxt },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Hono", Icon: SiHono },
  { name: "React Native", Icon: SiReact },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: FaAws },
];

const groups = [
  { title: "Web & mobile", items: ["Next.js", "Nuxt", "Svelte", "React Native", "Kotlin Multiplatform (KMP)", "Flutter"] },
  { title: "Backend & real-time", items: ["NestJS", "Hono", "Express", "LiveKit"] },
  { title: "Content management", items: ["Contentful", "Sanity"] },
  { title: "Data & cloud", items: ["PostgreSQL", "Redis", "Amazon S3", "AWS"] },
  { title: "Infrastructure & deployment", items: ["Docker", "Nginx", "Dokploy"] },
  { title: "Version control", items: ["Git", "GitLab", "Bitbucket"] },
  { title: "Project management", items: ["Jira", "ClickUp"] },
];

export default function TechStack() {
  return <Reveal delay={0.45} className="tech-stack">
    <p className="tech-stack-heading" id="tech-stack-heading">Tools behind the work</p>
    <ul className="featured-stack" aria-labelledby="tech-stack-heading">
      {featured.map(({ name, Icon }) => <li key={name}><Icon className="tech-logo" aria-hidden="true" focusable="false" /><span>{name}</span></li>)}
    </ul>
    <details className="full-stack">
      <summary><span className="stack-label-closed">View full stack</span><span className="stack-label-open">Hide full stack</span><Plus size={16} aria-hidden="true" /></summary>
      <div className="stack-groups">{groups.map(group => <div className="stack-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
    </details>
  </Reveal>;
}
