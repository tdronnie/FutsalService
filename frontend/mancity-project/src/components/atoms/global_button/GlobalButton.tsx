import React from "react";

interface TailwindPropsType {
  width: string;
  label: string;
}

const GlobalButton = (props: TailwindPropsType) => {
  const { width, label } = props;
  return (
    <button
      type="button"
      className={` ${width} font-medium text-sm text-white bg-[#00A9FF] h-10 rounded-lg 
      hover:text-[#00A9FF] hover:bg-white hover:border-[#00A9FF] hover:border-2`}
    >
      {label}
    </button>
  );
};

export default GlobalButton;
