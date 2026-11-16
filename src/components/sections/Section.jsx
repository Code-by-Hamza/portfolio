export default function Section({ id, index, label, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-label`}>
      <h2 id={`${id}-label`} className="section__label"><span>0{index}</span>{label}</h2>
      {children}
    </section>
  );
}
