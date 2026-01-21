'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
