module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'white-alt': '#CFD0D5',
        'primary-lighter': '#403644',
        'primary-dark': '#230E2F',
        'primary-darker': '#130819',
        'white': '#f5f5f4',
        'warm-gray-200': '#e8e5e4',
        'warm-gray-400': '#a3a3a3',
        'warm-gray-500': '#78716C',
      },
      fontFamily: {
        'Exo': ['"Exo"', 'sans-serif']
      },
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
