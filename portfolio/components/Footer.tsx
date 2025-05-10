import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-sm z-10">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
