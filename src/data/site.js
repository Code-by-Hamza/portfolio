// All portfolio content lives here. Edit this file to update the site.
// Empty strings / null mean "not provided yet" and the UI hides them.

export const profile = {
  name: "Hamza Akhlaq",
  title: "Frontend & Mobile Developer",
  headline: "I build interfaces for the web and for phones.",
  intro:
    "I'm a developer working with JavaScript, React and React Native. I'm early in my career and building real things to get better, one project at a time.",
  github: "https://github.com/Code-by-Hamza",
  linkedin: "https://www.linkedin.com/in/code-by-hamza",
  email: "code.by.hamzaa@gmail.com",
  resume: "/resume.pdf", // placeholder PDF in /public. Replace it with your real resume, same filename.
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  core: [
    { name: "JavaScript", note: "Day-to-day language" },
    { name: "React", note: "Component-based web UIs" },
    { name: "React Native", note: "Mobile apps for iOS and Android" },
  ],
  foundations: ["HTML", "CSS", "Git"],
  learning: ["APIs", "Software engineering fundamentals"],
};

// To add a project, copy an object below and fill it in.
// Set status to "Live" or "Experiment". "Coming soon" renders a dashed placeholder card.
// repo / link are optional; empty values hide the button.
export const projects = [
  {
    id: "portfolio",
    title: "This portfolio",
    status: "Live",
    description:
      "Designed and built from scratch with React, Vite and plain CSS. No UI libraries, just custom components and design tokens.",
    tags: ["React", "Vite", "CSS"],
    repo: "https://github.com/Code-by-Hamza/portfolio",
    link: "",
    featured: true,
  },
  {
    id: "next",
    title: "More projects on the way",
    status: "Coming soon",
    description:
      "I'm working on new projects with React and React Native. They'll show up here when they're ready.",
    tags: ["React", "React Native"],
    repo: "",
    link: "",
  },
];
