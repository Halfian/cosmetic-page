export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-black-rich", "text-gold-500"],
  theme: { 
    extend: {
      colors: {
        "black-rich": "#0a0a0a",
        "gold-500": "#d4af37",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      letterSpacing: {
        wide: "0.05em",
        wider: "0.1em",
      },
      boxShadow: {
        luxury: "0 4px 20px rgba(0,0,0,0.6)",
      },
    }, 
  },
  plugins: [],
}
