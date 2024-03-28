import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@/components/atoms/typography/Typography";

const MatchDetailBody = () => {
  const navigate = useNavigate();
  const { match_id } = useParams<{ match_id: string }>();
  const address = "광주시 광산구 장덕동 82-3";

  const onClickCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* 경기 분석하기 경기다시보기 버튼 */}
      <div className="flex justify-around mb-2">
        <div
          className="w-full ml-3 mr-1 cursor-pointer"
          onClick={() => {
            navigate(`/feedback/${match_id}`);
          }}
        >
          <HalfCard maintext="경기분석하기" />
        </div>
        <div
          className="w-full ml-1 mr-3 cursor-pointer"
          onClick={() => {
            navigate(`/replay/${match_id}`);
          }}
        >
          <HalfCard maintext="경기다시보기" />
        </div>
      </div>

      {/* 멤버 라인업 */}
      <div className="">
        <MemberList label="멤버 라인업" />
      </div>

      {/* 지도 */}
      <div id="glassui" className="py-1 m-4">
        <div className="m-2">
          <Typography label="경기장" textSize="text-lg" />
        </div>
        <hr className="border-sofcity border-[0.05rem] m-2" />
        <MiniMap
          lat={35.2037466}
          lng={126.8143846}
          address="광주시 광산구 장덕동 82-3"
          tel="062-951-9876"
          onClick={() => onClickCopy(address)}
        />
      </div>
    </div>
  );
};

export default MatchDetailBody;
