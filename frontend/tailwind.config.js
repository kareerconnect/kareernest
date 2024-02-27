/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'login-bg': "url('blue.gif')",
    },
      backgroundColor: {
        'default-color': "#0052E1y"
      }
  }
  },
  plugins: [require("daisyui")],
}