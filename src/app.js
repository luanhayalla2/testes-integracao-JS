const express = require('express');
const { produtos } = require('./produtos');
const { livros } = require('./livros');

const app = express();
app.use(express.json());

// --- ROTAS DE PRODUTOS ---
// GET /produtos/:id - Busca um produto pelo ID com validações
app.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Validação: ID deve ser um número não negativo
  if (isNaN(id) || id < 0) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  const produto = produtos.find(p => p.id === id);
  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  res.status(200).json(produto);
});

// --- ROTAS DE LIVROS ---
// GET /livros/:id - Busca um livro pelo seu ID
app.get('/livros/:id', (req, res) => {
  const livro = livros.find(l => l.id === parseInt(req.params.id));
  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livro);
});

// POST /livros - Cadastra um novo livro
app.post('/livros', (req, res) => {
  const { nome, autor, genero } = req.body;

  // Validação: Todos os campos são obrigatórios
  if (!nome || !autor || !genero) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const novoLivro = { 
    id: livros.length + 1, 
    nome, 
    autor, 
    genero 
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

module.exports = app;
