const request = require('supertest');
const app = require('../server');


describe('Teste API de clientes', () => {
  it('Rota GET/api/clientes - Retornar lista de clientes', async () => {
    const res = await request(app).get('/api/clientes');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('Rota POST /api/clientes - Deve criar um novo cliente', async () => {
    const novoCliente = {
      nome: 'Jhon Doe',
      email: 'jhon@teste.com',
      cpf: '123.456.789-33',
      telefone: '(62) 99547-6834',
      status: 'Ativo'
    };

    const res = await request(app)
      .post('/api/clientes')
      .send(novoCliente);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email');
    expect(res.body.nome).toBe(novoCliente.nome);
  });   
})  