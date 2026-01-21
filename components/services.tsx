'use client'

import React from 'react'
import Link from 'next/link'
import { Building2, Pencil, Hammer, ClipboardCheck, Phone } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const services: Service[] = [
  {
    icon: <Building2 size={32} />,
    title: 'Commercial Construction',
    description:
      'End-to-end construction management for premium commercial projects with meticulous attention to detail and timeline adherence.',
    href: '/services/commercial-construction',
  },
  {
    icon: <Pencil size={32} />,
    title: 'Architectural Design',
    description:
      'Contemporary design solutions that blend aesthetic excellence with functional precision for modern businesses.',
    href: '/services/architectural-design',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: 'Compliance & Certification',
    description:
      'Full regulatory adherence and industry certification support meeting all UK commercial standards.',
    href: '/services/compliance',
  },
  {
    icon: <Hammer size={32} />,
    title: 'Renovation',
    description:
      'Professional building renovation services that transform existing structures into modern, efficient, and sustainable spaces.',
    href: '/services/renovation',
  },
  {
    icon: <Phone size={32} />,
    title: 'Consulting',
    description:
      'Expert consulting services providing strategic guidance for construction, architectural, and development projects of all scales.',
    href: '/services/consulting',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-light text-accent tracking-widest uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
            Comprehensive Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 sm:p-10 border border-border/60 rounded-lg bg-card hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 text-accent group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base font-light text-foreground/70 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={service.href}
                className="mt-6 pt-6 border-t border-border/40 flex items-center text-primary hover:text-accent transition-colors group/link"
              >
                <span className="text-sm font-medium">Learn More</span>
                <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
