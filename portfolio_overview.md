# Kavindu Hewage — Premium Developer Portfolio

A modern, responsive, high-performance personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🎨 Visual Preview

![Kavindu Hewage — Developer Portrait](C:/Users/janak/.gemini/antigravity-ide/brain/ac077d4f-ef6d-4c36-9e68-20b01b8e1774/developer_hero_portrait_1792516470360.jpg)

![E-Commerce Web Application Project Preview](C:/Users/janak/.gemini/antigravity-ide/brain/ac077d4f-ef6d-4c36-9e68-20b01b8e1774/ecommerce_project_preview_1792517308521.jpg)

---

## 🚀 Live Development Server
The development server is actively running in the background at:
- **Local URL**: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

---

## 📁 Project Architecture & Components

```
f:/Portfolio/
├── public/
│   ├── assets/
│   │   ├── kavindu-portrait.jpg       # Cinematic developer portrait
│   │   ├── project-ecommerce.jpg      # E-commerce store preview
│   │   ├── project-portfolio.svg      # Vector portfolio mockup
│   │   └── project-tasks.svg          # Vector Kanban board mockup
│   └── favicon.svg                    # Custom KH monogram gradient icon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Sticky navigation with glassmorphism & mobile drawer
│   │   ├── Hero.tsx                   # Main headline, gradient highlights, availability badge
│   │   ├── About.tsx                  # "A Little About Me" & 3 core philosophy cards
│   │   ├── Skills.tsx                 # Categorized skills with dynamic filter tabs
│   │   ├── Projects.tsx               # Featured project cards with live & demo badges
│   │   ├── ProjectModal.tsx           # Interactive project detail inspection modal
│   │   ├── Experience.tsx             # Authentic learning journey & milestone timeline
│   │   ├── Contact.tsx                # Validated contact form, direct email & copy action
│   │   ├── Footer.tsx                 # Auto-updating copyright, back-to-top button
│   │   ├── CVModal.tsx                # Printable/exportable resume viewer modal
│   │   └── SocialIcons.tsx            # Pixel-perfect SVG brand icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.ts           # Centralized data store for instant customization
│   ├── App.tsx                        # Main application layout & active section tracker
│   ├── index.css                      # Tailwind v4 imports, dark palette tokens & glow utilities
│   └── main.tsx                       # React 19 root entrypoint
├── index.html                         # SEO metadata, Open Graph tags & Google Fonts (Inter)
├── vite.config.ts                     # Vite + Tailwind CSS v4 configuration
└── tsconfig.json                      # Strict TypeScript compiler configuration
```

---

## 🛠️ How to Customize Your Information

All personal details, skills, projects, and milestones are consolidated in **[`src/data/portfolioData.ts`](file:///f:/Portfolio/src/data/portfolioData.ts)**:

```typescript
// Example: Updating personal info or adding a new project
export const personalInfo = {
  name: "Kavindu Hewage",
  role: "Aspiring Full-Stack Developer",
  email: "janakakavindu15@gmail.com",
  github: "https://github.com/Janaka15",
  linkedin: "https://www.linkedin.com/in/janaka-kavindu-956669284",
  location: "Sri Lanka",
  availability: "Open to Opportunities"
};
```

---

## 🌟 Key Features Implemented

1. **Brand Identity**:
   - Monogram logo (`KH`) with blue-violet gradient lighting.
   - Availability badge with live pulsing emerald status indicator.
2. **Hero Section**:
   - Large bold typography: *"Building Digital Experiences That Matter."*
   - Interactive 3D portrait card with floating technology chips (`React + TS`, `Node.js + APIs`).
   - "Explore My Work" smooth scrolling & "Download CV" interactive modal.
3. **About Me**:
   - 3 interactive cards: *Always Learning*, *Problem Solver*, *Building for the Web*.
   - Core development principles grid.
4. **Skills & Technologies**:
   - Grouped into Frontend, Backend, Database, and Tools & Workflow.
   - Category filter tabs with smooth state transitions.
5. **Featured Projects**:
   - Cards with realistic mockups, tech badges, repository links, and live demo triggers.
   - Interactive Project Modal for inspecting architecture and feature lists.
6. **Learning Journey Timeline**:
   - Clean timeline illustrating real learning milestones and upcoming goals without fabricated claims.
7. **Contact Section**:
   - Validated form (Name, Email, Subject, Message) with clear feedback.
   - 1-click clipboard email copy with live confirmation toast.
8. **Interactive CV Modal**:
   - Formatted resume summary with print/PDF export trigger.
