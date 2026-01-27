import { CompanySetup } from '@/types'

export const companySetupData: CompanySetup[] = [
  // FREE ZONES
  {
    id: 'ajman-free-zone',
    slug: 'ajman-free-zone',
    menuName: 'Ajman Free Zone',
    category: 'free-zone',
    hero: {
      title: 'Ajman Free Zone Company Setup',
      subtitle: 'Cost-effective business setup in the UAE',
      backgroundImage: '/images/hero/ajman-free-zone.jpg'
    },
    whatIs: {
      title: 'What is Ajman Free Zone?',
      description: 'Ajman Free Zone (AFZ) is one of the oldest and most reputed free zones in the UAE, offering affordable business setup packages for startups and SMEs. Located strategically near the Ajman Port, it provides excellent connectivity to global markets.',
      image: '/images/services/ajman-overview.jpg'
    },
    cost: {
      title: 'Ajman Free Zone License Costs',
      packages: [
        {
          name: 'E-Commerce License',
          price: 'Starting from AED 5,000',
          features: ['1 Visa Allocation', 'Virtual Office', 'Trading Activity']
        },
        {
          name: 'Business License',
          price: 'Starting from AED 9,000',
          features: ['2 Visa Allocations', 'Smart Office', 'Professional Services']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in Ajman Free Zone?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Low Cost', description: 'One of the most affordable free zones in the UAE.' },
        { title: 'Strategic Location', description: 'Easy access to Ajman Port and Dubai International Airport.' },
        { title: 'Multiple Installments', description: 'Pay your license fees in easy installments.' },
        { title: 'Quick Setup', description: 'Get your license issued in as little as 24 hours.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Trading', description: 'Import, export, and distribution of goods.' },
        { name: 'Service', description: 'Consultancy and professional services.' },
        { name: 'Industrial', description: 'Manufacturing and assembly activities.' },
        { name: 'E-Commerce', description: 'Online trading of goods and services.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'We simplify the process of setting up your company in Ajman Free Zone. Our experts handle all the paperwork, ensuring a hassle-free experience.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Official Registered Agent', '10+ Years Experience', 'End-to-End Support', 'Transparent Pricing']
    },
    seo: {
      title: 'Ajman Free Zone Company Setup | SmartZone',
      description: 'Setup your company in Ajman Free Zone with SmartZone. Affordable packages, quick processing, and 100% ownership.',
      keywords: ['Ajman Free Zone', 'Company Setup Ajman', 'UAE Free Zone', 'Business Setup']
    }
  },
  {
    id: 'dmcc',
    slug: 'dmcc',
    menuName: 'DMCC',
    category: 'free-zone',
    hero: {
      title: 'DMCC Company Setup',
      subtitle: 'World\'s #1 Free Zone',
      backgroundImage: '/images/hero/dmcc.jpg'
    },
    whatIs: {
      title: 'What is DMCC?',
      description: 'Dubai Multi Commodities Centre (DMCC) is the world’s most interconnected Free Zone, and the leading trade and enterprise hub for commodities. Located in Jumeirah Lakes Towers (JLT), it offers state-of-the-art infrastructure.',
      image: '/images/services/dmcc-overview.jpg'
    },
    cost: {
      title: 'DMCC License Costs',
      packages: [
        {
          name: 'DMCC License',
          price: 'Starting from AED 34,000',
          features: ['Up to 3 Shareholders', 'Flexi Desk', 'General Trading']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in DMCC?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Global Hub', description: 'Connect with over 20,000 businesses.' },
        { title: 'Prime Location', description: 'Located in the heart of new Dubai.' },
        { title: '100% Ownership', description: 'Full foreign ownership of your business.' },
        { title: '0% Tax', description: 'No personal or corporate income tax.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Commodities', description: 'Gold, diamonds, tea, coffee, and more.' },
        { name: 'Crypto', description: 'Cryptocurrency and blockchain businesses.' },
        { name: 'Services', description: 'Marketing, consultancy, and IT services.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone for DMCC?',
      description: 'SmartZone provides expert guidance for setting up in DMCC, ensuring compliance and speed.',
      image: '/images/services/why-smartzone-dmcc.jpg',
      features: ['Expert Consultants', 'Fast Track Process', 'Bank Account Assistance', 'Visa Processing']
    },
    seo: {
      title: 'DMCC Company Setup | SmartZone',
      description: 'Start your business in DMCC with SmartZone. The world\'s best free zone for commodities and trade.',
      keywords: ['DMCC', 'Dubai Free Zone', 'Company Setup Dubai', 'JLT Business']
    }
  },
  {
    id: 'creative-city-fujairah',
    slug: 'creative-city-fujairah',
    menuName: 'Creative City Fujairah',
    category: 'free-zone',
    hero: {
      title: 'Creative City Fujairah Setup',
      subtitle: 'The Hub for Media and Creativity',
      backgroundImage: '/images/hero/fujairah.jpg'
    },
    whatIs: {
      title: 'What is Creative City Fujairah?',
      description: 'Creative City Fujairah is a media-centric free zone that offers a professional environment for individuals and businesses working in a broad spectrum of business fields including media, events, consulting, education, communication and marketing, music and entertainment, design and technology.',
      image: '/images/services/fujairah-overview.jpg'
    },
    cost: {
      title: 'Creative City License Costs',
      packages: [
        {
          name: 'Freelancer',
          price: 'Starting from AED 11,000',
          features: ['No Capital Required', '0 Visa Allocation', 'Media Activities']
        },
        {
          name: 'Commercial',
          price: 'Starting from AED 15,000',
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
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'We make setting up in Fujairah simple and straightforward.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Remote Processing', 'Cost Effective', 'Dedicated Support', 'Visa Assistance']
    },
    seo: {
      title: 'Creative City Fujairah Company Setup | SmartZone',
      description: 'Setup your media or consultancy business in Creative City Fujairah with SmartZone.',
      keywords: ['Creative City Fujairah', 'Media Free Zone', 'UAE Business Setup']
    }
  },
  {
    id: 'ifza-dsoa',
    slug: 'ifza-dsoa',
    menuName: 'IFZA – DSOA',
    category: 'free-zone',
    hero: {
      title: 'IFZA - Dubai Silicon Oasis Authority',
      subtitle: 'Most Dynamic Free Zone in Dubai',
      backgroundImage: '/images/hero/ifza.jpg'
    },
    whatIs: {
      title: 'What is IFZA?',
      description: 'International Free Zone Authority (IFZA) in partnership with Dubai Silicon Oasis Authority (DSOA) offers highly competitive business setup packages in Dubai. It provides flexibility and a wide range of business activities.',
      image: '/images/services/ifza-overview.jpg'
    },
    cost: {
      title: 'IFZA License Costs',
      packages: [
        {
          name: 'Zero Visa Package',
          price: 'Starting from AED 12,900',
          features: ['Professional/Commercial', 'No Visa', 'Virtual Office']
        },
        {
          name: '1 Visa Package',
          price: 'Starting from AED 14,900',
          features: ['Professional/Commercial', '1 Visa Allocation', 'Virtual Office']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in IFZA?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Cost Effective', description: 'Competitive pricing for Dubai license.' },
        { title: 'Wide Activities', description: 'Combine professional, commercial and industrial activities.' },
        { title: 'No Physical Presence', description: 'Setup remotely without visiting UAE.' },
        { title: 'Bank Account', description: 'Easy bank account opening assistance.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Consultancy', description: 'Management, IT, HR consultancy.' },
        { name: 'Trading', description: 'General trading and specific goods.' },
        { name: 'Services', description: 'Lifestyle and personal services.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone for IFZA?',
      description: 'As an authorized partner, SmartZone ensures the fastest route to your IFZA license.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Authorized Partner', 'Lowest Prices', 'Instant Approval', 'Residency Visa Support']
    },
    seo: {
      title: 'IFZA Dubai Company Setup | SmartZone',
      description: 'Get your IFZA Dubai license with SmartZone. Cheapest Free Zone in Dubai.',
      keywords: ['IFZA', 'Dubai Silicon Oasis', 'Cheap Free Zone Dubai', 'Business Setup']
    }
  },
  {
    id: 'meydan-free-zone',
    slug: 'meydan-free-zone',
    menuName: 'Meydan Free Zone',
    category: 'free-zone',
    hero: {
      title: 'Meydan Free Zone Company Setup',
      subtitle: 'Premium Address near Downtown Dubai',
      backgroundImage: '/images/hero/meydan.jpg'
    },
    whatIs: {
      title: 'What is Meydan Free Zone?',
      description: 'Located near the racecourse and hotel, Meydan Free Zone offers a cost-effective free zone license in a premium Dubai location. It is ideal for freelancers and small businesses looking for a prestigious address.',
      image: '/images/services/meydan-overview.jpg'
    },
    cost: {
      title: 'Meydan Free Zone Costs',
      packages: [
        {
          name: 'License Only',
          price: 'Starting from AED 12,500',
          features: ['MoFA Recognized', '3 Business Activities', 'Lease Agreement']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in Meydan?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Premium Location', description: 'Near Downtown Dubai and Business Bay.' },
        { title: 'Low Cost', description: 'One of the cheapest Dubai free zones.' },
        { title: 'Easy Setup', description: '100% digital process.' },
        { title: 'Flexibility', description: 'No capital requirements.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Media', description: 'Media and marketing services.' },
        { name: 'Consultancy', description: 'Management and business consultancy.' },
        { name: 'E-Commerce', description: 'Online trading activities.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'SmartZone helps you get your Meydan license quickly and efficiently.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Digital Process', 'Cost Savings', 'Visa Assistance', 'Corporate Banking']
    },
    seo: {
      title: 'Meydan Free Zone Setup | SmartZone',
      description: 'Setup your company in Meydan Free Zone. Premium Dubai address at low cost.',
      keywords: ['Meydan Free Zone', 'Dubai Free Zone', 'Business Setup Dubai']
    }
  },
  {
    id: 'rakez',
    slug: 'rakez',
    menuName: 'RAKEZ',
    category: 'free-zone',
    hero: {
      title: 'RAKEZ Company Setup',
      subtitle: 'Ras Al Khaimah Economic Zone',
      backgroundImage: '/images/hero/rakez.jpg'
    },
    whatIs: {
      title: 'What is RAKEZ?',
      description: 'Ras Al Khaimah Economic Zone (RAKEZ) is a powerhouse business and industrial hub in the UAE that offers customizable solutions to free zone and non-free zone businesses. It connects investors to growing markets in the Middle East, North Africa, Europe, and South and Central Asia.',
      image: '/images/services/rakez-overview.jpg'
    },
    cost: {
      title: 'RAKEZ License Costs',
      packages: [
        {
          name: 'Biz License',
          price: 'Starting from AED 5,499',
          features: ['No Visa', 'Shared Workstation', '1 Activity']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in RAKEZ?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Cost Effective', description: 'Low setup and operational costs.' },
        { title: 'Strategic Location', description: 'Close to RAK airport and sea ports.' },
        { title: 'Variety of Facilities', description: 'Warehouses, land, and offices available.' },
        { title: 'One-Stop Shop', description: 'Government services under one roof.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Industrial', description: 'Manufacturing and heavy industry.' },
        { name: 'Commercial', description: 'Trading and general trading.' },
        { name: 'Media', description: 'Media production and services.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'SmartZone guides you through the RAKEZ setup process, from license to industrial land acquisition.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Industrial Experts', 'SME Focused', 'Visa Processing', 'Facility Leasing']
    },
    seo: {
      title: 'RAKEZ Company Setup | SmartZone',
      description: 'Start your business in Ras Al Khaimah Economic Zone (RAKEZ) with SmartZone.',
      keywords: ['RAKEZ', 'Ras Al Khaimah', 'Industrial Free Zone', 'UAE Manufacturing']
    }
  },
  {
    id: 'shams',
    slug: 'shams',
    menuName: 'SHAMS',
    category: 'free-zone',
    hero: {
      title: 'SHAMS Free Zone Setup',
      subtitle: 'Sharjah Media City',
      backgroundImage: '/images/hero/shams.jpg'
    },
    whatIs: {
      title: 'What is SHAMS?',
      description: 'Sharjah Media City (Shams) was launched in January 2017 to act as a catalyst for creative and media businesses to grow and thrive. It offers smart innovative services for creative entrepreneurs.',
      image: '/images/services/shams-overview.jpg'
    },
    cost: {
      title: 'SHAMS License Costs',
      packages: [
        {
          name: 'Media License',
          price: 'Starting from AED 5,750',
          features: ['No Visa Allocation', 'Media Activities', 'Flexi Desk']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in SHAMS?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Low Cost Media License', description: 'Cheapest media license in UAE.' },
        { title: '100% Ownership', description: 'Full foreign ownership.' },
        { title: 'No Deposit', description: 'No paid-up share capital.' },
        { title: 'Simple Process', description: 'Online registration and issuance.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Media', description: 'Photography, production, publishing.' },
        { name: 'Creative', description: 'Design, fashion, arts.' },
        { name: 'Digital', description: 'E-commerce and digital marketing.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'We help creative professionals set up in SHAMS with ease.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Creative Focus', 'Budget Friendly', 'Fast Turnaround', 'Ongoing Support']
    },
    seo: {
      title: 'SHAMS Free Zone Setup | SmartZone',
      description: 'Setup your media company in Sharjah Media City (SHAMS) with SmartZone.',
      keywords: ['SHAMS', 'Sharjah Media City', 'Media License UAE', 'Freelance Visa']
    }
  },
  {
    id: 'spc-free-zone',
    slug: 'spc-free-zone',
    menuName: 'SPC Free Zone',
    category: 'free-zone',
    hero: {
      title: 'SPC Free Zone Setup',
      subtitle: 'Sharjah Publishing City',
      backgroundImage: '/images/hero/spc.jpg'
    },
    whatIs: {
      title: 'What is SPC Free Zone?',
      description: 'Sharjah Publishing City (SPC) Free Zone is the world’s first printing and publishing free zone. It offers excellent infrastructure for publishing, printing, and allied businesses, as well as general trading and consultancy.',
      image: '/images/services/spc-overview.jpg'
    },
    cost: {
      title: 'SPC License Costs',
      packages: [
        {
          name: 'Publishing Package',
          price: 'Starting from AED 6,000',
          features: ['Publishing Activities', 'Shared Office', '0 Visa']
        },
        {
            name: 'General Package',
            price: 'Starting from AED 9,000',
            features: ['Trading/Consultancy', '1 Visa Allocation', 'Co-working Space']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in SPC?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Fastest Setup', description: 'License issued in 45 minutes.' },
        { title: 'Dual License', description: 'Option for Mainland and Free Zone license.' },
        { title: 'Strategic Location', description: 'Located on Sheikh Mohammed Bin Zayed Road.' },
        { title: 'Wide Activities', description: 'Over 1,500 business activities available.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Publishing', description: 'Books, magazines, digital publishing.' },
        { name: 'Trading', description: 'General trading and retail.' },
        { name: 'Consultancy', description: 'Business and management consultancy.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'SmartZone ensures you take advantage of SPC\'s lightning-fast setup process.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Speedy Service', 'Dual License Experts', 'Visa Support', 'Office Solutions']
    },
    seo: {
      title: 'SPC Free Zone Setup | SmartZone',
      description: 'Get your license in Sharjah Publishing City (SPC) in 45 minutes with SmartZone.',
      keywords: ['SPC Free Zone', 'Sharjah Publishing City', 'Fastest Free Zone', 'UAE Business']
    }
  },
  {
    id: 'tip-free-zone',
    slug: 'tip-free-zone',
    menuName: 'TIP Free Zone',
    category: 'free-zone',
    hero: {
      title: 'TIP Free Zone Setup',
      subtitle: 'Umm Al Quwain Free Trade Zone',
      backgroundImage: '/images/hero/tip.jpg'
    },
    whatIs: {
      title: 'What is TIP Free Zone?',
      description: 'The Trade, Innovation, and Productivity (TIP) concept is associated with Umm Al Quwain Free Trade Zone, offering a modern, friendly, and progressive business environment. It is known for its low cost and ease of doing business.',
      image: '/images/services/tip-overview.jpg'
    },
    cost: {
      title: 'TIP License Costs',
      packages: [
        {
          name: 'Micro Business',
          price: 'Starting from AED 8,000',
          features: ['0 Visa', 'Freelancer/Micro', 'Consultancy']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in TIP?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Economy', description: 'Cost-effective setup and renewal.' },
        { title: 'Accessibility', description: 'Close to Dubai and Sharjah.' },
        { title: 'Simplicity', description: 'Simple documentation and fast processing.' },
        { title: 'Flexibility', description: 'Wide range of activities allowed.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Commercial', description: 'Import and export.' },
        { name: 'Consultancy', description: 'Professional services.' },
        { name: 'Freelance', description: 'Individual professionals.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'We help you navigate the simple and efficient process of UAQ Free Zone setup.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Budget Solutions', 'Quick Processing', 'Remote Setup', 'Hidden Gem']
    },
    seo: {
      title: 'TIP Umm Al Quwain Free Zone | SmartZone',
      description: 'Setup in Umm Al Quwain Free Trade Zone (TIP) with SmartZone. Low cost and efficient.',
      keywords: ['UAQ Free Zone', 'TIP Free Zone', 'Umm Al Quwain', 'Cheapest License']
    }
  },
  // MAINLAND
  {
    id: 'abu-dhabi-mainland',
    slug: 'abu-dhabi-mainland',
    menuName: 'Abu Dhabi Mainland',
    category: 'mainland',
    hero: {
      title: 'Abu Dhabi Mainland Company Setup',
      subtitle: 'Business in the Capital',
      backgroundImage: '/images/hero/abu-dhabi.jpg'
    },
    whatIs: {
      title: 'What is Abu Dhabi Mainland?',
      description: 'Setting up a mainland company in Abu Dhabi allows you to trade freely within the UAE and internationally. As the capital, it offers lucrative government contracts and a stable economic environment.',
      image: '/images/services/abu-dhabi-overview.jpg'
    },
    cost: {
      title: 'Abu Dhabi Mainland Costs',
      packages: [
        {
          name: 'Commercial License',
          price: 'Starting from AED 10,000',
          features: ['2 Years License', 'No Office Required (Tajer)', 'Local Sponsorship']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in Abu Dhabi?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Government Contracts', description: 'Access to government tenders.' },
        { title: '2 Year License', description: 'Tajer Abu Dhabi offers 2-year license validity.' },
        { title: 'No Office Option', description: 'Start without physical office space.' },
        { title: 'Economic Stability', description: 'Strongest economy in the UAE.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Trading', description: 'Retail and wholesale trading.' },
        { name: 'Contracting', description: 'Construction and maintenance.' },
        { name: 'Services', description: 'Professional and consultancy services.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'SmartZone has deep expertise in Abu Dhabi economic regulations and sponsorship requirements.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Capital Experts', 'Sponsorship Support', 'Tajer License', 'Government Relations']
    },
    seo: {
      title: 'Abu Dhabi Mainland Company Setup | SmartZone',
      description: 'Start your business in Abu Dhabi Mainland. Access government contracts and trade freely.',
      keywords: ['Abu Dhabi Mainland', 'Tajer Abu Dhabi', 'Company Formation Abu Dhabi']
    }
  },
  {
    id: 'dubai-mainland',
    slug: 'dubai-mainland',
    menuName: 'Dubai Mainland',
    category: 'mainland',
    hero: {
      title: 'Dubai Mainland Company Setup',
      subtitle: 'Unlimited Business Opportunities',
      backgroundImage: '/images/hero/dubai-mainland.jpg'
    },
    whatIs: {
      title: 'What is Dubai Mainland?',
      description: 'A Dubai Mainland license allows you to trade within Dubai, across the UAE, and internationally without restrictions. It is the preferred choice for retail, professional services, and general trading businesses.',
      image: '/images/services/dubai-mainland-overview.jpg'
    },
    cost: {
      title: 'Dubai Mainland Costs',
      packages: [
        {
          name: 'Professional License',
          price: 'Starting from AED 12,000',
          features: ['100% Foreign Ownership', 'Virtual Office', 'Service Activities']
        },
        {
            name: 'Commercial License',
            price: 'Starting from AED 15,000',
            features: ['Trading Activities', 'Physical Office', 'Import/Export']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up in Dubai Mainland?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Trade Anywhere', description: 'No restrictions on trading location.' },
        { title: '100% Ownership', description: 'Full ownership for most commercial and professional activities.' },
        { title: 'Unlimited Visas', description: 'Visa quota depends on office size.' },
        { title: 'Broad Reach', description: 'Access to consumers across the UAE.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Retail', description: 'Shops, restaurants, and cafes.' },
        { name: 'Professional', description: 'Doctors, lawyers, engineers, consultants.' },
        { name: 'Commercial', description: 'General trading, contracting, transport.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'We guide you through the DED procedures to ensure a compliant and successful mainland setup.',
      image: '/images/services/why-smartzone.jpg',
      features: ['DED Experts', 'Sponsorship Services', 'Office Solutions', 'PRO Services']
    },
    seo: {
      title: 'Dubai Mainland Company Setup | SmartZone',
      description: 'Setup your Dubai Mainland company with 100% ownership. Trade freely across UAE.',
      keywords: ['Dubai Mainland', 'DED License', 'Business Setup Dubai', 'Mainland Company']
    }
  },
  // OFFSHORE
  {
    id: 'ajman-offshore',
    slug: 'ajman-offshore',
    menuName: 'Ajman Offshore',
    category: 'offshore',
    hero: {
      title: 'Ajman Offshore Company Setup',
      subtitle: 'Asset Protection and Confidentiality',
      backgroundImage: '/images/hero/ajman-offshore.jpg'
    },
    whatIs: {
      title: 'What is Ajman Offshore?',
      description: 'Ajman Offshore is a popular choice for international business and asset protection. It offers a cost-effective way to hold assets, shares, and properties in the UAE without the need for a physical office or visa.',
      image: '/images/services/ajman-offshore-overview.jpg'
    },
    cost: {
      title: 'Ajman Offshore Costs',
      packages: [
        {
          name: 'Offshore Incorporation',
          price: 'Starting from AED 6,000',
          features: ['Registered Address', 'Agent Fee', 'Certificate of Incorporation']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up Ajman Offshore?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Asset Protection', description: 'Secure holding of assets and IP.' },
        { title: 'Confidentiality', description: 'Privacy for shareholders and directors.' },
        { title: 'Fast Incorporation', description: 'Company formed in 24-48 hours.' },
        { title: 'Low Cost', description: 'Cheapest offshore option in UAE.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Holding Company', description: 'Holding shares in other companies.' },
        { name: 'Property Holding', description: 'Ownership of UAE real estate.' },
        { name: 'Consultancy', description: 'International consultancy services.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'As a registered agent, we handle the entire Ajman Offshore incorporation process for you.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Registered Agent', 'Fast Service', 'Bank Account Support', 'Document Attestation']
    },
    seo: {
      title: 'Ajman Offshore Company Setup | SmartZone',
      description: 'Incorporate your Ajman Offshore company for asset protection and tax efficiency.',
      keywords: ['Ajman Offshore', 'Offshore Company UAE', 'Asset Protection']
    }
  },
  {
    id: 'rak-icc-offshore',
    slug: 'rak-icc-offshore',
    menuName: 'RAK ICC Offshore',
    category: 'offshore',
    hero: {
      title: 'RAK ICC Offshore Setup',
      subtitle: 'International Corporate Centre',
      backgroundImage: '/images/hero/rak-icc.jpg'
    },
    whatIs: {
      title: 'What is RAK ICC?',
      description: 'Ras Al Khaimah International Corporate Centre (RAK ICC) is a world-class corporate registry. It is widely recognized by international banks and offers a robust legal framework for offshore companies.',
      image: '/images/services/rak-icc-overview.jpg'
    },
    cost: {
      title: 'RAK ICC Costs',
      packages: [
        {
          name: 'Standard Company',
          price: 'Starting from AED 7,500',
          features: ['Registered Agent', 'Memorandum & Articles', 'Incorporation Cert']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up RAK ICC?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Global Recognition', description: 'Trusted by international banks.' },
        { title: 'Common Law', description: 'Based on common law principles.' },
        { title: 'Property Ownership', description: 'Can own freehold property in Dubai.' },
        { title: 'Flexibility', description: 'Transfer of domicile permitted.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'International Trading', description: 'Trade outside the UAE.' },
        { name: 'Holding', description: 'Holding assets and investments.' },
        { name: 'SPV', description: 'Special Purpose Vehicles for projects.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'We are a leading registered agent for RAK ICC, ensuring compliance and smooth operations.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Top Agent', 'Compliance Experts', 'Banking Partners', 'Legal Support']
    },
    seo: {
      title: 'RAK ICC Offshore Company Setup | SmartZone',
      description: 'Setup your RAK ICC Offshore company. Global recognition and property ownership rights.',
      keywords: ['RAK ICC', 'RAK Offshore', 'Offshore Company Formation', 'Dubai Property Holding']
    }
  },
  {
    id: 'jafza-offshore',
    slug: 'jafza-offshore',
    menuName: 'JAFZA Offshore',
    category: 'offshore',
    hero: {
      title: 'JAFZA Offshore Company Setup',
      subtitle: 'Jebel Ali Free Zone Offshore',
      backgroundImage: '/images/hero/jafza.jpg'
    },
    whatIs: {
      title: 'What is JAFZA Offshore?',
      description: 'JAFZA Offshore is the only offshore vehicle that can legally own property in Dubai. It is part of the Jebel Ali Free Zone, the largest free zone in the world, and offers high reputability.',
      image: '/images/services/jafza-overview.jpg'
    },
    cost: {
      title: 'JAFZA Offshore Costs',
      packages: [
        {
          name: 'Offshore Company',
          price: 'Starting from AED 10,000',
          features: ['Registered Agent', 'JAFZA Fees', 'Documentation']
        }
      ]
    },
    whySetup: {
      title: 'Why Set Up JAFZA Offshore?',
      ctaText: 'View full list of business activities',
      ctaHref: '/contact',
      cards: [
        { title: 'Real Estate', description: 'Direct ownership of Dubai property.' },
        { title: 'Reputation', description: 'High standing with banks and authorities.' },
        { title: 'Shareholder Security', description: 'Strong regulatory framework.' },
        { title: 'Dubai Based', description: 'Registered in Dubai.' }
      ]
    },
    businessTypes: {
      title: 'Types of Businesses Allowed',
      types: [
        { name: 'Property Holding', description: 'Buying residential/commercial property in Dubai.' },
        { name: 'Holding Company', description: 'Holding shares in UAE and foreign companies.' },
        { name: 'General Trading', description: 'International trade.' }
      ]
    },
    whySmartZone: {
      title: 'Why Choose SmartZone?',
      description: 'SmartZone facilitates your JAFZA Offshore setup, crucial for property investors in Dubai.',
      image: '/images/services/why-smartzone.jpg',
      features: ['Property Experts', 'JAFZA Registered', 'Seamless Process', 'Legal Advisory']
    },
    seo: {
      title: 'JAFZA Offshore Company Setup | SmartZone',
      description: 'Form a JAFZA Offshore company to own property in Dubai. The premium offshore choice.',
      keywords: ['JAFZA Offshore', 'Dubai Property Ownership', 'Jebel Ali Offshore', 'Offshore Company']
    }
  }
]

export function getCompanySetupBySlug(slug: string): CompanySetup | undefined {
  return companySetupData.find(item => item.slug === slug)
}

export function getCompanySetupByCategory(category: string): CompanySetup[] {
  return companySetupData.filter(item => item.category === category)
}
