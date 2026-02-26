import "./Sections.css";

type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
  logoSrc?: string;
  logoAlt?: string;
};

function SectionEntryBlock({
  title,
  subtitle,
  details,
  logoSrc,
  logoAlt,
}: SectionEntryBlockProps) {
  return (
    <li className="section-list-item section-entry-block">
      <div className="section-entry-main-content">
        <h3>{title}</h3>
        {subtitle ? <p className="meta">{subtitle}</p> : null}
        <p>{details}</p>
      </div>
      {logoSrc ? (
        <img className="logo-placeholder" src={logoSrc} alt={logoAlt ?? "Company logo"} />
      ) : null}
    </li>
  );
}

export default SectionEntryBlock;
