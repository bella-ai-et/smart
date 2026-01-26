import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Al-Mansouri",
    role: "Managing Director",
    company: "Al-Mansouri Trading LLC",
    content: "The team made our company formation process incredibly smooth and efficient. What we expected to take weeks was completed in just 5 days. Their expertise in UAE business regulations and attention to documentation detail is exceptional.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/ahmed.jpg",
      alt: "Ahmed Al-Mansouri, Managing Director of Al-Mansouri Trading LLC",
      width: 80,
      height: 80
    },
    project: {
      name: "Mainland Company Formation",
      href: "/portfolio/al-mansouri-formation",
      description: "Complete mainland company setup with commercial license"
    },
    featured: true,
    verified: true,
    date: "2024-01-15",
    location: "Dubai, UAE",
    industry: "Trading",
    videoTestimonial: {
      enabled: false,
      src: "",
      thumbnail: "",
      duration: ""
    }
  },
  {
    id: "2", 
    name: "Priya Sharma",
    role: "Founder",
    company: "Gulf Tech Solutions",
    content: "Setting up our business in Dubai free zone was made effortless by their expert consultants. They handled everything from visa processing to trade license applications. Their knowledge of free zone regulations saved us significant time and costs.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/priya.jpg",
      alt: "Priya Sharma, Founder of Gulf Tech Solutions",
      width: 80,
      height: 80
    },
    project: {
      name: "Free Zone Company Setup",
      href: "/portfolio/gulf-tech-setup",
      description: "Complete free zone company formation with multiple visas"
    },
    featured: true,
    verified: true,
    date: "2024-02-20",
    location: "Dubai, UAE",
    industry: "Technology",
    videoTestimonial: {
      enabled: true,
      src: "/videos/testimonials/priya-sharma.mp4",
      thumbnail: "/images/testimonials/priya-thumb.jpg",
      duration: "2:45"
    }
  },
  {
    id: "3",
    name: "Mohammed Hassan",
    role: "Operations Manager",
    company: "Emirates Logistics Group",
    content: "The PRO services provided have been invaluable for our business operations. They handle all our government transactions efficiently, saving our team countless hours. Their expertise in UAE government procedures is second to none.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/mohammed.jpg",
      alt: "Mohammed Hassan, Operations Manager at Emirates Logistics Group",
      width: 80,
      height: 80
    },
    project: {
      name: "PRO Services Retainer",
      href: "/portfolio/emirates-logistics-pro",
      description: "Comprehensive PRO services and government transaction management"
    },
    featured: false,
    verified: true,
    date: "2024-03-10",
    location: "Abu Dhabi, UAE",
    industry: "Logistics",
    videoTestimonial: {
      enabled: false,
      src: "",
      thumbnail: "",
      duration: ""
    }
  },
  {
    id: "4",
    name: "Fatima Al-Rashid",
    role: "CEO",
    company: "Rashid International FZE",
    content: "The investor visa service was exceptional. They guided us through the entire Golden Visa application process, ensuring all documentation was perfect. Our application was approved without any issues, thanks to their meticulous preparation.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/fatima.jpg",
      alt: "Fatima Al-Rashid, CEO of Rashid International FZE",
      width: 80,
      height: 80
    },
    project: {
      name: "Golden Visa Processing",
      href: "/portfolio/rashid-golden-visa",
      description: "Investor Golden Visa application and approval"
    },
    featured: false,
    verified: true,
    date: "2023-11-05",
    location: "Sharjah, UAE",
    industry: "Investment",
    videoTestimonial: {
      enabled: false,
      src: "",
      thumbnail: "",
      duration: ""
    }
  },
  {
    id: "5",
    name: "Khalid Abdullah",
    role: "Business Partner", 
    company: "Gulf Enterprises Partnership",
    content: "Their comprehensive business setup services helped us establish our partnership in record time. From company formation to trade license and multiple employment visas, everything was handled professionally. They truly understand the UAE business landscape.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/khalid.jpg",
      alt: "Khalid Abdullah, Business Partner at Gulf Enterprises Partnership",
      width: 80,
      height: 80
    },
    project: {
      name: "Partnership Company Setup",
      href: "/portfolio/gulf-enterprises-setup",
      description: "Complete partnership formation with multiple visas and trade license"
    },
    featured: true,
    verified: true,
    date: "2024-01-28",
    location: "Dubai, UAE",
    industry: "Business Services",
    videoTestimonial: {
      enabled: true,
      src: "/videos/testimonials/khalid-abdullah.mp4",
      thumbnail: "/images/testimonials/khalid-thumb.jpg",
      duration: "3:12"
    }
  },
  {
    id: "6",
    name: "James Mitchell",
    role: "Operations Manager",
    company: "Logistics Pro",
    content: "The internal dashboard they developed has streamlined our operations significantly. What used to take hours now takes minutes. Their solution has improved our efficiency and reduced operational costs by 40%.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/james.jpg",
      alt: "James Mitchell, Operations Manager at Logistics Pro",
      width: 80,
      height: 80
    },
    project: {
      name: "Logistics Pro Dashboard",
      href: "/portfolio/logistics-dashboard"
    },
    featured: false
  },
  {
    id: "7",
    name: "Amanda Foster",
    role: "Executive Director",
    company: "NonProfit Foundation",
    content: "As a nonprofit, we needed a website that could effectively communicate our mission and drive donations. They delivered a beautiful, functional website that helped us exceed our fundraising goals by 150% in the first quarter.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/amanda.jpg",
      alt: "Amanda Foster, Executive Director at NonProfit Foundation",
      width: 80,
      height: 80
    },
    project: {
      name: "NonProfit Foundation Website",
      href: "/portfolio/nonprofit-website"
    },
    featured: false
  },
  {
    id: "8",
    name: "Robert Martinez",
    role: "Restaurant Owner",
    company: "Bella Vista Restaurant",
    content: "The online ordering system and app they created has revolutionized our restaurant business. Our online orders have tripled, and customers love the intuitive interface. They understood the food service industry perfectly.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/robert.jpg",
      alt: "Robert Martinez, Restaurant Owner at Bella Vista Restaurant",
      width: 80,
      height: 80
    },
    project: {
      name: "Bella Vista Ordering System",
      href: "/portfolio/restaurant-ordering-system"
    },
    featured: false
  }
]

export const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured)

export const testimonialsByIndustry = {
  "Technology": testimonials.filter(t => ["TechStart Inc.", "FinTech Solutions", "Logistics Pro"].includes(t.company)),
  "Retail": testimonials.filter(t => ["Global Retail Co.", "Fashion Forward", "Bella Vista Restaurant"].includes(t.company)),
  "Creative": testimonials.filter(t => ["Creative Studio"].includes(t.company)),
  "NonProfit": testimonials.filter(t => ["NonProfit Foundation"].includes(t.company))
}