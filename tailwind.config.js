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
    },
  },
  plugins: [],
};
