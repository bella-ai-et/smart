import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div>
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">JOAB</span>
                <span className="text-xs font-bold tracking-widest text-blue-400">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert business consultancy for company setup and corporate services across the UAE.
            </p>
            <div className="flex gap-4">
              {[
                { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7H0v-7a6 6 0 016-6h10z', label: 'LinkedIn' },
                { icon: 'M18 2h-3a6 6 0 00-6 6v9a3 3 0 003 3h3v-5a3 3 0 00-3-3H9V8a4 4 0 014-4h3V2z', label: 'Twitter' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-blue-500"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/portfolio', label: 'Success Stories' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 relative">
              Core Services
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/services/accounting-and-bookkeeping', label: 'Accounting & Bookkeeping' },
                { href: '/services/bank-account-opening', label: 'Bank Account Opening' },
                { href: '/services/vat-services-dubai', label: 'VAT Services' },
                { href: '/services/corporate-structuring', label: 'Corporate Structuring' },
                { href: '/services/attestation-legalization', label: 'Attestation & Legalization' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 relative">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@joabsolutions.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  info@joabsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:+971588364257" className="text-gray-400 hover:text-blue-400 transition-colors text-sm block">
                  +971 58 836 4257
                </a>
                <a href="tel:+971526442563" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  +971 52 644 2563
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                AL GURG TOWER 3<br />
                Tayseer Business Center<br />
                Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; 2026 JOAB SOLUTIONS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
