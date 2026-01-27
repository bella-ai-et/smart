import Link from 'next/link'
import { services } from '@/data'
import { startYourCompanyNavigation } from '@/data/navigation'

export default function Header() {
const freeZones = startYourCompanyNavigation.filter(i => i.category === 'free-zone')
  const mainland = startYourCompanyNavigation.filter(i => i.category === 'mainland')
  const offshore = startYourCompanyNavigation.filter(i => i.category === 'offshore')

  return (
    <header className="w-full border-b relative z-50 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="text-xl font-bold">
            <Link href="/">UAE Business Setup</Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            
            {/* Our Services */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-base flex items-center">
                Our Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-[800px]">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-6">
                  <ul className="grid grid-cols-3 gap-x-6 gap-y-4">
                    {services.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/our-service/${s.slug}`}
                          className="block text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Start Your Company - Cascading Flyout */}
            <div className="relative group/start h-full flex items-center">
              <button className="hover:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-base font-medium flex items-center h-full">
                Start Your Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {/* Level 2: Vertical Dropdown */}
              <div className="absolute top-full left-0 pt-4 hidden group-hover/start:block w-60 z-50">
                <div className="bg-white border border-gray-200 shadow-xl rounded-md py-2">
                  
                  {/* Freezone Item */}
                  <div className="group/freezone relative px-4 py-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors">
                    <span className="font-medium">Freezone</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    
                    {/* Level 3: Freezone Flyout */}
                    <div className="absolute left-full top-0 pl-1 hidden group-hover/freezone:block w-72">
                       <div className="bg-white border border-gray-200 shadow-xl rounded-md py-2">
                          <ul className="space-y-1">
{freeZones.map(item => (
                                <li key={item.route}>
                                  <Link href={item.route} className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                       </div>
                    </div>
                  </div>

                  {/* Mainland Item */}
                  <div className="group/mainland relative px-4 py-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors">
                    <span className="font-medium">Mainland</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    
                    {/* Level 3: Mainland Flyout */}
                    <div className="absolute left-full top-0 pl-1 hidden group-hover/mainland:block w-72">
                       <div className="bg-white border border-gray-200 shadow-xl rounded-md py-2">
                          <ul className="space-y-1">
{mainland.map(item => (
                                <li key={item.route}>
                                  <Link href={item.route} className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                       </div>
                    </div>
                  </div>

                  {/* Offshore Item */}
                  <div className="group/offshore relative px-4 py-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors">
                    <span className="font-medium">Offshore</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    
                    {/* Level 3: Offshore Flyout */}
                    <div className="absolute left-full top-0 pl-1 hidden group-hover/offshore:block w-72">
                       <div className="bg-white border border-gray-200 shadow-xl rounded-md py-2">
                          <ul className="space-y-1">
{offshore.map(item => (
                                <li key={item.route}>
                                  <Link href={item.route} className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Success Stories</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          
          {/* Mobile menu placeholder */}
          <button className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
