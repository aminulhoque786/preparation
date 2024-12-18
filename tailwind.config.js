/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/bner.png')",
        'footer-texture': "url('/src/assets/footer.png')",
      },
      fontFamily:{
        "dm":("Open Sans","sans-serif"),
        "paprika": ('Paprika','serif')
      }

    },
  },
  plugins: [],
}