const SubButton = (props: TailwindPropsType) => {
  const { label, hover } = props;
  return (
    <button
    id="glassbtn"
      type="button"
      className={` w-20 font-medium text-[0.7rem] bg-white text-[#848695] h-7 rounded-xl
      ${hover ? "hover:bg-[#848695] hover:text-white" : "inline-block"} `}
    >
      {label}
    </button>
  );
};

export default SubButton;
