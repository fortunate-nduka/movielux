module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        gothic: ["trump-gothic, sans-serif"],
      },
      colors: {
        black3: "rgba(0,0,0,.3)",
      },
    },
  },
  plugins: [],
};
