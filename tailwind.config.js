const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sg: ['SG', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        fira: ['Fira', ...defaultTheme.fontFamily.sans],
        vt: ['VT', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
