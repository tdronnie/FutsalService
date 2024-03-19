
const SubButton = (props: TailwindPropsType) => {
  const { label } = props;
  return (
    <button
      type="button"
      className={` w-20 font-medium text-[0.7rem] bg-white text-[#848695] h-7 rounded-xl
      hover:bg-[#848695] hover:text-white border-[#848695] border`}
    >
      {label}
    </button>
  );
};

export default SubButton;
