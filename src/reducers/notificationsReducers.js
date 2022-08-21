import { SHOW_NOTIFICATIONS } from "../actions/types";

const initialState = {
  message: "",
};

export const setNotifications = (state = initialState.message, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATIONS:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
