const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Main navigation">
                <a className="brand" href="#home" aria-label="Hamza home">
                    Hamza<span>.</span>
                </a>

                <div className="nav-links">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </div>

                <a
                    className="nav-cta"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume <span aria-hidden="true">↗</span>
                </a>
            </nav>
        </header>
    );
}
