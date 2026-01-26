import type { ServicePage, Service } from '@/types'

export const services: Service[] = [
  {
    id: "company-formation",
    name: "Company Formation",
    slug: "company-formation",
    description: "Complete business setup solutions for establishing your company in UAE with expert guidance and documentation.",
    longDescription: "Our company formation services provide comprehensive business setup solutions for entrepreneurs and corporations looking to establish their presence in UAE. From initial consultation to final registration, we handle all aspects of company formation including legal documentation, licensing, and compliance requirements across all UAE free zones and mainland.",
    icon: {
      src: "/icons/company-formation.svg",
      alt: "Company formation icon",
      width: 24,
      height: 24
    },
    features: [
      "Company Registration & Documentation",
      "Legal Structure Advisory",
      "Shareholder Agreement Preparation",
      "Memorandum of Association (MOA)",
      "Trade Name Registration",
      "Initial Approval Certificate",
      "Bank Account Opening Assistance",
      "Post-Registration Support"
    ],
    pricing: {
      startingFrom: 8000,
      currency: "AED",
      period: "package",
      displayFormat: "starting"
    },
    cta: {
      text: "Start Company Formation",
      href: "/contact?service=company-formation",
      variant: "primary"
    },
    heroImage: {
      src: "/images/company-formation-hero.jpg",
      alt: "Company formation documentation and business setup process",
      width: 1200,
      height: 800
    },
    gallery: [
      {
        src: "/images/company-formation-1.jpg",
        alt: "Business registration certificates",
        width: 800,
        height: 600
      },
      {
        src: "/images/company-formation-2.jpg",
        alt: "Company formation consultation",
        width: 800,
        height: 600
      },
      {
        src: "/images/company-formation-3.jpg",
        alt: "Trade license documentation",
        width: 800,
        height: 600
      }
    ],
    tags: ["business-setup", "registration", "legal", "company"],
    difficulty: "intermediate",
    duration: "3-15 working days",
    teamSize: "2-4 consultants",
    technologies: ["DED Portal", "Free Zone Systems", "Legal Documentation Software"],
    caseStudy: {
      enabled: true,
      href: "/portfolio/company-formations",
      count: 250
    },
    seo: {
      title: "Company Formation UAE | Business Setup Services",
      description: "Complete company formation services for establishing your business in UAE. Expert guidance, documentation, and registration support.",
      keywords: [
        "company formation UAE",
        "business setup Dubai",
        "company registration UAE",
        "UAE company formation",
        "business registration"
      ],
      ogImage: "/images/og-company-formation.jpg",
      ogTitle: "Company Formation UAE",
      ogDescription: "Expert company formation services for establishing your business in UAE."
    }
  },
  {
    id: "trade-license",
    name: "Trade License",
    slug: "trade-license", 
    description: "Professional trade license services for all business activities in Dubai and across UAE free zones.",
    longDescription: "Our trade license services cover all aspects of business licensing in UAE, including commercial, professional, and industrial licenses. We assist with license selection, application processing, documentation, and renewal services across all UAE free zones and mainland jurisdictions to ensure your business operates legally and efficiently.",
    icon: {
      src: "/icons/trade-license.svg",
      alt: "Trade license icon",
      width: 24,
      height: 24
    },
    features: [
      "Commercial License Processing",
      "Professional License Services",
      "Industrial License Applications",
      "Free Zone License Setup",
      "Mainland License Processing",
      "License Renewal Services",
      "License Amendment Support",
      "License Cancellation Services"
    ],
    pricing: {
      startingFrom: 15000,
      currency: "AED", 
      period: "annually",
      displayFormat: "starting"
    },
    cta: {
      text: "Get Trade License",
      href: "/contact?service=trade-license",
      variant: "primary"
    },
    heroImage: {
      src: "/images/trade-license-hero.jpg",
      alt: "Trade license certificates and business permits",
      width: 1200,
      height: 800
    },
    gallery: [
      {
        src: "/images/trade-license-1.jpg",
        alt: "Commercial trade license",
        width: 800,
        height: 600
      },
      {
        src: "/images/trade-license-2.jpg",
        alt: "Free zone license processing",
        width: 800,
        height: 600
      },
      {
        src: "/images/trade-license-3.jpg",
        alt: "Business license documentation",
        width: 800,
        height: 600
      }
    ],
    tags: ["license", "permit", "commercial", "legal"],
    difficulty: "intermediate",
    duration: "5-10 working days",
    teamSize: "1-2 consultants",
    technologies: ["DED Portal", "Free Zone Systems", "E-Service Platforms"],
    caseStudy: {
      enabled: true,
      href: "/portfolio/trade-licenses",
      count: 180
    },
    seo: {
      title: "Trade License UAE | Business License Services",
      description: "Professional trade license services for all business activities in Dubai and across UAE free zones. Commercial, professional, and industrial licenses.",
      keywords: [
        "trade license UAE",
        "business license Dubai",
        "commercial license UAE",
        "free zone license",
        "trade license Dubai"
      ],
      ogImage: "/images/og-trade-license.jpg",
      ogTitle: "Trade License Services UAE",
      ogDescription: "Professional trade license services for all business activities in UAE."
    }
  },
  {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance.",
    longDescription: "We build robust, scalable web applications tailored to your business needs using the latest technologies and best practices.",
    icon: {
      src: "/icons/web-development.svg",
      alt: "Web development icon",
      width: 24,
      height: 24
    },
    features: [
      "Full-Stack Development",
      "API Development",
      "Database Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Third-Party Integrations",
      "Cloud Deployment",
      "Performance Optimization"
    ],
    pricing: {
      startingFrom: 8000,
      currency: "USD", 
      period: "project",
      displayFormat: "starting"
    },
    cta: {
      text: "Get Development Quote",
      href: "/contact?service=web-development",
      variant: "primary"
    },
    heroImage: {
      src: "/images/web-development-hero.jpg",
      alt: "Web development project showcase",
      width: 1200,
      height: 800
    },
    gallery: [
      {
        src: "/images/web-development-1.jpg",
        alt: "Custom web application dashboard",
        width: 800,
        height: 600
      },
      {
        src: "/images/web-development-2.jpg",
        alt: "E-commerce platform development",
        width: 800,
        height: 600
      },
      {
        src: "/images/web-development-3.jpg",
        alt: "API integration and development",
        width: 800,
        height: 600
      }
    ],
    tags: ["development", "full-stack", "API", "backend"],
    difficulty: "advanced",
    duration: "8-16 weeks",
    teamSize: "4-8 people",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    caseStudy: {
      enabled: true,
      href: "/portfolio/web-development-projects",
      count: 22
    },
    seo: {
      title: "Web Development Services | Custom Web Applications",
      description: "Custom web applications built with cutting-edge technologies for optimal performance. Full-stack development services.",
      keywords: [
        "web development",
        "custom web applications",
        "full-stack development",
        "API development",
        "web app development"
      ],
      ogImage: "/images/og-web-development.jpg",
      ogTitle: "Custom Web Development Services",
      ogDescription: "Robust, scalable web applications built with cutting-edge technologies."
    }
  },
  {
    id: "visa-processing",
    name: "Visa Processing",
    slug: "visa-processing",
    description: "Complete visa services for employment, investor, family, and residence permits in UAE.",
    longDescription: "Our visa processing services provide comprehensive support for all types of UAE visas including employment visas, investor visas, family residence permits, and dependent visas. We handle the entire process from initial application to final approval, ensuring compliance with UAE immigration regulations and requirements.",
    icon: {
      src: "/icons/visa-processing.svg",
      alt: "Visa processing icon",
      width: 24,
      height: 24
    },
    features: [
      "Employment Visa Processing",
      "Investor Visa Services",
      "Family Residence Visas",
      "Dependent Visa Applications",
      "Golden Visa Processing",
      "Visit Visa Extensions",
      "Medical Fitness Test Coordination",
      "Emirates ID Registration"
    ],
    pricing: {
      startingFrom: 3500,
      currency: "AED",
      period: "per visa",
      displayFormat: "starting"
    },
    cta: {
      text: "Start Visa Process",
      href: "/contact?service=visa-processing",
      variant: "primary"
    },
    heroImage: {
      src: "/images/visa-processing-hero.jpg",
      alt: "Visa processing and immigration services in UAE",
      width: 1200,
      height: 800
    },
    gallery: [
      {
        src: "/images/visa-processing-1.jpg",
        alt: "Employment visa processing",
        width: 800,
        height: 600
      },
      {
        src: "/images/visa-processing-2.jpg",
        alt: "Golden visa consultation",
        width: 800,
        height: 600
      },
      {
        src: "/images/visa-processing-3.jpg",
        alt: "Family residence visa services",
        width: 800,
        height: 600
      }
    ],
    tags: ["visa", "immigration", "residence", "permits"],
    difficulty: "intermediate",
    duration: "5-15 working days",
    teamSize: "1-2 consultants",
    technologies: ["GDRFA Portal", "ICA Systems", "Medical Test Booking"],
    caseStudy: {
      enabled: true,
      href: "/portfolio/visa-processing",
      count: 300
    },
    seo: {
      title: "Visa Processing UAE | Employment, Investor & Family Visas",
      description: "Complete visa services for employment, investor, family, and residence permits in UAE. Expert visa processing and immigration support.",
      keywords: [
        "visa processing UAE",
        "employment visa Dubai",
        "investor visa UAE",
        "family visa Dubai",
        "UAE immigration services"
      ],
      ogImage: "/images/og-visa-processing.jpg",
      ogTitle: "Visa Processing Services UAE",
      ogDescription: "Complete visa services for employment, investor, family, and residence permits in UAE."
    }
  },
  {
    id: "pro-services",
    name: "PRO Services",
    slug: "pro-services",
    description: "Comprehensive Public Relations Officer services for all your government transactions and documentation needs.",
    longDescription: "Our PRO services provide comprehensive support for all government transactions, documentation, and administrative requirements for businesses operating in UAE. From visa processing to document attestation and government liaison services, we ensure smooth operations and compliance with all UAE government regulations.",
    icon: {
      src: "/icons/pro-services.svg",
      alt: "PRO services icon",
      width: 24,
      height: 24
    },
    features: [
      "Government Transaction Processing",
      "Document Attestation Services",
      "Labor Card Applications",
      "Immigration Paperwork Processing",
      "Ministry of Economy Services",
      "Chamber of Commerce Documentation",
      "Municipality Services Support",
      "E-Service Portal Management"
    ],
    pricing: {
      startingFrom: 500,
      currency: "AED",
      period: "per transaction",
      displayFormat: "starting"
    },
    cta: {
      text: "Get PRO Services",
      href: "/contact?service=pro-services",
      variant: "secondary"
    },
    heroImage: {
      src: "/images/pro-services-hero.jpg",
      alt: "PRO services and government transaction processing",
      width: 1200,
      height: 800
    },
    gallery: [
      {
        src: "/images/pro-services-1.jpg",
        alt: "Government transaction processing",
        width: 800,
        height: 600
      },
      {
        src: "/images/pro-services-2.jpg",
        alt: "Document attestation services",
        width: 800,
        height: 600
      },
      {
        src: "/images/pro-services-3.jpg",
        alt: "Immigration paperwork processing",
        width: 800,
        height: 600
      }
    ],
    tags: ["PRO", "government", "documentation", "administrative"],
    difficulty: "beginner",
    duration: "1-3 working days",
    teamSize: "1 PRO officer",
    technologies: ["Government Portals", "E-Service Platforms", "Document Management"],
    caseStudy: {
      enabled: true,
      href: "/portfolio/pro-services",
      count: 500
    },
    seo: {
      title: "PRO Services UAE | Government Transactions & Documentation",
      description: "Comprehensive PRO services for all your government transactions and documentation needs in UAE. Expert government liaison support.",
      keywords: [
        "PRO services UAE",
        "government transactions Dubai",
        "document attestation UAE",
        "PRO officer services",
        "business documentation UAE"
      ],
      ogImage: "/images/og-pro-services.jpg",
      ogTitle: "PRO Services UAE",
      ogDescription: "Comprehensive PRO services for all your government transactions and documentation needs in UAE."
    }
  }
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug)
}

