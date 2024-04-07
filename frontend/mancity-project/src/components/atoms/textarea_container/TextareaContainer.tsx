import React from "react";

const TextareaContainer = (props: TextareaContainerPropsType) => {
  const { textareaValue, setTextareaValue } = props;

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };
  return (
    <textarea
      value={textareaValue}
      onChange={onChangeValue}
      placeholder="내용을 입력해주세요"
      className={`w-full h-40 p-2 border-2 text-[#5D7A93] border-[#5D7A93] rounded-md focus:outline-none placeholder-gray-400 resize-none`}
    />
  );
};

export default TextareaContainer;
