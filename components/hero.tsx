'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 500)
      setScrollOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = () => {
    const statsSection = document.querySelector('#stats')
    statsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-architecture.jpg"
          alt="Premium commercial architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Thin elegant overlay */}
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-wide animate-fade-in">
            Commercial Excellence
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Distinguished architectural and construction services crafted with precision and heritage, delivering premium commercial projects across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-white font-medium rounded-sm hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
              Explore Our Work
            </button>
            <button className="px-8 py-3 border-2 border-white/80 text-white font-medium rounded-sm hover:bg-white/10 transition-all duration-300 hover:border-white">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 cursor-pointer"
          style={{ opacity: scrollOpacity }}
          onClick={scrollToSection}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60 text-sm font-light tracking-wide">SCROLL TO EXPLORE</p>
            <ChevronDown size={20} className="text-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
