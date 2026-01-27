import type { DetailedService, Service } from '@/types';
import { accountingBookkeeping } from './accounting-bookkeeping-services-dubai';
import { bankAccountOpening } from './bank-account-opening';
import { vatServices } from './vat-services-dubai';
import { corporateTax } from './corporate-tax-consultants-dubai';
import { corporateStructuring } from './corporate-structuring';
import { officeSpace } from './office-space-solutions';
import { attestation } from './attestation-legalization';
import { trademarkAttestation } from './trademark-attestation-legalization';
import { productRegistration } from './product-registration';

export const detailedServices: DetailedService[] = [
  accountingBookkeeping,
  bankAccountOpening,
  vatServices,
  corporateTax,
  corporateStructuring,
  officeSpace,
  attestation,
  trademarkAttestation,
  productRegistration,
];

export function getDetailedServiceBySlug(slug: string): DetailedService | undefined {
  return detailedServices.find((service) => service.slug === slug);
}

// Map DetailedService to Service for backward compatibility with UI components
export const services: Service[] = detailedServices.map(service => {
  let name = service.hero.title;
  
  // Normalize names for menu/listing based on slug
  switch (service.slug) {
    case 'accounting-bookkeeping-services-dubai':
      name = 'Accounting & Bookkeeping Services in Dubai';
      break;
    case 'bank-account-opening':
      name = 'Bank Account Opening';
      break;
    case 'vat-services-dubai':
      name = 'VAT Services in Dubai';
      break;
    case 'corporate-tax-consultants-dubai':
      name = 'Corporate Tax Consultants';
      break;
    case 'corporate-structuring':
      name = 'Corporate Structuring';
      break;
    case 'office-space-solutions':
      name = 'Office Space Solutions';
      break;
    case 'attestation-legalization':
      name = 'Attestation & Legalization';
      break;
    case 'product-registration':
      name = 'Product Registration';
      break;
    case 'trademark-attestation-legalization':
      name = 'Trademark Attestation';
      break;
  }

  return {
    id: service.id,
    name: name,
    slug: service.slug, // Uses the new exact slug
  description: service.hero.subtitle,
  longDescription: service.whyMatters.description,
  icon: {
    src: '/icons/service-default.svg', // Placeholder
    alt: service.hero.title,
    width: 24,
    height: 24
  },
  features: service.whyChooseUs.features.slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: `/our-service/${service.slug}`, // Point to new dynamic route
    variant: 'primary'
  },
  heroImage: {
    src: service.hero.backgroundImage,
    alt: service.hero.title,
    width: 1200,
    height: 800
  },
  gallery: [],
  tags: [],
  difficulty: 'intermediate',
  duration: 'Custom',
  teamSize: 'Expert Team',
  technologies: [],
  caseStudy: {
    enabled: false,
    href: '#',
    count: 0
  },
  seo: service.seo
}});

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const servicePageContent = {
  hero: {
    title: "Our Services",
    subtitle: "Expert Solutions for Your Business",
    description: "Comprehensive business setup and support services in Dubai and the UAE. We handle the complexities so you can focus on growth.",
    primaryCTA: {
      text: "Get Started",
      href: "/contact"
    },
    backgroundImage: {
      src: "/images/services-hero.jpg",
      alt: "Smart Zone Services",
      width: 1920,
      height: 1080
    }
  },
  overview: {
    title: "Why Choose Our Services?",
    description: "We provide end-to-end support for all your business needs in the UAE, from company formation to ongoing operational support.",
    features: [
      "Expert Team of Consultants",
      "Transparent Pricing",
      "Fast & Efficient Processing",
      "Comprehensive Support"
    ]
  },
  process: {
    title: "Our Process",
    steps: [
      {
        order: 1,
        title: "Consultation",
        description: "We discuss your business needs and objectives to recommend the best solution."
      },
      {
        order: 2,
        title: "Proposal & Strategy",
        description: "We provide a tailored proposal outlining the costs, timeline, and requirements."
      },
      {
        order: 3,
        title: "Documentation & Submission",
        description: "Our team handles all the paperwork and submits applications to relevant authorities."
      },
      {
        order: 4,
        title: "Completion & Support",
        description: "Receive your license/documents and get ongoing support for your business operations."
      }
    ]
  },
  services: services
};
