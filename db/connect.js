const Sequelize = require('sequelize');
const mysql = require('mysql2')

function createDatabase() {
    // Conexão com mysql
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'senac'
    });

    // Cria o banco de dados
    connection.query(`CREATE DATABASE IF NOT EXISTS doeaki`, console.log('Banco de dados doeaki criado'));

    connection.end();
}

createDatabase();


// Conexão do sequelize ao mysql
const sequelize = new Sequelize(
    'doeaki',
    'root',
    'senac',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Autenticação para acessar o banco de dados
sequelize.authenticate().then(console.log("Conectado ao banco de dados doeki"));

module.exports = {
    Sequelize,
    sequelize
};
