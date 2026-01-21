'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ChevronRight } from 'lucide-react'
import Newsletter from '@/components/newsletter'

export default function Services() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Commercial Construction',
      description: 'Full-scale commercial construction services including office complexes, retail developments, and institutional buildings.',
      href: '/services/commercial-construction',
      features: [
        'Project planning and feasibility studies',
        'Construction management and oversight',
        'Quality assurance and compliance',
        'Budget and timeline management',
        'Safety and risk management'
      ]
    },
    {
      title: 'Architectural Design',
      description: 'Innovative architectural design solutions that balance aesthetics, functionality, and sustainability.',
      href: '/services/architectural-design',
      features: [
        'Conceptual design and visualization',
        'Detailed architectural drawings',
        'Building information modeling (BIM)',
        'Sustainable design practices',
        'Interior space planning'
      ]
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project management ensuring timely, cost-effective delivery of your vision.',
      href: '/services/project-management',
      features: [
        'Stakeholder coordination',
        'Schedule and budget management',
        'Resource planning and allocation',
        'Risk management strategies',
        'Progress reporting and documentation'
      ]
    },
    {
      title: 'Compliance & Regulatory',
      description: 'Expert guidance through building codes, regulations, and compliance requirements.',
      href: '/services/compliance',
      features: [
        'Building code compliance',
        'Planning permission support',
        'Regulatory documentation',
        'Health and safety compliance',
        'Environmental regulations'
      ]
    },
    {
      title: 'Building Renovation',
      description: 'Breathe new life into existing structures with our renovation and restoration expertise.',
      href: '/services/renovation',
      features: [
        'Structural assessment',
        'Heritage building restoration',
        'Modern upgrades and retrofitting',
        'Preservation of architectural integrity',
        'Minimal disruption methodology'
      ]
    },
    {
      title: 'Consulting Services',
      description: 'Strategic consulting services for complex projects and unique challenges.',
      href: '/services/consulting',
      features: [
        'Pre-construction consulting',
        'Value engineering analysis',
        'Sustainability audits',
        'Construction dispute resolution',
        'Expert testimony and documentation'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />

      {/* Services Hero */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-primary leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
            Comprehensive construction and architectural solutions tailored to meet your project's unique requirements.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300 space-y-6 animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/60">
                      <ChevronRight size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full mt-6 px-4 py-3 bg-primary/5 text-primary rounded-md font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-center">
                  Learn More
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif font-bold text-primary text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h4 className="font-serif font-bold text-primary">Consultation</h4>
              <p className="text-foreground/70 text-sm">Understanding your vision, requirements, and project scope.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h4 className="font-serif font-bold text-primary">Planning & Design</h4>
              <p className="text-foreground/70 text-sm">Developing comprehensive plans and innovative designs.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h4 className="font-serif font-bold text-primary">Execution</h4>
              <p className="text-foreground/70 text-sm">Expert implementation with rigorous quality control.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h4 className="font-serif font-bold text-primary">Handover</h4>
              <p className="text-foreground/70 text-sm">Seamless project completion with ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-serif font-bold text-primary">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Contact our team to discuss how Vylz can bring your construction and architectural vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
