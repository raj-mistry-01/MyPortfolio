import TimelineItem from "@/components/TimelineItem"
import { timeline } from "@/data/timeline"

export default function ParticipationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Participation Timeline</h1>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-8 space-y-12">
          {timeline.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
