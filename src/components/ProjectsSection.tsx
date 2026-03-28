import { motion } from "framer-motion";
import SectionEntryBlock from "./SectionEntryBlock";
import { containerVariants, itemVariants } from "./motionVariants";

type ProjectItemProps = {
  name: string;
  description: string;
  stack: string;
  linkUrl: string;
};

function ProjectItem({ name, description, stack, linkUrl }: ProjectItemProps) {
  return (
    <SectionEntryBlock
      title={name}
      subtitle={stack}
      details={description}
      linkUrl={linkUrl}
      variants={itemVariants}
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
      <motion.ul
        className="m-0 grid list-none gap-4 p-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <ProjectItem
          name="Stock Porfolio Analysis Tool"
          description="Developed a full-stack portfolio analysis platform that tracks customized portfolios,
       visualizes performance, computes the efficient frontier and recommends
        allocations based on risk preferences."
          stack="React, TypeScript, Python Flask"
          linkUrl="https://portfolio-metrics-analyzer.vercel.app/"
        />
        <ProjectItem
          name="Financial Budgeting & Planning Tool"
          description="Developed an Excel VBA budgeting tool that automates expense tracking and visualization,
      incorporates real-time data validation for reliable calculations."
          stack="VBA, Excel"
          linkUrl="https://1drv.ms/x/c/97312058463c78a7/EZD8pGZI12dJu1apDoR1V9MBy-U9vMZ0jaTrpHZwkfI0WQ?e=WLXfC5"
        />
      </motion.ul>
    </section>
  );
}

export default ProjectsSection;
