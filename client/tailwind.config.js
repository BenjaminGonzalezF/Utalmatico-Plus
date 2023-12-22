/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'fondo': '#8bb7e2',
        'segundario': '#33CC66',
        'primario': '#A9A9A9',
        'cabecera': '#016ad3',
        'fondo-ramos': '#e8eded',
        'fondo-modulo': '#c3d6e4',
        
      }
    },
  },
  plugins: [],
}