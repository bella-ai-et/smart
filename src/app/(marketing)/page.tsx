import { heroContent, services } from '@/data'
import { faqs, faqCategories } from '@/data/faq'
import HeroSection from '@/components/sections/hero-section'
import ServicesGrid from '@/components/sections/services-grid'
import CTASection from '@/components/sections/cta-section'
import FAQSection from '@/components/sections/faq-section'
import ContactForm from '@/components/sections/contact-form'
import { Heading, Text } from '@/components/ui/typography'
import Button from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <HeroSection data={heroContent} />
      
      <ServicesGrid
        title="Our Services"
        description="Comprehensive digital solutions tailored to your business needs"
        services={services}
        showPricing={false}
      />
      
      <CTASection
        background="light"
        centered={true}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Heading 
            level="h2" 
            size="3xl" 
            weight="bold" 
            className="mb-6 text-gray-900"
          >
            Book Your <span className="text-blue-600">Free Business Setup</span> Consultation Today
          </Heading>
          
          <Text className="mb-8 text-gray-600 text-lg">
            Book a free call with a senior <span className="font-bold text-gray-900">business set up consultant in Dubai</span> today. Get clarity on your next steps, know exactly what it'll cost, and walk away with a custom setup plan.
          </Text>
          
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
            href="/contact"
          >
            Let's Talk
          </Button>
        </div>
      </CTASection>
      
      <FAQSection 
        title="Frequently Asked Questions"
        description="Everything you need to know about setting up your business in Dubai."
        faqs={faqs}
        categories={faqCategories}
        showCategories={true}
      />
      
      <ContactForm variant="home" />
    </>
  )
}
