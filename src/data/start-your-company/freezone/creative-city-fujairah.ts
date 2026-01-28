import { Images } from '@/lib/assets'

export const creativeCityFujairahData = {
  hero: {
    title: 'Creative City Fujairah Setup',
    subtitle: 'The Hub for Media and Creativity',
    backgroundImage: Images.hero.global
  },
  creative_city_fujairah_overview: {
    title: 'What is Creative City Fujairah?',
    description: 'Creative City Fujairah is a media-centric free zone that offers a professional environment for individuals and businesses working in a broad spectrum of business fields including media, events, consulting, education, communication and marketing, music and entertainment, design and technology.',
    image: Images.services.creativeCityOverview
  },
  cost: {
    title: 'Creative City License Costs',
    packages: [
      {
        name: 'Freelancer',
        price: 'Fees vary by package',
        features: ['No Capital Required', '0 Visa Allocation', 'Media Activities']
      },
      {
        name: 'Commercial',
        price: 'Fees vary by package',
        features: ['Up to 3 Visas', 'Flexi Desk', 'Multiple Activities']
      }
    ]
  },
  whySetup: {
    title: 'Benefits of Creative City Fujairah',
    ctaText: 'View full list of business activities',
    ctaHref: '/contact',
    cards: [
      { title: 'No Paid Up Capital', description: 'Start without depositing share capital.' },
      { title: 'No Audit', description: 'No annual audit report required.' },
      { title: 'Quick Process', description: 'License issued in days.' },
      { title: 'Remote Setup', description: 'No need to be physically present in the UAE.' }
    ]
  },
  businessTypes: {
    title: 'Types of Businesses Allowed',
    types: [
      { name: 'Media', description: 'Publishing, broadcasting, production.' },
      { name: 'Consultancy', description: 'Management, marketing, IT.' },
      { name: 'Education', description: 'Training and educational services.' }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose JOAB SOLUTIONS?',
    description: 'We make setting up in Fujairah simple and straightforward.',
    image: '/why-Joab.jpg',
    features: ['Remote Processing', 'Cost Effective', 'Dedicated Support', 'Visa Assistance']
  },
  seo: {
    title: 'Creative City Fujairah Company Setup | JOAB SOLUTIONS',
    description: 'Setup your media or consultancy business in Creative City Fujairah with JOAB SOLUTIONS.',
    keywords: ['Creative City Fujairah', 'Media Free Zone', 'UAE Business Setup']
  }
}
