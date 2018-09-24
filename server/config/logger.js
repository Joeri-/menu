const log4js = require('log4js');
const config = require('./config.js');

module.exports = (moduleName) => {
  const logger = log4js.getLogger(moduleName);
  logger.level = 'info';
  return logger;
};
