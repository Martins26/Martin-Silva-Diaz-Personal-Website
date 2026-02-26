import "./Sections.css";
import {
  FinancialPlanningToolProject,
  PortfolioMetricsAnalyzerProject,
} from "./ProjectItem";

function ProjectsSection() {
  return (
    <section className="content-card" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <ul className="section-list">
        <PortfolioMetricsAnalyzerProject />
        <FinancialPlanningToolProject />
      </ul>
    </section>
  );
}

export default ProjectsSection;
