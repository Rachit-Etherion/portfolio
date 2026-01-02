"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Cloud,
  Server,
  Settings,
  MessageSquare,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Shell"],
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["Django", "FastAPI", "Node.js", "Express"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Messaging",
    icon: MessageSquare,
    skills: ["Kafka", "Event-Driven Architectures"],
  },
  {
    title: "Tools & Practices",
    icon: Settings,
    skills: ["Git", "Linux", "REST APIs", "Microservices", "System Design"],
  },
];


export default function Skill() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

     return (
        <section id="skills" className="py-24 bg-secondary/30">
        <div className="section-container" ref={ref}>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                What I Work With
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">Technical Arsenal</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
                <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 animated-border"
                >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                    <span key={skill} className="tech-badge text-xs">
                        {skill}
                    </span>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>

            {/* Backend vs Frontend indicator */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 max-w-md mx-auto"
            >
            <div className="text-center mb-4">
                <span className="text-sm text-muted-foreground font-mono">
                Focus Distribution
                </span>
            </div>
            <div className="relative h-4 rounded-full bg-secondary overflow-hidden">
                <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "70%" } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute left-0 top-0 h-full bg-primary rounded-l-full"
                />
                <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "30%" } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute right-0 top-0 h-full bg-accent-foreground/30 rounded-r-full"
                />
            </div>
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Backend 70%
                </span>
                <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-accent-foreground/30" />
                Frontend 30%
                </span>
            </div>
            </motion.div>
        </div>
        </section>
    );
};