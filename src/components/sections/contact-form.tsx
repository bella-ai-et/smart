import React from 'react'
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
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isHome ? 'shadow-xl rounded-2xl overflow-hidden bg-white' : 'gap-12'}`}>
          {/* Left Column: Form */}
          <div className={isHome ? 'p-8 lg:p-12' : ''}>
             {isHome && (
                <>
                  <Heading level="h2" size="3xl" weight="bold" className="mb-4 text-gray-900">
                    Ready To Take The Next Step?
                  </Heading>
                  <Text className="mb-8 text-gray-600">
                    Call 800 SZONE 79663 or fill out the form to schedule a FREE consultation with one of our UAE Business Setup Gurus!
                  </Text>
                </>
             )}

            {isHome ? (
               // Home variant fields
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    {renderLabel('First Name', 'firstName')}
                    <Input 
                       id="firstName" 
                       placeholder="" 
                       className={inputClasses}
                    />
                 </div>
                 <div>
                    {renderLabel('Last Name', 'lastName')}
                    <Input 
                       id="lastName" 
                       placeholder="" 
                       className={inputClasses}
                    />
                 </div>
               </div>
            ) : (
               // Default variant fields
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <Input id="name" label="Name*" placeholder="" />
                 <Input id="phone" label="Phone*" placeholder="" />
               </div>
            )}
            
            {isHome ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    {renderLabel('Email', 'email')}
                    <Input 
                       id="email" 
                       placeholder="" 
                       className={inputClasses}
                    />
                 </div>
                 <div>
                    {renderLabel('Phone', 'phone')}
                    <Input 
                       id="phone" 
                       placeholder="" 
                       className={inputClasses}
                    />
                 </div>
               </div>
            ) : (
                <div className="mb-6">
                  <Input id="email" label="Email*" placeholder="" />
                </div>
            )}
            
            {!isHome && (
              <div className="mb-6">
                <Select 
                  id="service" 
                  label="Service Required" 
                  options={[
                    { label: 'Company Formation', value: 'company-formation' },
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
                 label={!isHome ? "Message" : ""} 
                 rows={4} 
                 className={inputClasses}
              />
            </div>
            
            {isHome && (
               <div className="bg-gray-50 p-2 rounded w-[240px] mb-6 border border-gray-200">
                  <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 border-2 border-gray-300 rounded-sm bg-white"></div>
                     <span className="text-sm text-gray-600">I'm not a robot</span>
                     <div className="flex-1 text-right">
                        <div className="text-[10px] text-gray-400">reCAPTCHA</div>
                     </div>
                  </div>
               </div>
            )}

            <Button className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-lg font-bold`}>
              Submit
            </Button>
          </div>
          
          {/* Right Column */}
          {isHome ? (
             <div className="relative h-full min-h-[400px] bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-lg font-medium">Woman with Laptop Image</span>
                </div>
             </div>
          ) : (
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
                  <Text className="font-medium">+971 58 541 7444</Text>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-green-600 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <Text className="font-medium">info@smartzone.ae</Text>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-green-600 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <Text className="font-medium">API Trio Office Tower, Office Suite 2701, Sheikh Zayed Road, Dubai, UAE, PO Box 49638</Text>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8 mb-8">
                <Heading level="h3" size="xl" className="mb-4 font-bold">
                  Working Hours
                </Heading>
                <Text className="mb-2">Monday to Friday - 9:00 AM to 6:00 PM</Text>
                <Text className="mb-6">Saturday - 12:00 PM to 4:00 PM</Text>
                <Text className="text-gray-500 text-sm">We are a subsidiary of S Z G Corporate Services L.L.C.</Text>
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
