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
      transitionDuration: {
        '3000': '3000ms',
        '5000': '5000ms',
      },
      backgroundImage: {
        'login': "url('/src/assets/1.jpg')",
        'login2': "url('/src/assets/2.jpg')",
      },
      backgroundSize: "cover",
    },
  },
  plugins: [],
  corePlugins: {
    animation: false,
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
}