import type { DetailedService } from '@/types';

export const vatServices: DetailedService = {
  id: 'vat-services',
  slug: 'vat-services-dubai',
  hero: {
    title: 'Comprehensive VAT Services in Dubai',
    subtitle: 'Expert VAT Registration, Filing, and Compliance Solutions',
    backgroundImage: '/images/services/vat-hero.jpg',
  },
  whyMatters: {
    title: 'Why VAT Compliance is Critical',
    description: 'Since the introduction of Value Added Tax (VAT) in the UAE, compliance is mandatory for eligible businesses. Errors in registration or filing can lead to significant administrative penalties starting from AED 10,000. Professional VAT management ensures you meet all Federal Tax Authority (FTA) requirements accurately and on time.',
    image: '/images/services/vat-matters.jpg',
  },
  howItWorks: {
    title: 'How Our VAT Service Works',
    steps: [
      {
        title: 'Eligibility Check',
        description: 'We assess your turnover to determine if you need to register for mandatory (AED 375,000) or voluntary (AED 187,500) VAT.',
      },
      {
        title: 'Registration & Setup',
        description: 'We handle the complete registration process with the FTA and help you obtain your Tax Registration Number (TRN).',
      },
      {
        title: 'Ongoing Filing',
        description: 'Our team prepares and submits your quarterly or monthly VAT returns, ensuring all input and output tax is correctly calculated.',
      },
      {
        title: 'Advisory & Refund',
        description: 'We provide ongoing advice on complex transactions and assist with VAT refund applications for eligible expenses.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for VAT',
    description: 'Our tax experts are well-versed in UAE Tax Laws. We minimize your risk of non-compliance and help you optimize your tax position legally.',
    image: '/images/services/vat-team.jpg',
    features: [
      'Registered Tax Agents',
      'Accurate Return Filing',
      'Penalty Dispute Assistance',
      'Comprehensive Tax Advisory',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs VAT Services?',
    audiences: [
      'Businesses exceeding the mandatory registration threshold',
      'Startups opting for voluntary registration',
      'Exporters seeking VAT refunds',
      'Companies facing FTA audits or penalties',
    ],
  },
  processOverview: {
    title: 'Our VAT Compliance Process',
    steps: [
      {
        title: 'Analysis',
        description: 'Review of transaction data.',
      },
      {
        title: 'Calculation',
        description: 'Compute VAT payable/recoverable.',
      },
      {
        title: 'Filing',
        description: 'Submit returns via FTA portal.',
      },
      {
        title: 'Record Keeping',
        description: 'Maintain documentation for 5 years.',
      },
    ],
  },
  faqs: [
    {
      question: 'What is the VAT registration threshold?',
      answer: 'Mandatory registration is required if taxable supplies exceed AED 375,000 in the last 12 months. Voluntary registration is possible above AED 187,500.',
    },
    {
      question: 'How often do I need to file VAT returns?',
      answer: 'Most businesses file quarterly, but some large businesses may be required to file monthly. The FTA assigns your tax period upon registration.',
    },
    {
      question: 'Can I claim VAT on business expenses?',
      answer: 'Yes, you can generally reclaim VAT paid on business-related expenses, provided you have valid tax invoices and the expenses are not specifically blocked.',
    },
    {
      question: 'What happens if I file late?',
      answer: 'Late filing attracts a penalty of AED 1,000 for the first offense and AED 2,000 for repetition within 24 months, plus late payment penalties.',
    },
  ],
  seo: {
    title: 'VAT Services Dubai | VAT Registration & Filing UAE',
    description: 'Expert VAT services in Dubai including registration, return filing, and consultancy. Avoid penalties with our FTA compliant solutions.',
    keywords: ['vat services dubai', 'vat registration uae', 'vat filing dubai', 'tax consultant uae'],
  },
};
