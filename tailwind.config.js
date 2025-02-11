/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Sansita: ["Sansita Swashed", "serif"],
        Poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
