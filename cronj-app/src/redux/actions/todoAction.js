import axiosInstance from "../../utils/axiosInstance";
import { GET_TODO, GET_TOTAL } from "../actionTypes";

export const getAlltodo = () => (dispatch) => {
  axiosInstance.get("todo").then((res) => {
    dispatch({
      type: GET_TODO,
      payload: res.data.data,
    });
    dispatch({
      type: GET_TOTAL,
      payload: res.data.total,
    });
  });
};

export const completetodo = (data) => (dispatch) => {
  axiosInstance
    .put("todo-status", data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteAction = (data) => (dispatch) => {
  axiosInstance
    .put("todo-delete", data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const filtertodo = (data) => (dispatch) => {
  axiosInstance
    .post("todo-filter", data)
    .then((res) => {
      dispatch({
        type: GET_TODO,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createAction = (data) => (dispatch) => {
  axiosInstance
    .post("todo", data)
    .then((res) => {
      console.log(res);
      alert(res.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateAction = (data) => (dispatch) => {
  axiosInstance
    .put("todo", data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};
