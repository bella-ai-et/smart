import type { DetailedService } from '@/types';

export const officeSpace: DetailedService = {
  id: 'office-space',
  slug: 'office-space-solutions',
  hero: {
    title: 'Premium Office Space Solutions in Dubai',
    subtitle: 'Find the Perfect Workspace for Your Business Success',
    backgroundImage: '/images/services/office-hero.jpg',
  },
  whyMatters: {
    title: 'The Right Office for Your Business',
    description: 'Having a physical office is not just a licensing requirement; it\'s a statement of your business presence. Whether you need a prestigious address, a flexible desk for a startup, or a fully fitted office for a growing team, the right space enhances productivity and credibility.',
    image: '/images/services/office-matters.jpg',
  },
  howItWorks: {
    title: 'Finding Your Ideal Workspace',
    steps: [
      {
        title: 'Needs Analysis',
        description: 'We assess your team size, budget, location preferences, and licensing requirements to shortlist the best options.',
      },
      {
        title: 'Property Selection',
        description: 'Choose from our portfolio of Business Centers, Flexi-Desks, Coworking Spaces, and private offices in prime locations.',
      },
      {
        title: 'Leasing & Documentation',
        description: 'We handle the Ejari registration and lease agreements to ensure compliance with DED and Free Zone regulations.',
      },
      {
        id: 'relocation-services',
        title: 'Relocation Services',
        description: 'Moving offices? We manage the entire relocation process, from logistics and IT setup to fit-out coordination, ensuring zero downtime for your business operations.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone Offices',
    description: 'We offer more than just space; we offer business environments designed for growth. Our strong network with landlords and business centers guarantees the best rates.',
    image: '/images/services/office-team.jpg',
    features: [
      'Prime Business Locations',
      'Flexible Lease Terms',
      'Ejari Assistance',
      'Ready-to-Move-In Options',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs Office Solutions?',
    audiences: [
      'Startups needing affordable flexi-desks',
      'SMEs requiring private serviced offices',
      'Mainland companies needing Ejari for license',
      'International firms setting up HQs',
    ],
  },
  processOverview: {
    title: 'Office Setup Process',
    steps: [
      {
        title: 'Select',
        description: 'Choose your preferred location/type.',
      },
      {
        title: 'Sign',
        description: 'Execute lease agreement.',
      },
      {
        title: 'Register',
        description: 'Complete Ejari registration.',
      },
      {
        title: 'Move In',
        description: 'Start working immediately.',
      },
    ],
  },
  faqs: [
    {
      question: 'Do I need a physical office for a trade license?',
      answer: 'Yes, most Mainland licenses require a physical office with Ejari. Some Free Zones offer virtual office or flexi-desk packages as a minimum requirement.',
    },
    {
      question: 'What is Ejari?',
      answer: 'Ejari is a mandatory system in Dubai for registering tenancy contracts. It is required for trade license issuance and renewal.',
    },
    {
      question: 'Can I upgrade my space later?',
      answer: 'Absolutely. Our flexible solutions allow you to scale up from a desk to a private office as your team grows.',
    },
    {
      question: 'What is included in a serviced office?',
      answer: 'Serviced offices typically include furniture, high-speed internet, reception services, utilities, and access to meeting rooms.',
    },
  ],
  seo: {
    title: 'Office Space Solutions Dubai | Serviced Offices & Coworking',
    description: 'Find your perfect office space in Dubai. We offer serviced offices, coworking spaces, and flexi-desks with Ejari for business licensing.',
    keywords: ['office space dubai', 'serviced offices uae', 'coworking space dubai', 'office rental dubai', 'ejari services'],
  },
};
