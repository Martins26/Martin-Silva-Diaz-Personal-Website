import "./Sections.css";

type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
};

function SectionEntryBlock({
  title,
  subtitle,
  details,
  rightImageSrc,
  rightImageAlt,
}: SectionEntryBlockProps) {
  return (
    <li className="section-list-item section-entry-block">
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
    </li>
  );
}

export default SectionEntryBlock;
