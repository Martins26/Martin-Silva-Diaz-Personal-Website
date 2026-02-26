import "./Sections.css";
import SectionEntryBlock from "./SectionEntryBlock";

function AboutSection() {
  return (
    <section className="content-card" aria-labelledby="about-heading">
      <h2 id="about-heading">About Me</h2>
      <ul className="section-list">
        <SectionEntryBlock
          title="BASc, Management Engineering"
          subtitle="University of Waterloo"
          details="I'm Martin, an engineering student at the University of Waterloo originally from Trujillo, Peru. My interests include programming, data science, and finance for real-world applications."
          logoSrc="/logos/uwaterloo.png"
          logoAlt="Profile placeholder"
        />
      </ul>
    </section>
  );
}

export default AboutSection;
