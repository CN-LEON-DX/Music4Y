module.exports = {
  content: ["./views/**/*.pug", "./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
