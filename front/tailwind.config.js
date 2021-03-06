module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-main': '#55B4B7',
        'custom-main-hover': '#0b7285',
        'custom-sub': '#c4c4c4',
        'custom-sub-hover': '#868e96',
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
      fontFamily: {
        noto: ['Noto Sans KR', 'sans-serif'],
        fred: ['Fredoka One', 'sans-serif'],
        irop: ['Iropke Batang', 'sans-serif'],
        jua: ['Jua', 'sans-serif'],
      },
      backgroundImage: {
        clouds: "url('/public/imgs/clouds.jpeg')",
      },
    },
    screens: {
      sm: '640px',
      // // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
