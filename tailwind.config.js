

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#222b45',
        btnDark: '#192038',
        hoverDark: '#151a30',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
