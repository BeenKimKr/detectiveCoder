module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-main': '#55b4b7',
        'custom-main-hover': '#0b7285',
      },
    },
    screens: {
      sm: '640px',
      // // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // // => @media (min-width: 1024px) { ... }
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
