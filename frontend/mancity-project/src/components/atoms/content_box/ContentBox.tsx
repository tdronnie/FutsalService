import React from "react";

const ContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded, bgimg } = props;
  return (
    <div
      className={` ${width} ${height} ${rounded} font-medium text-xs ${bgimg} `}
    ></div>
  );
};

export default ContentBox;
