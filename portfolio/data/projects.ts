import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current conditions and forecasts for multiple locations using a weather API.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
    githubUrl: "https://github.com/username/weather-dashboard",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "A dashboard for tracking and visualizing social media metrics across multiple platforms.",
    technologies: ["Vue.js", "D3.js", "Firebase", "Social Media APIs"],
    githubUrl: "https://github.com/username/social-analytics",
    liveUrl: "https://social-analytics-demo.vercel.app",
  },
  {
    id: "5",
    title: "Personal Finance Tracker",
    description: "An application to track expenses, income, and financial goals with data visualization.",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    githubUrl: "https://github.com/username/finance-tracker",
  },
  {
    id: "6",
    title: "Recipe Sharing Platform",
    description:
      "A community-driven platform for sharing and discovering recipes with search and filtering capabilities.",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Cloudinary"],
    githubUrl: "https://github.com/username/recipe-platform",
    liveUrl: "https://recipe-platform-demo.vercel.app",
  },
]
