'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Newsletter from '@/components/newsletter'

export default function About() {
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
      
      {/* About Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-primary leading-tight">
            About Vylz
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            With over two decades of excellence in commercial construction and architectural services, Vylz has established itself as a distinguished leader in the UK industry.
          </p>
        </div>
      </div>

      {/* Company History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-primary">Our Story</h2>
              <p className="text-foreground/70 leading-relaxed">
                Founded in 2003, Vylz began with a simple vision: to deliver exceptional commercial construction and architectural services that exceed client expectations. What started as a small team of passionate professionals has grown into a premier firm with a proven track record of successful projects across the UK.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our commitment to quality, innovation, and client satisfaction has been the cornerstone of our success. We've had the privilege of working with leading corporations, government agencies, and private developers on projects ranging from office complexes to retail developments and institutional buildings.
              </p>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src="/about-company.jpg"
                alt="Vylz Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To deliver outstanding commercial construction and architectural solutions that combine innovation, sustainability, and uncompromising quality standards.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be recognized as the UK's most trusted partner for premium commercial construction and architectural services, setting industry benchmarks for excellence.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Values</h3>
              <ul className="text-foreground/70 space-y-2">
                <li>• Excellence in execution</li>
                <li>• Client-first approach</li>
                <li>• Sustainable practices</li>
                <li>• Team integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif font-bold text-primary text-center">Our Team</h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our team comprises experienced architects, engineers, project managers, and construction specialists who bring diverse expertise to every project. With combined experience exceeding 500 years, we have the knowledge and skills to deliver complex projects on time and within budget.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-serif font-bold text-primary">Design Excellence</h3>
              <p className="text-foreground/70">Our architects and designers create innovative solutions that balance aesthetics, functionality, and sustainability.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-serif font-bold text-primary">Technical Expertise</h3>
              <p className="text-foreground/70">Our engineers ensure structural integrity and compliance with all regulatory standards and best practices.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-serif font-bold text-primary">Project Management</h3>
              <p className="text-foreground/70">Experienced managers oversee every project phase to ensure timely completion and cost efficiency.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-serif font-bold text-primary">Quality Assurance</h3>
              <p className="text-foreground/70">Rigorous quality checks at every stage guarantee excellence and client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vylz */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif font-bold text-primary text-center">Why Choose Vylz</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary mb-2">20+ Years Experience</h4>
                <p className="text-foreground/70">Proven expertise across 250+ successful projects in commercial construction and architecture.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary mb-2">Premium Quality Standards</h4>
                <p className="text-foreground/70">Committed to uncompromising quality, innovative design, and sustainable building practices.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary mb-2">Client-Centric Approach</h4>
                <p className="text-foreground/70">Your vision drives our work. We listen, collaborate, and deliver solutions that exceed expectations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary mb-2">Comprehensive Services</h4>
                <p className="text-foreground/70">From initial design through project completion, we offer end-to-end construction and architectural services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
