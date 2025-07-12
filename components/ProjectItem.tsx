import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Github, Link } from "lucide-react";

interface ProjectItemProps {
  project: Project;
  reverse?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, reverse = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
    >
      {/* Image with hover effect */}
      <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden group">
        <Image
          src={project.imageUrl || "/images/default-project.png"}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-300">{project.description || "No description available."}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 text-pink-600 dark:text-yellow-400 border border-pink-400/20 dark:border-yellow-600/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.githubLink && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors text-sm"
              aria-label="View on GitHub"
            >
              <Github />
              <span>View Code</span>
            </motion.a>
          )}

          {project.liveDemo && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90 transition-opacity text-sm"
              aria-label="View Live Demo"
            >
              <Link />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectItem;
