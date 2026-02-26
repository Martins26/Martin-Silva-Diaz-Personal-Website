import "./Sections.css";
import SectionEntryBlock from "./SectionEntryBlock";

type ProjectItemProps = {
  name: string;
  description: string;
  stack: string;
};

function ProjectItem({ name, description, stack }: ProjectItemProps) {
  return (
    <SectionEntryBlock
      title={name}
      subtitle={stack}
      details={description}
    />
  );
}

function PortfolioMetricsAnalyzerProject() {
  return (
    <ProjectItem
      name="Portfolio Metrics Analyzer"
      description="A portfolio analytics tool that provides insights into asset allocation, risk metrics, and performance attribution."
      stack="React, TypeScript, Python Flask"
    />
  );
}

function FinancialPlanningToolProject() {
  return (
    <ProjectItem
      name="Financial Planning Tool"
      description="A budgeting tool that helps users track expenses and plan their financial goals."
      stack="VBA, Excel"
    />
  );
}

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
