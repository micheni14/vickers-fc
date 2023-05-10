/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        container: "80%",
        mobile: "90%",
      },
      colors: {
        ourRed: "#9f1c0a",
        ourYellow: "#d6b51a",
        ourGreen: "#54943e",
      },
    },
  },
  plugins: [],
};
