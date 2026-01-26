'use client'

import React, { useState } from 'react'
import Container from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

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
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you with your quote shortly.')
  }

  return (
    <section className="py-16 bg-blue-700 text-white">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <Heading level="h2" size="3xl" className="text-white font-medium">
            Cost Calculator
          </Heading>
          <Text className="text-white/90">
            Step {step} Of 2
          </Text>
        </div>
        
        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                <div>
                  <label className="block text-white mb-2 font-medium">Choose your business activity*</label>
                  <div className="relative">
                    <select 
                      name="activity"
                      value={formData.activity}
                      onChange={handleChange}
                      className="w-full h-12 rounded-full px-4 text-gray-900 bg-white/10 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="advertising" className="text-gray-900">Advertising</option>
                      <option value="trading" className="text-gray-900">Trading</option>
                      <option value="consultancy" className="text-gray-900">Consultancy</option>
                      <option value="service" className="text-gray-900">Service</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center px-4 text-white">
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2 .712V17a1 1 0 001 1z" />
                       </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">What type of premises would you require?*</label>
                  <div className="relative">
                    <select 
                      name="premises"
                      value={formData.premises}
                      onChange={handleChange}
                      className="w-full h-12 rounded-full px-4 text-gray-900 bg-white/10 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="virtual-office" className="text-gray-900">Virtual Office</option>
                      <option value="physical-office" className="text-gray-900">Physical Office</option>
                      <option value="warehouse" className="text-gray-900">Warehouse</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                     <div className="absolute inset-y-0 left-0 flex items-center px-4 text-white">
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a4 4 0 00-2.17-.102l1.027-1.028A3 3 0 009 8.172zM7 16a1 1 0 01-1-1v-6h8v6a1 1 0 01-1 1H7z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Number of owners*</label>
                  <div className="relative">
                    <select 
                      name="owners"
                      value={formData.owners}
                      onChange={handleChange}
                      className="w-full h-12 rounded-full px-4 text-gray-900 bg-white/10 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="1" className="text-gray-900">1</option>
                      <option value="2" className="text-gray-900">2</option>
                      <option value="3" className="text-gray-900">3</option>
                      <option value="4+" className="text-gray-900">4+</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                     <div className="absolute inset-y-0 left-0 flex items-center px-4 text-white">
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Number of visas*</label>
                  <div className="relative">
                    <select 
                      name="visas"
                      value={formData.visas}
                      onChange={handleChange}
                      className="w-full h-12 rounded-full px-4 text-gray-900 bg-white/10 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="0" className="text-gray-900">0</option>
                      <option value="01" className="text-gray-900">01</option>
                      <option value="02" className="text-gray-900">02</option>
                      <option value="03-05" className="text-gray-900">03 - 05</option>
                      <option value="05+" className="text-gray-900">05+</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                     <div className="absolute inset-y-0 left-0 flex items-center px-4 text-white">
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                </div>
                
                 <div>
                  <label className="block text-white mb-2 font-medium">Choose your jurisdiction*</label>
                  <div className="relative">
                    <select 
                      name="jurisdiction"
                      value={formData.jurisdiction}
                      onChange={handleChange}
                      className="w-full h-12 rounded-full px-4 text-gray-900 bg-white/10 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="freezone" className="text-gray-900">Freezone</option>
                      <option value="mainland" className="text-gray-900">Mainland</option>
                      <option value="offshore" className="text-gray-900">Offshore</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                     <div className="absolute inset-y-0 left-0 flex items-center px-4 text-white">
                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext}
                  type="button"
                  className="bg-white text-blue-800 hover:bg-gray-100 px-12 py-3 rounded-full font-bold text-lg"
                >
                  Calculate Now
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-white/10 p-8 rounded-xl border border-white/20 mb-8">
                  <Text className="text-white mb-6 text-center">
                    Please provide your contact details to receive your customized quote.
                  </Text>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="calc-name" className="block text-white mb-2 font-medium">Full Name*</label>
                      <input 
                        id="calc-name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-full px-4 text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="calc-email" className="block text-white mb-2 font-medium">Email Address*</label>
                      <input 
                        id="calc-email"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-full px-4 text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="calc-phone" className="block text-white mb-2 font-medium">Phone Number*</label>
                      <input 
                        id="calc-phone"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-full px-4 text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+971 50 000 0000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="calc-company" className="block text-white mb-2 font-medium">Company Name (Optional)</label>
                      <input 
                        id="calc-company"
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full h-12 rounded-full px-4 text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Company LLC"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={handleBack}
                    type="button"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold text-lg"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-white text-blue-800 hover:bg-gray-100 px-12 py-3 rounded-full font-bold text-lg"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </form>
      </Container>
    </section>
  )
}
