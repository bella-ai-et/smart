import type { DetailedService, Service } from '@/types';
import { trademarkAttestation } from './trademark-attestation-legalization';

export const detailedServices: DetailedService[] = [
  trademarkAttestation,
];

export function getDetailedServiceBySlug(slug: string): DetailedService | undefined {
  return detailedServices.find((service) => service.slug === slug);
}

import { accountingBookkeepingData } from './accounting-bookkeeping-services-dubai';

import { bankAccountOpeningData } from './bank-account-opening';

// Construct Accounting Service Manually from new JSON data
const accountingService: Service = {
  id: 'accounting-bookkeeping',
  name: 'Accounting & Bookkeeping Services',
  slug: 'accounting-and-bookkeeping',
  description: accountingBookkeepingData.accounting_bookkeeping_overview.description,
  longDescription: accountingBookkeepingData.accounting_bookkeeping_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: accountingBookkeepingData.accounting_bookkeeping_overview.title,
    width: 24,
    height: 24
  },
  features: accountingBookkeepingData.core_services.flatMap(s => s.features).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/accounting-and-bookkeeping',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/accounting-hero.jpg', // Fallback or known image
    alt: accountingBookkeepingData.accounting_bookkeeping_overview.title,
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
  seo: {
    title: accountingBookkeepingData.accounting_bookkeeping_overview.title,
    description: accountingBookkeepingData.accounting_bookkeeping_overview.description,
    keywords: ['accounting', 'bookkeeping', 'dubai']
  }
};

// Construct Bank Account Opening Service Manually
const bankAccountOpeningService: Service = {
  id: 'bank-account-opening',
  name: 'Bank Account Opening',
  slug: 'bank-account-opening',
  description: bankAccountOpeningData.bank_account_opening_overview.description,
  longDescription: bankAccountOpeningData.bank_account_opening_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: bankAccountOpeningData.bank_account_opening_overview.title,
    width: 24,
    height: 24
  },
  features: bankAccountOpeningData.banking_options_2026.map(o => o.type).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/bank-account-opening',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/banking-hero.jpg',
    alt: bankAccountOpeningData.bank_account_opening_overview.title,
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
  seo: {
    title: bankAccountOpeningData.bank_account_opening_overview.title,
    description: bankAccountOpeningData.bank_account_opening_overview.description,
    keywords: ['bank account', 'uae banking', 'corporate account']
  }
};

import { corporateStructuringData } from './corporate-structuring';
import { corporateTaxData } from './corporate-tax-consultants-dubai';
import { vatServicesData } from './vat-services-dubai';

// Construct Corporate Structuring Service Manually
const corporateStructuringService: Service = {
  id: 'corporate-structuring',
  name: 'Corporate Structuring',
  slug: 'corporate-structuring',
  description: corporateStructuringData.corporate_structuring_overview.description,
  longDescription: corporateStructuringData.corporate_structuring_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: corporateStructuringData.corporate_structuring_overview.title,
    width: 24,
    height: 24
  },
  features: corporateStructuringData.key_structuring_models_2026.map(m => m.model).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/corporate-structuring',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/structuring-hero.jpg',
    alt: corporateStructuringData.corporate_structuring_overview.title,
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
  seo: {
    title: corporateStructuringData.corporate_structuring_overview.title,
    description: corporateStructuringData.corporate_structuring_overview.description,
    keywords: ['corporate structuring', 'uae business structure', 'holding company']
  }
};

// Construct Corporate Tax Service Manually
const corporateTaxService: Service = {
  id: 'corporate-tax',
  name: 'Corporate Tax',
  slug: 'corporate-tax-consultants-dubai',
  description: corporateTaxData.corporate_tax_overview.description,
  longDescription: corporateTaxData.corporate_tax_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: corporateTaxData.corporate_tax_overview.title,
    width: 24,
    height: 24
  },
  features: corporateTaxData.our_tax_services.slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/corporate-tax-consultants-dubai',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/corporate-tax-hero.jpg',
    alt: corporateTaxData.corporate_tax_overview.title,
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
  seo: {
    title: corporateTaxData.corporate_tax_overview.title,
    description: corporateTaxData.corporate_tax_overview.description,
    keywords: ['corporate tax', 'uae tax', 'tax compliance']
  }
};

// Construct VAT Service Manually
const vatService: Service = {
  id: 'vat-services',
  name: 'VAT Services',
  slug: 'vat-services-dubai',
  description: vatServicesData.vat_services_overview.description,
  longDescription: vatServicesData.vat_services_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: vatServicesData.vat_services_overview.title,
    width: 24,
    height: 24
  },
  features: vatServicesData.core_vat_services.map(s => s.service).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/vat-services-dubai',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/vat-hero.jpg',
    alt: vatServicesData.vat_services_overview.title,
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
  seo: {
    title: vatServicesData.vat_services_overview.title,
    description: vatServicesData.vat_services_overview.description,
    keywords: ['vat services', 'uae vat', 'tax compliance']
  }
};

