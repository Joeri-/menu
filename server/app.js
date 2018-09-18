const express = require('express');

const app = new express();
const PORT = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});