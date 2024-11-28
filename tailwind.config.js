/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "spacingEm-0-5": "var(--spacingEm-0-5)",
      },
      letterSpacing: {
        input: "var(--input-letter-spacing)",
      },
      // animation: {
      //   bgAlternate: "bgAlternate 2s alternate",
      // },
      // keyframes: {
      //   bgAlternate: {
      //     "0%": { backgroundColor: "#406c82" }, // initial background color
      //     "100%": { backgroundColor: "#213743" }, // end background color
      //   },
      // },
    },
  },
  plugins: [],
};
