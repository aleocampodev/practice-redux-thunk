import React from "react";
import { useState } from "react";

const NotificationView = ({ showNotification, notification }) => {
  const [show, setShow] = useState(false);
  const handleNotification = () => {
    setTimeout(() => {
      showNotification("");
      setShow(true);
    }, 5000);
  };

  return (
    <>
      <button onClick={handleNotification}>Notificacion</button>
      {show && notification}
    </>
  );
};

export default NotificationView;
