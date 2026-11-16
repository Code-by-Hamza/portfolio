export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
