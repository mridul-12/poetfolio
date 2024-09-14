/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(45deg, #f58529, #feda77, #dd2a7b, #8134af, #515bd4)",
      },
    },
  },
  plugins: [require("daisyui")],
};
