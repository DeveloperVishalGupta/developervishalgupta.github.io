'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'

const TechStack = () => {
  const { techStack, stats } = portfolioData

  const skillCategories = [
    { name: 'Frontend', skills: techStack.frontend },
    { name: 'Backend', skills: techStack.backend },
    { name: 'Database', skills: techStack.database },
    { name: 'Tools & DevOps', skills: techStack.tools },
  ]

  return (
    <section id="skills" className="section-container">
      <SectionHeading
        subtitle="My Expertise"
        title="Tech Stack"
        description="Technologies and tools I specialize in for building modern applications"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="glass-card p-6 sm:p-8 rounded-2xl"
            variants={itemVariants}
            custom={categoryIndex}
          >
            <h3 className="heading-md mb-6 text-accent-green">{category.name}</h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  className="skill-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (categoryIndex * category.skills.length + skillIndex) * 0.05,
                    duration: 0.3,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {[
          { icon: '📦', label: 'Projects', value: '10+' },
          { icon: '⏱️', label: 'Experience', value: '4+' },
          { icon: '👥', label: 'Users Served', value: '100+' },
          { icon: '📱', label: 'Responsive', value: '100%' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass-card p-6 text-center rounded-xl"
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-accent-green mb-1">{stat.value}</div>
            <div className="text-text-secondary text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TechStack
