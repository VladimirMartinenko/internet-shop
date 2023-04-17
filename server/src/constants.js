const path = require('path');

module.exports = {
  configPath: path.resolve(__dirname, 'config', 'db.json'),
  modelsPath: path.resolve(__dirname, 'db', 'models'),
  seedersPath: path.resolve(__dirname, 'db', 'seeders'),
  migrationsPath: path.resolve(__dirname, 'db', 'migrations'),
  imagePath: path.resolve(__dirname, '..','public', 'images'),
  JWT_ACCESS_SECRET : 'secret_key_12343532DFSL',
  JWT_ACCESS_EXPIRATION_TIME: '5d',
  JWT_REFRESH_SECRET: 'jhhhhhhhhhgggggg',
  JWT_REFRESH_EXPIRATION_TIME: '14d',
  USER: 'user',
  ADMIN: 'admin'
};
// const CONSTANTS = {
//   JWT_ACCESS_SECRET : 'secret_key_12343532DFSL',
//   JWT_ACCESS_EXPIRATION_TIME: '30s',
//   JWT_REFRESH_SECRET: 'jhhhhhhhhhgggggg',
//   JWT_REFRESH_EXPIRATION_TIME: '14d',
//   USER: 'user',
//   ADMIN: 'admin'
// }
// module.exports = CONSTANTS