/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['"DM Sans"', 'system-ui', 'sans-serif'],
        'accent': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        // Warm Budapest-inspired palette
        'terracotta': {
          50: '#fef7f4',
          100: '#fdeee8',
          200: '#fad9cd',
          300: '#f5bda5',
          400: '#ed9571',
          500: '#e47347',
          600: '#d15a2d',
          700: '#ae4824',
          800: '#8e3d23',
          900: '#753621',
          950: '#3f190e',
        },
        'sage': {
          50: '#f6f7f4',
          100: '#e9ece4',
          200: '#d4dac9',
          300: '#b5c0a4',
          400: '#96a47f',
          500: '#788862',
          600: '#5e6c4c',
          700: '#4a553d',
          800: '#3d4634',
          900: '#343c2e',
          950: '#1a1f16',
        },
        'cream': {
          50: '#fdfcf9',
          100: '#faf8f1',
          200: '#f4efe0',
          300: '#ebe3c9',
          400: '#dfd1a9',
          500: '#d2bc88',
          600: '#c5a56a',
          700: '#b48d55',
          800: '#937349',
          900: '#785f3e',
          950: '#40311f',
        },
        'charcoal': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
