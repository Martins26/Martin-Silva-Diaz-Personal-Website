type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  linkUrl?: string;
};

const cardLinkClasses =
  "flex items-center justify-between gap-4 rounded-xl border border-slate-400/20 bg-gradient-to-br from-slate-900/60 to-slate-700/34 p-4 no-underline transition-all duration-180 ease-in hover:-translate-y-0.5 hover:border-sky-400/55 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-slate-600/46 hover:shadow-[0_10px_24px_rgba(8,47,73,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400/90 sm:items-start sm:gap-3 sm:p-[0.85rem] max-[480px]:flex-col";

function SectionEntryBlock({
  title,
  subtitle,
  details,
  rightImageSrc,
  rightImageAlt,
  linkUrl = "https://en.wikipedia.org/wiki/Abraham_Lincoln",
}: SectionEntryBlockProps) {
  return (
    <li>
      <a
        className={cardLinkClasses}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="min-w-0 flex-1">
          <h3 className="m-0 text-[1.1rem] [overflow-wrap:anywhere] sm:text-base">{title}</h3>
          {subtitle ? (
            <p className="mt-[0.35rem] text-[0.92rem] text-slate-300 [overflow-wrap:anywhere]">
              {subtitle}
            </p>
          ) : null}
          <p className="mt-[0.35rem] [overflow-wrap:anywhere]">{details}</p>
        </div>
        {rightImageSrc ? (
          <img
            className="h-24 w-24 shrink-0 rounded-[10px] border border-slate-400/45 bg-white object-cover sm:h-[72px] sm:w-[72px] max-[480px]:self-end"
            src={rightImageSrc}
            alt={rightImageAlt ?? "Section entry image"}
          />
        ) : null}
      </a>
    </li>
  );
}

export default SectionEntryBlock;
