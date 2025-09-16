import CodingPlatformCard from "@/components/CodingPlatformCard"
import { CompetitiveCodingAchievement } from "@/components/CodingPlatformCard"
import { codingProfiles } from "@/data/codingProfiles"

export default function CompetitivePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Competitive Coding</h1>
      <CompetitiveCodingAchievement></CompetitiveCodingAchievement>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {codingProfiles.map((profile) => (
          <CodingPlatformCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  )
}
