// Banco de dados em memória para livros
let livros = [
  { id: 1, nome: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia" }
];

// Função para resetar os dados (usada nos testes para manter o ambiente limpo)
const resetLivros = () => {
  livros.length = 0;
  livros.push({ id: 1, nome: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia" });
};

module.exports = { livros, resetLivros };
