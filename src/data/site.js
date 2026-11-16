// All content lives here. Edit this file to update the site.
// Empty strings hide the matching link.

export const profile = {
  name: "Hamza Akhlaq",
  title: "Frontend & Mobile Developer",
  blurb: "I build things for the web and for phones, mostly with JavaScript, React and React Native.",
  email: "code.by.hamzaa@gmail.com",
  github: "https://github.com/Code-by-Hamza",
  linkedin: "https://www.linkedin.com/in/code-by-hamza",
  resume: "/resume.pdf", //todo: placeholder PDF in /public. Replace it, keep the filename.
};

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = [
  "I like building the part of software you actually touch. I work mostly in JavaScript and React, and I reach for React Native when something belongs on a phone instead of in a browser.",
  "I'm early in my career, and I'd rather be honest about that than dress it up. Right now I'm learning how APIs and the rest of the stack fit together, and I learn best by building small things and finishing them.",
];

export const skills = [
  { label: "Main", items: ["JavaScript", "React", "React Native"] },
  { label: "Also", items: ["HTML", "CSS", "Git", "APIs"] },
  { label: "Learning", items: ["Software engineering"] },
];

// To add a project, copy an object and fill it in.
// repo / link are optional; empty values hide the link.
// status "soon" renders a muted placeholder row.
export const projects = [
  {
    title: "This portfolio",
    description: "Built from scratch with React, Vite and plain CSS. No UI libraries and no template.",
    tags: ["React", "Vite", "CSS"],
    repo: "https://github.com/Code-by-Hamza/portfolio",
    link: "",
  },
  {
    title: "Next project",
    description: "Something with React Native is cooking. It will be here when it works.",
    tags: ["React Native"],
    status: "soon",
  },
];
