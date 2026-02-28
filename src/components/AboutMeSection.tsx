function AboutMeSection() {
  return (
    <section
      className="rounded-2xl border border-slate-400/25 bg-gradient-to-br from-[#0c121eb8] to-[#1e293b70] p-7 text-left shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:rounded-[14px] sm:p-4"
      aria-labelledby="about-me-heading"
    >
      <h2 id="about-me-heading" className="mb-3.5 mt-0 text-[1.6rem] sm:text-[1.4rem]">
        About Me
      </h2>
      <div className="rounded-xl border border-slate-400/20 bg-gradient-to-br from-slate-900/60 to-slate-700/34 p-4 sm:p-[0.85rem]">
        <p className="m-0 [overflow-wrap:anywhere]">
          I&apos;m Martin, a Management Engineering student at the University of
          Waterloo focused on software development, data science, and
          quantitative finance. I enjoy building data-driven systems and
          applying analytical methods to real-world problems.
        </p>
      </div>
    </section>
  );
}

export default AboutMeSection;
