/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#b3ceff',
          200: '#80adff',
          300: '#4d8dff',
          400: '#1a6cff',
          500: '#0B3D91', // Primary blue
          600: '#0a3277',
          700: '#08265d',
          800: '#051a42',
          900: '#030d28',
        },
        accent: {
          50: '#fff0eb',
          100: '#ffe1d6',
          200: '#ffc2ad',
          300: '#ffa485',
          400: '#FF6B35', // Accent orange
          500: '#ff4d0d',
          600: '#cc3e0a',
          700: '#992f08',
          800: '#661f05',
          900: '#331003',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};