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
          info: "#06c",
          mybtn: "#ff9501",
          error: "#FA5C5C",
          anchorbtn: '#06c',
        },
      },
      {
        dark: {
          primary: "#f5f5f7",
          secondary: "#ffff",
          accent: "#333",
          neutral: "#202124",
          info: "#1c4662",
          error: "#FB7185",
          anchorbtn: '#06c'
        },
      },


    ],
  },
  plugins: [require("daisyui")],
}
