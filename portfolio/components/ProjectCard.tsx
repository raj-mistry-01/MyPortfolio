import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.image || "/placeholder.svg?height=192&width=384"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0 mt-auto">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
            <Github size={16} />
            Code
          </Link>
        </Button>

        {project.liveUrl && (
          <Button size="sm" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
              <ExternalLink size={16} />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
