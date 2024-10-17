/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Definições de fontes personalizadas
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'], // Exemplo de fonte sans-serif
      serif: ['Georgia', 'serif'],               // Exemplo de fonte serif
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
        dark: '#111111', 
        darkBlue: '#090c11',
        blueOne: '#063664',
        bluePool: '#4ce1e5',
        lightBlue: '#37cfd6'
      },
      
  
    },
  },
  
  
  plugins: [],
}

