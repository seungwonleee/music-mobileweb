const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

// db 연결
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Music = require('./music')(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
