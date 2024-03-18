const Typography = (props: TailwindPropsType) => {
  const { textSize, fontWeight, textColor, label } = props;
  return <p className={`${textSize} ${fontWeight} ${textColor}`}>{label}</p>;
};

export default Typography;
