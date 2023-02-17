const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const TodoModel = sequelize.define('tbl_todo', {
  TODO_ID: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  TODO_TASK: {
    type: Sequelize.TEXT(),
    trim: true,
    allowNull:false
  },
  TODO_STATUS: {
    type: Sequelize.BOOLEAN(),
    trim: true,
    allowNull:false,
    defaultValue:false,
  },
  ISDELETED: {
    type: Sequelize.BOOLEAN(),
    trim: true,
    defaultValue:false
  },
});

module.exports = TodoModel;
