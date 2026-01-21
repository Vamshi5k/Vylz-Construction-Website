'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  company: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Vylz delivered our office transformation with exceptional attention to detail. Their team understood our vision and executed it flawlessly.',
    author: 'James Mitchell',
    company: 'Turner Finance',
    role: 'Managing Director',
  },
  {
    quote: 'Working with Vylz was seamless. Their architectural expertise combined with meticulous project management ensured every deadline was met.',
    author: 'Sarah Chen',
    company: 'Apex Consulting',
    role: 'CEO',
  },
  {
    quote: 'The level of professionalism and craftsmanship demonstrated by Vylz set them apart. Highly recommend for any commercial project.',
    author: 'Christopher Wright',
    company: 'Heritage Development',
    role: 'Project Lead',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[activeIndex]

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-light text-accent tracking-widest uppercase mb-4">Client Voices</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl">
          <div className="p-10 sm:p-14 bg-background border border-border/60 rounded-lg transition-all duration-500 min-h-96">
            {/* Quote */}
            <blockquote className="mb-10">
              <p className="font-serif text-2xl sm:text-3xl font-light text-foreground leading-relaxed mb-6">
                "{current.quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-border/40 pt-8">
              <p className="font-medium text-foreground">{current.author}</p>
              <p className="text-sm text-foreground/60 font-light mt-1">
                {current.role}, {current.company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8 sm:mt-12">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-border/60 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>

            <div className="ml-auto flex gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-border/60 rounded-sm hover:border-primary hover:bg-muted transition-all duration-300"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 border border-border/60 rounded-sm hover:border-primary hover:bg-muted transition-all duration-300"
              >
                <ChevronRight size={20} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
