/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './_components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1220px',
      '2xl': '1440px',
      '3xl': '1700px'
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: '#2190FF',
        black: {
          DEFAULT: '#000',
          100: '#0D1117',
          200: '#161B22',
          300: '#1F2428',
          400: '#242C38'
        },
        lightGreen: {
          100: '#E1F0DA',
          200: '#D4E7C5',
          300: '#BFD8AF',
          400: '#99BC85'
        },
        yellow: {
          DEFAULT: '#FAEF9B',
          100: '#F6D776'
        },
        darkGreen: {
          DEFAULT: '#12372A',
          100: '#436850'
        },
        waterBlue: {
          DEFAULT: '#647D87',
          100: '#6DA4AA'
        },
        grey: {
          100: '#969BA5',
          200: '#55616D'
        },
        white: {
          DEFAULT: '#FFF',
          400: '#A3B3BC',
          500: '#A4B8D5',
          800: '#D0DFFF'
        },
        purple: '#8C7CFF',
        pink: '#ED5FBD',
        violet: '#F16565',
        orange: '#FF964B'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
