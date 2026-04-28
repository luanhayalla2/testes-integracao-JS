const express = require('express');
const livros = require('./livros');

const app = express();
app.use(express.json());

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

  // Validação de Dados: Todos os campos são obrigatórios
  if (!nome || !autor || !genero) {
    return res.status(400).json({ erro: "Campos obrigatórios: nome, autor e genero" });
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
