/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0d1b2a',
          800: '#1b263b',
          700: '#34405a',
          600: '#4d5978',
          500: '#4D5978',
          400: '#6A79A0',
          300: '#8F9AB7',
          200: '#BBC2D3',
          100: '#E7E9EF',
        },
        neutral: {
          100: '#F8F4F1',
          200: '#F2E9E3',
          300: '#E8DAD4',
          400: '#DBC6BD',
        },
      },
      fontFamily: {
        sans: 'Switzer, system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
