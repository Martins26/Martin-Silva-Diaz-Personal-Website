import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import { motion, useReducedMotion } from "motion/react";
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
  const reduceMotion = useReducedMotion();

  return (
    <main className="portfolio">
      <div className="background-aurora" aria-hidden="true">
        <motion.div
          className="aurora-layer aurora-layer-one"
          animate={
            reduceMotion
              ? { opacity: 0.72 }
              : {
                  opacity: [0.48, 0.9, 0.48],
                  x: ["-6%", "5%", "-6%"],
                  y: ["-4%", "5%", "-4%"],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="aurora-layer aurora-layer-two"
          animate={
            reduceMotion
              ? { opacity: 0.64 }
              : {
                  opacity: [0.86, 0.42, 0.86],
                  x: ["4%", "-5%", "4%"],
                  y: ["5%", "-4%", "5%"],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
