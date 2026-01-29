'use client'

import React, { useState } from 'react'
import Container from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Select from '@/components/ui/select'
import Textarea from '@/components/ui/textarea'

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

  // Standard input classes for both variants since we are removing the green theme
  const inputClasses = ""

  const renderLabel = (text: string, id: string) => {
    if (!isHome) return null
    return (
       <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
         {text}
       </label>
    )
  }

  return (
    <section className={`py-16 ${isHome ? 'bg-gray-50' : 'bg-white'}`}>
      <Container>
        <div className={`${isHome ? 'max-w-4xl mx-auto shadow-xl rounded-2xl overflow-hidden bg-white' : 'grid grid-cols-1 lg:grid-cols-2 gap-12'}`}>
          {/* Left Column: Form */}
          <div className={isHome ? 'p-8 lg:p-12' : ''}>
             {isHome && (
                <>
                  <Heading level="h2" size="3xl" weight="bold" className="mb-4 text-gray-900">
                    Ready To Take The Next Step?
                  </Heading>
                  <Text className="mb-8 text-gray-600">
                    Call +971 58 836 4257 or fill out the form to schedule a FREE consultation with one of our UAE Business Setup Gurus!
                  </Text>
                </>
             )}

            <form onSubmit={handleSubmit}>
              {isHome ? (
                 // Home variant fields
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                      {renderLabel('First Name', 'firstName')}
                      <Input 
                         id="firstName" 
                         name="firstName"
                         value={formData.firstName}
                         onChange={handleChange}
                         placeholder="" 
                         className={inputClasses}
                      />
                   </div>
                   <div>
                      {renderLabel('Last Name', 'lastName')}
                      <Input 
                         id="lastName" 
                         name="lastName"
                         value={formData.lastName}
                         onChange={handleChange}
                         placeholder="" 
                         className={inputClasses}
                      />
                   </div>
                 </div>
              ) : (
                 // Default variant fields
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Name*" 
                    placeholder="" 
                   />
                   <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    label="Phone*" 
                    placeholder="" 
                   />
                 </div>
              )}
              
              {isHome ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                      {renderLabel('Email', 'email')}
                      <Input 
                         id="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="" 
                         className={inputClasses}
                      />
                   </div>
                   <div>
                      {renderLabel('Phone', 'phone')}
                      <Input 
                         id="phone" 
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder="" 
                         className={inputClasses}
                      />
                   </div>
                 </div>
              ) : (
                  <div className="mb-6">
                    <Input 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      label="Email*" 
                      placeholder="" 
                    />
                  </div>
              )}
              
              {!isHome && (
                <div className="mb-6">
                  <Select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    label="Service Required" 
                    options={[
                      { label: 'Business Setup', value: 'company-formation' },
                      { label: 'Visa Processing', value: 'visa-processing' },
                      { label: 'Trade License', value: 'trade-license' },
                      { label: 'PRO Services', value: 'pro-services' },
                    ]}
                  />
                </div>
              )}
              
              <div className="mb-6">
                {renderLabel('Message', 'message')}
                <Textarea 
                   id="message" 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   label={!isHome ? "Message" : ""} 
                   rows={4} 
                   className={inputClasses}
                />
              </div>
              
              <Button type="submit" className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-lg font-bold`}>
                Submit
              </Button>
            </form>
          </div>
          
          {/* Right Column */}
          {!isHome && (
            <div className="lg:pl-12">
              <Heading level="h2" size="3xl" className="mb-8 font-bold">
                We Want To Hear From You!
              </Heading>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="mr-4 text-green-600 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <Text className="font-medium">+971 58 836 4257</Text>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-green-600 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <Text className="font-medium">info@joabsolutions.com</Text>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-green-600 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <Text className="font-medium">AL GURG TOWER 3, Tayseer Business Center, P Floor, Office No. 60, Dubai, UAE</Text>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8 mb-8">
                <Heading level="h3" size="xl" className="mb-4 font-bold">
                  Working Hours
                </Heading>
                <Text className="mb-2">Monday to Friday - 9:00 AM to 6:00 PM</Text>
                <Text className="mb-6">Saturday - 12:00 PM to 4:00 PM</Text>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { name: 'facebook', bg: 'bg-green-800' },
                  { name: 'instagram', bg: 'bg-green-800' },
                  { name: 'linkedin', bg: 'bg-green-800' },
                  { name: 'youtube', bg: 'bg-green-800' },
                  { name: 'tiktok', bg: 'bg-green-800' }
                ].map((social) => (
                  <a key={social.name} href="#" className={`${social.bg} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}>
                     <span className="sr-only">{social.name}</span>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <circle cx="12" cy="12" r="10"/>
                     </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
