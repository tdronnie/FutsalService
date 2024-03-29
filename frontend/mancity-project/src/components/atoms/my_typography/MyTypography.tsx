const MyTypography = (props: TailwindPropsType) => {
  const { textSize, fontWeight, textColor, label, id } = props;
  return <p id={`${id}`} className={`${textSize} ${fontWeight} ${textColor} w-auto`}>{label}</p>;
};

export default MyTypography;
