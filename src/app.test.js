const request = require('supertest'); // Biblioteca para testar requisições HTTP
const app = require('./app');         // Importa o nosso servidor Express

describe('Testes de Integração - API de Produtos', () => {
  
  // Teste 1: Verificar se a listagem funciona
  it('Deve listar todos os produtos com status 200', async () => {
    const res = await request(app).get('/produtos');
    
    expect(res.status).toBe(200);           // Verifica se o status é 200
    expect(Array.isArray(res.body)).toBe(true); // Verifica se o retorno é um array
    expect(res.body.length).toBeGreaterThan(0); // Verifica se o array não está vazio
  });

  // Teste 2: Verificar busca por ID existente
  it('Deve retornar um produto específico ao passar um ID válido', async () => {
    const res = await request(app).get('/produtos/1');
    
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Mouse Gamer'); // Verifica se o nome está correto
  });

  // Teste 3: Verificar erro ao buscar ID inexistente
  it('Deve retornar 404 ao buscar um produto inexistente', async () => {
    const res = await request(app).get('/produtos/999');
    
    expect(res.status).toBe(404);
    expect(res.body.mensagem).toBe('Produto não encontrado');
  });

});
