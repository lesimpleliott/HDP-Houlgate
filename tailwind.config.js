export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F4F9FF",
          100: "#E3F7EB",
          200: "#B7E9CB",
          300: "#8BDBAB",
          400: "#5FCD8B",
          500: "#34A765",
          600: "#2D8F58",
          700: "#24774A",
          800: "#1B5F3C",
          900: "#12472E",
        },
        accent: "#E04A54",
        background: "#FBFBFB",
        textColor: "#444444",
        error: "#ef4444",
        success: "#22c55e",
      },
      fontFamily: {
        main: ["Roboto, sans-serif"],
        title: ["EB Garamond, serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-10px)" },
          "40%, 80%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        shake: "shake 300ms ease-in-out",
      },
      screens: {
        xsm: "450px",
      },
    },
  },
  plugins: [],
};
