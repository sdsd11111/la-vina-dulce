"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-background rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
          >
            <h3 className="font-semibold text-foreground pr-4">{item.question}</h3>
            <div
              className={`text-primary text-xl transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
