import Button from "../ui/Button.jsx";
import HeroArt from "./HeroArt.jsx";
import { profile } from "../../data/site.js";

export default function Hero() {
  return (
    <section id="home" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">{profile.title}</span>
          <h1 id="hero-title">
            Hi, I'm <em>{profile.name.split(" ")[0]}</em>.<br />I build for web &amp; mobile.
          </h1>
          <p>{profile.intro}</p>
          <div className="hero__actions">
            <Button href="#projects">See my work</Button>
            <Button variant="secondary" href="#contact">Get in touch</Button>
          </div>
        </div>
        <HeroArt />
      </div>
    </section>
  );
}
