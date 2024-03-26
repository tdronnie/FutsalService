const ReverseButton = (props: TailwindPropsType) => {
  const { width, label, isdisabled, hover } = props;
  return (
    <button
      type="button"
      disabled={!isdisabled}
      className={`${width}
      font-medium text-sm h-10 rounded-lg bg-white text-mancity border-mancity border-2
      ${hover ? (!isdisabled ? "opacity-60" : " hover:bg-mancity hover:text-white"):"block"}`}
    >
      {label}
    </button>
  );
};

export default ReverseButton;
