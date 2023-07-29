/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        
        primary: "#1AC5B0",
        primaryDark:"#149D8C",
        accentblue: "#37ebf3",
        accentpurple: "#9370db",
        accentpink: "#e455ae",
        accentneonpurple: "#cb1dcd",
        accentyellow:"#fdf500",
        accentmaroon:"#710000",
        accentlightgrey: "#d1c5c0",
        accentdarkgrey: "#272932"
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      }
    },
  },
  plugins: [],
}

