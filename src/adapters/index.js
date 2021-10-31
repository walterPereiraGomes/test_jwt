var express = require("express");
const app = express();
const usersAdapter = require('./users')


app.use(usersAdapter);

app.listen(8081, () => {
    console.log('server is running!');
})