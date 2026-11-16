import SectionHeading from "../ui/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="About" title="Learning in public, building for real." />
        <div className="bento">
          <div className="card span-4">
            <span className="card__label">Who I am</span>
            <p className="about-lead">
              I'm a frontend and mobile developer. I like turning an idea into something people can
              tap, scroll and use, and I care about the details that make an interface feel right.
            </p>
          </div>
          <div className="card span-2">
            <span className="card__label">Direction</span>
            <ul className="focus-list">
              <li>Frontend development</li>
              <li>Mobile apps</li>
              <li>APIs</li>
              <li>Software engineering</li>
            </ul>
          </div>
          <div className="card span-6">
            <span className="card__label">Where I am</span>
            <p>
              I'm still developing my skills, so I learn by building. This site is part of that:
              every project listed here is something I made, and nothing is padded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
