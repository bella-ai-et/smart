import type { DetailedService } from '@/types';

export const productRegistration: DetailedService = {
  id: 'product-registration',
  slug: 'product-registration',
  hero: {
    title: 'Product Registration Services in UAE',
    subtitle: 'Ensure Market Access with Compliance & Regulatory Approval',
    backgroundImage: '/images/services/product-hero.jpg',
  },
  whyMatters: {
    title: 'Why Product Registration is Mandatory',
    description: 'To import, manufacture, or sell products in the UAE (specifically cosmetics, food, detergents, and medical devices), they must be registered with Dubai Municipality (Montaji) or other relevant authorities. This ensures consumer safety and compliance with health standards. Unregistered products will be blocked at customs and removed from shelves.',
    image: '/images/services/product-matters.jpg',
  },
  howItWorks: {
    title: 'Our Registration Workflow',
    steps: [
      {
        id: 'import-export-code-registration',
        title: 'Import/Export Code Registration',
        description: 'Before registering products, your company must have a valid Import/Export Code. We assist in obtaining this code from Dubai Customs.',
      },
      {
        title: 'Label Assessment',
        description: 'We review your product labels to ensure they meet UAE standards (ingredients, language, barcodes) before submission to avoid rejection.',
      },
      {
        title: 'Document Submission',
        description: 'We compile and submit all necessary documents (Certificate of Analysis, GMP, Free Sale Certificate) to the regulatory body.',
      },
      {
        id: 'vara-registration',
        title: 'VARA Registration (For Virtual Assets)',
        description: 'For businesses dealing with virtual assets, we also assist with VARA (Virtual Assets Regulatory Authority) registration and compliance.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for Products',
    description: 'Navigating regulatory approvals can be tedious. Our team has in-depth knowledge of Dubai Municipality and Ministry of Industry standards, ensuring a smooth approval process for your goods.',
    image: '/images/services/product-team.jpg',
    features: [
      'Dubai Municipality Experts',
      'Montaji System Specialists',
      'Label Compliance Review',
      'Fast-Track Registration',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs Product Registration?',
    audiences: [
      'Importers of cosmetics and personal care products',
      'Food and beverage trading companies',
      'Manufacturers of detergents and disinfectants',
      'Distributors of health supplements',
    ],
  },
  processOverview: {
    title: 'Registration Timeline',
    steps: [
      {
        title: 'Review',
        description: 'Check label compliance.',
      },
      {
        title: 'Submit',
        description: 'Upload to Montaji/Zad.',
      },
      {
        title: 'Sample',
        description: 'Lab testing (if required).',
      },
      {
        title: 'Approve',
        description: 'Receive Registration Certificate.',
      },
    ],
  },
  faqs: [
    {
      question: 'Which products require registration?',
      answer: 'Cosmetics, perfumes, food items, health supplements, detergents, and electrical appliances all require mandatory registration.',
    },
    {
      question: 'What is the Montaji system?',
      answer: 'Montaji is the Dubai Municipality\'s electronic system for the registration and compliance of consumer products.',
    },
    {
      question: 'How long does the process take?',
      answer: 'If all documents and labels are correct, registration typically takes 3-5 working days. Lab testing, if required, can add time.',
    },
    {
      question: 'Do I need a local warehouse?',
      answer: 'Yes, for certain product categories, having a compliant warehouse or a contract with a logistics provider is a prerequisite.',
    },
  ],
  seo: {
    title: 'Product Registration Dubai | Dubai Municipality Approval',
    description: 'Expert product registration services in Dubai. We assist with Dubai Municipality (Montaji) registration for cosmetics, food, and detergents.',
    keywords: ['product registration dubai', 'dubai municipality registration', 'montaji registration', 'cosmetic registration uae', 'food registration dubai'],
  },
};
