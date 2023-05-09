const {
    Sequelize,
    sequelize
} = require('./connect.js');

// Voluntarios
const Voluntarios = sequelize.define('voluntarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    nascimento: {
        type: Sequelize.STRING
    },
    genero: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.BIGINT
    },
    email: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.INTEGER
    },
    cep: {
        type: Sequelize.INTEGER
    },
    endereco: {
        type: Sequelize.STRING
    }
});

// Cria a tabela voluntarios
Voluntarios.sync({ force: true });

// Desastre natural
const Desastre = sequelize.define('desastre', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.TEXT
    }
});

// Cria a tabela desastres
Desastre.sync({ force: true });

module.exports = Voluntarios;