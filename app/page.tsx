import Link from "next/link";
import Image from "next/image";
import React from "react";
import { projects, experiences } from "@/lib/data";
import { ArrowLink } from "@/component/icons";

const Home = () => {
  const latestProjects = projects.slice(0, 2);
  return (
    <div className="flex flex-col gap-24">
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ivan Rozak</h1>
          <p className="text-second">I write code and creating things.</p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Image
            src="/static/profile.png"
            width={400}
            height={400}
            className="w-[95px] h-[95px] rounded-full profile-bg"
            alt="profile picture"
          />
          <p>
            Hi, I'm Ivan Rozak, a Fullstack Developer based in Jakarta -
            Indonesia. <br /> I love crafting both frontend interfaces and
            backend systems to create seamless digital experiences. <br /> Let's
            chat about bringing your ideas to life through code!
          </p>
        </div>
        <div className="flex gap-4">
          <a
            className="text-second flex items-center gap-1 hover:underline"
            href="mailto:ivanrozack@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email me
            <ArrowLink className="w-4 h-4" />
          </a>
          <Link
            className="text-second flex items-center gap-1 hover:underline"
            href="/about"
          >
            More ways to connect
            <ArrowLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

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
              <div className="flex flex-col gap-4 md:w-3/5">
                <div className="flex gap-2">
                  <h5 className="font-medium">{project.title}</h5>
                  <time className="text-second"> · {project.year}</time>
                </div>
                <p className="text-second">{project.description}</p>
                <a
                  className="text-second flex items-center gap-1 hover:underline"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App preview
                  <ArrowLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link className="text-second underline" href="/projects">
          See All
        </Link>
      </div>

      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <p className="text-second">Working Experience</p>
        <div className="flex flex-col gap-4">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={experience.logo}
                  width={54}
                  height={54}
                  className="rounded-full object-cover object-center border"
                  alt={experience.company}
                />
                <div>
                  <p>{experience.position}</p>
                  <p className="text-second">{experience.company}</p>
                </div>
              </div>
              <time className="text-second">{experience.period}</time>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
