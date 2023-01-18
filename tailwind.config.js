/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/Layouts/**/*.{js,ts,jsx,tsx}",
    "./src/commons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        floating: 'floating 3s ease-in-out infinite'
      },
      keyframes:{
        floating: {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}