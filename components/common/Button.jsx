'use client'

import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  disabled = false,
  external = false,
  ...props
}) => {
  const baseStyles =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer'

  const variants = {
    primary:
      'bg-accent-green text-dark-900 hover:bg-accent-green/90 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed',
    secondary:
      'border border-accent-green text-accent-green hover:bg-accent-green/10 disabled:opacity-50',
    ghost: 'text-text-primary hover:text-accent-green hover:border-b-2 hover:border-accent-green',
  }

  const variantClass = variants[variant] || variants.primary
  const combinedClass = `${baseStyles} ${variantClass} ${className}`

  if (href) {
    const targetProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <motion.a
        href={href}
        className={combinedClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        {...targetProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
