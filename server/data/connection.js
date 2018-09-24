const mongoose = require('mongoose');
const config = require('../config/config.js');
const logger = require('../config/logger.js')('connection');

const url = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_TABLE}`;

mongoose.connect(url, { useNewUrlParser: true })
  .then(
    () => {
      logger.info('Successfully established connection with MongoDB');
    },
    (err) => {
      logger.error('Failed to connect to the MongoDB instance.');
      logger.error(err);
      process.exit(1);
    },
  );

module.exports = mongoose;
