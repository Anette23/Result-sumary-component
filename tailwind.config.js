/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js,jsx}",
  ],
  theme: {
   
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        white: "hsl(0, 0%, 100%)",
        paleBlue: 'hsl(221, 100%, 96%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
        paragraph:"hsla(241, 100%, 85%)",
        reaction:"hsla(0, 100%, 67%, .1)",
        memory:"hsla(39, 100%, 56%, .1)",
        verbal:"hsla(166, 100%, 37%, .1)",
        visual:"hsla(234, 85%, 45%, .1)",
      },
    },
  
  plugins: [],
}
