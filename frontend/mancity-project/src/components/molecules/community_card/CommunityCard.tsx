import ContentBox from "@/components/atoms/content_box/ContentBox";
import SubButton from "@/components/atoms/sub_button/SubButton";
import Typography from "@/components/atoms/typography/Typography";

const CommunityCard = (props: CommunityCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    subtext,
    maintext,
    likes,
    comments,
  } = props;

  const truncateMainText = (text: string) => {
    return text.length > 10 ? `${text.substring(0, 10)}...` : text;
  };
  const truncateSubText = (text: string) => {
    return text.length > 40 ? `${text.substring(0, 40)}...` : text;
  };

  return (
    <>
      <div className="flex p-2 m-3 rounded-md shadow-nav">
        <div className="my-1 mr-3">
          <ContentBox
            height="h-16"
            width="w-216"
            rounded="rounded-lg"
            file={file}
          />
        </div>

        <div className="flex flex-1 justify-between">
          <div>
            <Typography
              fontWeight="font-medium"
              label={truncateMainText(maintext)}
              textColor="text-black"
              textSize="text-lg"
            />
            <Typography
              fontWeight="font-sm"
              label={truncateSubText(subtext)}
              textColor="text-gray-400"
              textSize="text-sm"
            />
          </div>

          <div className="w-16 mt-1 ">
            <Typography
              fontWeight="font-medium"
              label={`❤${likes} 💬${comments}`}
              textSize="text-xs"
              textColor="text-sofcity"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
