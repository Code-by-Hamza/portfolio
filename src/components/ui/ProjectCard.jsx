export default function ProjectCard({ project }) {
  const soon = project.status === "Coming soon";
  const cls = `card project-card${project.featured ? " project-card--featured" : ""}${soon ? " project-card--soon" : ""}`;
  return (
    <article className={cls}>
      <div className="project-card__top">
        <span className={`status${soon ? " status--soon" : ""}`}>{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="chips" aria-label="Technologies">
        {project.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      {(project.repo || project.link) && (
        <div className="project-card__links">
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live site ↗</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Source on GitHub ↗</a>}
        </div>
      )}
    </article>
  );
}
