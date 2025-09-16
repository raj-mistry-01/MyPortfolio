import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import type { CodingProfile } from "@/types"

interface CodingPlatformCardProps {
  profile: CodingProfile
}

export default function CodingPlatformCard({ profile }: CodingPlatformCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-border/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02]">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Link href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent className="relative p-6 flex items-center gap-5">
          {/* Logo container with enhanced styling */}
          <div className="relative h-16 w-16 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
            <div className="relative h-full w-full bg-background/80 rounded-xl p-2 border border-border/50 group-hover:border-primary/30 transition-all duration-300">
              <Image
                src={profile.logo || "/placeholder.svg?height=64&width=64"}
                alt={profile.platform}
                fill
                className="object-contain p-1"
              />
            </div>
          </div>

          <div className="flex-grow">
            {/* Header with external link icon */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {profile.platform}
              </h3>
              <div className="p-1.5 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-all duration-300">
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>

            {/* Rating with enhanced styling */}
            {profile.rating && (
              <div className="mb-3">
                <span className="text-sm text-muted-foreground">Rating: </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/20">
                  {profile.rating}
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              {profile.description}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export function CompetitiveCodingAchievement() {
  return (
    <div className="relative mt-8 mb-4">
      {/* Decorative line with gradient */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      {/* Achievement text with competitive accent */}
      <div className="relative flex justify-center">
        <div className="bg-background px-6 py-3 border border-primary/20 rounded-full shadow-lg">
          <div className="flex items-center gap-3">
            {/* Trophy/Achievement icon */}
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full border border-primary/30">
              <span className="text-primary font-bold text-sm">🏆</span>
            </div>
            
            {/* Achievement text */}
            <p className="text-sm font-medium">
              <span className="text-muted-foreground">In competitive coding I have solved </span>
              <span className="text-primary font-bold text-base">2000+</span>
              <span className="text-muted-foreground"> algorithmic problems across various coding platforms.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Optional: Subtle glow effect */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-80 h-20 bg-primary/5 blur-xl rounded-full" />
      </div>
    </div>
  )
}