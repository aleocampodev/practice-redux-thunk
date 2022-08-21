import { SHOW_COLORS } from "../actions/types";

const initialStateColors = [];

const reducerOcampo = (state = initialStateColors, action) => {
  switch (action.type) {
    case SHOW_COLORS:
      return action.payload;
    case "ADD_COLOR":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default reducerOcampo;
