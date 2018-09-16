const express = require('express');

const app = new express();
const PORT = 3000;
const users = [
    {
        username: 'Joeri'
    },
    {
        username: 'Dorien'
    }
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', (req, res) => {
    res.send(users);
    res.end();
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});