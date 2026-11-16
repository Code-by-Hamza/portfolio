import { profile } from "../../data/site.js";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {year} {profile.name}. Built with React and Vite.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
      </div>
    </footer>
  );
}
