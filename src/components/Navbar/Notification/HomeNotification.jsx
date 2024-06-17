import React from "react";
import "./HomeNotification.css";

const HomeNotification = () => {
  return (
    <div className={"homeNav_notification_container"}>
      <p>Notification</p>
      <div className={"homeNav_notification_box"}>
        <div className={"homeNav_notification_box_img"}>
          <img
            src={"/images/user-1.png"}
            alt="profile image"
            width={50}
            height={50}
            className={"homeNav_notification_box_img"}
          />
        </div>
        <div className={"homeNav_notification_box_info"}>
          <h4>Radu Padurariu</h4>
          <p>Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={"homeNav_notification_box_new"}></span>
      </div>
    </div>
  );
};

export default HomeNotification;
