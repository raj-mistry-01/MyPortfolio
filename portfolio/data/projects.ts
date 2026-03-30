import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "Event-Driven-Ledger",
    description: "Event Sourcing with PostgreSQL",
    technologies: ["PostgreSQL" , "Redis" , "Java" , "Spring Boot" , "Kafka" , "Docker"],
    githubUrl: "https://github.com/raj-mistry-01/Event-Driven-Ledger/tree/working-branch",
    // liveUrl: "https://ecommerce-demo.vercel.app",
    image : "/images/eda_.jpeg"
  },
  {
    id: "2",
    title: "PipeTest",
    description: "A System Testing Tool for Developers , Pull Request validation using GitLab CI/CD Pipeline.",
    technologies: ["Flask" , "GitLab CI/CD" , "Selenium" , "Gemini Api" , "React" , "MongoDB" , "Node JS" , "PowerShell Scripting"],
    githubUrl: "https://github.com/raj-mistry-01/PipeTest-Frontend",
    // liveUrl: "https://ecommerce-demo.vercel.app",
    image : "/images/Stest.png"
  },
  {
    id: "3",
    title: "Now Ev",
    description: "Eletronic Vehicle Rental Management , CRM platform for company , E-Kyc And Secure Payment Gateway.",
    technologies: ["Flutter" , "MongoDB" , "OpenCV" , "Flask" , "NodeJS" , "CrossPlatform"],
    githubUrl: "https://github.com/raj-mistry-01/Now-Ev",
    // liveUrl: "https://task-manager-demo.vercel.app",
    image:"/images/nowev.png"
  },
  {
    id: "4",
    title: "Environmental Assessment",
    description: "Environmental Effect Measurement Due To Construction  , Comprehensive report generation demonstaring effective solution",
    technologies: ["Machine Learning" , "React" , "Flask" , "GoogleEarthEngine" , "Tailwind"],
    githubUrl: "https://github.com/raj-mistry-01/Environmental-Impact-Assessment",
    image : "/images/Nasa.jpeg"
  },
  {
    id: "5",
    title: "FinTaxAi",
    description: "Financial Assistant , Daily transaction management , Chatbot for help , Automated tax Payment Report generation.",
    technologies: ["Flask" , "NodeJS" , "MongoDB" , "React" , "Tailwind" , "OCR" , "Gemini"],
    githubUrl: "https://github.com/raj-mistry-01/FinTaxAI",
    liveUrl: "https://fin-tax-mu.vercel.app/",
    image : "/images/FinTaxAi.jpeg"
  },
  {
    id: "6",
    title: "iNoteBook",
    description: "Digital platform for notes , pdf supported for download.",
    technologies: ["Flask", "NodeJS" , "JWT" , "React"],
    githubUrl: "https://github.com/raj-mistry-01/React-projects-for-beginners/tree/main/inotebook",
    liveUrl: "https://inote-pied.vercel.app/",
    image : "/images/in2.png"
  },
]
