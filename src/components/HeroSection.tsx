import LoopTypewriter from "./LoopTypewriter";

const titlePhrases = ["Hi, I'm Martin Silva-Diaz"];

function HeroSection() {
  return (
    <header className="rounded-2xl border border-slate-400/30 bg-gradient-to-br from-slate-900/65 to-slate-800/35 p-5 backdrop-blur-[2px] sm:rounded-[14px] sm:p-4">
      <h1 className="hero-name-script text-4xl font-bold leading-tight sm:text-[clamp(1.55rem,8vw,2rem)]">
        <LoopTypewriter
          phrases={titlePhrases}
          typeSpeed={95}
          deleteSpeed={60}
          pauseMs={1300}
          cursor
        />
      </h1>
      <p className="mt-1.5 text-slate-300 sm:mt-2 sm:text-[0.95rem]">
        Engineering Undergraduate · University of Waterloo
      </p>
    </header>
  );
}

export default HeroSection;
