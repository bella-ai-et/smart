import type { DetailedService } from '@/types';

export const bankAccountOpening: DetailedService = {
  id: 'bank-account-opening',
  slug: 'bank-account-opening',
  hero: {
    title: 'Hassle-Free Business Bank Account Opening in UAE',
    subtitle: 'Navigate the Complex Banking Landscape with Expert Guidance',
    backgroundImage: '/images/services/banking-hero.jpg',
  },
  whyMatters: {
    title: 'Why Expert Banking Assistance Matters',
    description: 'Opening a corporate bank account in the UAE has become increasingly challenging due to strict KYC and AML regulations. Without proper guidance, applications are frequently rejected or delayed for months. Our service ensures your company profile is presented correctly to the right banks, maximizing your chances of quick approval.',
    image: '/images/services/banking-matters.jpg',
  },
  howItWorks: {
    title: 'How Our Bank Account Service Works',
    steps: [
      {
        title: 'Profile Assessment',
        description: 'We evaluate your business activity, nationality, and transaction profile to recommend the most suitable banks.',
      },
      {
        title: 'Documentation Preparation',
        description: 'Our team compiles a comprehensive file including business plans, CVs, and corporate documents as required by compliance departments.',
      },
      {
        title: 'Bank Selection & Application',
        description: 'We introduce you to our network of relationship managers at top UAE banks and submit your application.',
      },
      {
        title: 'Follow-up & Activation',
        description: 'We liaise with the bank to answer queries, track progress, and ensure your account is activated smoothly.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for Banking',
    description: 'We have established strong relationships with leading local and international banks in the UAE. We understand exactly what compliance teams are looking for.',
    image: '/images/services/banking-team.jpg',
    features: [
      '95% Success Rate',
      'Direct Access to Relationship Managers',
      'Tailored Banking Solutions',
      'Fast-Track Processing Support',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs This Service?',
    audiences: [
      'New Free Zone and Mainland companies',
      'Offshore companies requiring local accounts',
      'Foreign entities opening branches in UAE',
      'High-risk business activities needing specialized banking',
    ],
  },
  processOverview: {
    title: 'Our Banking Support Process',
    steps: [
      {
        title: 'Consultation',
        description: 'Assess needs and eligibility.',
      },
      {
        title: 'Preparation',
        description: 'Gather and verify all documents.',
      },
      {
        title: 'Submission',
        description: 'Submit to selected banks.',
      },
      {
        title: 'Approval',
        description: 'Coordinate account opening and access.',
      },
    ],
  },
  faqs: [
    {
      question: 'How long does it take to open a bank account?',
      answer: 'Timelines vary by bank and business profile. Typically, it takes 2-4 weeks, but with our assistance, we aim to expedite this process.',
    },
    {
      question: 'Can I open a bank account remotely?',
      answer: 'Most UAE banks require the physical presence of the signatory for identity verification. However, some digital banks offer remote onboarding options which we can explore.',
    },
    {
      question: 'Is a minimum balance required?',
      answer: 'Yes, most corporate accounts require a minimum monthly average balance, ranging from AED 50,000 to AED 500,000 depending on the bank tier.',
    },
    {
      question: 'Do you guarantee account opening?',
      answer: 'While we cannot guarantee approval as it is at the bank’s sole discretion, our expertise significantly increases your success rate by ensuring all compliance requirements are met.',
    },
  ],
  seo: {
    title: 'Business Bank Account Opening Dubai | Smart Zone',
    description: 'Expert assistance for corporate bank account opening in Dubai and UAE. We help you navigate KYC/AML requirements for fast approval.',
    keywords: ['bank account opening dubai', 'corporate bank account uae', 'business banking dubai', 'company bank account'],
  },
};
