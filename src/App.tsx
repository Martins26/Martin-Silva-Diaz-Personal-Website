import { useMemo, useState } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";

type SectionKey = "about" | "experience" | "projects";

const sections: { key: SectionKey; label: string }[] = [
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
];

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("about");

  const activeContent = useMemo(() => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      default:
        return null;
    }
  }, [activeSection]);

  return (
    <main className="portfolio">
      <header className="portfolio-header">
        <h1>Martin Silva-Diaz</h1>
        <p>Engineering Undergraduate</p>
      </header>

      <nav className="section-selector" aria-label="Section selector">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            className={`selector-button ${activeSection === section.key ? "active" : ""}`}
            onClick={() => setActiveSection(section.key)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {activeContent}
    </main>
  );
}

export default App;
