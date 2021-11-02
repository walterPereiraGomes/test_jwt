const userController = require('../controllers/users')
const loginMiddware = require('../middleware/login') 

const configRoutes = (router) => {

    router.post('/login', async (req, res, next) => {
        const {status, body} = await userController.login({login: req.body.login, password: req.body.password})
        res.status(status).send(body)
    })

    router.get('/test', loginMiddware, async (req, res) => {
        res.status(200).send({message: 'opa'})
    })
}

module.exports = configRoutes;