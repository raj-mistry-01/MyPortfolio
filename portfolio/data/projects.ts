import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "PipeTest",
    description: "A System Testing Tool for Developers , Pull Request validation using GitLab CI/CD Pipeline.",
    technologies: ["Flask" , "GitLab CI/CD" , "Selenium" , "Gemini Api" , "React" , "MongoDB" , "Node JS" , "PowerShell Scripting"],
    githubUrl: "https://github.com/username/ecommerce",
    // liveUrl: "https://ecommerce-demo.vercel.app",
    image : "/images/Stest.png"
  },
  {
    id: "2",
    title: "Now Ev",
    description: "Eletronic Vehicle Rental Management , CRM platform for company , E-Kyc And Secure Payment Gateway",
    technologies: ["Flutter" , "MongoDB" , "OpenCV" , "Flask" , "NodeJS" , "CrossPlatform"],
    githubUrl: "https://github.com/username/task-manager",
    // liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    id: "3",
    title: "Environmental Assessment",
    description: "Environmental Effect Measurement Due To Construction  , Comprehensive report generation demonstaring effective solution",
    technologies: ["Machine Learning" , "React" , "Flask" , "GoogleEarthEngine" , "Taillwind"],
    githubUrl: "https://github.com/username/weather-dashboard",
    image : "/images/Nasa.jpeg"
  },
  {
    id: "4",
    title: "FinTaxAi",
    description: "Financial Assistant , Daily transaction management , Chatbot for help , Tax Payment Report automated generation.",
    technologies: ["Flask" , "NodeJS" , "MongoDB" , "React" , "Tailwind" , "OCR" , "Gemini"],
    githubUrl: "https://github.com/username/social-analytics",
    // liveUrl: "https://social-analytics-demo.vercel.app",
    image : "/images/FinTaxAi.jpeg"
  },
  {
    id: "5",
    title: "Weather App",
    description: "Desktop application , accurate weather , history of searched location , dynamic UI according weather condition.",
    technologies: ["Java" , "Java Swing" , "Open MeteoApi" , "OpenJDK" , "Jar"],
    githubUrl: "https://github.com/username/finance-tracker",
    image : "/images/Weather.avif"
  },
  {
    id: "6",
    title: "iNoteBook",
    description: "Digital platform for notes , pdf supported for download",
    technologies: ["Flask", "NodeJS" , "JWT" , "React"],
    githubUrl: "https://github.com/username/recipe-platform",
    // liveUrl: "https://recipe-platform-demo.vercel.app",
    image : "/images/in2.png"
  },
]
