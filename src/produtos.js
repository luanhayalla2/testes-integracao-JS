// Banco de dados em memória para produtos
let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 150 }
];

// Função para resetar os dados (usada nos testes para manter o ambiente limpo)
const resetProdutos = () => {
  produtos.length = 0;
  produtos.push(
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 }
  );
};

module.exports = { produtos, resetProdutos };
