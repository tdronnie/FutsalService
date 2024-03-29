import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import SubmitButton from "@/components/atoms/submit_button/SubmitButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const FollowCard = (props: FollowCardPropsType) => {
  const { file, nickName, overall } = props;

  return (
    <div>
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <ContentBox
              file={file ? file : `/src/assets/imgs/mancity_logo.png`}
              height="h-10"
              rounded="rounded-full"
              width="w-10"
            />
          </div>
          <MyTypography
            fontWeight="font-medium"
            label={nickName}
            textColor="text-black"
            textSize="text-lg"
          />
        </div>
        <div className="flex">
          <SubmitButton
            label={`총스탯 ${overall}`}
            reverse={false}
            hover={false}
          />
          <div className="ml-3 ">
            <FontawsomeIcon icon="chevron-right" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-11/12 px-2 my-2" />
      </div>
    </div>
  );
};

export default FollowCard;
