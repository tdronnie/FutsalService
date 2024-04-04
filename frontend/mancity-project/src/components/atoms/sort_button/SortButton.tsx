const SortButton = (props: TailwindPropsType) => {
  const { width, label, hover } = props;

  return (
    <button
      type="button"
      className={`${width} cursor-default font-medium text-sm h-9 rounded-lg bg-white text-sofcity border-sofcity border
    ${hover ? " hover:bg-sofcity hover:text-white": "inline-block"}`}
    >
      {label}
    </button>
  );
};

export default SortButton;
