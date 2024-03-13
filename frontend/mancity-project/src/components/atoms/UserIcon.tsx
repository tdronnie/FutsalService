import React from "react";
import "../../styles/Fontawsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserIcon = ({ size = "1x" }) => {
  return (
    <div>
      <FontAwesomeIcon icon="user" size={size} color="#5D7A93" />
    </div>
  );
};

export default UserIcon;
