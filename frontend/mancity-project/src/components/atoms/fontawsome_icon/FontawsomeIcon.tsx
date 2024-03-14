import React from "react";
import "../../../styles/Fontawsome";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const FontawsomeIcon = ({ icon, size = "1x", color="#5D7A93" }: FontAwesomeIconProps) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </div>
  );
};

export default FontawsomeIcon;
