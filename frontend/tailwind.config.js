/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    screens: {
      'xs': { 'min': '450px' },
      'sm': { 'min': '640px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1280px' }
    },
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/1.jpg')",
        'login2': "url('/src/assets/2.jpg')",
      },
      backgroundSize: "cover",
      
    },
  },
  plugins: [],
}