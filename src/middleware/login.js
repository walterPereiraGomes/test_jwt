const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../helpers/config')
const { RESPONSE_UNAUTHORIZED_LOGIN } = require('../helpers/util')

module.exports = (req, res, next) => {
    try {
        const [, token] = req.headers.authorization.split(' ')
        const decode = jwt.verify(token, JWT_KEY)
        req.usuario = decode
        next()
    } catch(e) {
        return res.status(RESPONSE_UNAUTHORIZED_LOGIN.status).send(RESPONSE_UNAUTHORIZED_LOGIN.body)
    }
}