import './Sections.css'

const projects = [
  {
    name: 'Portfolio Builder',
    description:
      'A configurable portfolio generator with editable sections, theme presets, and instant preview mode.',
    stack: 'React, TypeScript, Tailwind',
  },
  {
    name: 'TaskFlow',
    description:
      'A lightweight task management app featuring drag-and-drop boards and keyboard-first interactions.',
    stack: 'React, Zustand, Vite',
  },
  {
    name: 'Local Explorer',
    description:
      'An interactive map experience that helps users discover nearby venues and curated city guides.',
    stack: 'React, Mapbox, Node.js',
  },
]

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
  )
}

export default ProjectsSection
