import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FormularioCliente from "../src/Components/FormularioCliente/FormularioCliente"
import { BrowserRouter } from "react-router-dom";


describe("Teste do componente FormularioCliente", () => {
  it('Deve exibir o botão "criar" ao adicionar um novo cliente', () => {
    render(
      <BrowserRouter>
        <FormularioCliente />
      </BrowserRouter>
    );
    const botao = screen.getByText('Criar');
    expect(botao).toBeInTheDocument();
  });

  it('deve permitir a inserção de nome no campo de texto', () => {
    render(
      <BrowserRouter>
        <FormularioCliente />
      </BrowserRouter>
    );

    const nomeInput = screen.getByPlaceholderText('Nome');
    fireEvent.change(nomeInput, { target: { value: 'Jane Doe' } });
    expect(nomeInput.value).toBe('Jane Doe');
  });

});