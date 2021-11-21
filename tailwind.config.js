module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'sp-green': '#1DB954',
      'sp-active-green': '#1FC258',
      'sp-black': '#181818',
      'sp-sidebar-color': '#040306'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'sp-green': '#1DB954',
      'sp-active-tab': '#181818'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
