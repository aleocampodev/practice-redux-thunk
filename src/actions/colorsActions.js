import { SHOW_COLORS } from "./types";

export const setColorsActions = () => {
  return {
    type: SHOW_COLORS,
    payload: ["green", "yellow,", "white"],
  };
};

export const addColor = (color) => ({
  type: "ADD_COLOR",
  payload: color,
});
