"use client";
import React, { useState } from "react";
import { Project, ProjectCategory } from "@/lib/data";
import { ArrowLink } from "@/component/icons";
import { cn } from "@/lib/utils";

type FilterValue = ProjectCategory | "all";

const categoryLabels: Record<ProjectCategory, string> = {
  professional: "Professional",
  experiment: "Experiment",
  team: "Team",
  "open-source": "Open Source",
};

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterValue>("all");

  const availableCategories = (
    Object.keys(categoryLabels) as ProjectCategory[]
  ).filter((cat) => projects.some((p) => p.category === cat));

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-8">
      {availableCategories.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActive("all")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
              active === "all"
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:bg-accent"
            )}
          >
            All
          </button>
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                active === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:bg-accent"
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-16">
        {filtered.map((project, index) => (
          <div
            key={project.title}
            className="flex gap-8 flex-col md:flex-row animate-in"
            style={{ "--index": index + 1 } as React.CSSProperties}
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
              <div className="flex gap-2 items-baseline flex-wrap">
                <h5 className="font-medium">{project.title}</h5>
                <time className="text-second text-sm"> · {project.year}</time>
                {project.role && (
                  <span className="text-second text-sm"> · {project.role}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-second text-sm">{project.description}</p>
              <div className="flex gap-4 items-center">
                <a
                  className="text-second flex items-center gap-1 hover:underline text-sm"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview
                  <ArrowLink className="w-3.5 h-3.5" />
                </a>
                {project.repoUrl && (
                  <a
                    className="text-second flex items-center gap-1 hover:underline text-sm"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                    <ArrowLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
