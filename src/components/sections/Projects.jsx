import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects designed to make products easier to trust, use, and love."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
