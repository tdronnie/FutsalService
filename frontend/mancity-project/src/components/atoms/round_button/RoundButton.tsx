import React from "react";

const RoundButton = (props: TailwindPropsType) => {
  const {
    textColor,
    bgColor,
    hoverTextColoer,
    hoverBgColor,
    hoverBorderColor,
    label,
  } = props;
  return (
    <button
      type="button"
      className={` ${textColor} ${bgColor} hover:${hoverTextColoer} hover:${hoverBgColor} hover:${hoverBorderColor} 
      w-14 h-14 font-medium text-sm rounded-full hover:border-2`}
    >
      {label}
    </button>
  );
};

export default RoundButton;
