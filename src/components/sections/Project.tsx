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

const renderProjectPreview = (title: string) => {
  switch (title) {
    case "DigiPay":
      return (
        <div className="h-28 rounded-lg bg-secondary/30 mb-4 border border-border/30 overflow-hidden relative flex items-center justify-center">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_70%)] pointer-events-none" />
           <div className="w-36 h-20 bg-gradient-to-tr from-slate-950 via-slate-900 to-teal-950 border border-slate-800 rounded-lg p-2.5 flex flex-col justify-between shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="flex justify-between items-start">
                 <div className="w-5 h-4 bg-amber-500/20 border border-amber-500/40 rounded-sm" />
                 <span className="text-[8px] font-mono text-primary font-semibold tracking-wider">DIGIPAY</span>
              </div>
              <div>
                 <div className="text-[9px] font-mono text-slate-400 tracking-wider">**** **** **** 8826</div>
                 <div className="flex justify-between items-center mt-1">
                    <span className="text-[7px] text-slate-500 font-mono">Balance: $12,450</span>
                    <span className="text-[8px] text-primary font-bold font-mono">✓ Active</span>
                 </div>
              </div>
           </div>
        </div>
      );
    case "draw_app":
      return (
        <div className="h-28 rounded-lg bg-secondary/30 mb-4 border border-border/30 overflow-hidden relative flex items-center justify-center">
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
           <svg className="w-28 h-16 text-primary/80" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="8" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" className="animate-pulse" />
              <circle cx="75" cy="18" r="8" stroke="currentColor" strokeWidth="1.2" />
              <line x1="30" y1="15" x2="67" y2="18" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
              <path d="M15 45 C 30 30, 45 55, 65 42 C 78 30, 88 45, 92 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
           </svg>
        </div>
      );
    case "SecondBrain":
      return (
        <div className="h-28 rounded-lg bg-secondary/30 mb-4 border border-border/30 overflow-hidden relative flex items-center justify-center">
           <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-2.5 h-2.5 rounded-full bg-primary absolute" style={{ top: "35%", left: "50%" }} />
              <div className="w-2 h-2 rounded-full bg-primary/60 absolute" style={{ top: "20%", left: "30%" }} />
              <div className="w-2 h-2 rounded-full bg-primary/60 absolute" style={{ top: "60%", left: "35%" }} />
              <div className="w-2 h-2 rounded-full bg-primary/60 absolute" style={{ top: "30%", left: "70%" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 absolute" style={{ top: "65%", left: "65%" }} />
              <svg className="absolute inset-0 w-full h-full text-primary/20 animate-pulse" xmlns="http://www.w3.org/2000/svg">
                 <line x1="50%" y1="35%" x2="30%" y2="20%" stroke="currentColor" strokeWidth="0.8" />
                 <line x1="50%" y1="35%" x2="35%" y2="60%" stroke="currentColor" strokeWidth="0.8" />
                 <line x1="50%" y1="35%" x2="70%" y2="30%" stroke="currentColor" strokeWidth="0.8" />
                 <line x1="50%" y1="35%" x2="65%" y2="65%" stroke="currentColor" strokeWidth="0.8" />
                 <line x1="30%" y1="20%" x2="35%" y2="60%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                 <line x1="70%" y1="30%" x2="65%" y2="65%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
              </svg>
           </div>
        </div>
      );
    default:
      return null;
  }
};

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

                {renderProjectPreview(project.title)}

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
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