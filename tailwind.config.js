/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#FFFFFF',
      secondary: '#D9D9D9',
      background: '#1E1E1E',
      secondaryBackground: '#434343',
    },
    fontSize: {
      lg: '32px',
      base: '16px',
      sm: '14px',
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
