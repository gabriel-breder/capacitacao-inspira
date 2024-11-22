/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#3C22E8',
      secondary: '#6C6C6C',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

