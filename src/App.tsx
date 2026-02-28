import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";

const externalLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martinsilvadiaz/",
    iconSrc: "/logos/linkedin.svg",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Martins26?tab=overview&from=2026-02-01&to=2026-02-26",
    iconSrc: "/logos/github.svg",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume/Resume_Martin_Silva-Diaz.pdf",
    iconSrc: "/logos/file-document.svg",
  },
];

function App() {
  return (
    <div className="min-h-[100dvh] w-full">
      <main className="mx-auto grid w-full max-w-[860px] gap-5 p-4 sm:gap-4 md:p-8">
        <header className="rounded-2xl border border-slate-400/30 bg-gradient-to-br from-slate-900/65 to-slate-800/35 p-5 backdrop-blur-[2px] sm:rounded-[14px] sm:p-4">
          <h1 className="text-4xl font-bold leading-tight sm:text-[clamp(1.55rem,8vw,2rem)]">
            {"Martin Silva\u2011Diaz"}
          </h1>
          <p className="mt-1.5 text-slate-300 sm:mt-2 sm:text-[0.95rem]">
            Engineering Undergraduate · University of Waterloo
          </p>
        </header>

        <nav
          className="sticky top-3 z-10 flex flex-wrap gap-3 rounded-[14px] border border-slate-400/30 bg-gradient-to-br from-slate-900/62 to-slate-800/32 p-2.5 backdrop-blur-[2px] sm:top-[0.45rem] sm:gap-2 sm:rounded-xl sm:p-2"
          aria-label="External links"
        >
          {externalLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-400/35 bg-gradient-to-br from-slate-800/75 to-slate-700/52 px-4 py-2 text-slate-200 no-underline transition-all duration-150 ease-in hover:border-slate-400/80 sm:min-h-11 sm:px-3.5 sm:py-2.5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={link.iconSrc}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 rounded-sm bg-white p-[1px]"
              />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="grid gap-5 sm:gap-4 [&>div]:scroll-mt-[5.5rem] sm:[&>div]:scroll-mt-20">
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="education">
            <EducationSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
