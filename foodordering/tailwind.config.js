/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      Hero: "url('images/foodhero.png')",
      Order: "url('images/food2.png')",
      
    },
  },
  plugins: [],
}