const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./clientes.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});

db.run(`

  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    cpf TEXT NOT NULL UNIQUE,
    telefone TEXT NOT NULL UNIQUE,
    status TEXT CHECK(STATUS IN ('Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'))
  )
`);

module.exports = db;
