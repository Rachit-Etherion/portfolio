"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rachitthakur01@gmail.com",
      href: "mailto:rachitthakur01@gmail.com",
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

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message.", {
        description: "Please try emailing me directly at rachitthakur01@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            I'm always open to discussing new opportunities, interesting projects, or just chatting about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch mt-12 text-foreground">
          {/* Contact Details (2 columns) */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:scale-[1.02] transition-transform animated-border"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-sm text-muted-foreground">{link.label}</h3>
                    <p className="text-sm font-medium text-foreground break-all">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-6 flex items-center gap-3 justify-center border border-border"
            >
              <MapPin className="w-5 h-5 text-primary shrink-0 animate-bounce" />
              <span className="text-muted-foreground text-sm font-medium">Based in Pune, Maharashtra, India</span>
            </motion.div>
          </div>

          {/* Contact Form (3 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 glass-card rounded-xl p-8 animated-border relative overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-2 text-foreground">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form below to get in touch. I usually reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2.5 rounded-lg bg-secondary/50 border ${errors.name ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary/50"} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.name && <p className="text-xs text-destructive mt-1 font-mono">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-2.5 rounded-lg bg-secondary/50 border ${errors.email ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary/50"} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.email && <p className="text-xs text-destructive mt-1 font-mono">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hey Rachit, I'd love to chat about a backend engineering opportunity..."
                  className={`w-full px-4 py-2.5 rounded-lg bg-secondary/50 border ${errors.message ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary/50"} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all resize-none`}
                />
                {errors.message && <p className="text-xs text-destructive mt-1 font-mono">{errors.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full gap-2 cursor-pointer">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;