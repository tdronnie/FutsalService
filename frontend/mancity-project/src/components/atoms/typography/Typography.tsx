const Typography = (props: TailwindPropsType) => {
  const { textSize, fontWeight, textColor, label } = props;
  return <p className={`${textSize} ${fontWeight} ${textColor} w-auto`}>{label}</p>;
};

export default Typography;
