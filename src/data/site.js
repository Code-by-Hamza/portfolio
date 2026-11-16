// All content lives here. Edit this file to update the site.
// Empty strings hide the matching link.

export const profile = {
    name: "Hamza Akhlaq",
    title: "Frontend & Mobile Developer",
    blurb: "I build things for the web and for phones, mostly with JavaScript, React and React Native.",
    email: "code.by.hamzaa@gmail.com",
    github: "https://github.com/Code-by-Hamza",
    linkedin: "https://www.linkedin.com/in/code-by-hamza",
    resume: "/resume.pdf", // Replace with your current resume, keeping the filename.
};

export const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export const about = [
    "I enjoy building user friendly software. I work mainly with JavaScript and React, creating clear, responsive interfaces and connecting them to real data through APIs.",
    "I'm currently strengthening my React skills and learning to build mobile apps with React Native. I care about understanding how things work, writing maintainable code, and turning ideas into useful products.",
];

export const skills = [
    { label: "Main", items: ["JavaScript", "React"] },
    { label: "Also", items: ["HTML", "CSS", "Git", "REST APIs"] },
    { label: "Learning", items: ["React Native"] },
];

// To add a project, copy an object and fill it in.
// repo / link are optional; empty values hide the link.
// status "soon" renders a muted placeholder row.
export const projects = [
    {
        title: "This portfolio",
        description:
            "Built from scratch with React, Vite and plain CSS. No UI libraries and no template.",
        tags: ["React", "Vite", "CSS"],
        repo: "https://github.com/Code-by-Hamza/portfolio",
        link: "",
    },
    {
        title: "Next project",
        description:
            "Something with React Native is cooking. It will be here when it works.",
        tags: ["React Native"],
        status: "soon",
    },
];
