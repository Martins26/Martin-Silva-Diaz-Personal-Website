import "./Sections.css";

type Project = {
  name: string;
  description: string;
  stack: string;
};

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

type ProjectItemProps = {
  project: Project;
};

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <li className="section-list-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p className="meta">{project.stack}</p>
    </li>
  );
}

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
