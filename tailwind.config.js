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
        dark: "#0a0a0a",
        light: "#f5f5f5",
        secondaryDark: "#3c3c3c",
        secondaryLight: "#c4c4c4",
        tertiaryDark: "#666666",
        tertiaryLight: "#bababa",
        primaryColor: "#5b9a8b",
        secondaryColor: "#445069",
        tertiaryColor: "#ffa400",
        secondaryTertiaryColor: "#c83e4d",

        primaryColorShade1: "#528b7d",
        primaryColorShade2: "#497b6f",
        primaryColorShade3: "#406c61",
        primaryColorShade4: "#375c53",
        secondaryColorShade1: "#3d485f",
        secondaryColorShade2: "#364054",
        secondaryColorShade3: "#30384a",
        secondaryColorShade4: "#29303f",
        tertiaryColorShade1: "#e69400",
        tertiaryColorShade2: "#cc8300",
        tertiaryColorShade3: "#b37300",
        tertiaryColorShade4: "#996200",
        secondaryTertiaryColorShade1: "#b43845",
        secondaryTertiaryColorShade3: "#a0323e",
        secondaryTertiaryColorShade2: "#8c2b36",
        secondaryTertiaryColorShade4: "#78252e",

        
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
        circularLight: 'repeating-radial-gradient(rgba(86,80,105, 0.6) 2px, #f5f5f5 7px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(91,154,139, 0.6) 2px, #0a0a0a 7px, #0a0a0a 100px);',
        circularLightLarge: 'repeating-radial-gradient(rgba(86,80,105, 0.6) 2px, #f5f5f5 6px, #f5f5f5 80px);',
        circularDarkLarge: 'repeating-radial-gradient(rgba(91,154,139, 0.6) 2px, #0a0a0a 6px, #0a0a0a 80px);',
        circularLightMedium: 'repeating-radial-gradient(rgba(86,80,105, 0.6) 2px, #f5f5f5 5px, #f5f5f5 60px);',
        circularDarkMedium: 'repeating-radial-gradient(rgba(91,154,139, 0.6) 2px, #0a0a0a 5px, #0a0a0a 60px);',
        circularLightSmall: 'repeating-radial-gradient(rgba(86,80,105, 0.6) 2px, #f5f5f5 4px, #f5f5f5 40px);',
        circularDarkSmall: 'repeating-radial-gradient(rgba(91,154,139, 0.6) 2px, #0a0a0a 4px, #0a0a0a 40px);',
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

