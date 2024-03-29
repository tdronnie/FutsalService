import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import { useNavigate, useParams } from "react-router-dom";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

// 한국 날짜 설정
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
const MatchDetailBody = ({
  matchDetailPropsData,
  courtData,
}: MatchDetailPropsType) => {
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
  // 오늘 날짜 저장
  const today = dayjs().format("YYYY-MM-DD");

  // 경기가 현재 날짜와 비교해서 지났는지 여부
  const isOver = dayjs(today).isBefore(matchDetailPropsData.startDate);

  console.log(matchDetailPropsData);
  return (
    <div>
      {/* 경기 분석하기 경기다시보기 버튼 */}
      {/* 분석하기는 input file 형식으로 */}
      {/* 분석완료되면 버튼 형식으로 라우팅 설정 */}

      {!isOver && (
        <div className="flex justify-around mb-2">
          {matchDetailPropsData.calcOver ? (
            <div
              className="w-full ml-3 mr-1 cursor-pointer"
              onClick={() => {
                navigate(`/feedback/${match_id}`);
              }}
            >
              <HalfCard
                maintext="경기결과보기"
                file="/src/assets/imgs/game_result.svg"
                rounded="rounded-none"
              />
            </div>
          ) : (
            <div
              className="w-full ml-3 mr-1 cursor-pointer"
              onClick={() => {
                navigate(`/feedback/${match_id}`);
              }}
            >
              <HalfCard
                maintext="경기분석하기"
                file="/src/assets/imgs/stick_chart.svg"
                rounded="rounded-none"
              />
            </div>
          )}

          <div
            className="w-full ml-1 mr-3 cursor-pointer"
            onClick={() => {
              navigate(`/replay/${match_id}`);
            }}
          >
            <HalfCard
              maintext="경기다시보기"
              file="/src/assets/imgs/replay.svg"
              rounded="rounded-none"
            />
          </div>
        </div>
      )}
      {/* 멤버 라인업 */}
      <div>
        <MemberList participants={matchDetailPropsData.participants} />
      </div>

      {/* 지도 */}
      <div id="glassui" className="py-1 m-3">
        <div className="m-2">
          <MyTypography label="경기장" textSize="text-lg" />
        </div>
        <hr className="border-sofcity border-[0.05rem] m-2" />
        <MiniMap
          lat={courtData.lat}
          lng={courtData.lng}
          address={courtData.address}
          tel={courtData.tel}
          onClick={() => onClickCopy(address)}
        />
      </div>
    </div>
  );
};

export default MatchDetailBody;
