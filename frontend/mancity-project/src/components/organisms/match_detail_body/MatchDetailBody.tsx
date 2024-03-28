import { fetchMatchDetail } from "@/apis/matchApis";
import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";
import TypographyLine from "@/components/atoms/typography_line/TypographyLine";
import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";
import { useQuery } from "@tanstack/react-query";
import HalfCard from "@/components/molecules/half_card/HalfCard";

const MatchDetailBody = () => {
  const address = "광주시 광산구 장덕동 82-3";

  const onClickCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  // MatchDatail get 호출
  const { data } = useQuery({
    queryKey: ["matchDetail"],
    queryFn: fetchMatchDetail,
  });

  console.log(data);

  return (
    <div>
      {/* 경기 분석하기 경기다시보기 버튼 */}
      <div className="flex justify-around mb-2">
        <div className="w-full ml-3 mr-1">
          <HalfCard maintext="경기분석하기" />
        </div>
        <div className="w-full ml-1 mr-3">
          <HalfCard maintext="경기다시보기" />
        </div>
      </div>

      {/* 멤버 라인업 */}
      <div className="">
        <MemberList label="멤버 라인업" />
      </div>
      
      {/* 지도 */}
      <MiniMap
        lat={35.2037466}
        lng={126.8143846}
        address="광주시 광산구 장덕동 82-3"
        tel="062-951-9876"
        onClick={() => onClickCopy(address)}
      />
    </div>
  );
};

export default MatchDetailBody;
