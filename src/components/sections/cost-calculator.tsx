'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/button'

export default function CostCalculator() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    activity: 'advertising',
    premises: 'virtual-office',
    owners: '1',
    visas: '01',
    jurisdiction: 'freezone',
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hello, I'm interested in a business setup quote.

Details:
Activity: ${formData.activity}
Premises: ${formData.premises}
Owners: ${formData.owners}
Visas: ${formData.visas}
Jurisdiction: ${formData.jurisdiction}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}`

    const whatsappUrl = `https://wa.me/971588364257?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative min-h-screen py-16 lg:py-28 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2 text-balance">
            Cost Calculator
          </h2>
          <p className="text-muted-foreground text-lg">
            Step {step} of 2
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
              step >= 1 ? 'bg-primary text-white' : 'bg-border text-foreground/50'
            }`}>
              1
            </div>
            <div className={`h-1 w-12 transition-all ${
              step >= 2 ? 'bg-primary' : 'bg-border'
            }`} />
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
              step >= 2 ? 'bg-primary text-white' : 'bg-border text-foreground/50'
            }`}>
              2
            </div>
          </div>
        </div>

        {/* Form container */}
        <div className="bg-card rounded-2xl border border-border shadow-lg p-8 lg:p-12">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Activity */}
                  <div>
                    <label className="block text-foreground font-semibold mb-3 text-sm">
                      Choose your business activity*
                    </label>
                    <div className="relative">
                      <select 
                        name="activity"
                        value={formData.activity}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl px-4 pr-12 bg-background border border-border text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="advertising">Advertising</option>
                        <option value="trading">Trading</option>
                        <option value="consultancy">Consultancy</option>
                        <option value="service">Service</option>
                      </select>
                      <svg className="absolute inset-y-0 right-4 h-4 w-4 text-muted-foreground pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Premises */}
                  <div>
                    <label className="block text-foreground font-semibold mb-3 text-sm">
                      What type of premises would you require?*
                    </label>
                    <div className="relative">
                      <select 
                        name="premises"
                        value={formData.premises}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl px-4 pr-12 bg-background border border-border text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="virtual-office">Virtual Office</option>
                        <option value="physical-office">Physical Office</option>
                        <option value="warehouse">Warehouse</option>
                      </select>
                      <svg className="absolute inset-y-0 right-4 h-4 w-4 text-muted-foreground pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Number of owners */}
                  <div>
                    <label className="block text-foreground font-semibold mb-3 text-sm">
                      Number of owners*
                    </label>
                    <div className="relative">
                      <select 
                        name="owners"
                        value={formData.owners}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl px-4 pr-12 bg-background border border-border text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                      <svg className="absolute inset-y-0 right-4 h-4 w-4 text-muted-foreground pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Number of visas */}
                  <div>
                    <label className="block text-foreground font-semibold mb-3 text-sm">
                      Number of visas*
                    </label>
                    <div className="relative">
                      <select 
                        name="visas"
                        value={formData.visas}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl px-4 pr-12 bg-background border border-border text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="0">0</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03-05">03 - 05</option>
                        <option value="05+">05+</option>
                      </select>
                      <svg className="absolute inset-y-0 right-4 h-4 w-4 text-muted-foreground pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Jurisdiction */}
                  <div className="md:col-span-2">
                    <label className="block text-foreground font-semibold mb-3 text-sm">
                      Choose your jurisdiction*
                    </label>
                    <div className="relative">
                      <select 
                        name="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl px-4 pr-12 bg-background border border-border text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="freezone">Freezone</option>
                        <option value="mainland">Mainland</option>
                        <option value="offshore">Offshore</option>
                      </select>
                      <svg className="absolute inset-y-0 right-4 h-4 w-4 text-muted-foreground pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Next button */}
                <div className="flex justify-center">
                  <Button 
                    onClick={handleNext}
                    type="button"
                    className="px-12 py-3 text-base font-semibold rounded-full"
                  >
                    Calculate Now
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-center text-muted-foreground mb-8">
                    Please provide your contact details to receive your customized quote.
                  </p>

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="calc-name" className="block text-foreground font-semibold mb-3 text-sm">
                        Full Name*
                      </label>
                      <input 
                        id="calc-name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl px-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="calc-email" className="block text-foreground font-semibold mb-3 text-sm">
                        Email Address*
                      </label>
                      <input 
                        id="calc-email"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl px-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="calc-phone" className="block text-foreground font-semibold mb-3 text-sm">
                        Phone Number*
                      </label>
                      <input 
                        id="calc-phone"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl px-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+971 50 000 0000"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="calc-company" className="block text-foreground font-semibold mb-3 text-sm">
                        Company Name (Optional)
                      </label>
                      <input 
                        id="calc-company"
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl px-4 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your Company LLC"
                      />
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={handleBack}
                    type="button"
                    variant="outline"
                    className="px-8 py-3 text-base font-semibold rounded-full bg-transparent"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="px-12 py-3 text-base font-semibold rounded-full"
                  >
                    Get Quote
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
