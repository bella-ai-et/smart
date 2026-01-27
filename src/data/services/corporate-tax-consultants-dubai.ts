import type { DetailedService } from '@/types';

export const corporateTax: DetailedService = {
  id: 'corporate-tax',
  slug: 'corporate-tax-consultants-dubai',
  hero: {
    title: 'Strategic Corporate Tax Advisory Services in UAE',
    subtitle: 'Navigate the New Tax Landscape with Confidence and Compliance',
    backgroundImage: '/images/services/corporate-tax-hero.jpg',
  },
  whyMatters: {
    title: 'Understanding UAE Corporate Tax',
    description: 'The UAE has introduced a Federal Corporate Tax with a standard rate of 9% on taxable profits exceeding AED 375,000. This major shift requires businesses to reassess their structures, accounting practices, and compliance strategies. Failure to comply can result in significant penalties and reputational damage.',
    image: '/images/services/corporate-tax-matters.jpg',
  },
  howItWorks: {
    title: 'Our Corporate Tax Approach',
    steps: [
      {
        title: 'Impact Assessment',
        description: 'We analyze your business activities and financial data to determine your tax liability and identify applicable exemptions (e.g., Free Zone Persons).',
      },
      {
        title: 'Tax Registration',
        description: 'We handle the mandatory Corporate Tax registration with the Federal Tax Authority (FTA) for all your business entities.',
      },
      {
        title: 'Tax Planning & Structuring',
        description: 'We advise on efficient group structures, transfer pricing policies, and relief mechanisms to optimize your tax position legally.',
      },
      {
        title: 'Filing & Compliance',
        description: 'Our team prepares and files your annual Corporate Tax return, ensuring accuracy and adherence to deadlines.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for Corporate Tax',
    description: 'Our team comprises seasoned tax professionals with deep knowledge of UAE tax laws and international tax principles. We provide practical, commercial advice tailored to your business.',
    image: '/images/services/corporate-tax-team.jpg',
    features: [
      'Deep Knowledge of UAE CT Law',
      'Transfer Pricing Expertise',
      'Free Zone Tax Optimization',
      'Proactive Compliance Management',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs Corporate Tax Services?',
    audiences: [
      'Mainland companies with profits > AED 375k',
      'Qualifying Free Zone Persons (QFZP)',
      'Multinational Groups (MNEs)',
      'Businesses seeking Small Business Relief',
    ],
  },
  processOverview: {
    title: 'Corporate Tax Compliance Cycle',
    steps: [
      {
        title: 'Register',
        description: 'Obtain Tax Registration Number.',
      },
      {
        title: 'Assess',
        description: 'Calculate Taxable Income.',
      },
      {
        title: 'File',
        description: 'Submit Tax Return (9 months after year-end).',
      },
      {
        title: 'Pay',
        description: 'Settle Tax Liability.',
      },
    ],
  },
  faqs: [
    {
      question: 'Is my Free Zone company exempt from Corporate Tax?',
      answer: 'Not automatically. Free Zone Persons can benefit from a 0% rate only on "Qualifying Income" and must meet specific substance requirements. Non-qualifying income is taxed at 9%.',
    },
    {
      question: 'What is Small Business Relief?',
      answer: 'Businesses with revenue below AED 3 million in a tax period may claim Small Business Relief, effectively treating their taxable income as zero for that period.',
    },
    {
      question: 'Do I need to register if I am making a loss?',
      answer: 'Yes, registration for Corporate Tax is mandatory for all taxable persons, regardless of profitability or tax status.',
    },
    {
      question: 'When is the Corporate Tax return due?',
      answer: 'Tax returns and payments are due within 9 months from the end of the relevant Tax Period.',
    },
  ],
  seo: {
    title: 'Corporate Tax Consultants Dubai | UAE Tax Advisory',
    description: 'Expert Corporate Tax consultants in Dubai. We help businesses navigate UAE Corporate Tax Law, registration, and compliance strategies.',
    keywords: ['corporate tax dubai', 'uae corporate tax', 'tax consultants dubai', 'corporate tax advisory', 'tax registration uae'],
  },
};
