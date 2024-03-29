/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#09173C",
        secondary: "#0d0439",
      },
      animation: {
        slideOutUp: "slideOutUp .50s ease-in-out",
        slideInDown: "slideInDown .75s ease-in-out",
        rotate: "rotate 10s linear infinite",
        shootingStar: "shootingStar 2s linear",
      },
      keyframes: {
        slideOutUp: {
          from: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
          to: {
            opacity: 0,
            visibility: "hidden",
            transform: "translate3d(0, -100%, 0)",
          },
        },
        slideInDown: {
          from: {
            transform: "translate3d(0, -120%, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
