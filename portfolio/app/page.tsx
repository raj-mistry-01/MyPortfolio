import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import TypewriterEffect from "@/components/TypewriterEffect"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/10">
          <Image
            src="/placeholder.svg?height=192&width=192"
            alt="Profile Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I&apos;m <span className="text-primary">John Doe</span>
        </h1>

        <div className="h-8 mb-6">
          <TypewriterEffect
            words={["Learning.", "Building.", "Iterating."]}
            className="text-xl md:text-2xl text-muted-foreground"
          />
        </div>

        <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
          A second-year CS student who&apos;s deeply passionate about building projects, exploring computer science, and
          continuously growing as a developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button asChild className="gap-2">
            <Link href="/api/download-resume">
              <Download size={18} />
              Download Resume
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link href="/dev">
              Explore My Work
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <blockquote className="italic text-muted-foreground border-l-4 border-primary/30 pl-4 max-w-lg">
          "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't
          settle."
        </blockquote>
      </div>
    </div>
  )
}
