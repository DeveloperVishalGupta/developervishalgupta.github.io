'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants, hoverLiftVariants } from '@/lib/animations'

const Projects = () => {
  const { projects } = portfolioData
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section-container">
      <SectionHeading
        subtitle="Portfolio"
        title="Featured Projects"
        description="Showcasing some of my best work built with modern technologies"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass-card overflow-hidden group"
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -8 }}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-dark-700">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.logo ||project.image || '/images/software-development.png'}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain object-center"
                />
              </motion.div>

              {/* Tech Stack Badge Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-accent-green/20 border border-accent-green/40 rounded text-xs text-accent-green"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="heading-sm mb-2 line-clamp-1 text-text-primary group-hover:text-accent-green transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4 line-clamp-4">
                {project.description}
              </p>

              {/* All Technologies */}
              <div className="mb-4 pb-4 border-b border-accent-green/10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-dark-700 rounded text-xs transition-colors text-text-secondary text-center"
                      whileHover={{ bg: '#22c55e', color: '#22c55e' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-xs text-text-secondary font-semibold mb-2">Key Features:</p>
                <ul className="text-xs text-text-secondary space-y-1">
                  {project?.keyFeatures?.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-accent-green">→</span> {feature.title || feature}
                     
                    </li>
                  ))}
                  {project?.keyFeatures?.length > 2 && (
                    <li className="text-accent-green text-xs">+{project.keyFeatures.length - 2} more...</li>
                  )}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => openModal(project)}
                  variant="outline"
                  className="flex-1 text-sm py-2"
                >
                  View More
                </Button>
                <Button
                  href={project.liveUrl}
                  variant="primary"
                  className="flex-1 text-sm py-2"
                  external
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-dark-800 p-6 rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-text-primary">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-text-secondary hover:text-accent-green"
              >
                ✕
              </button>
            </div>

            <div className="relative h-64 mb-4">
              <Image
                src={selectedProject.image || '/images/software-development.png'}
                alt={selectedProject.title}
                fill
                className="object-contain rounded"
              />
            </div>

            <p className="text-text-secondary mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent-green/20 border border-accent-green/40 rounded text-sm text-accent-green">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Key Features:</h3>
              <ul className="text-text-secondary space-y-1">
                {selectedProject?.keyFeatures?.map((feature, idx) => (
                  <li key={idx} className=" items-center gap-2">
                    <span className="text-accent-green">→</span> {feature.title || feature}
                    {feature.items &&<div className="ml-6 mt-1 d-flex">
                       <li>
                        
                        <span>{feature.items?.map((item, idx) => (
                          <div key={idx}><span className="text-amber-400 mx-2">→</span> {item}</div>
                        ))}</span>
                      </li>
                    </div>}
                  </li>
                ))}
              </ul>
            </div>
              <div className="mb-4">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Project Impact:</h3>
              <p className="text-text-secondary">
                {selectedProject.projectImpact}
              </p>
            </div >
               
              

            <div className="flex gap-3">
              <Button
                href={selectedProject.liveUrl}
                variant="primary"
                className="flex-1"
                external
              >
                Live Demo
              </Button>
              <Button
                href={selectedProject.githubUrl}
                variant="secondary"
                className="flex-1"
                external
              >
                GitHub
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects
