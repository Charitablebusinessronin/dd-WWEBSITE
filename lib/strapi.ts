interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiItem {
  id: number
  attributes: any
  createdAt: string
  updatedAt: string
}

class StrapiAPI {
  private baseUrl: string
  private apiToken?: string
  private isAvailable = true

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
    this.apiToken = process.env.STRAPI_API_TOKEN
  }

  private async fetchAPI(endpoint: string, options: RequestInit = {}) {
    if (!this.isAvailable) {
      throw new Error("Strapi is not available")
    }

    const url = `${this.baseUrl}/api${endpoint}`

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    }

    if (this.apiToken) {
      headers.Authorization = `Bearer ${this.apiToken}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        // Add timeout and other fetch options
        signal: AbortSignal.timeout(5000), // 5 second timeout
      })

      if (!response.ok) {
        if (response.status === 404) {
          this.isAvailable = false
        }
        throw new Error(`Strapi API error: ${response.status}`)
      }

      return response.json()
    } catch (error) {
      this.isAvailable = false
      console.warn(`Strapi API unavailable: ${error}`)
      throw error
    }
  }

  // Programs
  async getPrograms(): Promise<Program[]> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI("/programs?populate=*")
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    } catch (error) {
      console.warn("Failed to fetch programs from Strapi, using fallback data")
      return []
    }
  }

  async getProgram(id: string): Promise<Program | null> {
    try {
      const response: StrapiResponse<StrapiItem> = await this.fetchAPI(`/programs/${id}?populate=*`)
      return {
        id: response.data.id,
        ...response.data.attributes,
      }
    } catch (error) {
      console.warn(`Failed to fetch program ${id} from Strapi`)
      return null
    }
  }

  // Events
  async getEvents(): Promise<Event[]> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI("/events?populate=*&sort=date:asc")
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    } catch (error) {
      console.warn("Failed to fetch events from Strapi, using fallback data")
      return []
    }
  }

  async getEvent(slug: string): Promise<Event | null> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI(
        `/events?filters[slug][$eq]=${slug}&populate=*`,
      )
      if (response.data.length === 0) {
        return null
      }
      return {
        id: response.data[0].id,
        ...response.data[0].attributes,
      }
    } catch (error) {
      console.warn(`Failed to fetch event ${slug} from Strapi`)
      return null
    }
  }

  // Stories
  async getStories(): Promise<Story[]> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI("/stories?populate=*&sort=createdAt:desc")
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    } catch (error) {
      console.warn("Failed to fetch stories from Strapi, using fallback data")
      return []
    }
  }

  async getStory(slug: string): Promise<Story | null> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI(
        `/stories?filters[slug][$eq]=${slug}&populate=*`,
      )
      if (response.data.length === 0) {
        return null
      }
      return {
        id: response.data[0].id,
        ...response.data[0].attributes,
      }
    } catch (error) {
      console.warn(`Failed to fetch story ${slug} from Strapi`)
      return null
    }
  }

  // Pages
  async getPage(slug: string): Promise<Page | null> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI(`/pages?filters[slug][$eq]=${slug}&populate=*`)
      if (response.data.length === 0) {
        return null
      }
      return {
        id: response.data[0].id,
        ...response.data[0].attributes,
      }
    } catch (error) {
      console.warn(`Failed to fetch page ${slug} from Strapi`)
      return null
    }
  }

  // Hero Slides
  async getHeroSlides(): Promise<HeroSlide[]> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI("/hero-slides?populate=*&sort=order:asc")
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    } catch (error) {
      console.warn("Failed to fetch hero slides from Strapi, using fallback data")
      return []
    }
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI("/team-members?populate=*&sort=order:asc")
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    } catch (error) {
      console.warn("Failed to fetch team members from Strapi, using fallback data")
      return []
    }
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const response: StrapiResponse<StrapiItem[]> = await this.fetchAPI("/testimonials?populate=*")
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    } catch (error) {
      console.warn("Failed to fetch testimonials from Strapi, using fallback data")
      return []
    }
  }

  // Site Settings
  async getSiteSettings(): Promise<SiteSettings | null> {
    try {
      const response: StrapiResponse<StrapiItem> = await this.fetchAPI("/site-setting?populate=*")
      return {
        id: response.data.id,
        ...response.data.attributes,
      }
    } catch (error) {
      console.warn("Failed to fetch site settings from Strapi")
      return null
    }
  }

  // Health check
  async isHealthy(): Promise<boolean> {
    try {
      await fetch(`${this.baseUrl}/api`, {
        method: "HEAD",
        signal: AbortSignal.timeout(3000),
      })
      this.isAvailable = true
      return true
    } catch (error) {
      this.isAvailable = false
      return false
    }
  }
}

export const strapi = new StrapiAPI()

// Type definitions
export interface Program {
  id: number
  title: string
  slug: string
  description: string
  longDescription: string
  category: string
  image: StrapiImage
  schedule: string
  duration: string
  capacity: number
  enrolled: number
  price: number
  instructor: string
  level: string
  requirements: string
  materials: string
  outcomes: string[]
  featured: boolean
}

export interface Event {
  id: number
  title: string
  slug: string
  description: string
  longDescription: string
  image: StrapiImage
  date: string
  startTime: string
  endTime: string
  location: string
  capacity: number
  enrolled: number
  price: number
  featured: boolean
  registrationRequired: boolean
}

export interface Story {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: StrapiImage
  author: string
  category: string
  featured: boolean
  publishedAt: string
}

export interface Page {
  id: number
  title: string
  slug: string
  content: string
  seoTitle?: string
  seoDescription?: string
  publishedAt: string
}

export interface HeroSlide {
  id: number
  title: string
  description: string
  image: StrapiImage
  buttonText: string
  buttonLink: string
  order: number
}

export interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  image: StrapiImage
  order: number
}

export interface Testimonial {
  id: number
  name: string
  position?: string
  content: string
  image?: StrapiImage
  featured: boolean
}

export interface SiteSettings {
  id: number
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  address: string
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
}

export interface StrapiImage {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText?: string
      caption?: string
      width: number
      height: number
      formats?: any
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl?: string
      provider: string
      provider_metadata?: any
      createdAt: string
      updatedAt: string
    }
  } | null
}

// Helper function to get image URL
export function getStrapiImageUrl(image: StrapiImage | null | undefined): string {
  if (!image?.data?.attributes?.url) {
    return "/placeholder.svg"
  }

  const url = image.data.attributes.url

  // If URL is relative, prepend Strapi base URL
  if (url.startsWith("/")) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${url}`
  }

  return url
}

