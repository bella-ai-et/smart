'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { FAQ } from '@/types'
import { Heading, Text } from '@/components/ui/typography'
import Container from '@/components/ui/container'

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
}: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

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

      {showCategories && categories && categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-3">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="group"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Heading
                      level="h3"
                      size="md"
                      weight="semibold"
                      className="text-gray-900 group-hover:text-blue-700 transition-colors"
                    >
                      {faq.question}
                    </Heading>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all duration-300">
                      {openItems.has(index) ? (
                        <Minus className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <div
              ref={(el) => {
                contentRefs.current[index] = el
              }}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index) ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="bg-gradient-to-b from-blue-50 to-white border border-t-0 border-gray-200 rounded-b-xl px-5 py-4 -mt-1">
                <Text className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}