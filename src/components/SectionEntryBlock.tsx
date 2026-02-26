import "./Sections.css";

type SectionEntryBlockProps = {
  title: string;
  subtitle?: string;
  details: string;
};

function SectionEntryBlock({ title, subtitle, details }: SectionEntryBlockProps) {
  return (
    <li className="section-list-item section-entry-block">
      <h3>{title}</h3>
      {subtitle ? <p className="meta">{subtitle}</p> : null}
      <p>{details}</p>
    </li>
  );
}

export default SectionEntryBlock;
