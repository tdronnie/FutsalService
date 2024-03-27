import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";

const HighlightCard = (props: HighlightCardProps) => {
  const { mainTitle, file } = props;
  return (
    <div id="glassui" className="p-1 rounded-lg w-36 h-42 shadow-nav">
      <div className="">
        <ContentBox file={file} rounded="rounded-[10px]"/>
      </div>
      <div className="flex justify-around m-2 ">
        <div className="mr-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
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
