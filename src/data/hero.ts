import type { Hero, SEO } from '@/types'
import { Images } from '@/lib/assets'

export const homePageSEO: SEO = {
  title: "Business Setup Services in UAE | JOAB SOLUTIONS",
  description: "Expert business consultancy in UAE offering business setup, trade licensing, visa processing, and PRO services. Start your business in UAE with our comprehensive corporate services.",
  keywords: [
    "business setup UAE",
    "business setup services",
    "trade license Dubai",
    "visa processing UAE",
    "PRO services UAE",
    "corporate consultancy",
    "business registration UAE"
  ],
  ogImage: Images.og.home,
  ogTitle: "Business Setup Services in UAE",
  ogDescription: "Expert business consultancy offering business setup, trade licensing, and visa processing services in UAE.",
  twitterCard: "summary_large_image",
  twitterTitle: "Business Setup Services in UAE",
  twitterDescription: "Expert business consultancy offering business setup, trade licensing, and visa processing services in UAE.",
  twitterImage: Images.og.home
}

export const heroContent: Hero = {
  title: "Start Your Business in UAE",
  subtitle: "Leading Corporate Services Consultancy",
  description: "We specialize in business setup, trade licensing, visa processing, and PRO services. Let our expert consultants guide you through establishing your business in the UAE market.",
  primaryCTA: {
    text: "Start Your Business Setup",
    href: "/contact"
  },
  secondaryCTA: {
    text: "View Our Services",
    href: "/services"
  },
  backgroundImage: {
    src: Images.hero.global,
    alt: "Dubai skyline with business professionals in meeting room",
    width: 1920,
    height: 1080
  },
  overlay: {
    enabled: true,
    opacity: 0.6,
    color: "#1a3a52"
  }
}

export const aboutPageSEO: SEO = {
  title: "About Our Business Consultancy | Leading UAE Corporate Services",
  description: "Leading business consultancy in UAE with expertise in business setup, trade licensing, visa processing, and PRO services for international entrepreneurs.",
  keywords: [
    "about business consultancy UAE",
    "corporate services team",
    "business consultants Dubai",
    "business setup experts",
    "UAE business setup professionals"
  ],
  ogImage: Images.og.about,
  ogTitle: "About Our Business Consultancy",
  ogDescription: "Leading business consultancy team with expertise in UAE business setup and corporate services."
}

export const aboutHero: Hero = {
  title: "Expert Business Consultants",
  subtitle: "Team Behind Your Business Success",
  description: "We're a team of experienced business consultants dedicated to helping entrepreneurs establish and grow their businesses in the UAE market with seamless business setup and corporate services.",
  primaryCTA: {
    text: "Meet Our Team",
    href: "/team"
  },
  secondaryCTA: {
    text: "Contact Us",
    href: "/contact"
  },
  backgroundImage: {
    src: Images.services.ajmanOverview,
    alt: "Business consultancy team in Dubai office with clients",
    width: 1920,
    height: 1080
  },
  overlay: {
    enabled: true,
    opacity: 0.6,
    color: "#1a3a52"
  }
}



export const contactPageSEO: SEO = {
  title: "Contact Us | JOAB SOLUTIONS",
  description: "Get in touch with our expert business consultants for business setup, trade licensing, and visa processing in UAE. Visit our Dubai office or contact us online.",
  keywords: [
    "contact business consultants UAE",
    "business setup office Dubai",
    "business setup contact",
    "business consultancy location",
    "Dubai trade license help"
  ],
  ogImage: "/images/og-contact.jpg",
  ogTitle: "Contact Our Business Setup Experts",
  ogDescription: "Reach out to our team for professional assistance with your UAE business setup requirements."
}

export const contactHero: Hero = {
  title: "Contact Us",
  subtitle: "Get In Touch With Us",
  description: "Have questions about setting up your business in the UAE? Our team of experts is ready to assist you with all your business setup and corporate service needs.",
  primaryCTA: {
    text: "Call Us Now",
    href: "tel:+971585417444"
  },
  backgroundImage: {
    src: "/images/contact-hero.jpg",
    alt: "Customer support representative talking on phone",
    width: 1920,
    height: 1080
  },
  overlay: {
    enabled: true,
    opacity: 0.6,
    color: "#1a3a52"
  }
}

export const portfolioPageSEO: SEO = {
  title: "Business Success Stories | UAE Business Setup Case Studies",
  description: "Explore our portfolio of successful business setups in UAE. Real stories of entrepreneurs who established their businesses with our consultancy.",
  keywords: [
    "business setup success stories",
    "UAE business setup case studies",
    "trade license examples",
    "business consultancy portfolio",
    "company registration examples"
  ],
  ogImage: "/images/og-portfolio.jpg",
  ogTitle: "Business Success Stories | UAE Business Setup",
  ogDescription: "Explore our portfolio of successful business setups in UAE."
}

export const portfolioHero: Hero = {
  title: "Success Stories",
  subtitle: "Business Formation Excellence",
  description: "Explore our portfolio of successful business setups in UAE. See how we've helped entrepreneurs establish their businesses across various sectors.",
  primaryCTA: {
    text: "Start Your Business Setup",
    href: "/contact"
  },
  secondaryCTA: {
    text: "Learn Our Process",
    href: "/process"
  },
  backgroundImage: {
    src: "/images/portfolio-hero.jpg",
    alt: "Successful business clients and company formation certificates",
    width: 1920,
    height: 1080
  },
  overlay: {
    enabled: true,
    opacity: 0.5,
    color: "#1a3a52"
  }
}
