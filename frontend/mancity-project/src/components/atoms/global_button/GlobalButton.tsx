import React from "react";

const GlobalButton = (props: TailwindPropsType) => {
  const { width, label } = props;
  return (
    <div>
      <button
        type="button"
        className={`${width} mx-4 font-medium text-sm text-white bg-mancity h-10 rounded-lg 
      hover:text-mancity hover:bg-white hover:border-mancity hover:border-2`}
      >
        {label}
      </button>
    </div>
  );
};

export default GlobalButton;
