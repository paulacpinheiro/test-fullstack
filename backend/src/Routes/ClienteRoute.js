const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/clientes', (req, res) => {
  db.all('SELECT * FROM clientes', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar clientes', error: err.message });
    }
    res.json(rows);
  });
});

router.get('/clientes/:id', (req, res) => {
  const { id } = req.params;
  console.log("Buscando cliente com ID:", id);

  db.get('SELECT * FROM clientes WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error("Erro ao buscar cliente:", err);
      return res.status(500).json({ message: 'Erro ao buscar cliente', error: err.message });
    }
    if (!row) {
      console.log("Cliente não encontrado para o ID:", id);
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    console.log("Cliente encontrado:", row);
    res.json(row);
  });
});

router.post('/clientes', (req, res) => {
  const { nome, email, cpf, telefone, status } = req.body;
  
  if (!nome || !email || !cpf || !telefone || !status) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const query = 'INSERT INTO clientes (nome, email, cpf, telefone, status) VALUES (?, ?, ?, ?, ?)';
  db.run(query, [nome, email, cpf, telefone, status], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Erro ao criar cliente', error: err.message });
    }
    res.status(201).json({ id: this.lastID, nome, email, cpf, telefone, status });
  });
});

router.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, telefone, status } = req.body;

  if (!nome || !email || !cpf || !telefone || !status) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const query = 'UPDATE clientes SET nome = ?, email = ?, cpf = ?, telefone = ?, status = ? WHERE id = ?';
  db.run(query, [nome, email, cpf, telefone, status, id], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Erro ao atualizar cliente', error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json({ id, nome, email, cpf, telefone, status });
  });
});

router.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM clientes WHERE id = ?';
  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Erro ao deletar cliente', error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente deletado com sucesso' });
  });
});

module.exports = router;
