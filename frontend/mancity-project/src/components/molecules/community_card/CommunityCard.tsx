import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import { useNavigate } from "react-router-dom";

const CommunityCard = (props: CommunityCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    subtext,
    maintext,
    likes,
    comments,
    toWhere,
  } = props;
  const navigate = useNavigate();
  const truncateMainText = (text: string) => {
    return text.length > 10 ? `${text.substring(0, 10)}...` : text;
  };
  const truncateSubText = (text: string) => {
    return text.length > 40 ? `${text.substring(0, 40)}...` : text;
  };

  const onClickCard = () => {
    navigate(`/community/${toWhere}`);
  };

  return (
    <div onClick={onClickCard}>
      <div className="flex p-2 mt-3 mx-1 rounded-md shadow-nav">
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
            <MyTypography
              fontWeight="font-medium"
              label={truncateMainText(maintext)}
              textColor="text-black"
              textSize="text-lg"
            />
            <MyTypography
              fontWeight="font-sm"
              label={truncateSubText(subtext)}
              textColor="text-gray-400"
              textSize="text-sm"
            />
          </div>

          <div className="w-16 mt-1 ">
            <MyTypography
              fontWeight="font-medium"
              label={`❤${likes} 💬${comments}`}
              textSize="text-xs"
              textColor="text-sofcity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
