
const Sequelize = require('sequelize');
const connection = new Sequelize('vocabulary', 'root','147803106', {
host: 'localhost',
dialect: 'mysql',
timezone: "-03:00"
})


module.exports = connection;