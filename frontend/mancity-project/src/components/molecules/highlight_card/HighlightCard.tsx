import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";

const HighlightCard = (props: HighlightCardProps) => {
  const { mainTitle, file } = props;
  return (
    <div className="border-2 w-36 h-42 rounded-lg shadow-nav">
      <div className="">
        <ContentBox file={file} />
      </div>
      <div className="flex justify-around m-2 ">
        <div className="whitespace-nowrap overflow-hidden overflow-ellipsis mr-2">
          <Typography
            label={mainTitle}
            textSize="text-md"
            fontWeight="font-medium"
          />
        </div>
        <div className="mt-[2px]">
          <FontawsomeIcon icon="bookmark" size="1x" />
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
