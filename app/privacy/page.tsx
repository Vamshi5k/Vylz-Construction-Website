'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Privacy() {
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
          <h1 className="text-5xl font-serif font-bold text-primary">Privacy Policy</h1>
          <p className="text-foreground/60">Last updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">1. Introduction</h2>
            <p className="text-foreground/70 leading-relaxed">
              Vylz is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and engage with our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">2. Information We Collect</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We may collect information about you in a variety of ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Information you voluntarily provide through forms or inquiries</li>
              <li>Information automatically collected when you visit our website (IP address, browser type, pages visited)</li>
              <li>Information related to projects you engage us to complete</li>
              <li>Communications you have with our team members</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">3. Use of Your Information</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>To provide and improve our services</li>
              <li>To communicate with you regarding projects and inquiries</li>
              <li>To send periodic emails with updates and information</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">4. Disclosure of Information</h2>
            <p className="text-foreground/70 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">5. Data Security</h2>
            <p className="text-foreground/70 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">6. Cookies and Tracking</h2>
            <p className="text-foreground/70 leading-relaxed">
              Our website may use cookies to enhance user experience and analyze website traffic. You can control how cookies are handled through your browser settings. Some website features may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">7. Links to Other Websites</h2>
            <p className="text-foreground/70 leading-relaxed">
              Our website may contain links to other websites that are not operated by Vylz. This Privacy Policy does not apply to external websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any external websites before providing personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">8. Your Rights</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Under applicable data protection laws, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability and other rights as defined by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">9. Children's Privacy</h2>
            <p className="text-foreground/70 leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">10. Changes to This Privacy Policy</h2>
            <p className="text-foreground/70 leading-relaxed">
              Vylz may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by updating the "Last Updated" date at the top of this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">11. GDPR Compliance</h2>
            <p className="text-foreground/70 leading-relaxed">
              For individuals in the European Union, Vylz complies with the General Data Protection Regulation (GDPR). We collect and process personal data only with your consent or as necessary to fulfill our contractual obligations and legal responsibilities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">12. Contact Us</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="font-serif font-bold text-primary">Vylz Privacy Officer</p>
              <p className="text-foreground/70">Email: privacy@vylz.co.uk</p>
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
