import type { FAQ } from '@/types'

export const faqs: FAQ[] = [
  // General Questions
  {
    id: "general-1",
    question: "How long does it take to set up a company in UAE?",
    answer: "Company formation in UAE typically takes 3-15 working days, depending on the jurisdiction and business activity. Mainland companies usually take 7-15 days, while free zone companies can be established in 3-7 days. The timeline varies based on documentation completeness and government processing times.",
    category: "General",
    order: 1,
    helpful: {
      yes: 42,
      no: 3
    },
    related: ["general-2", "company-formation-1"],
    lastUpdated: "2024-01-15",
    author: "Ahmed Al-Mansouri",
    tags: ["timeline", "company-setup", "business-formation"]
  },
  {
    id: "general-2",
    question: "What are the costs involved in company formation in UAE?",
    answer: "Company formation costs in UAE vary by jurisdiction and business type. Basic packages start from AED 8,000 for free zone companies and AED 15,000 for mainland companies. These include registration fees, license fees, and basic documentation. Additional costs include visa fees, office space (if required), and miscellaneous government charges.",
    category: "General", 
    order: 2,
    helpful: {
      yes: 38,
      no: 5
    },
    related: ["general-1", "trade-license-1"],
    lastUpdated: "2024-01-20",
    author: "Priya Sharma",
    tags: ["pricing", "cost", "budget", "investment"]
  },
  {
    id: "general-3",
    question: "Can you help with business setup if I'm not physically present in UAE?",
    answer: "Yes, we specialize in remote business setup services for international clients. We handle the entire process through power of attorney, video consultations, and digital documentation. Our team can coordinate all requirements without your physical presence, making it convenient for overseas entrepreneurs.",
    category: "General",
    order: 3,
    helpful: {
      yes: 28,
      no: 2
    },
    related: ["general-1", "visa-processing-1"],
    lastUpdated: "2024-01-25",
    author: "Mohammed Hassan",
    tags: ["remote", "international", "overseas", "virtual"]
  },
  
  // Company Formation Questions
  {
    id: "company-formation-1",
    question: "What types of companies can be formed in UAE?",
    answer: "UAE offers various company structures: Mainland companies (limited liability, sole proprietorship, civil company), Free Zone companies (FZE, FZCO), and Offshore companies. Each has different benefits regarding ownership, taxation, and operational scope. We help you choose the right structure based on your business goals.",
    category: "Company Formation",
    order: 1,
    helpful: {
      yes: 35,
      no: 1
    },
    related: ["trade-license-1", "visa-processing-1"],
    lastUpdated: "2024-02-01",
    author: "Fatima Al-Rashid",
    tags: ["company-types", "business-structure", "mainland", "free-zone"]
  },
  {
    id: "trade-license-1",
    question: "What activities require special approvals in UAE?",
    answer: "Certain business activities require additional government approvals: Financial services (Central Bank), Healthcare (MOHAP/DHA), Education (KHDA/ADEC), Legal activities (Ministry of Justice), Media (NMC), and some import/export activities. We help identify required approvals and coordinate with relevant authorities.",
    category: "Trade License",
    order: 1,
    helpful: {
      yes: 31,
      no: 4
    },
    related: ["company-formation-1", "visa-processing-1"],
    lastUpdated: "2024-02-05",
    author: "Khalid Abdullah",
    tags: ["special-approvals", "government", "regulatory", "licenses"]
  },
  {
    id: "web-content",
    question: "Do you provide website content?",
    answer: "We can help with content strategy and work with professional copywriters, but we believe you know your business best. We provide guidance on content requirements and can edit/optimize content you provide to ensure it's web-friendly.",
    category: "Web Design",
    order: 3
  },
  
  // Development Questions
  {
    id: "tech-stack",
    question: "What technologies do you use?",
    answer: "We work with modern technologies including React, Next.js, Node.js, Python, and various databases. We choose the best technology stack for your specific project requirements, scalability needs, and budget constraints.",
    category: "Development",
    order: 1
  },
  {
    id: "third-party-integration",
    question: "Can you integrate with third-party systems?",
    answer: "Yes, we have extensive experience integrating with various third-party systems including CRMs, payment gateways, marketing automation tools, ERPs, and custom APIs. We'll ensure seamless data flow between your systems.",
    category: "Development",
    order: 2
  },
  {
    id: "maintenance",
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer various maintenance packages including security updates, performance optimization, bug fixes, and feature enhancements. We recommend ongoing maintenance to keep your digital assets secure and performing optimally.",
    category: "Development",
    order: 3
  },
  
  // Mobile App Questions
  {
    id: "native-vs-cross-platform",
    question: "Should I build a native app or a cross-platform app?",
    answer: "It depends on your specific needs. Native apps offer better performance and device integration but require separate development for iOS and Android. Cross-platform apps are more cost-effective and faster to develop. We'll help you choose the best approach based on your budget, timeline, and requirements.",
    category: "Mobile Apps",
    order: 1
  },
  {
    id: "app-cost",
    question: "How much does it cost to develop a mobile app?",
    answer: "Mobile app development typically ranges from $12,000 to $100,000+ depending on complexity, features, platforms, and design requirements. Simple apps with basic features cost less, while enterprise apps with complex functionality cost more.",
    category: "Mobile Apps", 
    order: 2
  },
  {
    id: "app-submission",
    question: "Do you handle app store submissions?",
    answer: "Yes, we handle the complete app submission process for both Apple App Store and Google Play Store. We ensure your app meets all guidelines, prepare screenshots and descriptions, and guide you through the approval process.",
    category: "Mobile Apps",
    order: 3
  },
  
  // Marketing Questions
  {
    id: "seo-timeline",
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. You may start seeing improvements in 3-6 months, but significant results typically take 6-12 months. The timeline depends on your industry, competition, current website state, and how aggressively we implement optimization strategies.",
    category: "Digital Marketing",
    order: 1
  },
  {
    id: "content-services",
    question: "Do you provide content creation services?",
    answer: "Yes, we offer comprehensive content creation including blog posts, articles, infographics, videos, and social media content. Our content team works with subject matter experts to create valuable, engaging content that resonates with your audience.",
    category: "Digital Marketing",
    order: 2
  },
  {
    id: "marketing-metrics",
    question: "How do you measure marketing success?",
    answer: "We use various metrics depending on your goals: website traffic, conversion rates, lead generation, search rankings, social media engagement, and ROI. We provide regular reports and analytics to show how our marketing efforts are contributing to your business objectives.",
    category: "Digital Marketing",
    order: 3
  }
]

export const faqCategories = [
  "General",
  "Company Formation", 
  "Trade License",
  "Visa Processing",
  "PRO Services"
]