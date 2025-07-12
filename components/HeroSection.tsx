"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const techStack = ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "GraphQL", "PostgreSQL", "Docker"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 dark:opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" />
      </div>

      {/* Floating dots */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-foreground/5 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-foreground/5 blur-xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-foreground">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Mukesh</span>
                </span>
                <span className="block text-muted-foreground mt-2">Full Stack Developer</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                I build modern, performant web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backend systems.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild className="group rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/20 transition-all">
                <Link href="#contact">
                  <span>Get in touch</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" asChild className="rounded-full group border-border">
                <Link href="#projects">
                  <span>View my work</span>
                </Link>
              </Button>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">TECH I WORK WITH</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.div key={tech} whileHover={{ y: -3 }} className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-foreground shadow-sm">
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center space-x-4 pt-4">
              <a href="https://github.com/mukeshunique8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/muthu-888-mukesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mukesh_8_8_8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right content - animated illustration */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Code window */}
              <div className="absolute inset-0 bg-muted rounded-2xl shadow-xl overflow-hidden border border-border">
                <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="pt-14 px-6 pb-6 h-full overflow-auto">
                  <div className="font-mono text-sm text-foreground">
                    <div>
                      <span className="text-blue-600">const</span> <span className="text-amber-500">developer</span> = {"{"}
                    </div>
                    <div className="ml-4">
                      <span className="text-green-500">name</span>: <span className="text-pink-500">"Mukesh"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-green-500">skills</span>: <span className="text-purple-500">["React", "Next.js", "Node"]</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-green-500">passion</span>: <span className="text-pink-500">"Creating digital experiences"</span>
                    </div>
                    <div>{"};"}</div>

                    <div className="mt-4">
                      <span className="text-blue-600">function</span> <span className="text-yellow-500">buildProject</span>(idea) {"{"}
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-600">return</span> {"{"}
                    </div>
                    <div className="ml-8">
                      <span className="text-green-500">code</span>: <span className="text-purple-500">clean</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-500">design</span>: <span className="text-purple-500">intuitive</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-500">performance</span>: <span className="text-purple-500">blazingFast</span>
                    </div>
                    <div className="ml-4">{"};"}</div>
                    <div>{"}"}</div>
                    <div>
                      <span className="text-green-600">buildProject()</span> <span className="text-gray-500"> // building....</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-foreground/5 blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-foreground/5 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
