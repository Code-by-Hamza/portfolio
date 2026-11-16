# My Portfolio

A minimal portfolio website built with React and Vite. The design uses a strong editorial layout with a sticky sidebar, clean typography, and a simple content-first structure.

## Live Website

- https://exampledomain.com

## Local Development

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the app:
   npm run dev

## Project Structure

- src/App.jsx — page layout and section order
- src/data/site.js — main content source for profile, sections, skills, and projects
- src/components/layout/Sidebar.jsx — left-side navigation and social links
- src/components/sections/ — section components for About, Skills, Projects, and Contact
- src/styles/variables.css — color, spacing, font, and theme variables
- src/styles/global.css — layout and styling rules
- public/resume.pdf — resume file

## Customize This Portfolio

If you want to reuse this project for your own profile, update these files first:

- src/data/site.js — name, title, bio, email, social links, skills, and project list
- public/resume.pdf — replace with your own resume
- src/styles/variables.css — change colors, typography, and spacing
- src/styles/global.css — adjust layout and visual details
- src/components/layout/Sidebar.jsx — update name, social icons, and navigation labels

Optional design tweaks:

- src/components/sections/About.jsx
- src/components/sections/Projects.jsx
- src/components/sections/Contact.jsx

## Tech Stack

- React
- Vite
- CSS
- Fontsource for typography
