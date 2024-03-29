import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import MatchDetailBody from "@/components/organisms/match_detail_body/MatchDetailBody";
import MatchDetailHeader from "@/components/organisms/match_detail_header/MatchDetailHeader";
import { useNavigate } from "react-router-dom";
import futsalCourtData from "@/data/futsalCourts.json";

const MatchDetailTemplate = ({
  matchDetailPropsData,
}: {
  matchDetailPropsData: matchDetailPropsDataType;
}) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/");
  };

  const courtData = futsalCourtData.find(
    (court) => court.id === matchDetailPropsData.courtId
  );

  const propData = matchDetailPropsData;
  const gender = `${propData?.gender === 1 ? "남자" : propData?.gender === 2 ? "여자" : "혼성"}`;
  const playerNumber = `${propData?.playerNumber === 10 ? "5vs5" : "6vs6"}`;

  return (
    <div>
      {courtData && (
        <div>
          <Header label="매치 상세" backArrow={true} headerButton={false} />
          <MatchDetailHeader
            matchDetailPropsData={matchDetailPropsData}
            courtData={courtData}
          />
          <MatchDetailBody
            matchDetailPropsData={matchDetailPropsData}
            courtData={courtData}
          />

          {/* Footer의 크기만큼 스크롤이 되지 않아서 공백 삽입 */}
          <div className="h-20"></div>

          <Footer
            label={`${gender} ∙ ${playerNumber} ∙ ${propData.level} `}
            buttonLabel="매치 참여 신청"
            onButtonClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default MatchDetailTemplate;
