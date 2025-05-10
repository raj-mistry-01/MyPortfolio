import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/utils/formatDate"
import type { Blog } from "@/types"

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{formatDate(blog.date)}</div>

        <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link
          href={blog.url}
          className="text-primary hover:underline inline-flex items-center gap-1 text-sm font-medium"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  )
}
