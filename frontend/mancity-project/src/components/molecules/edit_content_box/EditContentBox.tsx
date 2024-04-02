import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";

const EditContentBox = (props: TailwindPropsType) => {
  const { width, height, rounded, file, hidden } = props;
  const isFile = file ? "" : "opacity-100";
  return (
    <div className="flex">
      <div className="relative cursor-pointer group">
        <div className="object-cover group-hover:opacity-60">
          <ContentBox
            width={width}
            height={height}
            rounded={rounded}
            file={file}
          />
        </div>
        <div
          className={`${isFile} absolute ${hidden}
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity ease-in-out`}
        >
          <FontawsomeIcon icon="camera" size="3x" color="black" />
        </div>
      </div>
    </div>
  );
};

export default EditContentBox;
