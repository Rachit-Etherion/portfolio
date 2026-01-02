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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
                : "py-6"
            }`}
        >
            <div className="section-container">
            <div className="flex items-center justify-between">
                <a href="#" className="text-xl font-bold">
                <span className="gradient-text">RS</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                    {link.label}
                    </a>
                ))}
                <Button size="sm" asChild>
                    <a href="#contact">Hire Me</a>
                </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
                </button>
            </div>
            </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
            >
                <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                    {link.label}
                    </a>
                ))}
                <Button className="w-full" asChild>
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