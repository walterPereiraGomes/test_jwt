const connection = require('../db')

const find = async (filter) => await connection._user.findAll({ raw: true, where: filter});

module.exports = {
    find
}