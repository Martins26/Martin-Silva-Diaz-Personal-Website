import SectionEntryBlock from "./SectionEntryBlock";

export type ProjectItemProps = {
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

export function PortfolioMetricsAnalyzerProject() {
  return (
    <ProjectItem
      name="Portfolio Metrics Analyzer"
      description="A portfolio analytics tool that provides insights into asset allocation, risk metrics, and performance attribution."
      stack="React, TypeScript, Python Flask"
    />
  );
}

export function FinancialPlanningToolProject() {
  return (
    <ProjectItem
      name="Financial Planning Tool"
      description="A budgeting tool that helps users track expenses and plan their financial goals."
      stack="VBA, Excel"
    />
  );
}

export default ProjectItem;
