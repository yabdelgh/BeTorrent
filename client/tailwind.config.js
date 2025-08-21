const colors = require('./src/utils/Colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      rubik: ['var(--font-rubik)', 'sans-serif'],
      raleway: ['var(--font-raleway)', 'sans-serif'],
    },
    extend: { colors },
  },
  plugins: [],
};
