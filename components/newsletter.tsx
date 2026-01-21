'use client'

import React from "react"

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error('Please enter your email address', {
        position: 'top-right',
      })
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('[v0] Newsletter subscription:', email)
      toast.success('Successfully subscribed to our newsletter!', {
        duration: 4000,
        position: 'top-right',
      })
      setEmail('')
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.', {
        duration: 4000,
        position: 'top-right',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-4">
          <Mail className="w-12 h-12 opacity-80" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold">
          Stay Updated
        </h2>
        <p className="text-lg opacity-90 leading-relaxed">
          Subscribe to our newsletter for industry insights, project updates, and expert tips on commercial construction and architecture.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-md bg-primary-foreground text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        <p className="text-sm opacity-75">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
