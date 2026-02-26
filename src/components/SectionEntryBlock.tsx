import "./Sections.css";

type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
  logoPlaceholderLabel?: string;
};

function SectionEntryBlock({
  title,
  subtitle,
  details,
  logoPlaceholderLabel,
}: SectionEntryBlockProps) {
  return (
    <li className="section-list-item section-entry-block">
      <div className="section-entry-main-content">
        <h3>{title}</h3>
        {subtitle ? <p className="meta">{subtitle}</p> : null}
        <p>{details}</p>
      </div>
      {logoPlaceholderLabel ? (
        <div className="logo-placeholder" aria-label={logoPlaceholderLabel}>
          {logoPlaceholderLabel}
        </div>
      ) : null}
    </li>
  );
}

export default SectionEntryBlock;
