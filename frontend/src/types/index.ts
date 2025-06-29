export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Course {
  icon: string
  title: string
  description: string
  duration: string
  level: string
  path: string
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  content: string
  author: {
    name: string
    title: string
  }
}

export interface FooterSection {
  title: string
  links?: { text: string; href: string }[]
  content?: string
} 