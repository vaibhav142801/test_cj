import { GET_TODO, GET_TOTAL } from "../actionTypes";

const initialState = {
  todos: [],
  dashboard: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case GET_TOTAL:
      return {
        ...state,
        loading: false,
        dashboard: action.payload,
      };
    default:
      return state;
      break;
  }
}
