import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { GitHubActivity } from "@/components/sections/GithubActivities";
import Hero from "@/components/sections/Hero";
import { Project } from "@/components/sections/Project";
import Skill from "@/components/sections/Skill";


export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <main>
        <Hero />
        <Skill />
        <Experience />
        <Project />
        <GitHubActivity />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div >
  );
}
