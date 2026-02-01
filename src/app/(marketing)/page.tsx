import { heroContent, services } from '@/data'
import { faqs, faqCategories } from '@/data/faq'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - New Design Style */}
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1B4D6B]">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D6B] to-[#0F2B3C] opacity-95" />
          
          {/* Decorative SVG patterns */}
          <svg
            className="absolute inset-0 opacity-10 pointer-events-none"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 1000 1000"
            width="100%"
          >
            <path d="M0,500 Q250,200 500,500 T1000,500" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,300 Q250,100 500,300 T1000,300" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="200" cy="200" fill="none" r="100" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div>
              <div className="inline-block text-white/80 uppercase tracking-widest text-sm font-semibold mb-4 border-l-4 border-white pl-4">
                {heroContent.subtitle}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {heroContent.title}
              </h1>
              <p className="text-xl text-white/70 mt-6 max-w-xl leading-relaxed">
                {heroContent.description}
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={heroContent.primaryCTA.href}
                className="inline-flex items-center gap-2 bg-white text-[#1B4D6B] px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
              >
                {heroContent.primaryCTA.text}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 text-white/70 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">DET Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium">100% Secure Process</span>
              </div>
            </div>
          </div>

          {/* Right - Circular Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
              {/* Circular image container */}
              <div className="w-full h-full rounded-full overflow-hidden border-[16px] border-white/5 shadow-2xl relative bg-slate-700">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D6B]/60 to-transparent" />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full" />
              <div className="absolute top-1/2 -left-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full" />
              <div className="absolute bottom-12 right-0 w-14 h-14 bg-white/15 backdrop-blur-md rounded-full" />
            </div>
          </div>
        </div>
      </main>

      {/* LOGOS SECTION - New Design Style */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
              Authorised Registered Agent For
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 transition-all duration-500 hover:opacity-100">
            {['MEYDAN', 'SHAMS', 'DMCC', 'DDA', 'IFZA', 'RAKEZ'].map((logo) => (
              <span key={logo} className="text-lg md:text-2xl font-bold text-[#1B4D6B] tracking-wider">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* SERVICES GRID - New Design Style with Old Content */}
      <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business solutions tailored to your needs
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.cta.href}
                className="group"
              >
                <div className="relative h-full p-6 bg-white border border-gray-200 rounded-xl hover:border-[#0f49bd]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0f49bd]/5">
                  {/* Icon */}
                  <div className="mb-4 inline-flex">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0f49bd]/20 to-[#0f49bd]/10 rounded-lg flex items-center justify-center border border-[#0f49bd]/20 group-hover:border-[#0f49bd]/40 transition-all duration-300">
                      <div className="w-6 h-6 bg-[#0f49bd] rounded-md" />
                    </div>
                  </div>

                  {/* Service name */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0f49bd] transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-[#0f49bd] text-sm font-medium">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - New Design Style */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-[#0f49bd]">
                  Why Choose Us
                </span>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Expert Guidance for Your Business Success in Dubai
                </h1>
                <p className="text-lg text-[#4c669a] leading-relaxed max-w-xl">
                  We simplify the complexities of UAE company formation, allowing you to focus on growing your business while we handle the rest.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: '10+ Years of Excellence',
                    description: "A decade of experience navigating the UAE's regulatory landscape with precision."
                  },
                  {
                    title: 'Transparent Pricing',
                    description: 'No hidden fees or surprise costs. We provide clear, upfront investment roadmaps.'
                  },
                  {
                    title: '100% Ownership Solutions',
                    description: 'Maximize your control with tailored mainland and free zone setup structures.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f49bd]/10 flex items-center justify-center text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-base text-[#4c669a] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-[#0f49bd] hover:bg-[#0d3a8f] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#0f49bd]/20">
                  Learn More About Our Process
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative z-10">
                {/* Placeholder for image */}
              </div>

              {/* Decorative Blobs */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#0f49bd]/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0f49bd]/20 rounded-xl -z-0" />

              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden xl:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-gray-900">500+</p>
                    <p className="text-sm text-[#4c669a]">Companies Setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION - New Design Style with Old Content */}
      <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="bg-[#0f49bd] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 -z-0" />

            <div className="relative z-10 flex flex-col gap-6 items-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
                Ready to launch your business in Dubai?
              </h2>
              <p className="text-lg text-white/90 opacity-90 max-w-2xl leading-relaxed">
                Join hundreds of successful entrepreneurs who chose JOAB Solutions for a seamless setup experience.
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#0f49bd] px-8 py-4 rounded-xl font-extrabold text-base hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  Book a Free Consultation
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-extrabold text-base hover:bg-white/10 transition-colors duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION - New Design Style with Old Content */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about setting up your business in Dubai.
            </p>
          </div>

          {/* Category filters */}
          {faqCategories && faqCategories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#0f49bd] to-blue-700 text-white shadow-lg shadow-blue-200">
                All
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.slice(0, 6).map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0f49bd] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#0f49bd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CONTACT FORM - EXACT DESIGN FROM NEW SITE */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-b from-white to-slate-50 py-12 md:py-20 lg:py-32">
        {/* Main Container */}
        <div className="layout-container flex h-full grow flex-col items-center justify-center px-4 md:px-10 lg:px-40">
          {/* CTA Content Wrapper */}
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Branding & Form */}
              <div className="lg:col-span-8 p-8 md:p-12 lg:p-16">
                <div className="max-w-[640px]">
                  <div className="flex flex-col gap-2 mb-10">
                    <h1 className="text-slate-900 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                      Launch Your Business Today
                    </h1>
                    <p className="text-slate-600 text-lg font-normal leading-normal">
                      Get a free consultation from our experts and scale your operations globally.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <label className="flex flex-col flex-1">
                        <p className="text-slate-900 text-sm font-semibold pb-2">Full Name</p>
                        <input
                          className="flex w-full rounded-lg text-slate-900 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent h-14 placeholder:text-gray-400 p-4 text-base font-normal transition-all"
                          placeholder="e.g. John Doe"
                          type="text"
                        />
                      </label>

                      {/* Email Field */}
                      <label className="flex flex-col flex-1">
                        <p className="text-slate-900 text-sm font-semibold pb-2">Email Address</p>
                        <input
                          className="flex w-full rounded-lg text-slate-900 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent h-14 placeholder:text-gray-400 p-4 text-base font-normal transition-all"
                          placeholder="name@company.com"
                          type="email"
                        />
                      </label>
                    </div>

                    {/* Service Dropdown */}
                    <label className="flex flex-col w-full">
                      <p className="text-slate-900 text-sm font-semibold pb-2">Service Interested In</p>
                      <select
                        className="flex w-full rounded-lg text-slate-900 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent h-14 p-4 text-base font-normal transition-all appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%230f49bd' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '24px',
                          paddingRight: '2.5rem',
                        }}
                      >
                        <option disabled value="">
                          Select a service
                        </option>
                        <option value="business-setup">Business Setup &amp; Licensing</option>
                        <option value="consulting">Strategic Consulting</option>
                        <option value="financial">Financial Advisory</option>
                        <option value="it-solutions">Digital Solutions</option>
                      </select>
                    </label>

                    <div className="flex flex-col gap-3 mt-4">
                      <button
                        className="flex w-full md:w-max min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-600 text-white text-base font-bold leading-normal tracking-wide hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                        type="submit"
                      >
                        Submit Request
                      </button>
                      <p className="text-xs text-gray-400 italic">
                        * We value your privacy. Your information is never shared.
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column: Direct Contact Info */}
              <div className="lg:col-span-4 bg-blue-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-slate-900 text-xl font-bold leading-tight mb-2">Ready to Start?</h3>
                    <p className="text-slate-600 text-sm">
                      Our team is ready to assist you right now. Reach out via your preferred method.
                    </p>
                  </div>

                  {/* Contact Item: Phone */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-blue-600 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-slate-900 text-lg font-bold leading-none mb-1">+971 58 836 4257</p>
                      <p className="text-slate-500 text-sm font-medium">Direct Voice Call</p>
                    </div>
                  </div>

                  {/* Contact Item: WhatsApp */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-green-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-slate-900 text-lg font-bold leading-none mb-1">WhatsApp Chat</p>
                      <p className="text-slate-500 text-sm font-medium">Instant Messaging</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 w-full"></div>

                  {/* Response Time */}
                  <div className="flex flex-col gap-2">
                    <p className="text-slate-900 text-sm font-bold flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Response Time: &lt; 2 Hours
                    </p>
                    <p className="text-slate-500 text-xs">
                      Available Sunday to Thursday, 9:00 AM — 6:00 PM (GMT+4)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}