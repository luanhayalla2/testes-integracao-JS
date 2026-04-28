const request = require('supertest');
const app = require('./app_livros');

describe('Desafio Prático - API de Biblioteca (Livros)', () => {

  // Teste de Caminho Feliz: POST /livros
  it('Deve cadastrar um livro com sucesso e retornar 201', async () => {
    const novoLivro = { nome: "1984", autor: "George Orwell", genero: "Distopia" };
    const res = await request(app).post('/livros').send(novoLivro);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.nome).toBe(novoLivro.nome);
    expect(res.body.autor).toBe(novoLivro.autor);
  });

  // Teste de Validação de Dados: Falta campo obrigatório
  it('Deve retornar 400 se o campo autor estiver faltando no cadastro', async () => {
    const livroIncompleto = { nome: "O Hobbit", genero: "Fantasia" }; // Faltando autor
    const res = await request(app).post('/livros').send(livroIncompleto);

    expect(res.status).toBe(400);
    expect(res.body.erro).toBe("Campos obrigatórios: nome, autor e genero");
  });

  // Teste de Caminho Triste: GET /livros/:id inexistente
  it('Deve retornar 404 ao buscar um ID de livro não cadastrado', async () => {
    const res = await request(app).get('/livros/9999');
    expect(res.status).toBe(404);
    expect(res.body.erro).toBe("Livro não encontrado");
  });

});
