// tailwind.config.js
module.exports = {
  content: ["./views/**/*.pug", "./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
