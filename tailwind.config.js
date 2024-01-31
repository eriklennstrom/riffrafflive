/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      maxHeight: {
        500: "31rem",
      },
      colors: {
        red: {
          400: "#FF5570",
        },
        layer: {
          1: "rgba(255,255,255,0)",
          2: "rgba(255,255,255,0.05)",
          3: "rgba(255,255,255,0.07)",
          4: "rgba(255,255,255,0.09)",
          5: "rgba(255,255,255,0.11)",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
  },
  plugins: [],
};
