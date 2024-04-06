const GlobalButton = (props: GlobalButton) => {
  const { isdisabled, width, label, hover } = props;
  return (
    <button
      type="button"
      disabled={!isdisabled}
      className={`${width}
        font-medium text-sm h-10 rounded-lg text-white bg-mancity
        ${
          isdisabled
            ? "hover:text-mancity hover:bg-white hover:border-mancity hover:border-2"
            : "block opacity-40"
        }`}
    >
      {label}
    </button>
  );
};

export default GlobalButton;
