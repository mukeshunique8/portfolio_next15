"use client";

import { Project } from "@/types/project";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "./elements/SkeletonLoader";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [projectsLoading, setProjectsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        const activeProjects = data.filter((item: Project) => item.activeStatus);
        setProjects(Array.isArray(activeProjects) ? activeProjects : []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setProjectsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <h2 className="relative z-10 font-mono text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-fade-up">Projects</h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-80" />
      </div>

      {projectsLoading ? (
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <SkeletonLoader key={i} variant="project" />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500 py-12">Failed to load projects. Please try again later.</p>
      ) : projects.length > 0 ? (
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectItem key={project._id} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-12">No projects to display at the moment.</p>
      )}
    </section>
  );
}
