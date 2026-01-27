import type { DetailedService } from '@/types';

export const corporateStructuring: DetailedService = {
  id: 'corporate-structuring',
  slug: 'corporate-structuring',
  hero: {
    title: 'Optimize Your Business Structure for Growth and Protection',
    subtitle: 'Tailored Corporate Structuring Solutions for UAE Businesses',
    backgroundImage: '/images/services/structuring-hero.jpg',
  },
  whyMatters: {
    title: 'The Importance of Proper Corporate Structuring',
    description: 'A well-designed corporate structure is the backbone of a successful business. It protects your assets, optimizes tax efficiency, facilitates investment, and simplifies succession planning. In the UAE\'s evolving regulatory landscape, having the right legal structure is crucial for operational stability and risk management.',
    image: '/images/services/structuring-matters.jpg',
  },
  howItWorks: {
    title: 'Our Structuring Methodology',
    steps: [
      {
        title: 'Strategic Analysis',
        description: 'We review your current assets, business goals, and risk exposure to determine the optimal legal structure.',
      },
      {
        title: 'Structure Design',
        description: 'We design bespoke structures using Holding Companies, SPVs, Foundations, or Trusts across various UAE jurisdictions (ADGM, DIFC, RAK ICC).',
      },
      {
        title: 'Implementation',
        description: 'We handle the incorporation of entities, drafting of constitutional documents, and transfer of assets.',
      },
      {
        title: 'Maintenance',
        description: 'We provide ongoing corporate secretarial services to ensure your structure remains compliant and effective.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for Structuring',
    description: 'We combine legal expertise with commercial acumen to build structures that work in practice, not just on paper. Our cross-jurisdictional knowledge ensures you get the best solution for your needs.',
    image: '/images/services/structuring-team.jpg',
    features: [
      'Cross-Border Expertise',
      'Asset Protection Focus',
      'Tax-Efficient Solutions',
      'DIFC & ADGM Specialists',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs Corporate Structuring?',
    audiences: [
      'Family businesses planning for succession',
      'Real estate investors protecting portfolios',
      'Startups preparing for fundraising',
      'International companies expanding to UAE',
    ],
  },
  processOverview: {
    title: 'Structuring Implementation Process',
    steps: [
      {
        title: 'Consult',
        description: 'Define objectives and risks.',
      },
      {
        title: 'Design',
        description: 'Blueprint the legal structure.',
      },
      {
        title: 'Draft',
        description: 'Prepare MOAs and agreements.',
      },
      {
        title: 'Register',
        description: 'Incorporate entities and transfer assets.',
      },
    ],
  },
  faqs: [
    {
      question: 'What is a Holding Company?',
      answer: 'A Holding Company is an entity established primarily to own assets (shares, IP, real estate) of other companies (subsidiaries) to reduce risk and centralize control.',
    },
    {
      question: 'Why use an SPV (Special Purpose Vehicle)?',
      answer: 'SPVs are used to ring-fence assets and liabilities, making them ideal for specific projects or investments without putting the main operating company at risk.',
    },
    {
      question: 'Can I restructure an existing business?',
      answer: 'Yes, we can assist with reorganizing existing groups, including share transfers, mergers, and establishing new holding layers.',
    },
    {
      question: 'What is the difference between Mainland and Free Zone structuring?',
      answer: 'Mainland allows trading within the local UAE market, while Free Zones often offer 100% foreign ownership and specific regulatory benefits. We help you choose the right mix.',
    },
  ],
  seo: {
    title: 'Corporate Structuring Services Dubai | Asset Protection',
    description: 'Expert corporate structuring services in Dubai. We design holding companies, SPVs, and foundations for asset protection and tax efficiency.',
    keywords: ['corporate structuring dubai', 'holding company uae', 'spv setup dubai', 'asset protection uae', 'business restructuring'],
  },
};
