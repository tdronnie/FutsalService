import React from "react";

const ReverseButton = (props: TailwindPropsType) => {
  const { width, label } = props;
  return (
    <button
      type="button"
      className={` ${width} font-medium text-sm bg-white text-mancity h-10 rounded-lg 
      hover:bg-mancity hover:text-white border-mancity border-2`}
    >
      {label}
    </button>
  );
};

export default ReverseButton;
