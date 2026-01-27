import type { DetailedService } from '@/types';

export const accountingBookkeeping: DetailedService = {
  id: 'accounting-bookkeeping',
  slug: 'accounting-bookkeeping-services-dubai',
  hero: {
    title: 'Expert Accounting & Bookkeeping Services in Dubai',
    subtitle: 'Ensure Compliance and Financial Clarity for Your UAE Business',
    backgroundImage: '/images/services/accounting-hero.jpg',
  },
  whyMatters: {
    title: 'Why Professional Bookkeeping Matters in the UAE',
    description: 'With the implementation of Corporate Tax and strict VAT regulations, maintaining accurate financial records is no longer optional in the UAE. Proper bookkeeping ensures compliance with Federal Decree-Law No. 47 of 2022, avoids heavy penalties from the Federal Tax Authority (FTA), and provides the financial transparency needed for banking and growth.',
    image: '/images/services/accounting-matters.jpg',
  },
  howItWorks: {
    title: 'How Our Accounting Service Works',
    steps: [
      {
        title: 'Initial Financial Assessment',
        description: 'We analyze your current business structure, transaction volume, and reporting needs to tailor a bookkeeping solution.',
      },
      {
        title: 'System Setup & Integration',
        description: 'We set up your chart of accounts on FTA-approved software (Xero, QuickBooks, Zoho) and integrate it with your operations.',
      },
      {
        title: 'Monthly Transaction Processing',
        description: 'Our team records all invoices, expenses, and bank transactions, ensuring every entry is accurate and compliant.',
      },
      {
        title: 'Financial Reporting & Review',
        description: 'You receive detailed monthly management reports, including P&L, Balance Sheet, and Cash Flow statements.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for Accounting',
    description: 'Our team of certified Chartered Accountants brings years of UAE-specific experience. We go beyond data entry to provide strategic financial insights.',
    image: '/images/services/accounting-team.jpg',
    features: [
      'FTA-Compliant Tax Agents',
      'Certified Experts (ACCA/CPA)',
      'Data Security & Confidentiality',
      'Timely Financial Reporting',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs This Service?',
    audiences: [
      'Startups seeking organized financials for investors',
      'SMEs needing VAT and Corporate Tax compliance',
      'Large Enterprises requiring outsourced finance departments',
      'Free Zone & Mainland companies across all sectors',
    ],
  },
  processOverview: {
    title: 'Our Accounting Process Overview',
    steps: [
      {
        title: 'Onboarding',
        description: 'Document collection and software access setup.',
      },
      {
        title: 'Execution',
        description: 'Daily/Weekly recording of financial data.',
      },
      {
        title: 'Compliance Check',
        description: 'Review for VAT and Corporate Tax readiness.',
      },
      {
        title: 'Support',
        description: 'Ongoing advisory and audit support.',
      },
    ],
  },
  faqs: [
    {
      question: 'Is it mandatory to maintain books of accounts in the UAE?',
      answer: 'Yes, under the UAE Commercial Companies Law and Tax Procedures Law, all businesses must maintain accurate financial records for at least 5 years.',
    },
    {
      question: 'Which accounting software do you use?',
      answer: 'We are experts in leading cloud accounting platforms including Xero, QuickBooks, and Zoho Books, ensuring you have real-time access to your data.',
    },
    {
      question: 'Can you help with backlog accounting?',
      answer: 'Absolutely. We specialize in updating and correcting historical financial records to bring your business into full compliance.',
    },
    {
      question: 'How often do I receive financial reports?',
      answer: 'We typically provide monthly management reports, but we can customize the frequency to weekly or quarterly based on your needs.',
    },
  ],
  seo: {
    title: 'Accounting & Bookkeeping Services Dubai | Smart Zone',
    description: 'Professional accounting and bookkeeping services in Dubai, UAE. Ensure VAT and Corporate Tax compliance with our certified experts.',
    keywords: ['accounting services dubai', 'bookkeeping services uae', 'vat accounting', 'corporate tax accounting', 'finance outsourcing'],
  },
};
