import "./Sections.css";
import ProjectItem, { type Project } from "./ProjectItem";

const projects: Project[] = [
  {
    name: "Portfolio Metrics Analyzer",
    description:
      "A portfolio analytics tool that provides insights into asset allocation, risk metrics, and performance attribution.",
    stack: "React, TypeScript, Python Flask",
  },
  {
    name: "Financial Planning Tool",
    description:
      "A budgeting tool that helps users track expenses and plan their financial goals.",
    stack: "VBA, Excel",
  },
];

function ProjectsSection() {
  return (
    <section className="content-card" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <ul className="section-list">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
