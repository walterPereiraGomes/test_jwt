var express = require("express")
const userRoutes = require('./users')
const app = express();
const router = express.Router()

const start = (connection) => {
    app.use(express.json());
    userRoutes(router, connection);
    app.use(router);
    
    app.listen(8081, () => {
        console.log('server is running!');
    })

}

module.exports = start;

