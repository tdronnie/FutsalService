import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const HalfCard = (props: HalfCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    maintext,
    vertical,
  } = props;
  return (
    <div
      id="glassui"
      className="flex items-center w-full h-[4.5rem] p-2 rounded-md cursor-pointer shadow-nav"
    >
      <div>
        <ContentBox
          height="h-10"
          width="w-10"
          // rounded지만 배경색 스타일 설정으로 사용ㅎ...급하니깐
          rounded="bg-transparent"
          file={file}
          // 이미지가 가로로 길면 자꾸 잘려서 vertical true / false 보내서 object-cover 적용 여부 파악했습니다.
          vertical={vertical}
          id="responsive-img"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow ml-1 text-center">
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
