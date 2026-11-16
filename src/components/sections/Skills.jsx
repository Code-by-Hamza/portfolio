import Section from "./Section.jsx";
import { skills } from "../../data/site.js";

export default function Skills() {
  return (
    <Section id="skills" index={2} label="Skills">
      <dl className="skills">
        {skills.map((g) => (
          <div key={g.label}>
            <dt>{g.label}</dt>
            <dd>{g.items.map((i) => <span key={i}>{i}</span>)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
