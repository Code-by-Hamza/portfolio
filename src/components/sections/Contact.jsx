import Section from "./Section.jsx";
import { profile } from "../../data/site.js";

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function Contact() {
    return (
        <Section id="contact" index={4} label="Contact">
            <p className="contact__lead">
                If you want to talk about a role, a project, or just say hello, <a href={`mailto:${profile.email}`}>email me</a>.
            </p>
            <div className="contact__links">
                <a href={profile.github} {...ext}>
                    GitHub ↗
                </a>
                {profile.linkedin && (
                    <a href={profile.linkedin} {...ext}>
                        LinkedIn ↗
                    </a>
                )}
                {profile.resume && (
                    <a href={profile.resume} {...ext}>
                        Resume ↗
                    </a>
                )}
            </div>
        </Section>
    );
}
