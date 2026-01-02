"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Coffee, Code } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science from Dr. A.P.J. Abdul Kalam Technical University (2017-2021)",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Building scalable backend systems, distributed architectures, and high-performance APIs",
    },
    {
      icon: Code,
      title: "Expertise",
      description: "System Design (HLD & LLD), Microservices, Event-Driven Architecture, Cloud Solutions",
    },
    {
      icon: Coffee,
      title: "Philosophy",
      description: "Write clean code, optimize relentlessly, and never stop learning new technologies",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Get to Know Me
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a <span className="text-foreground font-medium">results-driven Software Engineer</span> with{" "}
                <span className="text-primary font-semibold">4+ years of experience</span> in designing, developing, and
                optimizing scalable systems and high-performance applications.
              </p>
              <p className="leading-relaxed">
                Currently working at <span className="text-foreground font-medium">FactSet</span>, where I contribute to a
                platform serving over 8 million users. My expertise spans across backend development, system design,
                distributed systems, and cloud architectures.
              </p>
              <p className="leading-relaxed">
                I'm passionate about building robust, secure, and reliable solutions. Whether it's optimizing data pipelines,
                architecting microservices, or resolving complex production issues – I thrive on challenges that push the
                boundaries of what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "4+", label: "Years Exp" },
                { value: "8M+", label: "Users Served" },
                { value: "99%+", label: "Uptime" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card"
                >
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-5"
              >
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;