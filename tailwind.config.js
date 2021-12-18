module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifo: "'Pacifico', cursive",
        archivo: "'Archivo Narrow', sans-serif",
        alternate: "'Montserrat Alternates', sans-serif",
        orbitron: "'Orbitron', sans-serif"
      }
    },
  },
  plugins: [
     require('tailwind-scrollbar'),
  ],
}
