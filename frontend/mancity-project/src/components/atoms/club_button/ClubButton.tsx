import React from "react";

const ClubButton = (props: TailwindPropsType) => {
  const {
    textColor,
    bgColor,
    borderColor,
    hoverTextColor,
    hoverBgColor,
    label,
  } = props;
  return (
    <button
      type="button"
      className={` ${textColor} ${bgColor} ${borderColor}  hover:${hoverTextColor} hover:${hoverBgColor} 
      font-medium text-[0.7rem] w-20 h-7 rounded-full border-2`}
    >
      {label}
    </button>
  );
};

export default ClubButton;
