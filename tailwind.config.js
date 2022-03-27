const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'mono': ['Source Code Pro', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'sm': '0.9rem',
      'base': '1rem',
      'lg': '2rem',
      'xl': '2.5rem',
      '2xl': '3rem',
      '3xl': '4rem'
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#AAFFFF',
        accent: '#C8FFFF',
        card: '#8CFFFF',
        link: '#2A00FF',
        action: {
          primary: '#B38368',
          secondary: '#FFDCC7'
        },
      }
    }
  },
  variants: {
    extend: {},
  }
}
