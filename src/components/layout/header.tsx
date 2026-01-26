import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="text-xl font-bold">
            <Link href="/">UAE Business Setup</Link>
          </div>
          
          {/* Navigation placeholder */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
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