export const servicePageContent: ServicePage = {
  hero: {
    title: "Our Services",
    subtitle: "Complete Business Setup Solutions",
    description: "We offer comprehensive corporate services to help you establish and grow your business in UAE. From company formation and trade licensing to visa processing and PRO services, we've got you covered.",
    primaryCTA: {
      text: "Get Free Consultation",
      href: "/contact"
    },
    secondaryCTA: {
      text: "View Our Process",
      href: "/process"
    },
    backgroundImage: {
      src: "/images/services-hero.jpg",
      alt: "Business setup services overview",
      width: 1920,
      height: 1080
    }
  },
  services,
  overview: {
    title: "Why Choose Our Business Services?",
    description: "We combine expertise in UAE business regulations, proven processes, and personalized service to deliver solutions that ensure your business establishment is smooth, compliant, and successful. Our team of consultants is dedicated to helping you achieve your business goals in UAE market."
  },
  process: {
    title: "Our Business Setup Process",
    subtitle: "Streamlined approach to establish your business in UAE",
    steps: [
      {
        title: "Initial Consultation",
        description: "We start by understanding your business requirements, goals, and preferred jurisdiction to develop a comprehensive setup strategy.",
        order: 1,
        duration: "1-2 days",
        deliverables: ["Requirements assessment", "Jurisdiction recommendation", "Cost analysis"]
      },
      {
        title: "Documentation & Application", 
        description: "Our team prepares all necessary documentation and submits applications to relevant authorities across UAE jurisdictions.",
        order: 2,
        duration: "3-5 days",
        deliverables: ["Document preparation", "Application submission", "Government coordination"]
      },
      {
        title: "Approval & Registration",
        description: "We secure initial approvals and complete business registration with all required authorities and free zones.",
        order: 3,
        duration: "2-5 days",
        deliverables: ["Trade license", "Company registration", "Initial approval certificate"]
      },
      {
        title: "Post-Registration Support",
        description: "We handle all post-registration requirements including visa processing, bank account opening, and operational setup.",
        order: 4,
        duration: "5-7 days",
        deliverables: ["Visa applications", "Bank account assistance", "PRO services setup"]
      }
    ],
    timeline: {
      enabled: true,
      title: "Business Setup Timeline",
      items: [
        {
          phase: "Documentation & Consultation",
          duration: "2-3 days",
          description: "Initial consultation and document preparation"
        },
        {
          phase: "Application Processing",
          duration: "3-5 days",
          description: "Submission and processing with authorities"
        },
        {
          phase: "Registration & Licensing",
          duration: "2-5 days",
          description: "Final approvals and business registration"
        },
        {
          phase: "Operational Setup",
          duration: "5-7 days",
          description: "Visas, PRO services, and final setup"
        }
      ]
    }
  },
  seo: {
    title: "Business Setup Services UAE | Company Formation & Corporate Services",
    description: "Complete business setup solutions in UAE including company formation, trade licensing, visa processing, and PRO services. Expert corporate consultancy.",
    keywords: [
      "business setup UAE",
      "company formation services",
      "trade license Dubai",
      "visa processing UAE",
      "PRO services",
      "corporate consultancy"
    ],
    ogImage: "/images/og-services.jpg",
    ogTitle: "Business Setup Services UAE",
    ogDescription: "Complete business setup solutions in UAE including company formation, trade licensing, visa processing, and PRO services."
  }
}