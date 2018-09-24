const Express = require('express');
const db = require('./data/connection.js');
const bodyParser = require('body-parser');
const config = require('./config/config.js');
const logger = require('./config/logger.js')('app.js');

const app = new Express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', require('./routes/products'));
app.use('/shops', require('./routes/shops'));
app.use('/recipes', require('./routes/recipes'));
app.use('/tags', require('./routes/tags'));

app.listen(config.PORT, () => {
  logger.info(`App listening on port ${config.PORT}...`);
});
