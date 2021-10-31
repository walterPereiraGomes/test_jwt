const Sequelize = require('sequelize');

class User {
    static async defineModel(driver) {
        const users = driver.define('user', {
            id: {
                type: Sequelize.INTEGER,
                required: 1,
                primaryKey: 1,
                autoIncrement: 1
            },
            name: {
                type: Sequelize.STRING,
                required: 1
            },
            login: {
                type: Sequelize.STRING,
                required: 1
            },
            password: {
                type: Sequelize.STRING,
                required: 1
            }
        }, {
            tableName: 'user',
            freezeTableName: 0,
            timestamps: 0,
            createdAt: 0,
            updatedAt: 0
        })
    
        await users.sync()
        return users;
    }

}

module.exports = User;