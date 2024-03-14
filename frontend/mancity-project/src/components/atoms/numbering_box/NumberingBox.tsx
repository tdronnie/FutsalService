import React from "react";

interface propsType {
  number: number;
}

const NumberingBox = (props: propsType) => {
  const { number } = props;
  return (
    <div className="w-10 h-5 border-2 border-[#00A9FF] font-medium text-xs text-center">
      # {number}
    </div>
  );
};

export default NumberingBox;
