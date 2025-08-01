// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['"Satisfy"', 'cursive'],
        lobster: ['"Lobster"', 'cursive'],
        courgette: ['"Courgette"', 'cursive'],
      },
      backgroundImage: {
        // 'denim-gradient': 'linear-gradient(to right, #312e81, #6b21a8, #1e40af)', 
        'denim-gradient': 'linear-gradient(to right, #0c2448ff, #1e40af, #312e81)',
        'denim-gradients': 'linear-gradient(to bottom, #0c2448ff, #1e40af, #312e81)',
        'denim-footer-gradient': 'linear-gradient(to right, #312e81, #6b21a8, #1e40af)',
         none: 'none',
        // Matches from-indigo-900, via-purple-800, to-blue-700
      },
       colors: {
        'denim': '#091F92',
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // ensure Tailwind scans your files
};
