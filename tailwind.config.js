module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        black3: "rgba(0,0,0,.3)",
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "spin-reverse": {
          "0%": {
            transform: "rotate(0deg)",
          },

          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
        "spin-reverse": "spin-reverse 0.6s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
