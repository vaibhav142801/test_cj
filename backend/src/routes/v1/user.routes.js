const express = require("express");
const userController = require("../../controllers/user.controller");
const validate = require("../../middlewares/validate");
const validation = require("../../validations");

const router = express.Router();
router.route("/todo").get(userController.gettodos);
router.route("/todo-filter").post(userController.filtertodo);
router
  .route("/todo")
  .post(validate(validation.todo.posttodo), userController.createtodo);
router
  .route("/todo")
  .put(validate(validation.todo.updatetodo), userController.updatetodo);

router.route("/todo-status").put(userController.statustodo);
router.route("/todo-delete").put(userController.deletetodo);

module.exports = router;
