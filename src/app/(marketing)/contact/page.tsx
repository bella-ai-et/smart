import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/components/sections/hero-section'
import ContactForm from '@/components/sections/contact-form'
import MapSection from '@/components/sections/map-section'
import CostCalculator from '@/components/sections/cost-calculator'
import { contactHero, contactPageSEO } from '@/data/hero'

export const metadata: Metadata = {
  title: contactPageSEO.title,
  description: contactPageSEO.description,
  keywords: contactPageSEO.keywords,
  openGraph: {
    title: contactPageSEO.ogTitle,
    description: contactPageSEO.ogDescription,
    images: [contactPageSEO.ogImage || ''],
  },
}

export default function ContactPage() {
  return (
    <>
      <HeroSection data={contactHero} />
      <ContactForm />
      <MapSection />
      <CostCalculator />
    </>
  )
}
