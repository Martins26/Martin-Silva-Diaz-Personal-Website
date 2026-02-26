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
      summary="Developed and maintained all internal business processes and systems."
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
      summary="Developed Product Quality Plans (PQPs) for 500+ thermoplastic products across multiple plants supporting municipal water infrastructure projects in North America. Created a defect-quantification document to reduce health and safety risks and coordinated with compliance engineers and quality teams across Canada to prepare documentation ensuring regulatory compliance."
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
      summary="Contributed to the development of autonomous flight software for competitive drone racing, focusing on navigation algorithms and real-time data processing."
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
