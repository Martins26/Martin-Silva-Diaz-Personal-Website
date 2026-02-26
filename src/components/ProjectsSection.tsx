import "./Sections.css";
import SectionEntryBlock from "./SectionEntryBlock";

type ProjectItemProps = {
  name: string;
  description: string;
  stack: string;
  rightImageSrc: string;
  rightImageAlt: string;
  linkUrl: string;
};

function ProjectItem({
  name,
  description,
  stack,
  rightImageSrc,
  rightImageAlt,
  linkUrl,
}: ProjectItemProps) {
  return (
    <SectionEntryBlock
      title={name}
      subtitle={stack}
      details={description}
      rightImageSrc={rightImageSrc}
      rightImageAlt={rightImageAlt}
      linkUrl={linkUrl}
    />
  );
}

function PortfolioMetricsAnalyzerProject() {
  return (
    <ProjectItem
      name="Portfolio Metrics Analyzer"
      description="A portfolio analytics tool that provides insights into asset allocation, risk metrics, and performance attribution."
      stack="React, TypeScript, Python Flask"
      rightImageSrc="/logos/about-placeholder.svg"
      rightImageAlt="Portfolio Metrics Analyzer project image"
      linkUrl="https://en.wikipedia.org/wiki/Abraham_Lincoln"
    />
  );
}

function FinancialPlanningToolProject() {
  return (
    <ProjectItem
      name="Financial Planning Tool"
      description="A budgeting tool that helps users track expenses and plan their financial goals."
      stack="VBA, Excel"
      rightImageSrc="/logos/excel_logo.png"
      rightImageAlt="Financial Planning Tool project image"
      linkUrl="https://en.wikipedia.org/wiki/Abraham_Lincoln"
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
