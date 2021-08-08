// tailwind.config.js
module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      },
      colors: {
        'luna-gray': {
          50: "#F5F6FF",
          100: "#B1B3C5",
          200: "#6E7191",
          300: "#2E2E3B"
        },
        'luna-blue': {
          100: "#2C66F7",
          200: "#1A1A4E",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
