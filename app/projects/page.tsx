import React from "react";
import { projects } from "@/lib/data";
import ProjectFilter from "@/component/ProjectFilter";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <div
        className="flex flex-col gap-4 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-second">
          {projects.length} projects — client work, experiments, and everything
          in between.
        </p>
      </div>
      <ProjectFilter projects={projects} />
    </div>
  );
};

export default ProjectPage;
