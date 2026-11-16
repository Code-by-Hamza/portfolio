import Button from '../ui/Button.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Product designer & frontend developer</span>
          <h1>Building thoughtful digital experiences for brands and people.</h1>
          <p>
            I design and build polished interfaces that help teams launch faster, communicate more clearly,
            and deliver memorable user journeys.
          </p>

          <div className="hero__actions">
            <Button href="#projects">View work</Button>
            <Button variant="secondary" href="#contact">
              Let&apos;s talk
            </Button>
          </div>
        </div>

        <div className="hero__panel" aria-label="Profile summary panel">
          <div className="profile-card">
            <div className="profile-card__avatar">H</div>
            <div>
              <strong>Hamza Khan</strong>
              <span>Available for freelance work</span>
            </div>
          </div>

          <div className="stat-grid">
            <div>
              <strong>6+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>24</strong>
              <span>Projects shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
