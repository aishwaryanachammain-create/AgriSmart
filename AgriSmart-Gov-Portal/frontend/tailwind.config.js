export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98FF98",
        accentBrown: "#8B5E3C",
        accentBlue: "#87CEEB",
        // Deep Botanical Design System Palette
        botanical: {
          canvas: "#081C15",
          glass: "#0D281F",
          "glass-translucent": "rgba(13, 40, 31, 0.75)",
          sage: "#A7F3D0",
          lime: "#84CC16",
          emerald: "#34D399",
          crimson: "#F43F5E",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
