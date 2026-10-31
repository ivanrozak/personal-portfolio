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
  Frontend: ["Next.js", "React", "Nuxt.js", "Vue", "React Native", "Angular"],
  Backend: ["NestJS", "Node.js", "Express.js", "Hono"],
  Languages: ["TypeScript", "JavaScript"],
  "Realtime Systems": ["WebRTC", "LiveKit", "WebSocket"],
  "Database & Infra": ["PostgreSQL", "MySQL", "Redis", "Docker", "Linux VPS", "Dokploy", "AWS S3", "GCP", "AWS Amplify", "Vercel"],
  "Testing & Tools": ["Git", "Jest"],
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
              I'm a Fullstack Engineer based in Jakarta, Indonesia with 4+
              years of experience building scalable web applications across
              healthcare, government, and B2B industries.
            </p>
            <p>
              My primary stack is Nuxt.js/Vue.js and Next.js/React on the
              frontend, NestJS and Node.js on the backend, with real-time
              experience using WebRTC and LiveKit.
            </p>
            <p>
              I enjoy taking full ownership of features — from architecture
              decisions to production deployment. Outside of client work, I'm
              building independent products and always looking for the next
              interesting problem to solve.
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
              <span className="text-second text-sm w-32 shrink-0 pt-0.5">
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
              <div key={edu.school} className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-second text-sm">
                    {edu.school}
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
        style={{ "--index": 4 } as React.CSSProperties}
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
