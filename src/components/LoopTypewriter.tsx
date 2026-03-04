import { useEffect, useMemo, useState } from "react";

type LoopTypewriterProps = {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
  cursor?: boolean;
};

function LoopTypewriter({
  phrases,
  typeSpeed = 90,
  deleteSpeed = 55,
  pauseMs = 1400,
  className,
  cursor = true,
}: LoopTypewriterProps) {
  const safePhrases = useMemo(
    () => phrases.filter((phrase) => phrase.length > 0),
    [phrases],
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const longestPhrase = useMemo(
    () => safePhrases.reduce((longest, phrase) => (phrase.length > longest.length ? phrase : longest), ""),
    [safePhrases],
  );

  const activePhrase = safePhrases[phraseIndex] ?? "";

  useEffect(() => {
    if (safePhrases.length === 0) {
      return;
    }

    const completedTyping = !isDeleting && charIndex === activePhrase.length;
    const completedDeleting = isDeleting && charIndex === 0;

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (completedTyping) {
      delay = pauseMs;
    }

    const timeout = window.setTimeout(() => {
      if (completedTyping) {
        setIsDeleting(true);
        return;
      }

      if (completedDeleting) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % safePhrases.length);
        return;
      }

      setCharIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    activePhrase.length,
    charIndex,
    deleteSpeed,
    isDeleting,
    pauseMs,
    safePhrases.length,
    typeSpeed,
  ]);

  const renderedText = activePhrase.slice(0, charIndex);

  return (
    <span className={`relative inline-grid align-top ${className ?? ""}`} aria-live="polite">
      <span className="invisible col-start-1 row-start-1 whitespace-pre">
        {longestPhrase}
        {cursor ? "|" : ""}
      </span>
      <span className="col-start-1 row-start-1 whitespace-pre">
        {safePhrases.length > 0 ? renderedText : ""}
        {cursor ? <span className="ml-0.5 inline-block animate-pulse">|</span> : null}
      </span>
    </span>
  );
}

export default LoopTypewriter;
