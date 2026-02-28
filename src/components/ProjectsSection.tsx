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
      description="Developed a full-stack portfolio analysis platform that tracks customized portfolios,
       visualizes performance, computes the efficient frontier via 20,000 Monte Carlo simulations, recommends
        allocations based on risk preferences (Sharpe ratio, volatility, target return), and persists data using 
        PostgreSQL on a Supabase backend."
      stack="React, TypeScript, Python Flask"
      rightImageSrc="/logos/stock_graph.png"
      rightImageAlt="Portfolio Metrics Analyzer project image"
      linkUrl="https://portfolio-metrics-analyzer.vercel.app/"
    />
  );
}

function FinancialPlanningToolProject() {
  return (
    <ProjectItem
      name="Financial Planning Tool"
      description="Developed an Excel VBA budgeting tool that automates expense tracking and visualization, 
      incorporates real-time data validation for reliable calculations, and generates macro-driven pivot charts 
      and dashboards to analyze spending trends."
      stack="VBA, Excel"
      rightImageSrc="/logos/excel_logo.png"
      rightImageAlt="Financial Planning Tool project image"
      linkUrl="https://1drv.ms/x/c/97312058463c78a7/EZD8pGZI12dJu1apDoR1V9MBy-U9vMZ0jaTrpHZwkfI0WQ?e=WLXfC5"
    />
  );
}

function ProjectsSection() {
  return (
    <section
      className="rounded-2xl border border-slate-400/25 bg-gradient-to-br from-[#0c121eb8] to-[#1e293b70] p-7 text-left shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:rounded-[14px] sm:p-4"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="mb-3.5 mt-0 text-[1.6rem] sm:text-[1.4rem]"
      >
        Projects
      </h2>
      <ul className="m-0 grid list-none gap-4 p-0">
        <PortfolioMetricsAnalyzerProject />
        <FinancialPlanningToolProject />
      </ul>
    </section>
  );
}

export default ProjectsSection;
