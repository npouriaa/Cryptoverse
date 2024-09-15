/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "max-sm": "360px",
      "max-sm2": "400px",
      "sm": "481px",
      "sm2": "580px",
      "md": "641px",
      "md2": "768px",
      "lg": "961px",
      "xl": "1025px",
      "2xl": "1250px",
    },
  },
  plugins: [],
};
