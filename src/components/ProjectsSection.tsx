import "./Sections.css";

const projects = [
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
          <li key={project.name} className="section-list-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="meta">{project.stack}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
