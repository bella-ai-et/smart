export interface NavigationItem {
  label: string
  route: string
  category: 'free-zone' | 'mainland' | 'offshore'
}

export const startYourCompanyNavigation: NavigationItem[] = [
  // FREE ZONES
  {
    label: 'Ajman Free Zone',
    route: '/start-your-company/free-zone/ajman-free-zone',
    category: 'free-zone'
  },
  {
    label: 'DMCC',
    route: '/start-your-company/free-zone/dmcc',
    category: 'free-zone'
  },
  {
    label: 'Creative City Fujairah',
    route: '/start-your-company/free-zone/creative-city-fujairah',
    category: 'free-zone'
  },
  {
    label: 'IFZA – DSOA',
    route: '/start-your-company/free-zone/ifza-dsoa',
    category: 'free-zone'
  },
  {
    label: 'Meydan Free Zone',
    route: '/start-your-company/free-zone/meydan-free-zone',
    category: 'free-zone'
  },
  {
    label: 'RAKEZ',
    route: '/start-your-company/free-zone/rakez',
    category: 'free-zone'
  },
  {
    label: 'SHAMS',
    route: '/start-your-company/free-zone/shams',
    category: 'free-zone'
  },
  {
    label: 'SPC Free Zone',
    route: '/start-your-company/free-zone/spc-free-zone',
    category: 'free-zone'
  },
  {
    label: 'SRTIP Free Zone',
    route: '/start-your-company/free-zone/srtip',
    category: 'free-zone'
  },
  // MAINLAND
  {
    label: 'Dubai Mainland',
    route: '/start-your-company/mainland/dubai',
    category: 'mainland'
  },
  {
    label: 'Abu Dhabi Mainland',
    route: '/start-your-company/mainland/abu-dhabi',
    category: 'mainland'
  },
  // OFFSHORE
  {
    label: 'Ajman Offshore',
    route: '/start-your-company/offshore/ajman-offshore',
    category: 'offshore'
  },
  {
    label: 'JAFZA Offshore',
    route: '/start-your-company/offshore/jafza-offshore',
    category: 'offshore'
  },
  {
    label: 'RAK ICC Offshore',
    route: '/start-your-company/offshore/rak-icc-offshore',
    category: 'offshore'
  }
]