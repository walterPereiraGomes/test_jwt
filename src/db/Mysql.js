const Sequelize = require('sequelize');
const User = require('./user')

class Mysql {
    constructor() {
        this.driver = null
        this._users = null
        this._connect()
    }

    async _connect() {
        this.driver = new Sequelize(
            'walter',
            'root',
             null,
            {
                dialect: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
        this._users = await User.defineModel(this.driver)
    }

}

module.exports = Mysql