const SubmitButton = (props: TailwindPropsType) => {
  const { label } = props;
  return (
    <button
      type="button"
      className={` w-16 font-medium text-[0.7rem] bg-white text-sofcity h-7 rounded-3xl
      hover:bg-sofcity hover:text-white border-sofcity border-[1.5px]`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
