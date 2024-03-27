const ContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded, bgimg, file } = props;
  return (
    <div
      className={` ${width} ${height} ${rounded} ${bgimg} border
      bg-gray-200 bg-center bg-no-repeat bg-cover`}
    >
      <img
        src={file}
        className={`${width} ${height}  ${rounded} object-cover `}
      />
    </div>
  );
};

export default ContentBox;