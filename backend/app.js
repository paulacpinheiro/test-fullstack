const express = require('express');
const db = require('./db');
const app = express();
const clienteRoute = require('./src/Routes/ClienteRoute');

app.use(express.json());

app.use('/cliente', clienteRoute);

module.exports = app;