// Fallback data
export const fallbackData = {
  programs: [
    {
      id: 1,
      title: "Career Development",
      slug: "career-development",
      description: "Skills, resources, and mentorship for career advancement",
      longDescription:
        "Our Career Development program provides participants with the skills, resources, and mentorship they need to advance their careers and achieve their professional goals.",
      category: "Professional Development",
      image: { data: { attributes: { url: "/community-workshop.png" } } } as StrapiImage,
      schedule: "Weekdays 9AM-5PM",
      duration: "8 weeks",
      capacity: 20,
      enrolled: 15,
      price: 0,
      instructor: "Community Staff",
      level: "All Levels",
      requirements: "None",
      materials: "Provided",
      outcomes: ["Job placement assistance", "Resume building", "Interview skills"],
      featured: true,
    },
    {
      id: 2,
      title: "Health Education",
      slug: "health-education",
      description: "Promoting wellness through education and resources",
      longDescription:
        "Our Health Education program promotes wellness through education and resources for healthy living, addressing both physical and mental health needs in our community.",
      category: "Wellness",
      image: { data: { attributes: { url: "/community-family.png" } } } as StrapiImage,
      schedule: "Saturdays 10AM-12PM",
      duration: "6 weeks",
      capacity: 25,
      enrolled: 18,
      price: 0,
      instructor: "Health Professionals",
      level: "All Levels",
      requirements: "None",
      materials: "Provided",
      outcomes: ["Health awareness", "Wellness planning", "Resource connections"],
      featured: true,
    },
    {
      id: 3,
      title: "Community Events",
      slug: "community-events",
      description: "Bringing people together to celebrate and connect",
      longDescription:
        "Our Community Events bring people together to foster connections, celebrate diversity, and strengthen the bonds that make our community resilient and vibrant.",
      category: "Community",
      image: { data: { attributes: { url: "/community-youth.png" } } } as StrapiImage,
      schedule: "Various times",
      duration: "Ongoing",
      capacity: 100,
      enrolled: 75,
      price: 0,
      instructor: "Community Volunteers",
      level: "All Levels",
      requirements: "None",
      materials: "Provided",
      outcomes: ["Community connections", "Cultural celebration", "Social support"],
      featured: true,
    },
  ] as Program[],

  events: [
    {
      id: 1,
      title: "Career Fair",
      slug: "career-fair",
      description: "Connect with local employers and explore job opportunities in various industries.",
      longDescription:
        "Join us for our quarterly career fair where you can meet with local employers, learn about job opportunities, and network with professionals in your field.",
      image: { data: { attributes: { url: "/event-career-fair.png" } } } as StrapiImage,
      date: "2025-06-15",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      location: "Community Center Main Hall",
      capacity: 200,
      enrolled: 45,
      price: 0,
      featured: true,
      registrationRequired: true,
    },
    {
      id: 2,
      title: "Financial Literacy Workshop",
      slug: "financial-literacy-workshop",
      description: "Learn essential money management skills and strategies for building financial security.",
      longDescription:
        "This comprehensive workshop covers budgeting, saving, credit management, and investment basics to help you build a strong financial foundation.",
      image: { data: { attributes: { url: "/event-financial.png" } } } as StrapiImage,
      date: "2025-06-22",
      startTime: "6:00 PM",
      endTime: "8:00 PM",
      location: "Community Center Conference Room",
      capacity: 30,
      enrolled: 22,
      price: 0,
      featured: true,
      registrationRequired: true,
    },
    {
      id: 3,
      title: "Community Health Fair",
      slug: "community-health-fair",
      description: "Access free health screenings, resources, and information from local health providers.",
      longDescription:
        "Our annual health fair brings together local healthcare providers to offer free screenings, health education, and resources for community wellness.",
      image: { data: { attributes: { url: "/event-health-fair.png" } } } as StrapiImage,
      date: "2025-07-08",
      startTime: "11:00 AM",
      endTime: "3:00 PM",
      location: "Community Center Gymnasium",
      capacity: 300,
      enrolled: 125,
      price: 0,
      featured: true,
      registrationRequired: false,
    },
  ] as Event[],

  testimonials: [
    {
      id: 1,
      name: "Jasmine Williams",
      position: "Community Member",
      content:
        "The Difference Driven Community Center changed my life. Through their career development program, I gained the skills and confidence to pursue my dream job. The supportive community here truly empowers everyone to reach their full potential.",
      image: { data: { attributes: { url: "/community-leader.png" } } } as StrapiImage,
      featured: true,
    },
  ] as Testimonial[],

  heroSlides: [
    {
      id: 1,
      title: "Welcome to Difference Driven",
      description:
        "The Difference Driven Community Center is a vibrant hub where you can feel a sense of belonging and empowerment. Our engaging programs and activities are designed to build skills, foster connections, and create positive change in our community.",
      image: { data: { attributes: { url: "/community-youth.png" } } } as StrapiImage,
      buttonText: "Join Today!",
      buttonLink: "/membership/join",
      order: 1,
    },
    {
      id: 2,
      title: "Empowering Our Youth",
      description:
        "Our youth programs provide a safe, supportive environment where young people can develop leadership skills, explore their creativity, and build confidence through mentorship and hands-on learning experiences.",
      image: { data: { attributes: { url: "/youth-basketball.png" } } } as StrapiImage,
      buttonText: "Youth Programs",
      buttonLink: "/programs",
      order: 2,
    },
    {
      id: 3,
      title: "Community in Action",
      description:
        "From cultural celebrations to educational workshops, our events bring people together to share experiences, learn from one another, and strengthen the bonds that make our community resilient and vibrant.",
      image: { data: { attributes: { url: "/community-art-group.png" } } } as StrapiImage,
      buttonText: "View Calendar",
      buttonLink: "/events",
      order: 3,
    },
  ] as HeroSlide[],
}
