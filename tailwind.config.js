module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        liberty: ["Liberty", "poppins", "sans-serif"],
      },
      colors: {
        black3: "rgba(0,0,0,.3)",
      },
      keyframes: {
        "round-reverse": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        round: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "round": "round 1.7s linear infinite",
        "round-reverse": "round-reverse 0.6s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
