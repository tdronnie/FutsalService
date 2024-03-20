import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";

const HighlightCard = (props: HighlightCardProps) => {
  const { mainTitle, file } = props;
  return (
    <div className="border-2 w-44 h-54 rounded-lg shadow-nav">
      <div className="">
        <ContentBox width="w-full" height="h-40" file={file} />
      </div>
      <div className="flex justify-around m-2 ">
        <div className="">
          <Typography
            label={mainTitle}
            textSize="text-lg"
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
