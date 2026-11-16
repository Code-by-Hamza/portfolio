import { useEffect, useState } from "react";
import { navItems, profile } from "../../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navItems.map((i) => document.querySelector(i.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}>
          <span className="brand__mark" aria-hidden="true">HA</span>
          Hamza
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
        <div id="nav-links" className={`nav-links${open ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
