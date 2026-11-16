export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 400 400" role="img" aria-label="Abstract geometric artwork">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7c3aed" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e9ddff" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <circle className="hero-art__glow" cx="200" cy="200" r="190" fill="url(#glow)" />
      <g className="hero-art__ring" fill="none" stroke="#a78bfa" strokeOpacity="0.35">
        <circle cx="200" cy="200" r="170" strokeDasharray="2 10" strokeLinecap="round" />
        <circle cx="200" cy="30" r="5" fill="#a78bfa" stroke="none" />
      </g>
      <circle cx="200" cy="200" r="125" fill="none" stroke="#a78bfa" strokeOpacity="0.18" />
      <g className="hero-art__float">
        <path d="M200 90 L290 140 V260 L200 310 L110 260 V140 Z" fill="#110e1d" fillOpacity="0.85" stroke="url(#edge)" strokeWidth="1.5" />
        <path d="M200 90 L200 200 M110 140 L200 200 L290 140 M200 200 V310" fill="none" stroke="#a78bfa" strokeOpacity="0.5" />
        <path d="M200 90 L290 140 L200 200 L110 140 Z" fill="#a78bfa" fillOpacity="0.16" />
        <path d="M200 200 L290 140 V260 L200 310 Z" fill="#7c3aed" fillOpacity="0.2" />
      </g>
    </svg>
  );
}
