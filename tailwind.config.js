/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue-bg-100': '#daf8e4',
      'brown-bg-500': '#946b2d',
      'grey-bg-300': '#f5f5f5',
      'grey-bg-500': '#5d5d5d',
      'blue-bg-700': '#005b96',
      'blue-bg-900': '#03396c',
      'white-font-100': '#ffffff',
      'white-font-300': '#f5faff',
      'black-font-500': '#333333',
      'black-font-700': '#111111',
      'red-error-100': '#ff0000',
      'red-error-200': '#bf0000',
      'black-error-700': '#400000',
      'black-error-900': '#000000'
    },
    fontFamily: {
      'abel': ['Abel', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'raleway': ['Roboto', 'sans-serif'],
      'dmsans': ['DM Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

