import "./Sections.css";
import {
  AutonomySoftwareDeveloperExperience,
  BusinessAdministratorExperience,
  ProductComplianceInternExperience,
} from "./ExperienceItem";

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
