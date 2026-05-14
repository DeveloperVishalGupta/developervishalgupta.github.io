'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants, slideInLeftVariants } from '@/lib/animations'

const Experience = () => {
  const { experience } = portfolioData

  return (
    <section id="experience" className="section-container">
      <SectionHeading
        subtitle="My Journey"
        title="Professional Experience"
        description="Diverse roles that shaped my expertise in full stack development"
      />

      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative mb-12 last:mb-0"
            variants={itemVariants}
            custom={index}
          >
            {/* Timeline line */}
            {index !== experience.length - 1 && (
              <motion.div
                className="absolute left-7 top-20 w-1 h-2/3 bg-gradient-to-b from-accent-green to-accent-green/20"
                initial={{ height: 0 }}
                whileInView={{ height: '64%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            )}

            {/* Timeline dot */}
            <motion.div
              className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-14 h-14 rounded-full bg-dark-800 border-2 border-accent-green flex items-center justify-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green to-accent-green/60"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
              className="ml-24 glass-card p-6 sm:p-8 rounded-2xl"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="heading-sm text-accent-green">{exp.role}</h3>
                <span className="text-text-secondary text-sm mt-2 sm:mt-0">{exp.duration}</span>
              </div>

              <p className="text-text-secondary font-medium mb-4">{exp.company}</p>

              <p className="text-text-secondary mb-4">{exp.description}</p>
 {exp.keyResponsibilities && (
                <div className="mt-4">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Key Responsibilities:</h3>
<div className="flex flex-wrap gap-2">

                  {exp.keyResponsibilities.map((res) => (
                    <span key={res} className="px-3 py-1  text-sm ">
                      {res}
                    </span>
                  ))}
</div>
                </div>
              )}
              <ul className="space-y-2 mt-2">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Achievements:</h3>
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="text-text-secondary text-sm flex items-start ms-2 gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span className="text-accent-green mt-1">✓</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
               {exp.technologiesUsed && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologiesUsed.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent-green/20 border border-accent-green/40 rounded text-sm text-accent-green">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience
