/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e58bbe',    // Primary color
        secondary: '#eea1cd',  // Secondary color
        'light-pink': '#f4b8da',
        'soft-pink': '#f9cfe7',
        'faint-pink': '#fce4f2',
      },
    },
  },
  plugins: [],
}
