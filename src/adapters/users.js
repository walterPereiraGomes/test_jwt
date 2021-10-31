var express = require('express');
var usersAdapter = express.Router();
const Mysql = require('../db/Mysql')

const connection = new Mysql();

usersAdapter.get('/welcome', (req, res) => {
    res.send('welcome to my app!');
})

usersAdapter.get('/users', async (req, res) => {
    const users = await connection._users.findAll({ raw: true})
    res.send(users)
})

module.exports = usersAdapter;