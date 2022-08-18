/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#000",
          secondary: "#FFFFFF",
          accent: "#111111",
          neutral: "#FFFFFF",
          info: "#000",
          error: "#FA5C5C",
          mytext: '#f5f5f7',
          anchorbtn: '#06c',
        },
      },
      {
        light: {
          primary: "#f5f5f7",
          secondary: "#000",
          // accent: "#404040",
          accent: "#1c4662",
          neutral: "#FFFFFF",
          info: "#0C4A6E",
          error: "#FB7185",
          mytext: '#1d1d1f',
          anchorbtn: '#06c'
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
