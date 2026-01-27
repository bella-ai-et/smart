export interface SEO {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  ogTitle?: string
  ogDescription?: string
  twitterCard?: 'summary' | 'summary_large_image'
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export interface Hero {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  videoBackground?: {
    src: string
    type: string
    poster?: string
  }
  overlay?: {
    enabled: boolean
    opacity: number
    color?: string
  }
}

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  icon?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  features: string[]
  pricing: {
    startingFrom: number
    currency: string
    period: string
    displayFormat?: 'range' | 'starting'
  }
  cta: {
    text: string
    href: string
    variant?: 'primary' | 'secondary'
  }
  heroImage?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  gallery: Array<{
    src: string
    alt: string
    width?: number
    height?: number
  }>
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  duration?: string
  teamSize?: string
  technologies?: string[]
  caseStudy?: {
    enabled: boolean
    href: string
    count: number
  }
  seo?: SEO
}

export interface ServiceProcessStep {
  id?: string
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface DetailedService {
  id: string
  slug: string
  hero: {
    title: string
    subtitle: string
    backgroundImage: string
  }
  whyMatters: {
    title: string
    description: string
    image: string
  }
  howItWorks: {
    title: string
    steps: ServiceProcessStep[]
  }
  whyChooseUs: {
    title: string
    description: string
    image: string
    features: string[]
  }
  whoIsItFor: {
    title: string
    audiences: string[]
  }
  processOverview: {
    title: string
    steps: ServiceProcessStep[]
  }
  faqs: ServiceFAQ[]
  seo: SEO
}

export interface ServicePage {
  hero: Hero
  services: Service[]
  overview: {
    title: string
    description: string
    image?: {
      src: string
      alt: string
    }
    features?: Array<{
      title: string
      description: string
      icon?: string
    }>
  }
  process: {
    title: string
    subtitle?: string
    steps: Array<{
      title: string
      description: string
      order: number
      duration?: string
      deliverables?: string[]
    }>
    timeline?: {
      enabled: boolean
      title: string
      items: Array<{
        phase: string
        duration: string
        description: string
      }>
    }
  }
  seo?: SEO
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
  helpful?: {
    yes: number
    no: number
  }
  related?: string[]
  lastUpdated?: string
  author?: string
  tags?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  project?: {
    name: string
    href: string
    description?: string
  }
  featured: boolean
  verified?: boolean
  date?: string
  location?: string
  industry?: string
  videoTestimonial?: {
    enabled: boolean
    src: string
    thumbnail: string
    duration: string
  }
}

export interface CompanySetup {
  id: string
  slug: string
  menuName: string
  category: 'free-zone' | 'mainland' | 'offshore'
  hero: {
    title: string
    subtitle: string
    backgroundImage: string
  }
  whatIs: {
    title: string
    description: string
    image: string
  }
  cost: {
    title: string
    packages: Array<{
      name: string
      price: string
      features?: string[]
    }>
  }
  whySetup: {
    title: string
    cards: Array<{
      title: string
      description: string
    }>
    ctaText: string
    ctaHref: string
  }
  businessTypes: {
    title: string
    types: Array<{
      name: string
      description?: string
      icon?: string
    }>
  }
  whySmartZone: {
    title: string
    description: string
    image: string
    features: string[]
  }
  seo: SEO
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  description: string
  content: string
  client: {
    name: string
    industry: string
    website?: string
  }
  services: string[]
  technologies: string[]
  timeline: string
  teamSize: number
  results: {
    metrics: Array<{
      label: string
      value: string
      description?: string
    }>
  }
  heroImage: string
  gallery: string[]
  testimonial?: Testimonial
  publishedAt: string
  featured: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
  skills: string[]
  featured: boolean
}