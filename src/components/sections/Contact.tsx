"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rachitthakur01@gmail.com",
      href: "mailto:rachitthakur01@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95485 48535",
      href: "tel:+919548548535",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/etherion",
      href: "https://www.linkedin.com/in/etherion/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rachit-Etherion",
      href: "https://github.com/Rachit-Etherion",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a
            chat about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-transform animated-border"
            >
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 text-foreground">{link.label}</h3>
              <p className="text-sm text-muted-foreground break-all">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass-card rounded-xl p-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Based in India</span>
            </div>
            <p className="text-lg mb-6 text-foreground">
              Interested in working together or have a question?
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:rachitthakur01@gmail.com">
                <Send className="w-4 h-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;