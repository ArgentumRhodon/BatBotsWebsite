/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "system-ui": ["'Press Start 2P'", "system-ui"],
    },
    extend: {
      boxShadow: {
        retro: "0 10px 0 #cc4e00",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
