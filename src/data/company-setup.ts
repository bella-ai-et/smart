 import type { CompanySetup } from '@/types'
import { ajmanFreeZoneData } from './start-your-company/freezone/ajman-free-zone'

export const companySetupData: CompanySetup[] = [
  // FREE ZONES
  {
    id: 'ajman-free-zone',
    slug: 'ajman-free-zone',
    menuName: 'Ajman Free Zone',
    category: 'free-zone',
    hero: {
      title: 'Ajman Free Zone',
      subtitle: ajmanFreeZoneData.ajman_free_zone_overview.description,
      backgroundImage: '/images/hero/ajman-free-zone.jpg'
    },
    whatIs: {
      title: 'What is Ajman Free Zone?',
      description: `Established in ${ajmanFreeZoneData.ajman_free_zone_overview.established}, ${ajmanFreeZoneData.ajman_free_zone_overview.description} The free zone features ${ajmanFreeZoneData.ajman_free_zone_overview.infrastructure}, offering ${ajmanFreeZoneData.ajman_free_zone_overview.key_value_proposition}`,
      image: '/images/services/ajman-overview.jpg'
    },
    cost: {
      title: 'Business License Types',
      packages: []
    },
    whySetup: {
      title: 'Benefits and Incentives',
      ctaText: 'Get Started with Ajman Free Zone',
      ctaHref: '/contact',
      cards: [
        { 
          title: '100% Foreign Ownership', 
          description: `${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[0]} with ${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[3]}.` 
        },
        { 
          title: 'Tax Exemptions', 
          description: `${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[1]}, plus ${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[2]}.` 
        },
        { 
          title: 'Operational Flexibility', 
          description: `${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[0]}, ${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[1]}, ${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[2]}, and ${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[3]}.` 
        },
        { 
          title: 'Financial Advantages', 
          description: `${ajmanFreeZoneData.benefits_and_incentives.financial_and_strategic[0]}, ${ajmanFreeZoneData.benefits_and_incentives.financial_and_strategic[1]}, and ${ajmanFreeZoneData.benefits_and_incentives.financial_and_strategic[4]}.` 
        }
      ]
    },
    businessTypes: {
      title: 'Business License Types',
      types: ajmanFreeZoneData.business_license_types.map(type => ({ name: type, description: '' }))
    },
    whyChooseUs: {
      title: 'Why Choose JOAB SOLUTIONS?',
      description: 'JOAB SOLUTIONS is a trusted business setup consultancy in the UAE. We provide expert guidance, seamless documentation, and comprehensive support to help you establish your company in Ajman Free Zone quickly and efficiently.',
      image: '/images/services/why-smartzone.jpg',
      features: [
        'Expert Consultants',
        'End-to-End Support',
        'Fast Track Processing',
        'Transparent Pricing'
      ]
    },
    seo: {
      title: 'Ajman Free Zone Company Setup | JOAB SOLUTIONS',
      description: `Established in ${ajmanFreeZoneData.ajman_free_zone_overview.established}, Ajman Free Zone offers ${ajmanFreeZoneData.ajman_free_zone_overview.key_value_proposition}`,
      keywords: ['Ajman Free Zone', 'Company Setup Ajman', 'UAE Free Zone', 'Business Setup', 'JOAB SOLUTIONS']
    }
  },







  // OFFSHORE
]

export function getCompanySetupBySlug(slug: string): CompanySetup | undefined {
  return companySetupData.find(item => item.slug === slug)
}

export function getCompanySetupByCategory(category: string): CompanySetup[] {
  return companySetupData.filter(item => item.category === category)
}
