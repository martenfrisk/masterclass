module.exports = {
  purge: {
    enabled: true,
    content: [
  './pages/**/*.jsx',
  './pages/*.jsx',
    ],
},
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
      }
    }
  },
  variants: {},
  plugins: [],
}
