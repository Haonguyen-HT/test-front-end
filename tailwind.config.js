/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      helvetica: ['Helvetica Neue', 'sans-serif'],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#1C2434',
      primary: '#3C50E0',
      peachyPink: '#F7BDCC',
      deepNavy: '#17344F',
      duskyTeal: '#596F78',
      pastelPink: '#F5B4BB',
      skyBlue: '#7BB8F1',
      haftWhite: 'rgba(255, 255, 255, 0.50)',
    },
    letterSpacing: {
      custom: '1.52px',
    },
    extend: {},
  },
  plugins: [],
};
