/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const RotateY = plugin(function ({ addUtilities}) {
  addUtilities({
    ".rotate-y-full":{
      transform:"rotateY(180deg)"
    },
    ".backface-hidden":{
      backfaceVisibility : 'hidden'
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },
  })
})
module.exports = {
  content: [
            './src/**/*.{js,jsx,ts,tsx}',
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
          ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sofia: ['SofiaSans', 'sans'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratb: ['Montserrat-Black','sans-serif']
      }
    },
  },
  plugins: [
    RotateY,
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
  ],
}
