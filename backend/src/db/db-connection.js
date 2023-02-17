const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.DB.database, 
  config.DB.user,
   config.DB.password, {
  host: config.DB.host,
  dialect: 'mysql',
  // logging:false,
  pool: { max: 5, min: 0, idle: 10000 }
})



module.exports = sequelize






