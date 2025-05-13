import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin, Twitter, Mail, Code, Award, Calendar  , X} from "lucide-react"
import TypewriterEffect from "@/components/TypewriterEffect"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative overflow-hidden py-20 md:py-28">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 dark:from-primary/20 dark:to-background z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - Text and CTA */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4 animate-fade-in">
                  Computer Science Student & Developer
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Hi, I&apos;m <span className="text-primary">Raj Makwana</span>
                </h1>
                <div className="h-10 mt-4">
                  <TypewriterEffect
                    words={["Learning.", "Building.", "Iterating."]}
                    className="text-2xl md:text-3xl text-muted-foreground"
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                A second-year CS student who&apos;s deeply passionate about Complex Logic Design
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="gap-2 rounded-full">
                  <Link href="/api/download-resume">
                    <Download size={18} />
                    Download Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="gap-2 rounded-full">
                  <Link href="/dev">
                    Explore My Work
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/raj-mistry-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                    <Github size={20} />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/raj-makwana-9b881528a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                    <Linkedin size={20} />
                  </Button>
                </Link>
                <Link href="https://x.com/raj_mistry01" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                    <Twitter size={20} />
                  </Button>
                </Link>
                <Link href="mailto:makwanaraj782@gmail.com" aria-label="Email">
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                    <Mail size={20} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image with Decorative Elements */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-primary/10 animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow delay-300"></div>

                {/* Profile image with glow effect */}
                <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                  <Image
                    src="/images/profilephoto.jpg?height=320&width=320"
                    alt="Profile Avatar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground mb-4">Explore my projects and coding journey</p>
              <Button variant="ghost" asChild className="mt-auto">
                <Link href="/dev">View Projects</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Coding</h3>
              <p className="text-muted-foreground mb-4">Check out my coding profiles and achievements</p>
              <Button variant="ghost" asChild className="mt-auto">
                <Link href="/competitive">View Profiles</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timeline</h3>
              <p className="text-muted-foreground mb-4">See my participation in events and programs</p>
              <Button variant="ghost" asChild className="mt-auto">
                <Link href="/participation">View Timeline</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="relative p-8">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-6xl text-primary">
              "
            </div>
            <p className="italic text-xl md:text-2xl text-muted-foreground">
              "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't
              settle."
            </p>
            <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 text-6xl text-primary">
              "
            </div>
            <footer className="mt-4 text-sm text-muted-foreground">— Steve Jobs</footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
