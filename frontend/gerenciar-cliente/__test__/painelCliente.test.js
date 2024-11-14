import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PainelCliente from '../src/Components/PainelCliente/PainelCliente';
import { BrowserRouter } from 'react-router-dom';

const clientes = [
  { id: 1, nome: 'John Doe', email: 'john@email.com', cpf: '123.456.789-00', telefone: '(62) 99547-7780', status: 'Ativo' },
  { id: 2, nome: 'Jane Doe', email: 'jane@email.com', cpf: '741.852.963-15', telefone: '(62) 98571-6625', status: 'Inativo' },
];

describe('Teste do componente PainelCliente', () => {
  it('Deve renderizar lista de clientes', () => {
    render(
      <BrowserRouter>
        <PainelCliente clientes={clientes} />
      </BrowserRouter>
    );
    const titulo = screen.getByText('Painel de clientes');
    expect(titulo).toBeInTheDocument();
  });

  it('Deve exibir o botão de novo cliente', () => {
    render(
      <BrowserRouter>
        <PainelCliente clientes={clientes} />
      </BrowserRouter>
    );
    const botao = screen.getByText('Novo Cliente');
    expect(botao).toBeInTheDocument();
  });
});