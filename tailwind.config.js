/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color:{
          1:"#121212", // font color black
          2:"#125488", // primary dark blue 
          3:"#5BA3ED", // secondary light blue
          4:"F7F9FC", // background
        }
      },
      borderWidth: {
        DEFAULT: "8px",
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