const GlobalButton = (props: TailwindPropsType) => {
  const { isdisabled, width, label, hover } = props;
  return (
      <button
        type="button"
        disabled={!isdisabled}
        className={`${width}
        font-medium text-sm h-10 rounded-lg text-white bg-mancity
        ${hover ?
          (!isdisabled
            ? "opacity-40"
            : " hover:text-mancity hover:bg-white hover:border-mancity hover:border-2") // disabled가 아닐 때의 기본 스타일 + 호버 스타일
            : "block"
          }`}
      >
        {label}
      </button>
  );
};

export default GlobalButton;
