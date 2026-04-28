const express = require('express');
const produtos = require('./produtos');

const app = express();
app.use(express.json()); // Configura o Express para entender dados em formato JSON

// Rota GET para listar todos os produtos
app.get('/produtos', (req, res) => {
  // Retorna status 200 (OK) e a lista de produtos
  res.status(200).json(produtos);
});

// Rota GET para buscar um único produto pelo ID
app.get('/produtos/:id', (req, res) => {
  const { id } = req.params;
  // Procura o produto no array pelo ID
  const produto = produtos.find(p => p.id === parseInt(id));
  
  // Se não encontrar, retorna erro 404
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  
  // Se encontrar, retorna o produto
  res.status(200).json(produto);
});

// Exporta o app para que o Supertest possa testá-lo sem iniciar o servidor manualmente
module.exports = app;
