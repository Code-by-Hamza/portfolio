import Button from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--cta">
      <div className="container contact-panel">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful, beautiful, and memorable."
          description="Available for product design, frontend development, and creative collaborations."
        />

        <div className="contact-actions">
          <a className="contact-link" href="mailto:hello@hamza.dev">
            hello@hamza.dev
          </a>
          <Button href="mailto:hello@hamza.dev">Start a project</Button>
        </div>
      </div>
    </section>
  )
}
