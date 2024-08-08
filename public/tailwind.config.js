/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        quaternary: '#your-desired-color', // Vervang dit door de gewenste kleur
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // andere plugins...
  ],
}
