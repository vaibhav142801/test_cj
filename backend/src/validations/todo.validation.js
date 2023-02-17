const Joi = require("@hapi/joi");

const posttodo = {
  body: Joi.object().keys({
    TODO_TASK: Joi.string().required(),
  }),
};
const updatetodo = {
  body: Joi.object().keys({
    TODO_TASK: Joi.string().required(),
    TODO_ID: Joi.number().required(),
  }),
};

module.exports = {
  posttodo,
  updatetodo,
};
