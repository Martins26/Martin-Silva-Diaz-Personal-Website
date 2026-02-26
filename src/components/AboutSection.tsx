import SectionEntryBlock from "./SectionEntryBlock";

function AboutSection() {
  return (
    <section
      className="rounded-2xl border border-slate-400/25 bg-gradient-to-br from-[#0c121eb8] to-[#1e293b70] p-7 text-left shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:rounded-[14px] sm:p-4"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="mb-3.5 mt-0 text-[1.6rem] sm:text-[1.4rem]">
        About Me
      </h2>
      <ul className="m-0 grid list-none gap-4 p-0">
        <SectionEntryBlock
          title="BASc, Management Engineering"
          subtitle="University of Waterloo"
          details="I'm Martin, an engineering student at the University of Waterloo originally from Peru. 
          My interests include programming, data science, and finance for real-world applications."
          rightImageSrc="/logos/uwaterloo.png"
          rightImageAlt="Profile placeholder"
          linkUrl="https://uwaterloo.ca/future-students/programs/management-engineering"
        />
      </ul>
    </section>
  );
}

export default AboutSection;
