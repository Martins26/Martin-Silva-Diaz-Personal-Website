import SectionEntryBlock from "./SectionEntryBlock";

type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
  rightImageSrc: string;
  linkUrl?: string;
};

function ExperienceItem({
  role,
  company,
  period,
  summary,
  rightImageSrc,
  linkUrl,
}: ExperienceItemProps) {
  return (
    <SectionEntryBlock
      title={role}
      subtitle={`${company} · ${period}`}
      details={summary}
      rightImageSrc={rightImageSrc}
      rightImageAlt={`${company} logo placeholder`}
      linkUrl={linkUrl}
    />
  );
}

function BusinessAdministratorExperience() {
  return (
    <ExperienceItem
      role="Business Administrator Intern"
      company="Scotiabank"
      period="Jan 2026 — Present"
      summary="DProduced audit-ready reports for external stakeholders at Scotia Wealth Management, 
      automated reporting workflows using Excel VBA to improve efficiency and reliability, and analyzed 
      portfolio data to ensure compliance with trading regulations."
      rightImageSrc="/logos/scotiabank.png"
      linkUrl="https://www.scotiawealthmanagement.com/ca/en/about-us.html"
    />
  );
}

function ProductComplianceInternExperience() {
  return (
    <ExperienceItem
      role="Product Compliance Intern"
      company="IPEX by Aliaxis"
      period="May 2025 — Aug 2025"
      summary="Developed risk-based Product Quality Plans for 500+ thermoplastic products across multiple plants,
       created a standardized defect-quantification framework to support data-driven risk reduction, and collaborated
        with engineering and quality teams to ensure consistent regulatory compliance nationwide."
      rightImageSrc="/logos/IPEX.png"
      linkUrl="https://ipexna.com/"
    />
  );
}

function AutonomySoftwareDeveloperExperience() {
  return (
    <ExperienceItem
      role="Autonomy Software Developer"
      company="Waterloo Aerial Robotics Group"
      period="Aug 2025 — Dec 2025"
      summary="Contributed to drone autonomy software with the Waterloo Aerial Robotics Group and developed an automated 
      parameter verification tool for 1,000+ flight control settings using MAVLink data from a Pixhawk interface."
      rightImageSrc="/logos/WARG.png"
      linkUrl="https://www.uwarg.com/"
    />
  );
}

function ExperienceSection() {
  return (
    <section
      className="rounded-2xl border border-slate-400/25 bg-gradient-to-br from-[#0c121eb8] to-[#1e293b70] p-7 text-left shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:rounded-[14px] sm:p-4"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-3.5 mt-0 text-[1.6rem] sm:text-[1.4rem]"
      >
        Experience
      </h2>
      <ul className="m-0 grid list-none gap-4 p-0">
        <BusinessAdministratorExperience />
        <ProductComplianceInternExperience />
        <AutonomySoftwareDeveloperExperience />
      </ul>
    </section>
  );
}

export default ExperienceSection;
