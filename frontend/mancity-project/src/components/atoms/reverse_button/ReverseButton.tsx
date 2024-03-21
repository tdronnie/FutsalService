const ReverseButton = (props: TailwindPropsType) => {
  const { width, label, isdisabled } = props;
  return (
    <button
      type="button"
      disabled={!isdisabled}
      className={`${width}
      font-medium text-sm h-10 rounded-lg bg-white text-mancity border-mancity border-2
      ${!isdisabled ? "opacity-60" : " hover:bg-mancity hover:text-white"}`}
    >
      {label}
    </button>
  );
};

export default ReverseButton;
