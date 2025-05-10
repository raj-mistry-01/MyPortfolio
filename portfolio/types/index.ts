export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
}

export interface Blog {
  id: string
  title: string
  excerpt: string
  date: string
  url: string
}

export interface CodingProfile {
  id: string
  platform: string
  profileUrl: string
  rating?: string
  description: string
  logo?: string
}

export interface TimelineEvent {
  id: string
  title: string
  role: string
  startDate: string
  endDate?: string
  description: string
  certificateImage?: string
}
