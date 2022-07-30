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
          secondary: "#222",
          accent: "#111111",
          neutral: "#FFFFFF",
          info: "#252525",
          error: "#FA5C5C",
        },
      },
      {
        light: {
          // primary: "#ffffff",
          primary: '#023',
          secondary: "#D3D3D3",
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
