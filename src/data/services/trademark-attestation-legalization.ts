import type { DetailedService } from '@/types';

export const trademarkAttestation: DetailedService = {
  id: 'trademark-attestation',
  slug: 'trademark-attestation-legalization',
  hero: {
    title: 'Trademark Registration & Legalization Services',
    subtitle: 'Protect Your Brand Identity and Intellectual Property in the UAE',
    backgroundImage: '/images/services/trademark-hero.jpg',
  },
  whyMatters: {
    title: 'Why Protect Your Trademark?',
    description: 'In a competitive market like Dubai, your brand is your most valuable asset. Registering your trademark grants you exclusive rights to use it and protects against infringement/counterfeiting. Legalizing trademark documents is also essential when expanding your brand internationally or franchising.',
    image: '/images/services/trademark-matters.jpg',
  },
  howItWorks: {
    title: 'Trademark Registration Process',
    steps: [
      {
        title: 'Trademark Search',
        description: 'We conduct a comprehensive search to ensure your proposed trademark is available and does not conflict with existing registrations.',
      },
      {
        title: 'Application Filing',
        description: 'We submit your application to the UAE Ministry of Economy with all required classifications and documentation.',
      },
      {
        title: 'Publication',
        description: 'Upon approval, the trademark is published in the Trademark Journal and local newspapers for the opposition period.',
      },
      {
        title: 'Registration & Certification',
        description: 'If no objections are raised, the final registration fee is paid, and the Trademark Registration Certificate is issued.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose JOAB SOLUTIONS for IP',
    description: 'We simplify the complex process of Intellectual Property protection. Our experts guide you through classification, filing, and enforcement to secure your brand rights.',
    image: '/images/services/trademark-team.jpg',
    features: [
      {
        title: 'Expert IP Attorneys',
        description: 'Qualified legal professionals specializing in UAE intellectual property laws.'
      },
      {
        title: 'Comprehensive Brand Protection',
        description: 'End-to-end service from trademark search to final registration and certification.'
      },
      {
        title: 'International Trademark Support',
        description: 'Assistance with global trademark registration through the Madrid Protocol.'
      },
      {
        title: 'Monitoring & Renewal Services',
        description: 'Ongoing support to monitor potential infringements and handle timely renewals.'
      },
    ],
  },
  whoIsItFor: {
    title: 'Who Needs Trademark Services?',
    audiences: [
      'New brands entering the UAE market',
      'Established businesses protecting their logo/name',
      'Franchisors and Franchisees',
      'Product manufacturers and distributors',
    ],
  },
  processOverview: {
    title: 'Trademark Lifecycle',
    steps: [
      {
        title: 'Search',
        description: 'Verify availability.',
      },
      {
        title: 'File',
        description: 'Submit to Ministry.',
      },
      {
        title: 'Publish',
        description: 'Public notice period.',
      },
      {
        title: 'Protect',
        description: 'Receive Certificate.',
      },
    ],
  },
  faqs: [
    {
      question: 'How long is a trademark valid for?',
      answer: 'A trademark registration in the UAE is valid for 10 years and can be renewed indefinitely for subsequent 10-year periods.',
    },
    {
      question: 'What can be registered as a trademark?',
      answer: 'You can register names, logos, slogans, shapes, and even sounds or smells that distinguish your goods or services.',
    },
    {
      question: 'Is a UAE trademark valid globally?',
      answer: 'No, trademark protection is territorial. A UAE registration protects you only within the UAE. We can assist with international registration via the Madrid Protocol.',
    },
    {
      question: 'What documents are required?',
      answer: 'Typically, a soft copy of the logo, business license (if corporate), and a Power of Attorney are required.',
    },
  ],
  seo: {
    title: 'Trademark Registration Dubai | Brand Protection UAE',
    description: 'Protect your brand with expert trademark registration and attestation services in Dubai. Secure your IP rights in the UAE.',
    keywords: ['trademark registration dubai', 'brand protection uae', 'trademark lawyer dubai', 'intellectual property uae'],
  },
};