import { officeSpaceData } from './office-space-solutions';

// Construct Office Space Service Manually
const officeSpaceService: Service = {
  id: 'office-space-solutions',
  name: 'Office Space Solutions',
  slug: 'office-space-solutions',
  description: officeSpaceData.office_solutions_overview.description,
  longDescription: officeSpaceData.office_solutions_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: officeSpaceData.office_solutions_overview.title,
    width: 24,
    height: 24
  },
  features: officeSpaceData.office_types_2026.map(t => t.type).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'consultation',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/office-space-solutions',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/office-hero.jpg',
    alt: officeSpaceData.office_solutions_overview.title,
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
  seo: {
    title: officeSpaceData.office_solutions_overview.title,
    description: officeSpaceData.office_solutions_overview.description,
    keywords: ['office space', 'dubai office', 'virtual office']
  }
};

import { attestationLegalizationData } from './attestation-legalization';

// Construct Attestation Service Manually
const attestationService: Service = {
  id: 'attestation-legalization',
  name: 'Attestation & Legalization',
  slug: 'attestation-legalization',
  description: attestationLegalizationData.attestation_legalization_overview.description,
  longDescription: attestationLegalizationData.attestation_legalization_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: attestationLegalizationData.attestation_legalization_overview.title,
    width: 24,
    height: 24
  },
  features: attestationLegalizationData.our_service_features.map(f => f.feature).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'document',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Learn More',
    href: '/services/attestation-legalization',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/attestation-hero.jpg',
    alt: attestationLegalizationData.attestation_legalization_overview.title,
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
  seo: {
    title: attestationLegalizationData.attestation_legalization_overview.title,
    description: attestationLegalizationData.attestation_legalization_overview.description,
    keywords: ['attestation', 'legalization', 'document verification', 'mofa']
  }
};

import { productRegistrationData } from './product-registration';

// Construct Product Registration Service Manually
const productRegistrationService: Service = {
  id: 'product-registration',
  name: 'Product Registration',
  slug: 'product-registration',
  description: productRegistrationData.product_registration_overview.description,
  longDescription: productRegistrationData.product_registration_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: productRegistrationData.product_registration_overview.title,
    width: 24,
    height: 24
  },
  features: productRegistrationData.our_compliance_process.map(f => f.step).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'project',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Register Product',
    href: '/services/product-registration',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/product-registration-hero.jpg',
    alt: productRegistrationData.product_registration_overview.title,
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
  seo: {
    title: productRegistrationData.product_registration_overview.title,
    description: productRegistrationData.product_registration_overview.description,
    keywords: ['product registration', 'dubai municipality', 'moiat', 'compliance']
  }
};

import { relocationData } from './corporate-relocation';

// Construct Corporate Relocation Service Manually
const corporateRelocationService: Service = {
  id: 'corporate-relocation',
  name: 'Corporate Relocation',
  slug: 'corporate-relocation',
  description: relocationData.relocation_services_overview.description,
  longDescription: relocationData.relocation_services_overview.description,
  icon: {
    src: '/icons/service-default.svg',
    alt: relocationData.relocation_services_overview.title,
    width: 24,
    height: 24
  },
  features: relocationData.physical_move_management.features.map(f => f.feature).slice(0, 6),
  pricing: {
    startingFrom: 0,
    currency: 'AED',
    period: 'project',
    displayFormat: 'starting'
  },
  cta: {
    text: 'Start Relocation',
    href: '/services/corporate-relocation',
    variant: 'primary'
  },
  heroImage: {
    src: '/images/services/relocation-hero.jpg',
    alt: relocationData.relocation_services_overview.title,
    width: 1200,
    height: 800
  },
  gallery: [],
  tags: [],
  difficulty: 'hard',
  duration: 'Custom',
  teamSize: 'Expert Team',
  technologies: [],
  caseStudy: {
    enabled: false,
    href: '#',
    count: 0
  },
  seo: {
    title: relocationData.relocation_services_overview.title,
    description: relocationData.relocation_services_overview.description,
    keywords: ['corporate relocation', 'office migration', 'business moving', 'dubai']
  }
};

// Map DetailedService to Service for backward compatibility with UI components
export const services: Service[] = [
  accountingService,
  bankAccountOpeningService,
  corporateStructuringService,
  corporateTaxService,
  vatService,
  officeSpaceService,
  attestationService,
  productRegistrationService,
  corporateRelocationService,
  ...detailedServices.map(service => {
  let name = service.hero.title;
  
  // Normalize names for menu/listing based on slug
  switch (service.slug) {
    case 'business-setup-dubai':
      name = 'Business Setup in Dubai';
      break;
    default:
      name = service.hero.title;
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
}})];

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
