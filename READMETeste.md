# Sistema de Gerenciamento de Clientes

Este é um sistema de gerenciamento de clientes construído com React (frontend) e Node.js (backend). A aplicação permite visualizar, criar, editar e deletar informações de clientes. As principais informações dos clientes incluem Nome, Email, CPF, Telefone e Status.

## Estrutura do Projeto

O projeto está organizado em duas pastas principais:

backend: Contém o código do servidor e a API que gerencia os dados dos clientes.
frontend: Contém a interface gráfica da aplicação, desenvolvida com React.

## Funcionalidades

## Painel de Clientes

A tela de PainelClientes exibe uma lista de clientes em formato de card, com as seguintes informações:

1. Nome
2. Email
3. CPF
4. Telefone
5. Status (Ativo, Inativo, Aguardando Ativação, Desativado)

## A tela possui também

1. Um botão "Novo Cliente" para redirecionar à tela de criação de clientes.
2. Um contador de clientes exibindo a quantidade total de registros.
3. Um botão "Editar" em cada card, que redireciona para a tela de edição com os dados do cliente carregados.

## Formulário de Cliente

A tela FormularioCliente permite adicionar um novo cliente ou editar as informações de um cliente existente. As principais funcionalidades são:

Criar Cliente: Permite cadastrar um novo cliente.
Editar Cliente: Ao clicar em "Editar" no painel, os dados do cliente são carregados no formulário e o botão de ação muda para "Salvar".
Botão Voltar: Leva de volta ao painel de clientes.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

Node.js (versão 14 ou superior)
NPM

## Inicialização

## Backend

* Para iniciar o servidor backend, execute os seguintes comandos na pasta backend:
              cd backend
              npm start

## Frontend

* Para iniciar o servidor de desenvolvimento do frontend, execute os seguintes comandos na pasta frontend:

              cd frontend
              npm run dev

## Rotas

* GET /api/clientes: Retorna todos os clientes cadastrados.
* POST /api/clientes: Cria um novo cliente.
* PUT /api/clientes/
: Atualiza os dados de um cliente existente.
* DELETE /api/clientes/
: Deleta um cliente.

## Uso

* Acesse a aplicação pelo navegador em <http://localhost:5173>.
* Navegue até o Painel de Clientes para visualizar a lista de clientes cadastrados.
* Clique em "Novo Cliente" para adicionar um novo cliente.
* No formulário, insira as informações necessárias e clique em "Criar" para salvar.
* Para editar um cliente, clique em "Editar" no card do cliente correspondente. O formulário será preenchido automaticamente com as informações do cliente. Após as modificações, clique em "Salvar".
* Para voltar ao painel de clientes, clique no botão "Voltar" no formulário.
