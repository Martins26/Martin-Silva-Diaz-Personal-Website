import "./Sections.css";

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

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

export default ExperienceItem;
