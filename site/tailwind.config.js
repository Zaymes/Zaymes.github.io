/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-bg": "url('../public/james.jpeg')",
      },
      animation: {
        sliderr: 'sliderr 16s ease-in-out infinite',
        nosliderr: 'sliderr 0s ease-in-out infinite',
      },
      keyframes: {
        "sliderr": {
          "0%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-100%)" },
          "30%": { transform: "translateX(-100%)" },
          "45%": { transform: "translateX(-200%)" },
          "60%": { transform: "translateX(-200%)" },
          "75%": { transform: "translateX(-100%)" },
          "85%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "nosliderr": {
          "0%,100%": { transform: "translateX(0)" },
        }
      }
    },
  },
  plugins: [],
}
