const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { sequelize: sequelize } = require('./db/connect');
const {
    criarVoluntario,
    consultarVoluntario
} = require('./controllers/tasks');
const formidable = require('formidable');
const port = 5000

// Define o body parser do express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use(express.static("/public"));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/signup.html'));

});
app.post('/perfil', function (req, res) {
    criarVoluntario(req, res);
    //consultarVoluntario(req, res);
});

// Checa se o servidor local está ativo e em qual porta
app.listen(port, (req, res) => {
    console.log(`Escutando na porta ${port}...`);
});

// Conecta ao banco de dados
sequelize.authenticate().then(console.log("Conectado ao banco de dados doeki"));

// Pede ao express servir o conteúdo da pasta public (front)
app.use(express.static('public'));