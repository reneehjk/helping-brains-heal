/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        fontBlack: '#121212',  // font color black
        primaryBlue: '#125488',  // primary dark blue
        secondaryBlue: '#5BA3ED',  // secondary light blue
        newsBlue: '#2A93D5', // for news
        background: '#F7F9FC',  // background color
        lightGrey:'#BCBCBC',
      },
      fontFamily: {
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
        satoshiMedium: ['Satoshi-Medium', 'sans-serif'],
        erodeRegular: ['Erode-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}