import Section from "./Section.jsx";
import { projects } from "../../data/site.js";

export default function Projects() {
    return (
        <Section id="projects" index={3} label="Projects">
            <ul>
                {projects.map((p, i) => {
                    const url = p.link || p.repo;
                    return (
                        <li
                            key={p.title}
                            className={`project${p.status === "soon" ? " project--soon" : ""}`}
                        >
                            <span className="project__num" aria-hidden="true">
                                0{i + 1}
                            </span>
                            <h3>
                                {url ? (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {p.title}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                ) : (
                                    p.title
                                )}
                            </h3>
                            <div className="project__body">
                                <p>{p.description}</p>
                                <ul className="tags" aria-label="Technologies">
                                    {p.tags.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}
