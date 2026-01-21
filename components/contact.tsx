'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required').min(2, 'Too short'),
  lastName: Yup.string().required('Last name is required').min(2, 'Too short'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  projectType: Yup.string().required('Please select a project type'),
  budget: Yup.string().required('Please select a budget range'),
  message: Yup.string().min(10, 'Message too short').required('Message is required'),
})

interface FormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Thank you for your inquiry. We will be in touch shortly.')
      resetForm()
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-light text-accent tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Start Your Project Today
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl font-light">
            Tell us about your project. Our team will review your requirements and get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="space-y-8">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="James"
                    />
                    <ErrorMessage name="firstName">
                      {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Mitchell"
                    />
                    <ErrorMessage name="lastName">
                      {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="james@company.com"
                    />
                    <ErrorMessage name="email">
                      {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Field
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+44 7909 237165"
                    />
                    <ErrorMessage name="phone">
                      {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Project Type and Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                    <Field
                      as="select"
                      name="projectType"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a project type</option>
                      <option value="office">Office Development</option>
                      <option value="retail">Retail Space</option>
                      <option value="industrial">Industrial Complex</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="mixed">Mixed Use</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="projectType">
                      {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                    <Field
                      as="select"
                      name="budget"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a budget range</option>
                      <option value="1m">Under £1M</option>
                      <option value="1-5m">£1M - £5M</option>
                      <option value="5-10m">£5M - £10M</option>
                      <option value="10-50m">£10M - £50M</option>
                      <option value="50m+">Over £50M</option>
                    </Field>
                    <ErrorMessage name="budget">
                      {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                  <ErrorMessage name="message">
                    {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                  </ErrorMessage>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}
