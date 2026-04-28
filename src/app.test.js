const request = require('supertest');
const app = require('./app');
const { resetProdutos } = require('./produtos');
const { resetLivros } = require('./livros');

describe('Testes de Integração - API Completa (Produtos & Livros)', () => {
  
  // Resetar os bancos de dados em memória antes de cada teste
  beforeEach(() => {
    resetProdutos();
    resetLivros();
  });

  describe('🛒 Módulo de Produtos', () => {
    it('Deve retornar 200 para produto existente', async () => {
      const res = await request(app).get('/produtos/1');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: 1, nome: "Notebook", preco: 3500 });
    });

    it('Deve retornar 404 para produto inexistente', async () => {
      const res = await request(app).get('/produtos/999');
      expect(res.status).toBe(404);
      expect(res.body.erro).toBe("Produto não encontrado");
    });

    it('Deve retornar 400 para ID inválido', async () => {
      const res = await request(app).get('/produtos/abc');
      expect(res.status).toBe(400);
      expect(res.body.erro).toBe("ID inválido");
    });
  });

  describe('📚 Módulo de Livros', () => {
    it('Caminho feliz: Criar livro (POST)', async () => {
      const novo = { nome: "1984", autor: "George Orwell", genero: "Distopia" };
      const res = await request(app).post('/livros').send(novo);
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.nome).toBe(novo.nome);
      expect(res.body.autor).toBe(novo.autor);
    });

    it('Validação: Enviar POST sem autor deve retornar 400', async () => {
      const incompleto = { nome: "O Hobbit", genero: "Fantasia" };
      const res = await request(app).post('/livros').send(incompleto);
      
      expect(res.status).toBe(400);
      expect(res.body.erro).toBe("Todos os campos são obrigatórios");
    });

    it('Caminho triste: Buscar livro inexistente', async () => {
      const res = await request(app).get('/livros/999');
      expect(res.status).toBe(404);
      expect(res.body.erro).toBe("Livro não encontrado");
    });
  });

});
