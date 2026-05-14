'use client'

import { motion } from 'framer-motion'
import { hoverLiftVariants } from '@/lib/animations'

const Card = ({
  children,
  className = '',
  hoverable = true,
  onClick,
  variants = hoverLiftVariants,
  initial = 'initial',
  whileHover = 'hover',
  ...props
}) => {
  const baseClass = 'glass-card rounded-2xl p-6 sm:p-8'
  const hoverClass = hoverable ? 'glass-card-hover cursor-pointer' : 'glass-card'

  const CardComponent = hoverable ? motion.div : 'div'

  const componentProps = hoverable
    ? {
        variants,
        initial,
        whileHover,
        onClick,
        ...props,
      }
    : {
        className: `${baseClass} ${hoverClass} ${className}`,
        onClick,
        ...props,
      }

  if (hoverable) {
    return (
      <CardComponent className={`${baseClass} ${hoverClass} ${className}`} {...componentProps}>
        {children}
      </CardComponent>
    )
  }

  return (
    <div className={`${baseClass} ${hoverClass} ${className}`} {...componentProps}>
      {children}
    </div>
  )
}

export default Card
