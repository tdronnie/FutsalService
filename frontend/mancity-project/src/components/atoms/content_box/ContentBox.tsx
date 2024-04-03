const ContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded, bgimg, file, id, vertical } = props;

  // file이 없으면 배경 관련 클래스를 추가하고, 있으면 추가하지 않음
  const bgClasses = !file ? "bg-gray-200 bg-center bg-no-repeat bg-cover" : "";
  return (
    <div
      id={id}
      className={`${width} ${height} ${rounded} ${bgimg} ${bgClasses}`}
    >
      <img
        id={id}
        src={file}
        className={`${width} ${height}  ${rounded} ${vertical ? "" : `object-cover`} `}
      />
    </div>
  );
};

export default ContentBox;
