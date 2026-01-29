'use client'

import React, { useState } from 'react'

interface ContactFormProps {
  variant?: 'default' | 'home'
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const isHome = variant === 'home'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    phone: '',
    service: 'company-formation',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let messageBody = `Hello, I'm interested in your services.\n\n`

    if (isHome) {
      messageBody += `Name: ${formData.firstName} ${formData.lastName}\n`
    } else {
      messageBody += `Name: ${formData.name}\n`
    }

    messageBody += `Email: ${formData.email}\nPhone: ${formData.phone}\n`

    if (!isHome && formData.service) {
      messageBody += `Service: ${formData.service}\n`
    }

    if (formData.message) {
      messageBody += `Message: ${formData.message}\n`
    }

    const whatsappUrl = `https://wa.me/971588364257?text=${encodeURIComponent(messageBody)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className={`relative overflow-hidden ${isHome ? 'py-16 bg-gradient-to-b from-background to-muted/30' : 'py-20 bg-background'}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isHome ? 'max-w-3xl mx-auto bg-card backdrop-blur-sm border border-border/50 rounded-3xl shadow-xl overflow-hidden' : 'grid grid-cols-1 lg:grid-cols-2 gap-16'}`}>
          {/* Form Section */}
          <div className={isHome ? 'p-8 md:p-12' : ''}>
            {isHome && (
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary/40" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">Get Started</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Ready To Take The Next Step?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Call <span className="font-semibold text-foreground">+971 58 836 4257</span> or fill out the form below to schedule a FREE consultation with one of our UAE Business Setup experts!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {isHome ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971..."
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {isHome ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-home" className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      id="phone-home"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971..."
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </div>
              )}

              {!isHome && (
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="company-formation">Business Setup</option>
                    <option value="visa-processing">Visa Processing</option>
                    <option value="trade-license">Trade License</option>
                    <option value="pro-services">PRO Services</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message {!isHome && <span className="text-primary">*</span>}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your needs..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg active:scale-95 text-base"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          {!isHome && (
            <div className="flex flex-col justify-center">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  We Want To Hear From You!
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get in touch with our team and let's start building your success story together.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Phone</p>
                    <p className="text-foreground font-semibold">+971 58 836 4257</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Email</p>
                    <p className="text-foreground font-semibold">info@joabsolutions.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Address</p>
                    <p className="text-foreground font-semibold">AL GURG TOWER 3, Tayseer Business Center, P Floor, Office No. 60, Dubai, UAE</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="border-t border-border/50 pt-8 mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Monday to Friday</span> - 9:00 AM to 6:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Saturday</span> - 12:00 PM to 4:00 PM
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { name: 'Instagram', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.779.297-1.449.645-2.04 1.236-.592.591-.939 1.261-1.236 2.04-.297.788-.5 1.658-.56 2.936C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.263 2.148.56 2.936.297.784.645 1.453 1.236 2.044.591.591 1.261.939 2.04 1.236.788.297 1.659.5 2.936.559C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.28-.059 2.148-.262 2.936-.559.784-.297 1.453-.645 2.044-1.236.591-.591.939-1.261 1.236-2.044.296-.788.499-1.659.558-2.936.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.059-1.277-.262-2.149-.558-2.936-.297-.784-.645-1.453-1.236-2.044-.591-.591-1.261-.939-2.044-1.236-.788-.297-1.659-.499-2.936-.559C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.064 1.17.054 1.805.244 2.227.408.56.217.96.477 1.382.896.42.42.679.822.896 1.381.164.422.355 1.056.41 2.226.055 1.265.063 1.645.063 4.849 0 3.203-.008 3.584-.063 4.849-.054 1.17-.244 1.806-.41 2.228-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.164-1.056.355-2.226.41-1.265.054-1.645.063-4.849.063-3.204 0-3.584-.008-4.849-.063-1.17-.054-1.806-.244-2.228-.41-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.164-.422-.355-1.056-.41-2.226-.054-1.265-.062-1.645-.062-4.849 0-3.204.008-3.585.062-4.849.054-1.17.244-1.806.41-2.228.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.164 1.056-.355 2.226-.41 1.265-.054 1.645-.062 4.849-.062l.03.002zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
