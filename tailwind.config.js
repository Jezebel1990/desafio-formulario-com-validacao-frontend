/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    // Definições de fontes personalizadas
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']         
    },
    
    // Definições de breakpoints responsivos
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    
    // Extensão do tema, para adicionar customizações
    extend: {
      colors: {
        darkBlue: '#33414dcc',  // azul escuro
      },
      
      // Definição de imagens de fundo personalizadas
      backgroundImage: {
        site: "url('/src/assets/site.png')", 
      },
    },
  },
  

  plugins: [],
}

