module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "28rem",
        101: "32rem",
        102: "36rem",
        103: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
