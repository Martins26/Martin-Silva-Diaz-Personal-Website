import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function App() {
  return (
    <main className="portfolio">
      <header className="portfolio-header">
        <h1>Martin Silva-Diaz</h1>
        <p>Engineering Undergraduate</p>
      </header>

      <nav className="section-selector" aria-label="Section selector">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="selector-button">
            {section.label}
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
