"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "DigiPay",
    description:
      "A digital payment wallet application enabling secure peer-to-peer transactions, balance management, and transaction history tracking with modern authentication.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/Rachit-Etherion/DigiPay",
    featured: true,
  },
  {
    title: "draw_app",
    description:
      "A collaborative drawing application built with TypeScript, featuring real-time canvas interactions and a clean, intuitive interface for creative expression.",
    technologies: ["TypeScript", "Canvas API", "WebSocket"],
    github: "https://github.com/Rachit-Etherion/draw_app",
    featured: true,
  },
  {
    title: "SecondBrain",
    description:
      "A personal knowledge management system designed to organize thoughts, notes, and ideas efficiently. Built for developers who think in structured ways.",
    technologies: ["TypeScript", "React", "Local Storage"],
    github: "https://github.com/Rachit-Etherion/SecondBrain",
    featured: true,
  },
];

export const Project = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-24 bg-secondary/30">
        <div className="section-container" ref={ref}>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                Personal Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured Projects</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card rounded-xl p-6 animated-border group hover:scale-[1.02] transition-transform duration-300"
                >
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                    <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
            >
            <a
                href="https://github.com/Rachit-Etherion?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
                View all projects on GitHub
                <ExternalLink className="w-4 h-4" />
            </a>
            </motion.div>
        </div>
        </section>
    );
};