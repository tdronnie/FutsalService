import React from "react";

const ContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded } = props;
  return (
    <div
      className={` ${width} ${height} ${rounded} font-medium text-xs bg-gray-400 `}
    ></div>
  );
};

export default ContentBox;
