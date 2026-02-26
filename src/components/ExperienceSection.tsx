import "./Sections.css";
import SectionEntryBlock from "./SectionEntryBlock";

type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
  logoSrc: string;
};

function ExperienceItem({
  role,
  company,
  period,
  summary,
  logoSrc,
}: ExperienceItemProps) {
  return (
    <SectionEntryBlock
      title={role}
      subtitle={`${company} · ${period}`}
      details={summary}
      logoSrc={logoSrc}
      logoAlt={`${company} logo placeholder`}
    />
  );
}

function BusinessAdministratorExperience() {
  return (
    <ExperienceItem
      role="Business Administrator"
      company="Scotiabank"
      period="Jan 2026 — Present"
      summary="Developed and maintained internal business processes and systems."
      logoSrc="/logos/scotiabank.png"
    />
  );
}

function ProductComplianceInternExperience() {
  return (
    <ExperienceItem
      role="Product Compliance Intern"
      company="IPEX by Aliaxis"
      period="May 2025 — Aug 2025"
      summary="Conducted product compliance research and documentation for North American markets, ensuring adherence to regulatory standards."
      logoSrc="/logos/IPEX.png"
    />
  );
}

function AutonomySoftwareDeveloperExperience() {
  return (
    <ExperienceItem
      role="Autonomy Software Developer"
      company="Waterloo Aerial Robotics Group"
      period="Aug 2025 — Dec 2025"
      summary="Contributed to the development of autonomous flight software for competitive drone racing, focusing on navigation algorithms and real-time data processing."
      logoSrc="/logos/WARG.png"
    />
  );
}

function ExperienceSection() {
  return (
    <section className="content-card" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <ul className="section-list">
        <BusinessAdministratorExperience />
        <ProductComplianceInternExperience />
        <AutonomySoftwareDeveloperExperience />
      </ul>
    </section>
  );
}

export default ExperienceSection;
