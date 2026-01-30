import Link from 'next/link'
import { services } from '@/data'
import { startYourCompanyNavigation } from '@/data/navigation'

export default function Header() {
  const freeZones = startYourCompanyNavigation.filter(i => i.category === 'free-zone')
  const mainland = startYourCompanyNavigation.filter(i => i.category === 'mainland')
  const offshore = startYourCompanyNavigation.filter(i => i.category === 'offshore')

  return (
    <header className="w-full relative z-50 bg-white border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">JOAB</span>
              <span className="text-xs font-bold tracking-widest text-blue-600">SOLUTIONS</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>

            <div className="relative group">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                Our Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[700px]">
                <div className="bg-white border border-gray-100 rounded-xl shadow-2xl p-6 backdrop-blur-xl">
                  <ul className="grid grid-cols-3 gap-4">
                    {services.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={s.cta.href || `/our-service/${s.slug}`}
                          className="group/item block p-3 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400 group-hover/item:bg-blue-600 transition-colors" />
                            {s.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group/start">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                Start Your Company
                <svg className="w-4 h-4 transition-transform group-hover/start:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/start:opacity-100 group-hover/start:visible transition-all duration-200 w-56 z-50">
                <div className="bg-white border border-gray-100 rounded-xl shadow-2xl py-2 backdrop-blur-xl">
                  <MenuSection title="Freezone" items={freeZones} />
                  <div className="my-1 h-px bg-gray-100" />
                  <MenuSection title="Mainland" items={mainland} />
                  <div className="my-1 h-px bg-gray-100" />
                  <MenuSection title="Offshore" items={offshore} />
                </div>
              </div>
            </div>

            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <button className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
    >
      {children}
    </Link>
  )
}

function MenuSection({ title, items }: { title: string; items: any[] }) {
  return (
    <div>
      <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</div>
      <ul className="space-y-0">
        {items.map(item => (
          <li key={item.route}>
            <Link
              href={item.route}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
