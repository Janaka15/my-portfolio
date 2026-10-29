export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  headline: {
    prefix: string;
    gradientWords: string;
    suffix: string;
  };
  shortIntro: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
  profileImage: string;
}

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  category: 'Full-Stack' | 'Frontend' | 'All';
  githubUrl: string;
  demoUrl: string;
  isExample: boolean;
  features: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  description: string;
  category: 'milestone' | 'learning' | 'future';
  highlightTechnologies: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Kavindu Hewage",
  initials: "KH",
  role: "Aspiring Full-Stack Developer",
  headline: {
    prefix: "Building",
    gradientWords: "Digital Experiences",
    suffix: "That Matter."
  },
  shortIntro: "I'm a passionate developer focused on building modern, responsive, and user-friendly web applications. I love learning new technologies and turning ideas into real-world digital experiences.",
  location: "Sri Lanka",
  email: "janakakavindu15@gmail.com",
  github: "https://github.com/Janaka15",
  linkedin: "https://www.linkedin.com/in/janaka-kavindu-956669284",
  availability: "Open to Opportunities",
  profileImage: "/assets/kavindu-portrait.jpg"
};

export const aboutCards: AboutCard[] = [
  {
    id: "always-learning",
    title: "Always Learning",
    description: "Driven by curiosity to explore modern web architectures, contemporary frontend libraries, and robust backend engineering.",
    icon: "BookOpen"
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Analytical mindset that thrives on deconstructing complex requirements into elegant, maintainable, and pragmatic code.",
    icon: "Lightbulb"
  },
  {
    id: "building-web",
    title: "Building for the Web",
    description: "Passionate about creating responsive, high-performance web applications with polished visual aesthetics and smooth UX.",
    icon: "Code"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Creating responsive, interactive interfaces with modern frameworks and styling libraries.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    category: "Backend",
    description: "Developing scalable server-side logic, routing architectures, and data services.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "Database",
    description: "Designing structured relational schemas and document data models.",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" }
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Utilizing modern developer toolsets for version control, design, and coding efficiency.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    shortDescription: "A modern, high-performance developer portfolio built with React, TypeScript, and Tailwind CSS showcasing design engineering and projects.",
    fullDescription: "A crafted digital home engineered with a modern dark theme, smooth micro-interactions, responsive navigation, glassmorphic cards, and dynamic showcases. Built following best practices in accessibility, SEO, and component architecture.",
    image: "/assets/project-portfolio.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Frontend",
    githubUrl: "https://github.com/Janaka15/portfolio",
    demoUrl: "#",
    isExample: false,
    features: [
      "Custom dark aesthetic with charcoal and violet/blue glow",
      "Fully responsive layout across mobile, tablet, and desktop",
      "Dynamic interactive project details and CV preview",
      "Interactive contact form with real-time feedback"
    ]
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Web Application",
    shortDescription: "A feature-rich online shopping web app featuring dynamic product filtering, cart drawer, and modern responsive design.",
    fullDescription: "A full-featured e-commerce storefront designed for seamless browsing and checkout. Includes category filtering, real-time cart calculations, responsive product showcases, and intuitive user feedback.",
    image: "/assets/project-ecommerce.jpg",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "Full-Stack",
    githubUrl: "https://github.com/Janaka15",
    demoUrl: "#",
    isExample: true,
    features: [
      "Interactive product catalog with category & price filtering",
      "Slide-over cart with live subtotal calculation",
      "RESTful API data integration for product management",
      "Mobile-first responsive layout with fast render speeds"
    ]
  },
  {
    id: "task-management-app",
    title: "Task Management Application",
    shortDescription: "A productivity and workflow tool with Kanban-style task organization, priority badges, and project tracking.",
    fullDescription: "A clean productivity web application designed to help individuals and teams organize work into intuitive pipelines. Features drag-and-drop workflow simulation, priority status tags, and progress metrics.",
    image: "/assets/project-tasks.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    category: "Frontend",
    githubUrl: "https://github.com/Janaka15",
    demoUrl: "#",
    isExample: true,
    features: [
      "Kanban board workflow columns (To Do, In Progress, Completed)",
      "Priority badges with color-coded status indicators",
      "Local storage data persistence for active task sessions",
      "Clean dark UI with accessibility focus states"
    ]
  }
];

export const learningJourney: JourneyMilestone[] = [
  {
    period: "Milestone 1",
    title: "Web Development Foundations",
    description: "Built a solid core understanding of semantic HTML5, modern CSS layouts (Flexbox, Grid), responsive principles, and core JavaScript fundamentals (DOM manipulation, asynchronous operations, ES6+).",
    category: "milestone",
    highlightTechnologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    period: "Milestone 2",
    title: "Frontend Engineering & Component Architecture",
    description: "Deepened expertise in building component-driven single-page applications using React and TypeScript. Adopted modern utility styling with Tailwind CSS and Vite for rapid development.",
    category: "milestone",
    highlightTechnologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    period: "Milestone 3",
    title: "Full-Stack & Backend Integration",
    description: "Expanded into server-side development with Node.js and Express.js, learning REST API design, database schemas with PostgreSQL & MongoDB, and full-stack application lifecycle.",
    category: "learning",
    highlightTechnologies: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"]
  },
  {
    period: "Future Goals",
    title: "Next.js & Production-Scale Architecture",
    description: "Currently exploring advanced Next.js App Router patterns, server components, cloud deployments, and CI/CD pipelines to build scalable, full-stack digital products.",
    category: "future",
    highlightTechnologies: ["Next.js", "Cloud Deployment", "CI/CD", "System Design"]
  }
];
