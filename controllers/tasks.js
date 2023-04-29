const Voluntarios = require('../db/models');
const db = require('../db/connect')

//const criarVoluntario = db.sequelize.define('voluntario')

const criarVoluntario = async (req, res) => {
    try {
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
        });
        console.log("Cadastrado");
    } catch (error) {
        res.send('Houve um erro durante o cadastro, tente novamente');
    }
}

const consultarVoluntario = async (req, res) => {
    try {
        const { cpf: cpfId } = req.params;
        const voluntario = await Voluntarios.findOne({ _cpf: cpfId })
        res.send(voluntario)
        console.log(voluntario.cpf)
    } catch (error) {

    }
}

module.exports = {
    criarVoluntario,
    consultarVoluntario
}

