import "./Sections.css";

function AboutSection() {
  return (
    <section className="content-card" aria-labelledby="about-heading">
      <h2 id="about-heading">About Me</h2>
      <p>
        I&apos;m Martin, an engineering student at the University of Waterloo
        originially from Trujillo, Peru.
      </p>
      <p>
        My interests include passionate about programming, data science and
        finance for real world applications.
      </p>
    </section>
  );
}

export default AboutSection;
