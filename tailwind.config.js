/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'primary': '#61b3dc',
        'secondary': '#61dca3',
        'accent': '#2b4539',
      }
    },
  },
  plugins: [],
}
