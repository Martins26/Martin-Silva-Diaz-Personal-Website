import "./Sections.css";

type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  linkUrl?: string;
};

function SectionEntryBlock({
  title,
  subtitle,
  details,
  rightImageSrc,
  rightImageAlt,
  linkUrl = "https://en.wikipedia.org/wiki/Abraham_Lincoln",
}: SectionEntryBlockProps) {
  return (
    <li className="section-list-item">
      <a
        className="section-entry-block section-entry-link"
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="section-entry-main-content">
          <h3>{title}</h3>
          {subtitle ? <p className="meta">{subtitle}</p> : null}
          <p>{details}</p>
        </div>
        {rightImageSrc ? (
          <img
            className="logo-placeholder"
            src={rightImageSrc}
            alt={rightImageAlt ?? "Section entry image"}
          />
        ) : null}
      </a>
    </li>
  );
}

export default SectionEntryBlock;
