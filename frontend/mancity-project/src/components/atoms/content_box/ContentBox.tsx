
const ContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded, bgimg } = props;
  return (
    <div
      className={` ${width} ${height} ${rounded} font-medium text-xs ${bgimg} bg-gray-200 bg-center bg-no-repeat bg-cover`}
    ></div>
  );
};

export default ContentBox;
