import './Sections.css'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2023 — Present',
    summary:
      'Built reusable UI components and improved page load performance through code splitting and asset optimization.',
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: '2021 — 2023',
    summary:
      'Delivered custom websites for local businesses with responsive layouts, accessible markup, and SEO best practices.',
  },
]

function ExperienceSection() {
  return (
    <section className="content-card" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <ul className="section-list">
        {experiences.map((experience) => (
          <li key={`${experience.company}-${experience.role}`} className="section-list-item">
            <h3>{experience.role}</h3>
            <p className="meta">
              {experience.company} · {experience.period}
            </p>
            <p>{experience.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
