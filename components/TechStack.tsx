"use client";

import React from "react";
import TechCard from "./TechCard";
import { useTheme } from "next-themes";

interface TechItem {
  src: string;
  type: string;
  styles?: string;
}

interface TechStackCategory {
  [key: string]: TechItem[];
}

const techStacks: TechStackCategory = {
  frontend: [
    { src: "/images/tech/html.png", type: "HTML" },
    { src: "/images/tech/css.png", type: "CSS" },
    { src: "/images/tech/js.png", type: "JavaScript" },
    { src: "/images/tech/react.png", type: "React.js" },
    { src: "/images/tech/Angular.png", type: "Angular" },
    { src: "/images/tech/next.png", type: "Next.js" },
    { src: "/images/tech/tailwind.png", type: "Tailwind" },
    { src: "/images/tech/bootstrap.png", type: "Bootstrap" },
  ],
  backend_databases: [
    { src: "/images/tech/nodejs.png", type: "Node.js" },
    { src: "/images/tech/mysql.png", type: "MySQL" },
    { src: "/images/tech/mariadb.png", type: "MariaDB" },
    { src: "/images/tech/mongodb.png", type: "MongoDB" },
    { src: "/images/tech/SupaBase.png", type: "Supabase" },
    { src: "/images/tech/firebase.png", type: "Firebase" },
  ],
  tools: [
    { src: "/images/tech/github.svg", type: "GitHub", styles: "bg-white" },
    { src: "/images/tech/postman.svg", type: "Postman" },
    { src: "/images/tech/figma.png", type: "Figma" },
  ],
};

export default function TechStack() {
  const { theme } = useTheme();

  return (
    <section id="TechStack" className="mx-auto px-4 py-12 md:py-20 max-w-7xl">
      {/* Animated gradient heading with subtle border */}
      <div className="text-center mb-16 relative">
        <h3 className="relative z-10 font-mono text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 animate-fade-up">Tech Stack</h3>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full opacity-80"></div>
      </div>

      {Object.entries(techStacks).map(([category, technologies]) => (
        <div key={category} className="mb-16 last:mb-0">
          {/* Category title with animated underline */}
          <div className="mb-10 relative inline-block">
            <h4 className="relative z-10 text-2xl md:text-3xl font-semibold uppercase text-gray-800 dark:text-gray-200 px-2">{category}</h4>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-pink-500/20 rounded-full animate-pulse-slow"></div>
          </div>

          {/* Grid with responsive columns and subtle background pattern */}
          <div className="relative p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            {/* Subtle grid pattern in background */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10 dark:opacity-5">
              <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark"></div>
            </div>

            <div className="relative grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
              {technologies.map(({ src, type, styles }) => (
                <TechCard key={type} src={src} alt={`${type} logo`} width="w-20 md:w-24" height="h-20 md:h-24" type={type} styles={`${styles} hover:scale-110`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
