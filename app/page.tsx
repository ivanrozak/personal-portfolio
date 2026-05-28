import Link from "next/link";
import Image from "next/image";
import React from "react";
import { projects, experiences } from "@/lib/data";
import { ArrowLink } from "@/component/icons";

const techStack = [
  "TypeScript",
  "Nuxt.js",
  "Next.js",
  "Vue.js",
  "React",
  "Node.js",
  "NestJS",
];

const Home = () => {
  const latestProjects = projects.slice(0, 2);
  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ivan Rozak</h1>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Image
            src="/static/profile.png"
            width={400}
            height={400}
            className="w-[95px] h-[95px] rounded-full profile-bg shrink-0"
            alt="profile picture"
          />
          <p className="text-[15px] leading-relaxed">
            Hi, I'm Ivan — a Fullstack Engineer based in Jakarta, Indonesia
            with 4+ years of experience delivering scalable web applications
            across healthcare, government, and B2B industries. I work across the
            full stack, from Nuxt.js/Next.js frontends to NestJS backends,
            real-time systems, and self-hosted infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            className="text-second flex items-center gap-1 hover:underline text-sm"
            href="mailto:ivanrozack@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email me
            <ArrowLink className="w-3.5 h-3.5" />
          </a>
          <Link
            className="text-second flex items-center gap-1 hover:underline text-sm"
            href="/about"
          >
            More ways to connect
            <ArrowLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Latest Projects */}
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <p className="text-second">Latest Projects</p>
        <div className="flex flex-col gap-16">
          {latestProjects.map((project) => (
            <div
              key={project.title}
              className="flex gap-8 flex-col md:flex-row"
            >
              <a
                className="md:w-2/5 overflow-hidden rounded-xl"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  className="aspect-video w-full object-cover hover:scale-105 transition-transform duration-300"
                  alt={project.title}
                />
              </a>
              <div className="flex flex-col gap-3 md:w-3/5">
                <div className="flex gap-2 items-baseline">
                  <h5 className="font-medium">{project.title}</h5>
                  <time className="text-second text-sm"> · {project.year}</time>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-second text-sm">{project.description}</p>
                <a
                  className="text-second flex items-center gap-1 hover:underline text-sm"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                  <ArrowLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link className="text-second underline text-sm" href="/projects">
          See all projects →
        </Link>
      </div>

      {/* Experience */}
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <p className="text-second">Working Experience</p>
        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <div key={experience.company} className="flex gap-4">
              {experience.logo ? (
                <Image
                  src={experience.logo}
                  width={42}
                  height={42}
                  className="rounded-full object-cover object-center border shrink-0 mt-0.5 w-[42px] h-[42px]"
                  alt={experience.company}
                />
              ) : (
                <div className="w-[42px] h-[42px] rounded-full bg-secondary border shrink-0 mt-0.5 flex items-center justify-center text-sm font-semibold text-secondary-foreground">
                  {experience.company[0]}
                </div>
              )}
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm">{experience.position}</p>
                    <p className="text-second text-sm">
                      {experience.company}
                      {experience.type === "freelance" && (
                        <span className="ml-1.5 text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                          freelance
                        </span>
                      )}
                    </p>
                  </div>
                  <time className="text-second text-sm shrink-0">
                    {experience.period}
                  </time>
                </div>
                {experience.description && (
                  <p className="text-second text-sm mt-1">
                    {experience.description}
                  </p>
                )}
                {experience.tech && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {experience.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
