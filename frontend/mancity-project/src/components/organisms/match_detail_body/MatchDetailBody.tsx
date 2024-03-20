import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";
import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";

const MatchDetailBody = () => {
  const onClickCopy = () => {
    console.log("주소 복사");
  };
  return (
    <div>
      {/* 지도 */}
      <MiniMap
        lat={35.2037466}
        lng={126.8143846}
        address="광주시 광산구 장덕동 82-3"
        tel="062-951-9876"
        onClickCopy={onClickCopy}
      />
      {/* 경기 분석하기 컴포넌트 */}
      <div className="relative m-2 h-32 hover:opacity-60 duration-300 ease-in-out cursor-pointer">
        <div className="absolute inset-0 transition-opacity ">
          <ContentBox
            // bgimg="bg-[url('@/assets/imgs/go_to_analysis.jpg')]"
            file="/src/assets/imgs/go_to_analysis.jpg"
            width="w-full"
            height="h-full"
            rounded="rounded-3xl"
          />
        </div>
        <div className="flex justify-center items-center h-full relative z-10">
          <Typography
            label="경기 분석하기"
            textColor="text-white"
            fontWeight="font-semibold"
            textSize="text-2xl"
          />
        </div>
      </div>
      {/* 멤버 라인업 */}
      <div className="">
        <MemberList label="멤버 라인업" />
      </div>
      
    </div>
  );
};

export default MatchDetailBody;
