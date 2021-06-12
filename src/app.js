const express = require('express');
const app = express();

//conexão com o banco de dados
const db = require('../src/data/database');
db.connect()

app.use(express.json());

//chamar o arquivo de rotas pra fazer a rota raiz com app.use
const title = require('./routes/titleRoutes');
const studio = require('./routes/studioRoutes');

app.use('/titles', title);
app.use('/studios', studio);





module.exports = app;