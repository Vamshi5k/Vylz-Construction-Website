import { ReactNode } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceLayoutProps {
  title: string
  description: string
  image: string
  features: string[]
  benefits: { title: string; description: string }[]
  process: { step: number; title: string; description: string }[]
  children?: ReactNode
}

export default function ServiceLayout({
  title,
  description,
  image,
  features,
  benefits,
  process,
}: ServiceLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={false} />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-10 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            {title}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden h-96">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">
            Why Choose Our {title}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">
            Our Process
          </h2>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-serif font-bold text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Contact our team to discuss how we can help with your {title.toLowerCase()} needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
