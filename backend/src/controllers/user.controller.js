const httpStatus = require("http-status");
const userservice = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");

class userControllerClass {
  gettodos = catchAsync(async (req, res) => {
    const gettodo = await userservice.getalltodo();
    const completetodo = await userservice.completetodo();
    const pandingtodo = await userservice.pandingtodo();
    const deltdtodoss = await userservice.deltdtodoss();
    try {
      res.status(httpStatus.OK).send({
        status: true,
        message: "fetched successfully",
        data: gettodo,
        total: {
          completetodo: completetodo.length,
          pandingtodo: pandingtodo.length,
          deltdtodoss: deltdtodoss.length,
        },
      });
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send({
        status: false,
        message: "somthing went wrong!",
        data: error,
      });
    }
  });

  filtertodo = catchAsync(async (req, res) => {
    const gettodo = await userservice.filtertodo(req.body.TODO_TASK);
    try {
      res.status(httpStatus.OK).send({
        status: true,
        message: "fetched successfully",
        data: gettodo,
      });
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send({
        status: false,
        message: "somthing went wrong!",
        data: error,
      });
    }
  });

  createtodo = catchAsync(async (req, res) => {
    const create = await userservice.createtodo(req.body.TODO_TASK);
    try {
      res.status(httpStatus.OK).send({
        status: true,
        message: "todo created successfully",
        data: create,
      });
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send({
        status: false,
        message: "somthing went wrong!",
        data: error,
      });
    }
  });

  updatetodo = catchAsync(async (req, res) => {
    try {
      const findtodo = await userservice.findtodobyid(req.body.TODO_ID);
      if (findtodo) {
        const update = await userservice.updatetodo(
          req.body.TODO_TASK,
          req.body.TODO_ID
        );
        res.status(httpStatus.OK).send({
          status: true,
          message: "todo updated successfully",
          data: findtodo,
        });
      } else {
        res.status(httpStatus.NOT_FOUND).send({
          status: false,
          message: "invalid todo id!",
          data: findtodo,
        });
      }
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send({
        status: false,
        message: "somthing went wrong!",
        data: error,
      });
    }
  });

  statustodo = catchAsync(async (req, res) => {
    try {
      const findtodo = await userservice.findtodobyid(req.body.TODO_ID);
      if (findtodo) {
        const update = await userservice.changestatus(
          req.body.TODO_STATUS,
          req.body.TODO_ID
        );
        res.status(httpStatus.OK).send({
          status: true,
          message: "task completed successfully",
          data: update,
        });
      } else {
        res.status(httpStatus.NOT_FOUND).send({
          status: false,
          message: "invalid todo id!",
          data: findtodo,
        });
      }
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send({
        status: false,
        message: "somthing went wrong!",
        data: error,
      });
    }
  });

  deletetodo = catchAsync(async (req, res) => {
    try {
      const findtodo = await userservice.findtodobyid(req.body.TODO_ID);
      if (findtodo) {
        const deletetodo = await userservice.deletetodo(req.body.TODO_ID);
        res.status(httpStatus.OK).send({
          status: true,
          message: "task deleted successfully",
          data: deletetodo,
        });
      } else {
        res.status(httpStatus.NOT_FOUND).send({
          status: false,
          message: "invalid todo id!",
          data: findtodo,
        });
      }
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).send({
        status: false,
        message: "somthing went wrong!",
        data: error,
      });
    }
  });
}

const userController = new userControllerClass();
module.exports = userController;
