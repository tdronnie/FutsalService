import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";

const GlobalCard = (props: GlobalCardProps) => {
  const { subTitle, mainTitle, file } = props;
  return (
    <div className="flex-shrink-0 border-2 w-44 h-56 rounded-lg shadow-nav">
      <div className="">
        <ContentBox width="w-full" height="h-40" file={file} />
      </div>
      <div className="mx-2 my-1">
        <div className="my-1">
          <Typography label={subTitle} textSize="text-sm" />
        </div>
        <div className="-mt-1">
          <Typography
            label={mainTitle}
            textSize="text-lg"
            fontWeight="font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalCard;
