import React, { useState } from "react";

const GlobalInput = ({ width, placeholder }: TailwindPropsType) => {
  const [textValue, setTextValue] = useState("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  return (
    <input
      type="text"
      value={textValue}
      onChange={onChangeValue}
      placeholder={placeholder}
      className={`${width} px-2 py-1 border-b-2 border-[#2C4A60] focus:outline-none  placeholder-gray-400`}
    ></input>
  );
};

export default GlobalInput;
