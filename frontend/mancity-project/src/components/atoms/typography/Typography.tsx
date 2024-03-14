import React from "react";

const Typography = (props: TailwindPropsType) => {
  const { textSize, fontWeight, textColor } = props;
  return <p className={`${textSize} ${fontWeight} ${textColor}`}>Typography</p>;
};

export default Typography;
