import "./Sections.css";

type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const experiences: Experience[] = [
  {
    role: "Business Administrator",
    company: "Scotiabank",
    period: "Jan 2026 — Present",
    summary:
      "Developed and maintained internal business processes and systems.",
  },
  {
    role: "Product Compliance Intern",
    company: "IPEX by Aliaxis",
    period: "May 2025 — Aug 2025",
    summary:
      "Conducted product compliance research and documentation for North American markets, ensuring adherence to regulatory standards.",
  },
  {
    role: "Autonomy Software Developer",
    company: "Waterloo Aerial Robotics Group",
    period: "Aug 2025 — Dec 2025",
    summary:
      "Contributed to the development of autonomous flight software for competitive drone racing, focusing on navigation algorithms and real-time data processing.",
  },
];

type ExperienceItemProps = {
  experience: Experience;
};

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <li className="section-list-item">
      <h3>{experience.role}</h3>
      <p className="meta">
        {experience.company} · {experience.period}
      </p>
      <p>{experience.summary}</p>
    </li>
  );
}

function ExperienceSection() {
  return (
    <section className="content-card" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <ul className="section-list">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.role}`}
            experience={experience}
          />
        ))}
      </ul>
    </section>
  );
}

export default ExperienceSection;
