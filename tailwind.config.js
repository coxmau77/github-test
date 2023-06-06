/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    fontFamily:{
      mi_fuente: ['Kurale'],
    },
    
    colors: {
      mi_color: 'rgb(255, 167, 0)',
      color_gradient:{
        100: '#87CEFA',
        200: '#7B68EE',
        300: '#0000FF'
      }
    },

    extend: {},
  },
  plugins: [],
}

