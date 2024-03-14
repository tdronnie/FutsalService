import React from "react";

const Typography = (props: tailwindProps) => {
  const { textSize, fontWeight, textColor } = props;
  return <p className={`${textSize} ${fontWeight} ${textColor}`}>Typography</p>;
};

export default Typography;
