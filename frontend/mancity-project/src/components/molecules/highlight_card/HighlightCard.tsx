import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const HighlightCard = (props: HighlightCardProps) => {
  const { mainTitle, file } = props;

  return (
    <div id="glassui" className="pt-3 pb-1 rounded-lg w-36 h-42">
      <div>
        <ContentBox file={file} rounded="rounded-[10px]" />
      </div>
      <div className="flex justify-around my-2">
        <div className="mr-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
          <MyTypography
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
