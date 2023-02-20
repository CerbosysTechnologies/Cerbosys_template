/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('Image/header.png')",
        Emeve1: "url('Image/div (2).png')",
        Emeve2: "url('Image/div (1).png')",
      },
    },
  },
  plugins: [],
};
