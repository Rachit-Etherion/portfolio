"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "FactSet",
    role: "Software Engineer III",
    location: "Hyderabad, India",
    period: "June 2021 – Present",
    current: true,
    highlights: [
      "Improved backend performance for a large-scale SaaS platform (8M+ users) by 25% through optimization of Java microservices, Node.js APIs, and Python-based data workflows",
      "Led cross-functional engineering teams, improving sprint delivery velocity by 30% via better planning and code reviews",
      "Established SLA/SLO standards ensuring 99%+ availability and reducing downtime incidents by 20%",
      "Built and optimized data ingestion pipelines, improving processing efficiency by 36% and reducing error rates by 55%",
      "Resolved 150+ production issues, reducing average resolution time by 60%",
    ],
    technologies: [
      "Java",
      "Node.js",
      "Python",
      "SQL",
      "Microservices",
      "REST APIs",
      "CI/CD",
    ],
  },
];
export const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-24">
        <div className="section-container" ref={ref}>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                Career Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Work Experience</h2>
            </motion.div>

            <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
                <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
                >
                {/* Timeline dot */}
                <div
                    className={`absolute left-0 md:left-auto ${
                    index % 2 === 0 ? "md:right-0 md:-mr-3" : "md:left-0 md:-ml-3"
                    } w-6 h-6 rounded-full bg-primary border-4 border-background glow-effect -translate-x-1/2 md:translate-x-0`}
                />

                <div className="glass-card rounded-xl p-6 animated-border">
                    <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                            </span>
                        )}
                        </div>
                        <a
                        href="https://www.factset.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium flex items-center gap-1 hover:underline"
                        >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                    <Briefcase className="w-8 h-8 text-muted-foreground/30" />
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                    </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                        <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                        </li>
                    ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
    };