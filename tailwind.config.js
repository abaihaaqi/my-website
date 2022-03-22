const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', ...defaultTheme.fontFamily.sans],
      'mono': ['Source Code Pro', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'heading': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
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
