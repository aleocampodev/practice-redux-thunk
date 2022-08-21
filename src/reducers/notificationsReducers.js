import { SHOW_NOTIFICATION } from "../actions/types";

const initialState = {
  message: " ",
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default notificationReducer;
