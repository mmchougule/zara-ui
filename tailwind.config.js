/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Comic Sans MS', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-random': 'float-random 10s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'sparkle': 'sparkle 1.5s linear infinite',
        'pulse-shadow': 'pulse-shadow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'modal-up': 'modal-up 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-random': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(180deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(90deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'pulse-shadow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(244, 63, 94, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(244, 63, 94, 0)' },
        },
        'modal-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};