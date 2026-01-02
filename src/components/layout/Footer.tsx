
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-color" >
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <span>© {currentYear} Rachit Singh. Built with</span>
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                </div>

                <div className="flex items-center gap-4">
                    <a
                    href="https://github.com/Rachit-Etherion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/etherion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a
                    href="mailto:rachitthakur01@gmail.com"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                    <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </a>
                </div>
                </div>
            </div>
        </footer>
    );
}