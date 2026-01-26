import type { FAQ } from '@/types'

export const faqCategories = [
  "General",
  "Company Formation",
  "Visas & Residency",
  "Banking & VAT",
  "Office & Location"
];

export const faqs: FAQ[] = [
  // General
  {
    id: "general-1",
    question: "How long does it take to set up a company in UAE?",
    answer: "Company formation in UAE typically takes 3-15 working days, depending on the jurisdiction and business activity. Mainland companies usually take 7-15 days, while free zone companies can be established in 3-7 days. The timeline varies based on documentation completeness and government processing times.",
    category: "General",
    order: 1,
    helpful: { yes: 42, no: 3 },
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
    helpful: { yes: 38, no: 5 },
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
    helpful: { yes: 28, no: 2 },
    related: ["general-1", "visa-processing-1"],
    lastUpdated: "2024-01-25",
    author: "Mohammed Hassan",
    tags: ["remote", "international", "overseas", "virtual"]
  },

  // Company Formation
  {
    id: "company-formation-1",
    question: "What types of companies can be formed in UAE?",
    answer: "UAE offers various company structures: Mainland companies (limited liability, sole proprietorship, civil company), Free Zone companies (FZE, FZCO), and Offshore companies. Each has different benefits regarding ownership, taxation, and operational scope. We help you choose the right structure based on your business goals.",
    category: "Company Formation",
    order: 4,
    helpful: { yes: 35, no: 1 },
    related: ["trade-license-1", "visa-processing-1"],
    lastUpdated: "2024-02-01",
    author: "Fatima Al-Rashid",
    tags: ["company-types", "business-structure", "mainland", "free-zone"]
  },
  {
    id: "company-formation-2",
    question: "Do I need a local sponsor to start a business?",
    answer: "Recent regulations allow 100% foreign ownership for most mainland commercial and industrial activities. However, some specific professional activities may still require a local service agent (LSA). Free zone companies have always allowed 100% foreign ownership.",
    category: "Company Formation",
    order: 5,
    helpful: { yes: 45, no: 2 },
    lastUpdated: "2024-02-02",
    author: "Fatima Al-Rashid",
    tags: ["ownership", "sponsor", "local-partner"]
  },

  // Visas & Residency
  {
    id: "visa-1",
    question: "How many visas can I get with my trade license?",
    answer: "The number of visa allocations depends on the size of your office space (for mainland) or the package selected (for free zones). Typically, flexi-desk packages offer 1-3 visas, while physical offices allow for more based on square footage (usually 1 visa per 9 sq. meters).",
    category: "Visas & Residency",
    order: 6,
    helpful: { yes: 30, no: 4 },
    lastUpdated: "2024-02-10",
    tags: ["visa-quota", "residency", "employee-visa"]
  },
  {
    id: "visa-2",
    question: "Can I sponsor my family members?",
    answer: "Yes, once you have your investor or employment visa and Emirates ID, you can sponsor your spouse, children, and parents. You will need to meet certain salary requirements (usually AED 4,000+ for spouse/children) and provide tenancy contracts and attested marriage/birth certificates.",
    category: "Visas & Residency",
    order: 7,
    helpful: { yes: 50, no: 1 },
    lastUpdated: "2024-02-11",
    tags: ["family-visa", "sponsorship", "dependents"]
  },

  // Banking & VAT
  {
    id: "banking-1",
    question: "Is it difficult to open a corporate bank account?",
    answer: "Opening a corporate bank account in UAE has become stricter due to compliance regulations, but it is straightforward with the right documentation. We assist you in preparing your company profile, business plan, and KYC documents to ensure a smooth account opening process with our partner banks.",
    category: "Banking & VAT",
    order: 8,
    helpful: { yes: 33, no: 6 },
    lastUpdated: "2024-02-15",
    tags: ["banking", "corporate-account", "compliance"]
  },
  {
    id: "vat-1",
    question: "Do I need to register for VAT?",
    answer: "VAT registration is mandatory if your taxable supplies and imports exceed AED 375,000 per annum. It is voluntary if they exceed AED 187,500. We can assist with VAT registration, filing, and ensuring your business remains compliant with UAE tax laws.",
    category: "Banking & VAT",
    order: 9,
    helpful: { yes: 40, no: 3 },
    lastUpdated: "2024-02-16",
    tags: ["tax", "vat", "compliance"]
  },

  // Office & Location
  {
    id: "office-1",
    question: "Do I need a physical office space?",
    answer: "For mainland companies, a physical office (Ejari) is often required for license issuance and bank account opening. However, many free zones offer 'virtual office' or 'flexi-desk' packages that satisfy the legal requirements without the cost of a full physical office.",
    category: "Office & Location",
    order: 10,
    helpful: { yes: 25, no: 2 },
    lastUpdated: "2024-02-18",
    tags: ["office", "ejari", "virtual-office", "flexi-desk"]
  }
];
