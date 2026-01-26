'use client'

import { useState } from 'react'
import type { FAQ } from '@/types'
import { Heading, Text } from '@/components/ui/typography'
import Container, { Grid } from '@/components/ui/container'
import Card from '@/components/ui/card'

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQ[]
  categories?: string[]
  showCategories?: boolean
  cols?: 1 | 2
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
  categories,
  showCategories = false,
  cols = 2
}: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const filteredFaqs = showCategories && selectedCategory !== 'All'
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <Container size="lg" padding="lg">
      <div className="text-center mb-16">
        <Heading level="h2" size="4xl" weight="bold" className="mb-4">
          {title}
        </Heading>
        {description && (
          <Text size="xl" className="text-gray-600 max-w-3xl mx-auto">
            {description}
          </Text>
        )}
      </div>

      {/* Category Filter */}
      {showCategories && categories && categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <Grid cols={cols} gap="lg">
        {filteredFaqs.map((faq, index) => (
          <Card
            key={index}
            padding="lg"
            hover={false}
            className="cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Heading 
                  level="h3" 
                  size="lg" 
                  weight="medium" 
                  className="mb-3 text-left"
                >
                  {faq.question}
                </Heading>
                
                {openItems.has(index) && (
                  <Text className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </Text>
                )}
              </div>
              
              <div className="ml-4 flex-shrink-0">
                <div className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors ${
                  openItems.has(index) ? 'border-blue-600' : ''
                }`}>
                  <div className={`w-2 h-2 rounded-full bg-blue-600 transition-transform ${
                    openItems.has(index) ? 'scale-100' : 'scale-0'
                  }`} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Grid>

      {/* CTA */}
      <div className="text-center mt-16">
        <Text size="lg" className="text-gray-600 mb-6">
          Still have questions?
        </Text>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </Container>
  )
}