// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
        naskh: ['Noto Naskh Arabic', 'serif'],
      },
      colors: {
        sepia: {
          bg: '#FBF0D9',
          text: '#4A3B32',
        },
      },
    },
  },
  plugins: [require('tailwindcss-flip')],
};
