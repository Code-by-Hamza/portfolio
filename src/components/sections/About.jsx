import Section from "./Section.jsx";
import { about } from "../../data/site.js";

export default function About() {
    return (
        <Section id="about" index={1} label="About">
            <div className="prose">
                {about.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                ))}
            </div>
        </Section>
    );
}
