CONFIG_DB = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    quoteIdentifiers: false,
    operatorsAliases: false
}

JWT_KEY = 'secret_key'

module.exports = {
    CONFIG_DB,
    JWT_KEY
}