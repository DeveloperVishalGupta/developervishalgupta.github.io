'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { portfolioData } from '@/lib/constants'

const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let currentCount = 0
    const increment = target / (duration * 60)
    const interval = setInterval(() => {
      currentCount += increment
      if (currentCount >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [isInView, target, duration])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-accent-green">
      {count}
      {suffix}
    </div>
  )
}

const Stats = () => {
  const { stats } = portfolioData

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="glass-card p-6 sm:p-8 text-center rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <AnimatedCounter target={parseInt(stat.value)} suffix={stat.suffix} />
            <p className="text-text-secondary mt-3 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
