import React from "react";

const GlobalButton = (props: TailwindPropsType) => {
  const { width, label } = props;
  return (
    <button
      type="button"
      className={` ${width} font-medium text-sm text-white bg-mancity h-10 rounded-lg 
      hover:text-mancity hover:bg-white hover:border-mancity hover:border-2`}
    >
      {label}
    </button>
  );
};

export default GlobalButton;
