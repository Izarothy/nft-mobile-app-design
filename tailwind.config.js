module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#101113',
        'primary-violet': '#854BFE',
      },
    },
    fontFamily: {
      monumentExtended: ['Monument Extended', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
