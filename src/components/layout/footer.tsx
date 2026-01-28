import Link from 'next/link'
import Image from 'next/image'
import { Images } from '@/lib/assets'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src={Images.logos.defaultLogo} 
                alt="JOAB SOLUTIONS" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600">
              Expert business consultancy for business setup and corporate services in UAE.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/accounting-and-bookkeeping" className="hover:underline">Accounting & Bookkeeping</Link></li>
              <li><Link href="/services/bank-account-opening" className="hover:underline">Bank Account Opening</Link></li>
              <li><Link href="/services/vat-services-dubai" className="hover:underline">VAT Services</Link></li>
              <li><Link href="/services/corporate-tax-consultants-dubai" className="hover:underline">Corporate Tax</Link></li>
              <li><Link href="/services/corporate-structuring" className="hover:underline">Corporate Structuring</Link></li>
              <li><Link href="/services/office-space-solutions" className="hover:underline">Office Space Solutions</Link></li>
              <li><Link href="/services/attestation-legalization" className="hover:underline">Attestation & Legalization</Link></li>
              <li><Link href="/services/product-registration" className="hover:underline">Product Registration</Link></li>
              <li><Link href="/services/corporate-relocation" className="hover:underline">Corporate Relocation</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@joabsolutions.com</li>
              <li>+971 58 836 4257, +971 52 644 2563</li>
              <li>AL GURG TOWER 3, Tayseer Business Center, P Floor, Office No. 60, Dubai, UAE</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; 2026 JOAB SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
