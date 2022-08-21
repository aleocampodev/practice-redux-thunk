import { SHOW_NOTIFICATION } from "./types";

export const setNotificationsActions = () => {
  return {
    type: SHOW_NOTIFICATION,
    payload: "Notificacion",
  };
};
