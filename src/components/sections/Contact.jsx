import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { profile } from "../../data/site.js";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's talk."
          description="Feedback, advice or an opportunity to learn on a real team? I'd like to hear from you."
        />
        <div className="contact-actions">
          {profile.email && <Button href={`mailto:${profile.email}`}>Email me</Button>}
          <Button variant={profile.email ? "secondary" : "primary"} href={profile.github} external>
            GitHub ↗
          </Button>
          {profile.linkedin && <Button variant="secondary" href={profile.linkedin} external>LinkedIn ↗</Button>}
          {profile.resume && <Button variant="secondary" href={profile.resume} external>Resume ↗</Button>}
        </div>
      </div>
    </section>
  );
}
