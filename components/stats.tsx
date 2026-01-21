'use client'

import { useEffect, useState, useRef } from 'react'

interface Stat {
  number: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { number: 250, label: 'Projects Completed', suffix: '+' },
  { number: 20, label: 'Years of Excellence', suffix: '+' },
  { number: 150, label: 'Industry Partners', suffix: '+' },
  { number: 98, label: 'Client Satisfaction', suffix: '%' },
]

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (elapsed < duration) {
        const progress = elapsed / duration
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return (
    <div ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-primary">
      {count}
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-light text-accent tracking-widest uppercase mb-4">Our Impact</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Proven Excellence in Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start pb-6 border-b border-border/40"
            >
              <CountUp end={stat.number} suffix={stat.suffix} />
              <p className="mt-4 text-base font-light text-foreground/70 leading-relaxed max-w-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
