import { Image, Link } from "@nextui-org/react";
import React from "react";
import { projects } from "@/lib/data";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-24">
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-second">
            Here are some of the projects I've worked on.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="flex gap-8 flex-col md:flex-row animate-in"
            style={{ "--index": index + 2 } as React.CSSProperties}
          >
            <a className="md:w-2/5" href={project.url} target="_blank">
              <Image
                src={project.image}
                className="aspect-video w-full"
                alt={project.title}
                isBlurred
                isZoomed
              />
            </a>
            <div className="flex flex-col gap-4 md:w-3/5">
              <div className="flex gap-2">
                <h5 className="font-medium">{project.title}</h5>
                <time className="text-second"> · {project.year}</time>
              </div>
              <p className="text-second">{project.description}</p>
              <Link
                className="text-second"
                showAnchorIcon
                href={project.url}
                target="_blank"
              >
                App preview
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
