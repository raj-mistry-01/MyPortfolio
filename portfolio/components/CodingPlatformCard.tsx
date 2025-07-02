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
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={profile.logo || "/placeholder.svg?height=64&width=64"}
              alt={profile.platform}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{profile.platform}</h3>
              <ExternalLink size={16} className="text-muted-foreground" />
            </div>

            {profile.rating && (
              <div className="text-sm font-medium mt-1">
                Rating: <span className="text-primary">{profile.rating}</span>
              </div>
            )}

            <p className="text-sm text-muted-foreground mt-2">{profile.description}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
