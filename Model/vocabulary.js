const Sequelize = require('sequelize');
const connection = require('../database/connection')


const Vocabulary = connection.define('vocabulary', {
    word: {
        type: Sequelize.STRING,
        allowNull: false
    },
    translate: {
        type: Sequelize.STRING,
        allowNull: false
    },
})


Vocabulary.sync({force: false}).then(() => {})

module.exports = Vocabulary;