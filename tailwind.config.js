/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/js/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      lineHeight: {
        0: "0",
        2: "0.5rem",
      },
      colors: {
        "amazon-black": "#131921",
        "amazon-grey": {
          100: "#ccc",
          200: "#666666",
        },
        "amazon-navy": "#232f3e",
        "off-white": "#f3f3f3",
        "amazon-yellow": "#ffd814",
      },
      fontSize: {
        "2xs": "0.7rem",
        icon: "0.6rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
  },
  plugins: [],
};
