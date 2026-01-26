export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg mb-4">UAE Business Setup</h3>
            <p className="text-sm text-gray-600">
              Expert business consultancy for company formation and corporate services in UAE.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/portfolio" className="hover:underline">Success Stories</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/company-formation" className="hover:underline">Company Formation</a></li>
              <li><a href="/services/trade-license" className="hover:underline">Trade License</a></li>
              <li><a href="/services/visa-processing" className="hover:underline">Visa Processing</a></li>
              <li><a href="/services/pro-services" className="hover:underline">PRO Services</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@uaebusinesssetup.com</li>
              <li>+971 4 123 4567</li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; 2026 UAE Business Setup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}