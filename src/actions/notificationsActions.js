import { SHOW_NOTIFICATIONS } from "./types";

export const setNotificationsActions = () => {
  return {
    type: SHOW_NOTIFICATIONS,
    payload: "Notificacion",
  };
};
