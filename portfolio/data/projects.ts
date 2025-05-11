import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "PipeTest",
    description: "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout.",
    technologies: ["Flask" , "GitLab CI/CD" , "Selenium" , "Gemini Api" , "React" , "MongoDB" , "Node JS" , "PowerShell Scripting"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image : "/images/Stest.png"
  },
  {
    id: "2",
    title: "Now Ev",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["Flutter" , "MongoDB" , "OpenCV" , "Flask" , "NodeJS" , "CrossPlatform"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    id: "3",
    title: "Environmental Assessment",
    description:
      "A weather dashboard that displays current conditions and forecasts for multiple locations using a weather API.",
    technologies: ["Machine Learning" , "React" , "Flask" , "GoogleEarthEngine" , "Taillwind"],
    githubUrl: "https://github.com/username/weather-dashboard",
    image : "/images/Nasa.jpeg"
  },
  {
    id: "4",
    title: "FinTaxAi",
    description: "A dashboard for tracking and visualizing social media metrics across multiple platforms.",
    technologies: ["Flask" , "NodeJS" , "MongoDB" , "React" , "Tailwind" , "OCR" , "Gemini"],
    githubUrl: "https://github.com/username/social-analytics",
    liveUrl: "https://social-analytics-demo.vercel.app",
    image : "/images/FinTaxAi.jpeg"
  },
  {
    id: "5",
    title: "Weather App",
    description: "An application to track expenses, income, and financial goals with data visualization.",
    technologies: ["Java" , "Java Swing" , "Open MeteoApi" , "OpenJDK" , "Jar"],
    githubUrl: "https://github.com/username/finance-tracker",
    image : "/images/Weather.avif"
  },
  {
    id: "6",
    title: "iNoteBook",
    description:
      "A community-driven platform for sharing and discovering recipes with search and filtering capabilities.",
    technologies: ["Flask", "NodeJS" , "JWT" , "React"],
    githubUrl: "https://github.com/username/recipe-platform",
    liveUrl: "https://recipe-platform-demo.vercel.app",
    image : "/images/in2.png"
  },
]
