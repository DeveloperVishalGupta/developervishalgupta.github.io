'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/common/SectionHeading'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'
// import GoogleReviews from './GoogleReviews'

const Testimonials = () => {
  const { testimonials } = portfolioData

  return (
    <section className="section-container">
      {/* <GoogleReviews  /> */}
      <SectionHeading
        subtitle="Reviews"
        title="What People Say"
        description="Kind words from clients and collaborators I've worked with"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="glass-card p-8 rounded-2xl flex flex-col"
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -8 }}
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  ⭐
                </motion.span>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-text-secondary mb-6 flex-1 italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-accent-green/10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-700 flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22%3E%3Ccircle cx=%2224%22 cy=%2224%22 r=%2224%22 fill=%22%231e293b%22/%3E%3C/svg%3E'
                  }}
                />
              </div>
              <div>
                <p className="font-semibold text-text-primary">{testimonial.author}</p>
                <p className="text-sm text-text-secondary">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Reviews Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href="https://g.page/r/CW3hgYx7S9E8EBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-accent-green text-dark-900 font-semibold rounded-lg hover:bg-accent-green/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          View More Reviews
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

export default Testimonials

