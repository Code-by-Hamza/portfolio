import SectionHeading from '../ui/SectionHeading.jsx'
import { skillGroups } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and systems I use to turn ideas into product-ready experiences."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
