module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgrey: "#23282F", //darkModeで使用したい色を拡張定義
        classicblue: "#0F4C81",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
