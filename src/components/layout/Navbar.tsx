"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-4 px-4 pointer-events-none"
        >
            <div className={`transition-all duration-300 pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 ${
            isScrolled
                ? "bg-card/75 backdrop-blur-lg border border-border/50 py-2.5 rounded-full shadow-lg max-w-4xl"
                : "py-4 bg-transparent border-transparent"
            }`}>
                <a href="#" className="text-xl font-bold flex items-center gap-1.5">
                  <span className="gradient-text font-mono tracking-tighter">RS</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-1"
                    >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
                <Button size="sm" asChild className="rounded-full px-4 cursor-pointer">
                    <a href="#contact">Hire Me</a>
                </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors text-foreground cursor-pointer"
                >
                {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                ) : (
                    <Menu className="w-5 h-5" />
                )}
                </button>
            </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="fixed inset-x-4 top-20 z-40 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl md:hidden overflow-hidden"
            >
                <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/30 last:border-0 transition-colors"
                    >
                    {link.label}
                    </a>
                ))}
                <Button className="w-full rounded-xl cursor-pointer" asChild>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Hire Me
                    </a>
                </Button>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        </>
    );
    };