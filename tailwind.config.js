/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0f172a',
          800: '#111827',
          700: '#1e293b',
          600: '#334155',
        },
        accent: {
          green: '#22c55e',
          'green-dark': '#16a34a',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#cbd5e1',
        },
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '16px',
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(34, 197, 94, 0.3), 0 0 20px rgba(34, 197, 94, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 10px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.3)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        glow: '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-lg': '0 0 40px rgba(34, 197, 94, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
      },
    },
  },
  plugins: [],
}
