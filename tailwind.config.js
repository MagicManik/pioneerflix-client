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
          secondary: "#FFFFFF",
          accent: "#111111",
          neutral: "#FFFFFF",
          info: "#06c",
          mybtn: "#ff9501",
          error: "#FA5C5C",
          mytext: '#f5f5f7',
          anchorbtn: '#06c',
        },
      },
      {
        dark: {
          primary: "#f5f5f7",
          secondary: "#000000",
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
