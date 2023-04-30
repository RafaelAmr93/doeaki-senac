const Voluntarios = require('../db/models');

//const criarVoluntario = db.sequelize.define('voluntario')

const criarVoluntario = async (req, res) => {
    await Voluntarios.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        nascimento: req.body.nascimento,
        genero: req.body.genero,
        cpf: req.body.cpf,
        email: req.body.email,
        celular: req.body.celular,
        cep: req.body.cep,
        endereco: req.body.endereco
    })
        .then(() => {
            console.log('Sucesso ao inserir os dados no banco.');
        })
        .catch(error => {
            console.log('Erro ao inserir os dados no banco' + error);
        });
}

const consultarVoluntario = async (req, res) => {
    try {
        const voluntario = await Voluntarios.findOne(req.body.cpf);
        console.log(voluntario.cpf);
        res.send(`
        <div class="profile-card">
        <p>Nome</p>
        <p id="nome">${voluntario.nome}</p>
        <p>Data de nascimento</p>
        <p id="nascimento">${voluntario.nascimento}</p>
        <p>CPF</p>
        <p id="cpf">${voluntario.cpf}</p>
        <p>Email</p>
        <p id="email">${voluntario.email}</p>
        <p>Celular</p>
        <p id="celular">${voluntario.celular}</p>
        <p>CEP</p>
        <p id="cep">${voluntario.cep}</p>
      </div>
        `);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    criarVoluntario,
    consultarVoluntario
}

