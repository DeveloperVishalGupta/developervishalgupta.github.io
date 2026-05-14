'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import { portfolioData } from '@/lib/constants'
import { containerVariants, itemVariants, slideInLeftVariants } from '@/lib/animations'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { personalInfo, social } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [errors, setErrors] = useState({})

  // Initialize EmailJS on component mount
  if (typeof window !== 'undefined' && !window.emailJSInitialized) {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    window.emailJSInitialized = true
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const sendEmails = async (formDataToSend) => {
    const adminTemplateParams = {
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      userName: formDataToSend.name,
      userEmail: formDataToSend.email,
      userMobile: formDataToSend.mobile,
      message: formDataToSend.message,
      reply_to: formDataToSend.email,
      timestamp: new Date().toLocaleString(),
    }

    const userTemplateParams = {
      to_email: formDataToSend.email,
      userName: formDataToSend.name,
      userMobile: formDataToSend.mobile,
      adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      adminName: 'Vishal Gupta',
    }

    try {
      const adminEmailResult = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID,
        adminTemplateParams
      )

      if (adminEmailResult.status !== 200) {
        return {
          success: false,
          message: 'Your message could not be delivered to the admin. Please try again later.',
          adminEmailResult,
        }
      }

      let userEmailResult = null
      let userEmailError = null
      try {
        userEmailResult = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID,
          userTemplateParams
        )
      } catch (error) {
        console.error('Confirmation email failed:', error)
        userEmailError = error
      }

      return {
        success: true,
        adminEmailResult,
        userEmailResult,
        userEmailError,
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
        error,
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    const isValid = validateForm()
    if (!isValid) {
      return
    }

    setLoading(true)

    try {
      const result = await sendEmails(formData)

      if (!result.success) {
        setMessage({
          type: 'error',
          text: result.message || 'Failed to send message. Please try again later.',
        })
        return
      }

      if (result.userEmailError) {
        setMessage({
          type: 'warning',
          text: 'Your message was sent to the admin, but the confirmation email could not be delivered. Please check your email address or try again later.',
        })
      } else {
        setMessage({
          type: 'success',
          text: `Message sent successfully! A confirmation email has been sent to ${formData.email}.`,
        })
      }

      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      })
      setErrors({})

      setTimeout(() => setMessage({ type: '', text: '' }), 5000)
    } catch (error) {
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
              {contactItems.map((item, index) =>{
                return (
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
              )
              } )}
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
                <svg className="w-6 h-6 text-text-primary hover:text-accent-green transition-colors" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6 text-text-primary hover:text-accent-green transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.555V9h3.555v1.346h.05c.504-.954 1.738-1.954 3.588-1.954 3.117 0 5.515 2.041 5.515 6.441v5.619zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
               href={social.hackerrank}
                className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-lg hover:bg-accent-green/20 transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
              >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
             <path fill='#fff' d="M541.9 192C527.4 167 349.5 64 320.5 64C291.5 64 113.6 166.8 99.2 192C84.8 217.2 84.7 422.8 99.2 448C113.7 473.2 291.6 576 320.5 576C349.4 576 527.3 473.1 541.8 448C556.3 422.9 556.3 217 541.8 192zM380.5 478.2C376.5 478.2 339.6 442.4 342.5 439.5C343.4 438.6 348.8 438 360 437.7C360 411.5 360.6 369.1 360.9 351.4C360.9 349.4 360.5 348 360.5 345.6L280.6 345.6C280.6 352.7 280.1 381.8 282 418.5C282.2 423 280.4 424.5 276.3 424.4C266.2 424.4 256 424.3 245.9 424.3C241.8 424.3 240 422.8 240.2 418.2C241.1 384.8 243.2 334.2 240 205.5L240 202.3C230.3 201.9 223.6 201.3 222.7 200.5C219.8 197.6 257.2 161.8 261.2 161.8C265.2 161.8 302.4 197.6 299.5 200.5C298.6 201.4 291.6 202 282.7 202.3L282.7 205.5C280.3 231.3 280.7 285.1 280.1 310.9L360.4 310.9C360.4 306.3 360.8 276.2 359.2 227.3C359.1 223.9 360.2 222.1 363.4 222.1C374.5 222 385.6 222 396.6 222C400.1 222 401.2 223.7 401.1 227.4C397.4 418.7 400.4 405.3 400.4 437.7C409.3 438.1 417.2 438.7 418.1 439.5C421 442.4 384.5 478.2 380.5 478.2L380.5 478.2z"/>
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
            {message.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 border rounded-lg text-sm ${
                  message.type === 'success'
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : message.type === 'warning'
                    ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">
                    {message.type === 'success' && '✓'}
                    {message.type === 'warning' && '⚠'}
                    {message.type === 'error' && '✕'} {message.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMessage({ type: '', text: '' })}
                    className="text-xs font-semibold uppercase tracking-wide hover:underline"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}

            {/* Name Field */}
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Your Name {errors.name && <span className="text-red-400">*</span>}
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-accent-green/20 focus:border-accent-green focus:ring-accent-green/30'
                }`}
                placeholder="John Doe"
                whileFocus={{ scale: 1.01 }}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Your Email {errors.email && <span className="text-red-400">*</span>}
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-accent-green/20 focus:border-accent-green focus:ring-accent-green/30'
                }`}
                placeholder="john@example.com"
                whileFocus={{ scale: 1.01 }}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

             {/* Mobile Field */}
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Your Mobile {errors.mobile && <span className="text-red-400">*</span>}
              </label>
              <motion.input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                disabled={loading}
                className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-1 transition-all ${
                  errors.mobile
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-accent-green/20 focus:border-accent-green focus:ring-accent-green/30'
                }`}
                placeholder="123-456-7890"
                whileFocus={{ scale: 1.01 }}
              />
              {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
            </div>

          

            {/* Message Field */}
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Message {errors.message && <span className="text-red-400">*</span>}
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                rows={5}
                className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-1 transition-all resize-none ${
                  errors.message
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-accent-green/20 focus:border-accent-green focus:ring-accent-green/30'
                }`}
                placeholder="Tell me about your project..."
                whileFocus={{ scale: 1.01 }}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

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

export default Contact
