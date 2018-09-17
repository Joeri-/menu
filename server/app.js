const express = require('express');

const app = new express();
const PORT = 3000;
const users = [
    {
        id: 1,
        username: 'Joeri'
    },
    {
        id: 2,
        username: 'Dorien'
    }
];

const departments = [
    {
        name: 'dep1',
        managingUsers: ['Joeri']
    },
    {
        name: 'dep2',
        managingUsers: ['Joeri', 'Dorien']
    }
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users', (req, res) => {
    res.send(users);
    res.end();
});

app.get('/departments', (req, res) => {
    res.send(departments);
    res.end();
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});