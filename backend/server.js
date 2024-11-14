const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientesRouter = require('./src/Routes/ClienteRoute');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', clientesRouter);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;