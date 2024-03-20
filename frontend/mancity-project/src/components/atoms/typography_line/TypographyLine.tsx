const TypographyLine = (props: TailwindPropsType) => {
  const { label } = props;
  return (
    <div className="flex items-center ">
      <div className="ml-2 w-32">
        <p className={`text-base font-medium text-gray-400`}>{label}</p>
      </div>
      <div className="w-full ">
        <hr className="border-gray-400 border-[0.05rem] " />
      </div>
    </div>
  );
};

export default TypographyLine;
