module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage:{
        'quoteToolBg':"url('/src/assets/warehouse.jpg')"
      },
      colors: {
        fuchsia: {
          450:'#ee3ec9',
        },
        neutral: {
          250:'#f2f2f0',
        }
      },
      dropShadow: {
        'heroTitle': '5px 5px 0px #00ffff',
        'navBarTitle': '2px 2px 0px #00ffff',
        'cardHover': '3px 3px 0px #00ffff',
      },
      height: {
        'card': '260px',
        'contentHero': '30vh',
        '7/12': '59%',
      },
      padding: {
        'contentPageTop': '160px',
        'contentPageBottom': '80px',
      }
    }
  },
  plugins: [],
};
