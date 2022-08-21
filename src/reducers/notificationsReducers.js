import { SHOW_NOTIFICATIONS } from "../actions/types";

const initialState = {
  message: "",
};

export const notificationsReducer = (state = initialState.message, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATIONS:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default notificationsReducer;
