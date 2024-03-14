import React from "react";

interface TailwindPropsType {
  width: string;
  label: string;
}

const ReverseButton = (props: TailwindPropsType) => {
  const { width, label } = props;
  return (
    <button
      type="button"
      className={` ${width} font-medium text-sm bg-white text-[#00A9FF] h-10 rounded-lg 
      hover:bg-[#00A9FF] hover:text-white border-[#00A9FF] border-2`}
    >
      {label}
    </button>
  );
};

export default ReverseButton;
