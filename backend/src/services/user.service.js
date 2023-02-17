const TodoModel = require("../models/todo.model");
const catchAsync = require("../utils/catchAsync");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class userserviceClass {
  findtodobyid = async (todoid) => {
    const result = TodoModel.findOne({
      where: {
        TODO_ID: todoid,
        ISDELETED: false,
      },
    });
    return result;
  };

  createtodo = async (todotask) => {
    const result = TodoModel.create({
      TODO_TASK: todotask,
      TODO_STATUS: false,
    });
    return result;
  };

  filtertodo = async (todotask) => {
    const result = TodoModel.findAll({
      where: {
        TODO_TASK: {
          [Op.like]: `%${todotask}%`,
        },
      },
    });
    return result;
  };

  updatetodo = async (todotask, todoid) => {
    const result = TodoModel.update(
      {
        TODO_TASK: todotask,
      },
      { where: { TODO_ID: todoid } }
    );

    return result;
  };

  changestatus = async (todostatus, todoid) => {
    const result = TodoModel.update(
      {
        TODO_STATUS: todostatus,
      },
      { where: { TODO_ID: todoid } }
    );

    return result;
  };

  deletetodo = async (todoid) => {
    const result = TodoModel.update(
      {
        ISDELETED: true,
      },
      { where: { TODO_ID: todoid } }
    );

    return result;
  };

  getalltodo = () => {
    const result = TodoModel.findAll({
      where: {
        ISDELETED: false,
      },
    });
    return result;
  };

  completetodo = () => {
    const result = TodoModel.findAll({
      where: {
        TODO_STATUS: true,
        ISDELETED: false,
      },
    });
    return result;
  };

  pandingtodo = () => {
    const result = TodoModel.findAll({
      where: {
        TODO_STATUS: false,
        ISDELETED: false,
      },
    });
    return result;
  };

  deltdtodoss = () => {
    const TODAY = new Date();
    const result = TodoModel.findAll({
      where: {
        ISDELETED: true,
      },
    });
    return result;
  };
}

const userservice = new userserviceClass();
module.exports = userservice;
