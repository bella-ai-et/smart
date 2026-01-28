import type { Testimonial } from '@/types'
import { Images } from '@/lib/assets'

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Al-Mansouri",
    role: "Managing Director",
    company: "Al-Mansouri Trading LLC",
    content: "The team made our business setup process incredibly smooth and efficient. What we expected to take weeks was completed in just 5 days. Their expertise in UAE business regulations and attention to documentation detail is exceptional.",
    rating: 5,
    avatar: {
      src: Images.testimonials.ahmed,
      alt: "Ahmed Al-Mansouri, Managing Director of Al-Mansouri Trading LLC",
      width: 80,
      height: 80
    },
    project: {
      name: "Mainland Business Setup",
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
      src: Images.testimonials.priya,
      alt: "Priya Sharma, Founder of Gulf Tech Solutions",
      width: 80,
      height: 80
    },
    project: {
      name: "Free Zone Business Setup",
      href: "/portfolio/gulf-tech-setup",
      description: "Complete free zone business setup with multiple visas"
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
    content: "Their comprehensive business setup services helped us establish our partnership in record time. From business setup to trade license and multiple employment visas, everything was handled professionally. They truly understand the UAE business landscape.",
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
    content: "They handled our fleet registration and driver visas efficiently. Managing the paperwork for over 50 drivers used to be a nightmare, but their PRO team took care of everything seamlessly.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/james.jpg",
      alt: "James Mitchell, Operations Manager at Logistics Pro",
      width: 80,
      height: 80
    },
    project: {
      name: "Logistics Licensing & Visas",
      href: "/portfolio/logistics-pro-setup"
    },
    featured: false
  },
  {
    id: "7",
    name: "Amanda Foster",
    role: "Executive Director",
    company: "NonProfit Foundation",
    content: "Setting up our foundation's legal structure was complex, but they made it simple. They guided us through the specific regulations for non-profit entities in the UAE with patience and expertise.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/amanda.jpg",
      alt: "Amanda Foster, Executive Director at NonProfit Foundation",
      width: 80,
      height: 80
    },
    project: {
      name: "Foundation Legal Structure",
      href: "/portfolio/nonprofit-setup"
    },
    featured: false
  },
  {
    id: "8",
    name: "Robert Martinez",
    role: "Restaurant Owner",
    company: "Bella Vista Restaurant",
    content: "Getting all the approvals for our restaurant, from food safety to trade license, was handled perfectly. They knew exactly which departments to approach and in what order to get us open on time.",
    rating: 5,
    avatar: {
      src: "/images/testimonials/robert.jpg",
      alt: "Robert Martinez, Owner of Bella Vista Restaurant",
      width: 80,
      height: 80
    },
    project: {
      name: "Restaurant Licensing",
      href: "/portfolio/bella-vista-setup"
    },
    featured: false
  }
]

export const featuredTestimonials = testimonials.filter(t => t.featured)
