export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Agency</h3>
            <p className="text-sm text-gray-600">
              Building digital experiences that matter.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Web Design</a></li>
              <li><a href="#" className="hover:underline">Development</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>contact@agency.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Agency St, City, State</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; 2026 Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}