module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: { //TODO Criar cor no tailwind, para melhorar no autocomplete (nome da cor => numero => #cor)
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius: { //TODO PAra sobrescrever uma propriedade do tailwind: Ex: Trocamos o md para 4px, antes era 6px
        md: "4px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), //TODO Traz algumas estilizações prontas para usar no formulário
    require('tailwind-scrollbar'), //TODO Arruam a scroll bar da caixa de text  
  ],
}
