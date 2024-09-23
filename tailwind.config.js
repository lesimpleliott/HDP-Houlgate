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
          500: "#36A765",
          600: "#2D8F58",
          700: "#24774A",
          800: "#1B5F3C",
          900: "#12472E",
        },
        secondary: "#E04A54",
        background: "#FBFBFB",
        textColor: "#444444",
      },
      fontFamily: {
        main: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [],
};
