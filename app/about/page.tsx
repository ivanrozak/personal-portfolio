import {
  ArrowLink,
  Email,
  Github,
  Instagram,
  LinkedIn,
} from "@/component/icons";
import Image from "next/image";
import React from "react";
import { education } from "@/lib/data";

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  Backend: ["Node.js", "Express.js", "NestJS", "REST API", "WebSocket"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  "Tools & DevOps": ["Git", "Docker", "Vercel", "Figma", "Postman"],
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Profile */}
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <Image
          src="/static/profile.png"
          width={400}
          height={400}
          className="w-[80px] h-[80px] rounded-full profile-bg"
          alt="profile picture"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Ivan Rozak</h1>
          <div className="flex flex-col gap-3 text-[15px] leading-relaxed max-w-xl">
            <p>
              I'm a Fullstack Developer based in Jakarta, Indonesia with 4+
              years of experience building web products. I've shipped production
              apps across industries — telemedicine, B2B e-commerce, geoscience,
              and document management — always with a focus on clean code and
              practical UX.
            </p>
            <p>
              On the frontend, I primarily work with Next.js and TypeScript. On
              the backend, I'm comfortable with Node.js, building REST APIs, and
              working with relational databases. I enjoy working across the full
              stack and taking ownership of features end to end.
            </p>
            <p>
              Outside of work, I'm always tinkering — whether it's a side
              project, exploring a new tool, or writing about what I've learned.
              Currently open to new opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        className="flex flex-col gap-6 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <h2 className="font-semibold">Skills</h2>
        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex gap-4 items-start">
              <span className="text-second text-sm w-28 shrink-0 pt-0.5">
                {category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div
          className="flex flex-col gap-6 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2 className="font-semibold">Education</h2>
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div key={edu.school} className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-second text-sm">
                    {edu.major} · {edu.school}
                  </p>
                </div>
                <time className="text-second text-sm shrink-0">{edu.period}</time>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      <div
        className="flex flex-col gap-4 animate-in"
        style={{ "--index": education.length > 0 ? 4 : 3 } as React.CSSProperties}
      >
        <h2 className="font-semibold">Connect</h2>
        <div className="flex flex-col gap-3">
          <a className="link-container" href="mailto:ivanrozack@gmail.com">
            <div className="flex items-center gap-4">
              <Email className="w-5 h-5" />
              Email
            </div>
            <ArrowLink className="w-5 h-5" />
          </a>
          <a
            className="link-container"
            href="https://www.linkedin.com/in/ivan-rozak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <LinkedIn className="w-5 h-5" />
              LinkedIn
            </div>
            <ArrowLink className="w-5 h-5" />
          </a>
          <a
            className="link-container"
            href="https://github.com/ivanrozak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <Github className="w-5 h-5" />
              Github
            </div>
            <ArrowLink className="w-5 h-5" />
          </a>
          <a
            className="link-container"
            href="https://www.instagram.com/ivanrozak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <Instagram className="w-5 h-5" />
              Instagram
            </div>
            <ArrowLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
