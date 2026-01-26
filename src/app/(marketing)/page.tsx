import { heroContent, services, servicePageContent } from '@/data'
import { featuredTestimonials } from '@/data/testimonials'
import HeroSection from '@/components/sections/hero-section'
import ServicesGrid from '@/components/sections/services-grid'
import TestimonialsSection from '@/components/sections/testimonials-section'
import CTASection from '@/components/sections/cta-section'

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
        title="Ready to Start Your Digital Journey?"
        description="Let's discuss how we can help transform your business and achieve your digital goals."
        primaryCTA={{
          text: "Get Free Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View All Services",
          href: "/services"
        }}
        background="gray"
      />
    </>
  )
}