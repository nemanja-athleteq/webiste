/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#c7f043',
        'bg-dark': '#0f0f0f',
        'text-white': '#ffffff',
        'text-gray': '#c1c1c1',
        'text-light-gray': '#bfbfbf',
      },
      maxWidth: {
        'container': '1512px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
