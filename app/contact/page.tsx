'use client'

import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { toast } from 'react-hot-toast'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
})

export default function Contact() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('[v0] Form submitted:', values)
        toast.success('Message sent successfully! We will contact you soon.', {
          duration: 4000,
          position: 'top-right',
        })
        resetForm()
      } catch (error) {
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
          position: 'top-right',
        })
      }
    },
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 pb-10 px-4">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5" />
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Have a question or project in mind? We would love to hear from you. Contact our team today.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+44 7909 237165',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'iamshivanikale@gmail.com',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: 'London, UK',
              },
              {
                icon: Clock,
                label: 'Hours',
                value: 'Mon-Fri 9:00-17:00',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-medium text-foreground mb-2">{item.label}</h3>
                <p className="text-foreground/70 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div className="rounded-lg overflow-hidden h-full min-h-125">
              <img
                src="/contact-office.jpg"
                alt="Vylz Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">
                  Send us a Message
                </h2>
                <p className="text-foreground/70">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      {...formik.getFieldProps('name')}
                      className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-destructive text-sm mt-1">{formik.errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      {...formik.getFieldProps('email')}
                      className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-destructive text-sm mt-1">{formik.errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    {...formik.getFieldProps('phone')}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-destructive text-sm mt-1">{formik.errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('subject')}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project inquiry, consultation, etc."
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-destructive text-sm mt-1">{formik.errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...formik.getFieldProps('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-destructive text-sm mt-1">{formik.errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                >
                  {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
