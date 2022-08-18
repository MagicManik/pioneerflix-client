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
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
