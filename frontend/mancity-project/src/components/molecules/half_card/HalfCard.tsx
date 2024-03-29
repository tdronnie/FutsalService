import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const HalfCard = (props: HalfCardPropsType) => {
  const { file = "/src/assets/imgs/mancity_logo.png", maintext } = props;
  return (
    <div id="glassui" className="flex items-center w-full h-[4.5rem] p-2 rounded-md cursor-pointer shadow-nav">
      <div>
        <ContentBox
          height="h-10"
          width="w-10"
          // rounded지만 배경색 스타일 설정으로 사용ㅎ...급하니깐
          rounded="bg-transparent"
          file={file}
          id="responsive-img"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <MyTypography
        id="responsive-p"
          fontWeight="font-medium"
          label={maintext}
          textColor="text-darkcity"
          textSize="text-xl"
        />
      </div>
    </div>
  );
};

export default HalfCard;
