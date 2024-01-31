/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg-light": "#F1FAF3",
        "color-bg-dark": "#193D2D",
        "color-text-light": "#E0F3E7",
        "color-text-dark": "#173729",
        "color-nav-light": "#C9EAD5",
        "color-nav-dark": "#1B4332",
        "color-primary-light": "#B7E4C7",
        "color-primary-dark": "#40916C",
        "color-accent-light": "#74C69D",
        "color-accent-dark": "#2D6A4F",
      }
    },
  },
  plugins: [],
}

