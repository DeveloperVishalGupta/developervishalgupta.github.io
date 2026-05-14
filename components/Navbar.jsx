'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { portfolioData } from '@/lib/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActiveLink = (href) => {
    return activeSection === href || (href === '#home' && activeSection === '')
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-glass border-b border-accent-green/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="#home" className="text-2xl font-grotesk font-bold">
              <span className="text-accent-green">VG</span>
              <span className="text-text-primary">.</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {portfolioData.navigation.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActiveLink(item.href) ? 'text-accent-green' : 'text-text-secondary hover:text-accent-green'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-green transition-transform origin-left ${
                    isActiveLink(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="px-6 py-2 rounded-lg bg-accent-green text-dark-900 font-semibold hover:bg-accent-green/90 transition-all duration-300 hover:shadow-glow"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-accent-green rounded"
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-accent-green rounded"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-accent-green rounded"
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-4 py-4 space-y-3 border-t border-accent-green/10">
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActiveLink(item.href)
                    ? 'text-accent-green'
                    : 'text-text-secondary hover:text-accent-green'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block w-full mt-4 px-4 py-2 rounded-lg bg-accent-green text-dark-900 font-semibold text-center hover:bg-accent-green/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
