const Express = require('express');
const router = new Express.Router();
const data = require('../data/data.js');

router.use('/', (req, res) => {
    res.status(200).send(data);
    res.end();
});

module.exports = router;