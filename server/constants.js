const path = require('path');

module.exports = {
  configPath: path.resolve(__dirname, 'config', 'db.json'),
  modelsPath: path.resolve(__dirname, 'db', 'models'),
  seedersPath: path.resolve(__dirname, 'db', 'seeders'),
  migrationsPath: path.resolve(__dirname, 'db', 'migrations'),
  imagePath: path.resolve(__dirname, '..','public', 'images')
};