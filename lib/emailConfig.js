/**
 * Email configuration and utilities
 * Contains constants and helper functions for EmailJS integration
 */

export const EMAIL_CONFIG = {
  // Get these from environment variables
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  adminTemplateId: process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID,
  userTemplateId: process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
}

/**
 * Validation rules for contact form
 */
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: {
      required: 'Name is required',
      minLength: 'Name must be at least 2 characters',
      maxLength: 'Name must not exceed 100 characters',
      pattern: 'Name can only contain letters, spaces, hyphens, and apostrophes',
    },
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: {
      required: 'Email is required',
      pattern: 'Please enter a valid email address',
    },
  },
  subject: {
    required: true,
    minLength: 3,
    maxLength: 100,
    message: {
      required: 'Subject is required',
      minLength: 'Subject must be at least 3 characters',
      maxLength: 'Subject must not exceed 100 characters',
    },
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 5000,
    message: {
      required: 'Message is required',
      minLength: 'Message must be at least 10 characters',
      maxLength: 'Message must not exceed 5000 characters',
    },
  },
}

/**
 * Sanitize user input to prevent injection attacks
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''

  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Validate a single form field
 * @param {string} fieldName - Name of the field
 * @param {string} value - Value to validate
 * @returns {string} Error message or empty string
 */
export const validateField = (fieldName, value) => {
  const rules = VALIDATION_RULES[fieldName]
  if (!rules) return ''

  const sanitized = sanitizeInput(value)

  if (rules.required && !sanitized) {
    return rules.message.required
  }

  if (rules.minLength && sanitized.length < rules.minLength) {
    return rules.message.minLength
  }

  if (rules.maxLength && sanitized.length > rules.maxLength) {
    return rules.message.maxLength
  }

  if (rules.pattern && sanitized && !rules.pattern.test(sanitized)) {
    return rules.message.pattern
  }

  return ''
}

/**
 * Validate entire form
 * @param {Object} formData - Form data object
 * @returns {Object} Object with field names as keys and error messages as values
 */
export const validateForm = (formData) => {
  const errors = {}

  Object.keys(VALIDATION_RULES).forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName] || '')
    if (error) {
      errors[fieldName] = error
    }
  })

  return errors
}

/**
 * Check if form has any validation errors
 * @param {Object} errors - Errors object from validateForm
 * @returns {boolean} True if form is valid
 */
export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0
}

/**
 * Prepare email parameters for admin notification
 * @param {Object} formData - Form data
 * @returns {Object} Parameters for EmailJS
 */
export const prepareAdminEmailParams = (formData) => {
  return {
    to_email: EMAIL_CONFIG.adminEmail,
    from_name: sanitizeInput(formData.name),
    from_email: sanitizeInput(formData.email),
    subject: sanitizeInput(formData.subject),
    message: sanitizeInput(formData.message),
    reply_to: sanitizeInput(formData.email),
    timestamp: new Date().toLocaleString(),
  }
}

/**
 * Prepare email parameters for user confirmation
 * @param {Object} formData - Form data
 * @param {string} adminName - Admin name for signature
 * @returns {Object} Parameters for EmailJS
 */
export const prepareUserEmailParams = (formData, adminName = 'Vishal Gupta') => {
  return {
    to_email: sanitizeInput(formData.email),
    user_name: sanitizeInput(formData.name),
    subject: sanitizeInput(formData.subject),
    admin_email: EMAIL_CONFIG.adminEmail,
    admin_name: adminName,
  }
}
