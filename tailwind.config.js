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
      // screens: {
      //   // 'xs': '1600px',
      // },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
