/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#000",
          secondary: "#000",
          accent: "#ededed",
          neutral: "#f5f5f7",
          info: "#c3bcbc",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#f5f5f7",
          secondary: "#ffff",
          accent: "#333",
          neutral: "#202124",
          info: "#c3bcbc",
          error: "#FB7185",
        },
      },


    ],
  },
  plugins: [require("daisyui")],
}
