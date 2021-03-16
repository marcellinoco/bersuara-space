module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#C447FF',
        },

        gray: {
          DEFAULT: '#777777',
          dark: '#423F3F',
          light: '#D9D9D9',
        },

        white: {
          dark: '#F4F4F4',
        },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
