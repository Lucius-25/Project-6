/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
         White: 'hsl(0, 0%, 100%)',
          Light_grayish: 'hsl(270, 3%, 87%)',
        Dark_grayish: 'hsl(279, 6%, 55%)',
      }
    },
  },
  plugins: [],
}

