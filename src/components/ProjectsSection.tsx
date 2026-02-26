import "./Sections.css";
import SectionEntryBlock from "./SectionEntryBlock";

type ProjectItemProps = {
  name: string;
  description: string;
  stack: string;
  rightImageSrc: string;
  rightImageAlt: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

function ProjectItem({
  name,
  description,
  stack,
  rightImageSrc,
  rightImageAlt,
  links,
}: ProjectItemProps) {
  return (
    <SectionEntryBlock
      title={name}
      subtitle={stack}
      details={description}
      rightImageSrc={rightImageSrc}
      rightImageAlt={rightImageAlt}
      links={links}
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
      links={[
        { label: "Demo", href: "https://example.com/demo" },
        { label: "GitHub", href: "https://example.com/repo" },
      ]}
    />
  );
}

function FinancialPlanningToolProject() {
  return (
    <ProjectItem
      name="Financial Planning Tool"
      description="A budgeting tool that helps users track expenses and plan their financial goals."
      stack="VBA, Excel"
      rightImageSrc="/logos/about-placeholder.svg"
      rightImageAlt="Financial Planning Tool project image"
      links={[
        { label: "Case Study", href: "https://example.com/case-study" },
        { label: "Docs", href: "https://example.com/docs" },
      ]}
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
