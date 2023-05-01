const express = require('express');
const app = express();
const path = require('path');
const { sequelize: sequelize } = require('./db/connect');
const {
    criarVoluntario,
    consultarVoluntario,
    deletarVoluntario
} = require('./controllers/tasks');
const port = 5000

// Define o body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// O express servirá todo conteúdo estático dentro de public
app.use(express.static(path.join(__dirname, 'public')));


// Rotas
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/signup.html'));

});
app.post('/cadastrado', function (req, res) {
    criarVoluntario(req, res);
    res.sendFile(path.join(__dirname, '/public/cadastrado.html'));
});

app.get('/perfil', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/profile.html'));
});

app.get('/perfil/voluntario', function (req, res) {
    consultarVoluntario(req, res);
});
app.get('/perfil/deletar:id', function (req, res) {
    deletarVoluntario(req, res);
});
app.get('/perfil/deletado', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/deletado.html'));
})
app.get('/desastre', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/desastre.html'));
})

// Checa se o servidor local está ativo e em qual porta
app.listen(port, () => {
    console.log(`Escutando na porta ${port}...`);
});

// Conecta ao banco de dados
sequelize.authenticate().then(console.log("Conectado ao banco de dados doeki"));