import React from "react";

const ClubButton = (props: TailwindPropsType) => {
  const { textColor, bgColor, label } = props;
  return (
    <button
      type="button"
      className={` text-${textColor} bg-${bgColor} font-medium text-[0.7rem] w-20 h-7 rounded-full
      hover:text-${bgColor} hover:bg-${textColor} border-${textColor} border-2`}
    >
      {label}
    </button>
  );
};

export default ClubButton;
