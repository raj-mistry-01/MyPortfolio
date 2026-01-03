import ProjectCard from "@/components/ProjectCard"
import BlogCard from "@/components/BlogCard"
import { projects } from "@/data/projects"
import { blogs } from "@/data/blogs"

export default function DevPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Development / Projects</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* <section> */}
        {/* <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Blog Posts</h2> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          {/* Soon ... */}
          {/* {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))} */}
        {/* </div> */}
      {/* </section> */}
    </div>
  )
}
