module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundimage: {
        'stardust': "url('/public/stardust.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
