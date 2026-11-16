import SectionHeading from '../ui/SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="I blend strategy, interaction design, and frontend craft."
          description="I help founders and teams turn complex ideas into simple, elegant experiences that feel intuitive from the first click."
        />

        <div className="about-grid">
          <div className="about-card">
            <p>
              My work sits at the intersection of product thinking and modern frontend development. I enjoy
              translating business goals into interfaces that are clear, fast, and visually distinctive.
            </p>
          </div>
          <div className="about-card accent">
            <ul>
              <li>Product strategy and UX direction</li>
              <li>Design systems and visual design</li>
              <li>High-converting marketing and portfolio sites</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
