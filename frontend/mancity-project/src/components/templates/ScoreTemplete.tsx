import { useNavigate } from "react-router-dom";
import Header from "@/components/organisms/header/Header";
import Typography from "@/components/atoms/typography/Typography";
import GroupHighlightCard from "@/components/organisms/group_highlight_card/GroupHighlightCard";
import HalfCard from "@/components/molecules/half_card/HalfCard";

const ScoreTemplete = () => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  return (
    <div>
      <Header label="경기 통계" backArrow={true} headerButton={false} />

      <div className="m-4">
        <div id="glassui" className="p-1">
          {/* 영상 나오는 자리 */}
          <div className="flex justify-center mx-5 mt-5">
            <video id="myVideo" controls>
              <source
                src="https://iandwe.s3.ap-northeast-2.amazonaws.com/match/yKa0ly3L"
                type="video/mp4"
              />
            </video>
          </div>

          {/* 팀 구분 하는 자리 */}
          <div className="flex justify-around my-1 text-xl font-bold">
            <span>HOME팀</span>
            <span>|</span>
            <span>AWAY팀</span>
          </div>
        </div>
      </div>

      {/* 경기통계 */}
      <div id="glassui" className="py-1 m-4">
        <div className="mx-4 my-2">
          <Typography
            label="경기 통계"
            textColor="black"
            textSize="text-2xl"
            fontWeight="font-medium"
          />
        </div>
        <hr className="border border-sofcity" />

        <div className="px-2 m-3 bg-white bg-opacity-30 opacity-90 rounded-xl">
          {/* 팀 */}
          <div className="flex justify-around p-2">
            <span>HOME</span>
            <span>팀</span>
            <span>AWAY</span>
          </div>
          <hr className="border border-sofcity" />

          {/* 점수  */}
          <div className="flex justify-around p-2">
            <span>2</span>
            <span>점수</span>
            <span>1</span>
          </div>
          <hr className="border border-sofcity" />

          {/* 점유율 */}
          <div className="flex justify-around p-2">
            <span>60%</span>
            <span>점유율</span>
            <span>40%</span>
          </div>
          <hr className="border border-sofcity" />

          {/* 슈팅수 */}
          <div className="flex justify-around p-2">
            <span>15</span>
            <span>슈팅수</span>
            <span>23</span>
          </div>
          <hr className="border border-sofcity" />

          {/* 패스수 */}
          <div className="flex justify-around p-2">
            <span>128</span>
            <span>패스수</span>
            <span>111</span>
          </div>
        </div>
      </div>

      {/* 피드백 경로 버튼 */}
      <div className="flex justify-around mb-2">
        <div
          className="w-full ml-3 mr-1 cursor-pointer"
          onClick={() => handleNavigate({ path: "/feedback/1" })}
        >
          <HalfCard maintext="경기 피드백" />
        </div>
        <div
          className="w-full ml-1 mr-3 cursor-pointer"
          onClick={() => handleNavigate({ path: "/playerfix/1" })}
        >
          <HalfCard maintext="개인 기록" />
        </div>
      </div>

      {/* 하이라이트 */}
      <GroupHighlightCard />
    </div>
  );
};

export default ScoreTemplete;
