import "./Sections.css";

type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

function SectionEntryBlock({
  title,
  subtitle,
  details,
  rightImageSrc,
  rightImageAlt,
  links,
}: SectionEntryBlockProps) {
  return (
    <li className="section-list-item section-entry-block">
      <div className="section-entry-main-content">
        <h3>{title}</h3>
        {subtitle ? <p className="meta">{subtitle}</p> : null}
        <p>{details}</p>
        {links?.length ? (
          <div className="section-entry-links" aria-label={`${title} links`}>
            {links.map((link) => (
              <a
                key={`${title}-${link.label}`}
                className="section-entry-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
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
