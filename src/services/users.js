const userRepository = require('../repositories/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../helpers/config')
const { RESPONSE_UNAUTHORIZED_LOGIN } = require('../helpers/util')

const login = async ({login, password}) => {
    const response = await userRepository.find({login})
    if(response.length > 0) {
        const [user] = response

        const authSuccess = await bcrypt.compare(password, user.password)
        if(authSuccess) {
            const token = jwt.sign({
                id: user.id
            },
            JWT_KEY,
            {
                expiresIn: "1h"
            });
            return {
                status: 200,
                body: {
                    message: 'Login successful!',
                    token
                }
            }
        }
    }
    return RESPONSE_UNAUTHORIZED_LOGIN
}

module.exports = {
    login
}