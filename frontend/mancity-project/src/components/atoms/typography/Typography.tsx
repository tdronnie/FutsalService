import React from "react";

interface propsType {
  textSize: string;
  fontWeight: string;
  textColor: string;
}

const Typography = (props: propsType) => {
  const { textSize, fontWeight, textColor } = props;
  return <p className={`${textSize} ${fontWeight} ${textColor}`}>Typography</p>;
};

export default Typography;
