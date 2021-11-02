const Sequelize = require('sequelize');
const { CONFIG_DB } = require('../helpers/config')
const User = require('../models/user')
const models = [{name: '_user', model: User}];

class Mysql {
    constructor() {
        this.driver = null
        this._connect()
        this._user = null
    }
    
    async _connect() {
        this.driver = new Sequelize('walter', 'root', null, CONFIG_DB)
        this._user = await User.defineModel(this.driver)
        models.map(async ({name, model}) => {
            this[name] = await model.defineModel(this.driver)
        })
    }

}

module.exports = Mysql