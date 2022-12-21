/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '860px',
        // => @media (min-width: 860px) { ... }

        '2xl': '1430px',
        // => @media (min-width: 860px) { ... }
      },
    },
  },
  plugins: [],
}