/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      // Aquí puedes agregar estilos personalizados para el selector .home
      // Por ejemplo, usando la opción `addComponents` en un plugin
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.hero': {
          '@apply absolute inset-0 md:left-80 left-24 md:opacity-50 opacity-20': {},
        },
        '.img-hero': {
          '@apply object-cover w-full h-full': {}
        },
        '.img-shadow': {
          '@apply absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent': {}
        }
      });
    },
  ],
}

