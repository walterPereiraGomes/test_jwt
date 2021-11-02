const { CONNECTION } = require('../helpers/connections')

const find = async (filter) => await CONNECTION._user.findAll({ raw: true, where: filter});

module.exports = {
    find
}