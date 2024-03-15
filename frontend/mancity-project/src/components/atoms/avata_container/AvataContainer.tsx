import React from "react";

const AvataContainer = (props: TailwindPropsType) => {
  const { width, height } = props;
  return (
    <div
      className={` ${width} ${height} font-medium text-xs bg-gray-400 rounded-full `}
    ></div>
  );
};

export default AvataContainer;
