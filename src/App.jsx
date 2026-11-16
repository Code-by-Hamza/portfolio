import { useEffect } from "react";
import Sidebar from "./components/layout/Sidebar.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
    // Soft light that follows the cursor (mouse devices only).
    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
            return;
        const root = document.documentElement;
        const move = (e) => {
            root.style.setProperty("--mx", `${e.clientX}px`);
            root.style.setProperty("--my", `${e.clientY}px`);
        };
        window.addEventListener("pointermove", move, { passive: true });
        return () => window.removeEventListener("pointermove", move);
    }, []);

    return (
        <>
            <a className="skip-link" href="#about">
                Skip to content
            </a>
            <div className="spotlight" aria-hidden="true" />
            <div className="layout">
                <Sidebar />
                <main className="content">
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <p className="footnote">
                        Built with React and Vite, and a healthy dose of
                        caffeine.
                    </p>
                </main>
            </div>
        </>
    );
}
