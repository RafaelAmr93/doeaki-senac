const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'doeaki',
    'root',
    'senac',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
