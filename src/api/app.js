const express = require('express');
const path = require('path');
const routes = require('../routes');
const error = require('../meddlewares/error');

const app = express();

app.use(express.json());
app.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(error);

module.exports = app;
