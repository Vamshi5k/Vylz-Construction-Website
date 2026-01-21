'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Terms() {
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

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <h1 className="text-5xl font-serif font-bold text-primary">Terms & Conditions</h1>
          <p className="text-foreground/60">Last updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">1. Introduction</h2>
            <p className="text-foreground/70 leading-relaxed">
              These Terms and Conditions govern your use of the Vylz website and services. By accessing this website and engaging with our services, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">2. Services Description</h2>
            <p className="text-foreground/70 leading-relaxed">
              Vylz provides commercial construction and architectural services including but not limited to: project design, construction management, compliance consultation, and renovation services. All services are subject to individual project agreements and specifications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">3. Intellectual Property</h2>
            <p className="text-foreground/70 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of Vylz or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">4. Limitation of Liability</h2>
            <p className="text-foreground/70 leading-relaxed">
              To the fullest extent permitted by law, Vylz shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services, including but not limited to lost profits, data loss, or business interruption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">5. Project Agreements</h2>
            <p className="text-foreground/70 leading-relaxed">
              All commercial construction and architectural projects are subject to detailed project agreements. These agreements will specify project scope, timelines, deliverables, payment terms, and liability limitations specific to each engagement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">6. Payment Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              Payment terms for all services will be specified in the individual project agreement. Invoices are typically issued upon project milestones and are due within 30 days of invoice date unless otherwise agreed in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">7. Warranties Disclaimer</h2>
            <p className="text-foreground/70 leading-relaxed">
              While Vylz strives to provide accurate and high-quality services, this website and its content are provided on an "as is" basis. We make no warranties or representations regarding accuracy, completeness, or fitness for a particular purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">8. Indemnification</h2>
            <p className="text-foreground/70 leading-relaxed">
              You agree to indemnify and hold harmless Vylz from any claims, damages, losses, or expenses arising from your misuse of our website or violation of these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">9. Termination</h2>
            <p className="text-foreground/70 leading-relaxed">
              Vylz reserves the right to terminate services or access to this website at any time, with or without cause, and with or without notice. All provisions that should survive termination will continue in effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">10. Governing Law</h2>
            <p className="text-foreground/70 leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts located in England.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">11. Changes to Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              Vylz reserves the right to modify these Terms and Conditions at any time. Your continued use of the website following such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">12. Contact Information</h2>
            <p className="text-foreground/70 leading-relaxed">
              If you have questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="font-serif font-bold text-primary">Vylz</p>
              <p className="text-foreground/70">Email: info@vylz.co.uk</p>
              <p className="text-foreground/70">Phone: +44 (0) 20 XXXX XXXX</p>
              <p className="text-foreground/70">Address: London, United Kingdom</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
