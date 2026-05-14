'use client'

import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = 'center',
  gradient = true,
}) => {
  return (
    <motion.div
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      {subtitle && (
        <motion.p
          className="text-accent-green font-semibold text-lg mb-2"
          variants={fadeUpVariants}
          custom={0}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        className={`heading-lg mb-4 ${gradient ? 'gradient-text' : 'text-text-primary'}`}
        variants={fadeUpVariants}
        custom={1}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-text-secondary text-lg max-w-2xl mx-auto"
          variants={fadeUpVariants}
          custom={2}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
