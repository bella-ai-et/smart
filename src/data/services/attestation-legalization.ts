import type { DetailedService } from '@/types';

export const attestation: DetailedService = {
  id: 'attestation',
  slug: 'attestation-legalization',
  hero: {
    title: 'Fast & Reliable Document Attestation Services',
    subtitle: 'Streamline Your Document Legalization for UAE Use',
    backgroundImage: '/images/services/attestation-hero.jpg',
  },
  whyMatters: {
    title: 'Why Attestation is Necessary',
    description: 'To use foreign documents in the UAE (such as degree certificates, marriage certificates, or commercial documents), they must be attested and legalized. This validates their authenticity for government entities, employers, and banks. The process involves multiple steps across different countries and ministries.',
    image: '/images/services/attestation-matters.jpg',
  },
  howItWorks: {
    title: 'The Attestation Journey',
    steps: [
      {
        title: 'Country of Origin Attestation',
        description: 'We handle the initial notarization and attestation from the Foreign Affairs Ministry in the country where the document was issued.',
      },
      {
        title: 'UAE Embassy Attestation',
        description: 'The document is then legalized by the UAE Embassy in the country of origin.',
      },
      {
        title: 'MOFA Attestation UAE',
        description: 'Finally, we submit the document to the Ministry of Foreign Affairs (MOFA) in the UAE for the final stamp of approval.',
      },
      {
        title: 'Translation (If Required)',
        description: 'If the document is not in Arabic or English, we provide legal translation services approved by the Ministry of Justice.',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Smart Zone for Attestation',
    description: 'We have a global network of partners to handle attestation from over 100 countries. We offer door-to-door service, saving you the hassle of travel and queues.',
    image: '/images/services/attestation-team.jpg',
    features: [
      'Global Network Coverage',
      'Door-to-Door Collection & Delivery',
      'Express Service Available',
      'Secure Document Handling',
    ],
  },
  whoIsItFor: {
    title: 'Who Needs Attestation Services?',
    audiences: [
      'Individuals applying for UAE residence visas',
      'Professionals validating educational degrees',
      'Companies setting up branches (Board Resolutions, MOAs)',
      'Families sponsoring dependents (Marriage/Birth Certificates)',
    ],
  },
  processOverview: {
    title: 'Document Legalization Steps',
    steps: [
      {
        title: 'Collect',
        description: 'We pick up your documents.',
      },
      {
        title: 'Process',
        description: 'Complete international attestations.',
      },
      {
        title: 'Finalize',
        description: 'MOFA attestation in UAE.',
      },
      {
        title: 'Deliver',
        description: 'Return attested documents to you.',
      },
    ],
  },
  faqs: [
    {
      question: 'How long does attestation take?',
      answer: 'It depends on the country of origin. Typically, it takes 7-14 working days for standard countries like UK, USA, India. Others may take longer.',
    },
    {
      question: 'Do you require the original document?',
      answer: 'Yes, in most cases, the original document is required for attestation. We ensure the highest security for your valuable certificates.',
    },
    {
      question: 'What is MOFA attestation?',
      answer: 'It is the final step of validation by the UAE Ministry of Foreign Affairs, making your document legally valid for use within the UAE.',
    },
    {
      question: 'Can you attest documents from any country?',
      answer: 'We cover most countries globally. Please contact us with the specific country and document type for a precise quote and timeline.',
    },
  ],
  seo: {
    title: 'Document Attestation Services Dubai | Certificate Legalization',
    description: 'Professional document attestation and legalization services in Dubai. We handle degree, marriage, and commercial document attestation for UAE use.',
    keywords: ['attestation services dubai', 'degree attestation uae', 'certificate attestation', 'mofa attestation', 'legalization services'],
  },
};
