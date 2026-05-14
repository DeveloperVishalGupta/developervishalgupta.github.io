/**
 * Advanced Contact Component Example
 * Uses emailConfig utilities for cleaner code organization
 *
 * This is an optional enhanced version of the Contact component
 * that uses utility functions from lib/emailConfig.js
 *
 * To use this version:
 * 1. Copy this code
 * 2. Replace the current components/Contact.jsx
 * 3. OR create a new component components/ContactAdvanced.jsx
 * 4. Import and use as needed
 */

'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants, slideInLeftVariants } from '@/lib/animations'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  EMAIL_CONFIG,
  validateField,
  validateForm,
  isFormValid,
  sanitizeInput,
  prepareAdminEmailParams,
  prepareUserEmailParams,
} from '@/lib/emailConfig'

const ContactAdvanced = () => {
  const { personalInfo, social } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [errors, setErrors] = useState({})

  // Initialize EmailJS
  if (typeof window !== 'undefined' && !window.emailJSInitialized) {
    emailjs.init(EMAIL_CONFIG.publicKey)
    window.emailJSInitialized = true
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Real-time validation
    if (errors[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    // Validate form
    const formErrors = validateForm(formData)
    if (!isFormValid(formErrors)) {
      setErrors(formErrors)
      return
    }

    setLoading(true)

    try {
      // Prepare email parameters
      const adminParams = prepareAdminEmailParams(formData)
      const userParams = prepareUserEmailParams(formData, 'Vishal Gupta')

      // Send admin notification
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.adminTemplateId,
        adminParams
      )

      // Send user confirmation
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.userTemplateId,
        userParams
      )

      setMessage({
        type: 'success',
        text: 'Message sent successfully! I\'ll get back to you soon.',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setErrors({})

      // Auto-hide success message
      setTimeout(() => setMessage({ type: '', text: '' }), 5000)
    } catch (error) {
      console.error('Email sending error:', error)
      setMessage({
        type: 'error',
        text: error.message || 'Failed to send message. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  const contactItems = [
    {
      icon: '✉️',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}?subject=Portfolio Inquiry&body=Hi Vishal, I would like to get in touch with you regarding...`,
    },
    {
      icon: '📱',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: '📍',
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ]

  return (
    <section id="contact" className="section-container">
      <SectionHeading
        subtitle="Get In Touch"
        title="Let's Connect"
        description="Have a project in mind? Let's discuss how I can help bring your ideas to life"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="flex flex-col space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeftVariants}
        >
          <div>
            <h3 className="heading-md mb-6">Contact Information</h3>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 group"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-lg group-hover:bg-accent-green/20 transition-colors text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">{item.label}</p>
                    <p className="text-text-primary font-semibold group-hover:text-accent-green transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-text-primary font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <motion.a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-lg hover:bg-accent-green/20 transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <svg
                  className="w-6 h-6 text-text-primary hover:text-accent-green transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-lg hover:bg-accent-green/20 transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <svg
                  className="w-6 h-6 text-text-primary hover:text-accent-green transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.555V9h3.555v1.346h.05c.504-.954 1.738-1.954 3.588-1.954 3.117 0 5.515 2.041 5.515 6.441v5.619zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-lg hover:bg-accent-green/20 transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <svg
                  className="w-6 h-6 text-text-primary hover:text-accent-green transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-card p-8 rounded-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {message.type === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"
              >
                ✓ {message.text}
              </motion.div>
            )}

            {/* Error Message */}
            {message.type === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                ✕ {message.text}
              </motion.div>
            )}

            {/* Form Fields */}
            {Object.keys(formData).map((fieldName) => (
              <div key={fieldName}>
                <label className="block text-text-secondary text-sm font-medium mb-2 capitalize">
                  {fieldName === 'message' ? 'Message' : fieldName}
                  {errors[fieldName] && <span className="text-red-400"> *</span>}
                </label>
                {fieldName === 'message' ? (
                  <motion.textarea
                    name={fieldName}
                    value={formData[fieldName]}
                    onChange={handleChange}
                    disabled={loading}
                    rows={5}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors[fieldName]
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                        : 'border-accent-green/20 focus:border-accent-green focus:ring-accent-green/30'
                    }`}
                    placeholder={`Tell me about your project...`}
                    whileFocus={{ scale: 1.01 }}
                  />
                ) : (
                  <motion.input
                    type={fieldName === 'email' ? 'email' : 'text'}
                    name={fieldName}
                    value={formData[fieldName]}
                    onChange={handleChange}
                    disabled={loading}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-1 transition-all ${
                      errors[fieldName]
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                        : 'border-accent-green/20 focus:border-accent-green focus:ring-accent-green/30'
                    }`}
                    placeholder={
                      fieldName === 'name'
                        ? 'John Doe'
                        : fieldName === 'email'
                          ? 'john@example.com'
                          : 'Project inquiry'
                    }
                    whileFocus={{ scale: 1.01 }}
                  />
                )}
                {errors[fieldName] && (
                  <p className="text-red-400 text-xs mt-1">{errors[fieldName]}</p>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                loading
                  ? 'bg-accent-green/50 text-dark-900/50 cursor-not-allowed'
                  : 'bg-accent-green text-dark-900 hover:bg-accent-green/90 hover:shadow-glow'
              }`}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block animate-spin">◌</span>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactAdvanced
