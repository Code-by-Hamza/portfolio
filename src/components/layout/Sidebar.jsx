import { useEffect, useState } from "react";
import { profile, sections } from "../../data/site.js";

const icons = {
    github: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
    linkedin:
        "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
    mail: "M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5L12 11.9 19.8 6H4.2Zm15.8 2.5-8 6a1 1 0 0 1-1.2 0L4 8.5V18h16V8.5Z",
};

function Icon({ name, label, href, external = true }) {
    return (
        <a
            href={href}
            aria-label={label}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={icons[name]} />
            </svg>
        </a>
    );
}

export default function Sidebar() {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) => e.isIntersecting && setActive(e.target.id),
                ),
            { rootMargin: "-40% 0px -55% 0px" },
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);

    const [first, ...rest] = profile.name.split(" ");

    return (
        <header className="sidebar">
            <div>
                <h1 className="name">
                    {first}
                    <br />
                    <em>{rest.join(" ")}</em>
                </h1>
                <p className="role">{profile.title}</p>
                <p className="blurb">{profile.blurb}</p>
                <nav className="nav" aria-label="Sections">
                    <ul>
                        {sections.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    aria-current={
                                        active === s.id ? "true" : undefined
                                    }
                                >
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="social">
                <Icon name="github" label="GitHub" href={profile.github} />
                {profile.linkedin && (
                    <Icon
                        name="linkedin"
                        label="LinkedIn"
                        href={profile.linkedin}
                    />
                )}
                {profile.email && (
                    <Icon
                        name="mail"
                        label="Email"
                        href={`mailto:${profile.email}`}
                        external={false}
                    />
                )}
            </div>
        </header>
    );
}
