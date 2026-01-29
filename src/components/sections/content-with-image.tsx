'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ContentWithImageProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  reverse?: boolean
  features?: string[]
  cta?: {
    text: string
    href: string
  }
}

export default function ContentWithImage({
  title,
  description,
  image,
  imageAlt = 'Service image',
  reverse = false,
  features,
  cta
}: ContentWithImageProps) {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Subtle animated background orbs */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-40" />
      <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-muted/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          reverse && "lg:grid-flow-col-dense"
        )}>
          {/* Image container */}
          <div className={cn("relative group", reverse && "lg:col-start-2")}>
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30">
              <Image 
                src={image || "/placeholder.svg"} 
                alt={imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          {/* Content container */}
          <div className={cn("flex flex-col justify-center", reverse && "lg:col-start-1")}>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              {title}
            </h2>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            
            {/* Features list */}
            {features && features.length > 0 && (
              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    {/* Animated checkmark container */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-300 border border-primary/30 group-hover/item:border-primary/50">
                        <svg 
                          className="w-4 h-4 text-primary stroke-[3px]" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-base text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* CTA Button */}
            {cta && (
              <div>
                <a
                  href={cta.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  {cta.text}
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
