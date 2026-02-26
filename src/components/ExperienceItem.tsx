import SectionEntryBlock from "./SectionEntryBlock";

export type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

function ExperienceItem({ role, company, period, summary }: ExperienceItemProps) {
  return (
    <SectionEntryBlock
      title={role}
      subtitle={`${company} · ${period}`}
      details={summary}
    />
  );
}

export function BusinessAdministratorExperience() {
  return (
    <ExperienceItem
      role="Business Administrator"
      company="Scotiabank"
      period="Jan 2026 — Present"
      summary="Developed and maintained internal business processes and systems."
    />
  );
}

export function ProductComplianceInternExperience() {
  return (
    <ExperienceItem
      role="Product Compliance Intern"
      company="IPEX by Aliaxis"
      period="May 2025 — Aug 2025"
      summary="Conducted product compliance research and documentation for North American markets, ensuring adherence to regulatory standards."
    />
  );
}

export function AutonomySoftwareDeveloperExperience() {
  return (
    <ExperienceItem
      role="Autonomy Software Developer"
      company="Waterloo Aerial Robotics Group"
      period="Aug 2025 — Dec 2025"
      summary="Contributed to the development of autonomous flight software for competitive drone racing, focusing on navigation algorithms and real-time data processing."
    />
  );
}

export default ExperienceItem;
