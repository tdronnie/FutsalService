const TypographyLine = (props: TypographyLinePropsType) => {
  const { lineWidth, label } = props;
  return (
    <div className="items-center ">
      <div className={`ml-2 ${lineWidth} min-w-24`}>
        <p className={`text-lg font-medium text-black`}>{label}</p>
      </div>
      <div className="w-full ">
      <hr className="border-sofcity border-[0.05rem] my-1 mb-3" />
      </div>
    </div>
  );
};

export default TypographyLine;
