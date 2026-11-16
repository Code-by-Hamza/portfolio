import SectionHeading from "../ui/SectionHeading.jsx";
import { skills } from "../../data/site.js";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Skills" title="What I work with." />
        <div className="bento">
          {skills.core.map((s) => (
            <div key={s.name} className="card span-2 skill-core">
              <span className="card__label">Primary</span>
              <strong>{s.name}</strong>
              <span>{s.note}</span>
            </div>
          ))}
          <div className="card span-3">
            <span className="card__label">Foundations</span>
            <ul className="chips">{skills.foundations.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="card span-3">
            <span className="card__label">Currently learning</span>
            <ul className="chips">{skills.learning.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
