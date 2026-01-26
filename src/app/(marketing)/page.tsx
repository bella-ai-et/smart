import { heroContent, services } from '@/data'
import { featuredTestimonials } from '@/data/testimonials'
import { faqs, faqCategories } from '@/data/faq'
import HeroSection from '@/components/sections/hero-section'
import ServicesGrid from '@/components/sections/services-grid'
import TestimonialsSection from '@/components/sections/testimonials-section'
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
      
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear what our clients have to say about their experience working with us."
        testimonials={featuredTestimonials}
        featured={true}
        cols={3}
      />
      
      <CTASection
        background="light"
        centered={false}
        image={
          <div className="relative h-[400px] lg:h-[500px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
               <span className="text-lg font-medium">Strategy / Chess Image</span>
             </div>
          </div>
        }
      >
        <div>
          <Heading 
            level="h2" 
            size="3xl" 
            weight="bold" 
            className="mb-6 text-gray-900"
          >
            Book Your <span className="text-blue-600">Free Business Setup</span> Consultation Today
          </Heading>
          
          <Text className="mb-6 text-gray-600 text-lg">
            Book a free call with a senior <span className="font-bold text-gray-900">business set up consultant in Dubai</span> today and:
          </Text>
          
          <ul className="space-y-4 mb-8">
            {[
              "Get clarity on your next steps",
              "Know exactly what it'll cost",
              "Walk away with a custom setup plan"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <Text className="text-gray-700">{item}</Text>
              </li>
            ))}
          </ul>
          
          <div className="space-y-4 mb-8">
            <Text className="text-gray-900">
              <span className="font-bold">Dubai is full of opportunity.</span> Let's make sure you're ready to take it.
            </Text>
            
            <Text className="text-gray-900">
              <span className="font-bold">Book now.</span> We'll handle the rest.
            </Text>
          </div>
          
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
