/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    // themes: [
    //   {
    //     mytheme: {
    //       primary: "#000",
    //       secondary: "#222",
    //       accent: "#37cdbe",
    //       neutral: "#3d4451",
    //       "base-100": "#ffffff",
    //     },
    //   },
    //   "dark",
    //   "cupcake",
    // ],

    themes: [
      {
        dark: {
          primary: "#000",
          secondary: "#FFFFFF",
          accent: "#111111",
          neutral: "#FFFFFF",
          info: "#252525",
          error: "#FA5C5C",
        },
      },
      {
        light: {
          primary: "#EFD8BD",
          // primary: "#ffffff",
          secondary: "#000",
          // accent: "#404040",
          accent: "#1c4662",
          neutral: "#FFFFFF",
          info: "#252525",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
