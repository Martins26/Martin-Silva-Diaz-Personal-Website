import "./Sections.css";

export type Project = {
  name: string;
  description: string;
  stack: string;
};

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

export default ProjectItem;
