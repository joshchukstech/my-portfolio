/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-100': 'var(--color-dark-100)',
        'dark-200': 'var(--color-dark-200)',
        'dark-300': 'var(--color-dark-300)',
        'dark-400': 'var(--color-dark-400)',
        'purple': 'var(--color-purple)',
        'pink': 'var(--color-pink)',
        'blue': 'var(--color-blue)',
      }
    },
  },
  plugins: [],
}
