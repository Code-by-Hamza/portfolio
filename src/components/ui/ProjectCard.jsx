export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__visual" aria-hidden="true">
        <span>{project.title.slice(0, 2).toUpperCase()}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          {project.featured ? <span className="badge">Featured</span> : null}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a href={project.link}>View project</a>
          <a href={project.repo}>Source</a>
        </div>
      </div>
    </article>
  )
}
