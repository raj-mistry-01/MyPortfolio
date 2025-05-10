"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/utils/formatDate"
import { cn } from "@/lib/utils"
import type { TimelineEvent } from "@/types"

interface TimelineItemProps {
  item: TimelineEvent
}

export default function TimelineItem({ item }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>

      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <Badge variant="outline" className="w-fit">
              {formatDate(item.startDate)}
              {item.endDate && ` - ${formatDate(item.endDate)}`}
            </Badge>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Badge>{item.role}</Badge>
          </div>

          <p className="text-muted-foreground mb-4">{item.description}</p>

          {item.certificateImage && (
            <div className="relative h-40 w-full rounded-md overflow-hidden">
              <Image
                src={item.certificateImage || "/placeholder.svg"}
                alt={`${item.title} Certificate`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
