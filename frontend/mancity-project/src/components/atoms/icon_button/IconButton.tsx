import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

const IconButton = (props: FontAwesomeIconProps) => {
  const { icon } = props;
  return (
    <button
      type="button"
      className={` w-12 h-12 font-medium text-sm text-white bg-darkcity rounded-full 
      hover:text-darkcity hover:bg-white hover:border-darkcity hover:border-2`}
    >
      <FontAwesomeIcon icon={icon} size="1x" />
    </button>
  );
};

export default IconButton;
