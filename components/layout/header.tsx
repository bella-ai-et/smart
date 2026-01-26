export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="text-xl font-bold">
            Agency Logo
          </div>
          
          {/* Navigation placeholder */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">Contact</a>
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