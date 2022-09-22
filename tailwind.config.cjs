/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
        sans: ['Inter', 'sans-serif']
    },
    extend: {

        backgroundImage: {
              galaxy: "url('/Fundo.png')",
              'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 48.94%, #E1D55D 44.57%)',
              'game-gradient': 'linear-gradient(100deg, rgba(62, 2, 92, 0.3 ) 2.2%, rgba(0,0,0, 1) 95.78%  )'
        }

    },
    scale:{
      '0':'0',
      '25':'.25',
      '50':'.5',
      '75':'.9',
      '80':'.8',
      '90':'.95'
    }
  },
  plugins: [],
}
