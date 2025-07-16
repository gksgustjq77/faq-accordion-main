/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // redhat: ['"Red Hat Text"', "red-hat"],
      },
    },
    colors: {
      white: "hsl(0, 100%, 100%)",
      purple: {
        100: "hsl(275, 100%, 97%)",
        600: "hsl(292, 16%, 49%)",
        950: "hsl(292, 42%, 14%)",
        1000: "#AD28EB",
      },
    },
  },
  screens: {
    xs: "480px",
    md: "768px",
    lg: "1200px",
  },
  plugins: [scrollbar],
};
