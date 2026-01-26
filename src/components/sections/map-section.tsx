import React from 'react'
import Container from '@/components/ui/container'

export default function MapSection() {
  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <div className="w-full h-[450px] bg-gray-100 relative rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.938833405263!2d55.27429107604434!3d25.171738831991444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69ce5ec8f879%3A0x6959275b28d73bce!2sSmart%20Zone!5e0!3m2!1sen!2sae!4v1706606000000!5m2!1sen!2sae" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  )
}
