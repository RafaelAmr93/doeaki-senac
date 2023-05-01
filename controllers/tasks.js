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
        const voluntario = await Voluntarios.findOne({
            limite: 1,
            order: [['createdAt', 'DESC']]
        });
        console.log(voluntario.cpf);

        res.send(voluntario);

    } catch (error) {
        console.log(error);
    }
}

const deletarVoluntario = async (req, res) => {
    try {
        const id = req.params.id;
        await Voluntarios.destroy({
            where: { id: id }
        });
        console.log("Cadastro removido.")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    criarVoluntario,
    consultarVoluntario,
    deletarVoluntario
}

