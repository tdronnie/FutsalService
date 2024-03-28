const ContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded, bgimg, file, id } = props;
  return (
    <div
    id={id}
      className={` ${width} ${height} ${rounded} ${bgimg}
      bg-gray-200 bg-center bg-no-repeat bg-cover`}
    >
      <img
      id={id}
        src={file}
        className={`${width} ${height}  ${rounded} object-cover `}
      />
    </div>
  );
};

export default ContentBox;
