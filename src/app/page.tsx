import { Hero } from "@/components/hero";
import Skills from "@/components/skills/Skills";
import CoreProjects from "@/components/projects/CoreProjects";
import PracticeProjects from "@/components/projects/PracticeProjects";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import GitHubActivity from "@/components/about/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="about">
        <Hero />
      </section>
      <section id="github-activity">
        <GitHubActivity />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <CoreProjects />
        <PracticeProjects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
