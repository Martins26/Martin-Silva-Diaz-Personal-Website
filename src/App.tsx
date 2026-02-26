import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import { motion } from "motion/react";
import "./App.css";

const externalLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martinsilvadiaz/",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Martins26?tab=overview&from=2026-02-01&to=2026-02-26",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume/Resume_Martin_Silva-Diaz.pdf",
  },
];

function App() {
  return (
    <main className="portfolio">
      <header className="portfolio-header">
        <h1>{"Martin Silva\u2011Diaz"}</h1>
        <p>Engineering Undergraduate</p>
      </header>

      <nav className="section-selector" aria-label="External links">
        {externalLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="selector-button"
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="sections-stack">
        <div id="about">
          <AboutSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}

export default App;
