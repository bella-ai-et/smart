import Link from 'next/link'
import { services } from '@/data'

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="text-xl font-bold">
            <Link href="/">UAE Business Setup</Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <div className="relative group">
              <button className="hover:underline bg-transparent border-none p-0 cursor-pointer text-base">Our Services</button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block z-50 w-[800px]">
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
            <Link href="/portfolio" className="hover:underline">Success Stories</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
          
          {/* Mobile menu placeholder */}
          <button className="md:hidden">
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
