/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        
        primary: "#9370db",
        primaryDark: "#cb1dcd",
        accentgreen: "#1AC5B0",
        accentblue: "#37ebf3",
        accentpink: "#e455ae",
        accentyellow: "#fdf500",
        accentmaroon: "#710000",
        accentlightgrey: "#d1c5c0",
        accentdarkgrey: "#272932"
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(26,197,176, 0.4) 3px, #f5f5f5 7px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(26,197,176, 0.4) 3px, #1b1b1b 7px, #1b1b1b 100px);'
      }
    },
  },
  plugins: [],
}

