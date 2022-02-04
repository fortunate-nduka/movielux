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
      // keyframes: {
      //   rotate: {
      //     "0%": {
      //       transform: "rotate(0)",
      //     },
      //     "100%": {
      //       transform: "rotate(360deg)",
      //     },
      //   },
      // },
      // animation: {
      //   rotate: "rotate .5s linear infinite",
      // },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
