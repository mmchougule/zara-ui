/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Comic Sans MS', 'cursive'],
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 2s infinite",
        'pulse-shadow': "pulse-shadow 2s infinite",
      },
    },
  },
  plugins: [],
};