const userService = require('../services/users')

const login = async (data) => {
    return await userService.login(data)
}

module.exports = {
    login
}