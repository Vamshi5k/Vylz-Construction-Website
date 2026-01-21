'use client'

import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

const newsletterSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

export default function Footer() {
  const handleNewsletterSubmit = async (values: { email: string }, { resetForm }: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      toast.success('Subscribed to our newsletter!')
      resetForm()
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background pt-20 sm:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">Vylz</h3>
            <p className="text-background/70 font-light leading-relaxed mb-8 max-w-xs">
              Leading commercial construction and architectural services in the UK, delivering excellence for over 20 years.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-background/30 rounded-sm hover:border-accent hover:bg-accent/10 transition-all duration-300">
                <Linkedin size={18} className="text-background" />
              </a>
              <a href="#" className="p-3 border border-background/30 rounded-sm hover:border-accent hover:bg-accent/10 transition-all duration-300">
                <Twitter size={18} className="text-background" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-background mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-background/70 hover:text-background transition-colors font-light text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-medium text-background mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Commercial Construction', href: '/services/commercial-construction' },
                { label: 'Architectural Design', href: '/services/architectural-design' },
                { label: 'Project Management', href: '/services/project-management' },
                { label: 'Compliance', href: '/services/compliance' },
                { label: 'Renovation', href: '/services/renovation' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-background/70 hover:text-background transition-colors font-light text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-background mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+442012345678" className="text-background/70 hover:text-background transition-colors font-light text-sm">
                  +44 (0)20 1234 5678
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@vylz.co.uk" className="text-background/70 hover:text-background transition-colors font-light text-sm">
                  hello@vylz.co.uk
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70 font-light text-sm">London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 py-16">
          <div className="max-w-md mb-8">
            <h4 className="font-medium text-background mb-3">Newsletter</h4>
            <p className="text-background/70 font-light text-sm mb-6">
              Stay updated on industry insights and latest projects.
            </p>

            <Formik
              initialValues={{ email: '' }}
              validationSchema={newsletterSchema}
              onSubmit={handleNewsletterSubmit}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form className="flex gap-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-background/10 border border-background/30 rounded-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                    className="px-6 py-2 bg-accent text-background font-medium rounded-sm hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? '...' : 'Subscribe'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

          {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-background/60 font-light text-sm">
            © {currentYear} Vylz. All rights reserved.
          </p>
          <div className="flex gap-8 text-background/70 font-light text-sm">
            <a href="/privacy" className="hover:text-background transition-colors duration-300 flex items-center gap-2">
              <span>Privacy Policy</span>
            </a>
            <span className="text-background/40">|</span>
            <a href="/terms" className="hover:text-background transition-colors duration-300 flex items-center gap-2">
              <span>Terms & Conditions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
