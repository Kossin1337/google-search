module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBackground: "#121212",
        lightBackground: "#fefefe",
        darkText: "#121212",
        lightText: "#fefefe",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
