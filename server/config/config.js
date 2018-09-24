module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_TABLE: process.env.MONGO_TABLE || 'menu',
};
