"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, GitCommit, Star, GitFork } from "lucide-react";

export const GitHubActivity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Seeded random function for consistent server/client rendering
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Generate mock contribution data with seeded randomness
  const generateContributions = () => {
    const weeks = 52;
    const daysPerWeek = 7;
    const contributions = [];
    let seed = 12345; // Fixed seed for consistent results

    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        // More activity in recent weeks
        const baseActivity = week > 40 ? 0.4 : 0.15;
        seed++; // Increment seed for next random value
        const random = seededRandom(seed);
        let level = 0;
        if (random > 0.7 + baseActivity) level = 3;
        else if (random > 0.5 + baseActivity) level = 2;
        else if (random > 0.3 + baseActivity) level = 1;
        weekData.push(level);
      }
      contributions.push(weekData);
    }
    return contributions;
  };

  const contributions = generateContributions();

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-secondary";
      case 1:
        return "bg-primary/30";
      case 2:
        return "bg-primary/60";
      case 3:
        return "bg-primary";
      default:
        return "bg-secondary";
    }
  };

  return (
    <section id="github" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Coding Activity
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">GitHub Contributions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-6 lg:p-8"
        >
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { icon: GitCommit, label: "Contributions", value: "26+" },
              { icon: Star, label: "Stars Earned", value: "0" },
              { icon: GitFork, label: "Repositories", value: "11" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-1 min-w-max justify-center">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((level, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + weekIndex * 0.01,
                      }}
                      className={`w-3 h-3 rounded-sm ${getLevelColor(
                        level
                      )} transition-colors hover:ring-2 hover:ring-primary/50`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            {[0, 1, 2, 3].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
              />
            ))}
            <span>More</span>
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8 text-foreground"
          >
            <a
              href="https://github.com/Rachit-Etherion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-accent rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">View GitHub Profile</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};