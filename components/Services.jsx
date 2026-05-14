'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'

const Services = () => {
  const { services } = portfolioData

  const iconMap = {
    code: '💻',
    palette: '🎨',
    server: '🖥️',
    layout: '📊',
    smartphone: '📱',
    'shopping-cart': '🛒',
  }

  return (
    <section className="section-container bg-gradient-to-b from-dark-900/50 to-dark-900">
      <SectionHeading
        subtitle="What I Offer"
        title="Services"
        description="Comprehensive solutions tailored to elevate your digital presence"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="glass-card p-8 rounded-2xl group"
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}
          >
            {/* Icon */}
            <motion.div
              className="w-16 h-16 mb-4 text-4xl flex items-center justify-center bg-dark-700 rounded-xl group-hover:bg-accent-green/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              {iconMap[service.icon] || service.icon}
            </motion.div>

            {/* Content */}
            <h3 className="heading-sm mb-3 text-text-primary group-hover:text-accent-green transition-colors">
              {service.title}
            </h3>

            <p className="text-text-secondary leading-relaxed">{service.description}</p>

            {/* Arrow Indicator */}
            <motion.div
              className="mt-6 inline-flex items-center text-accent-green text-sm font-semibold gap-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              Learn More
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
