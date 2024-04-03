import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import MatchDetailBody from "@/components/organisms/match_detail_body/MatchDetailBody";
import MatchDetailHeader from "@/components/organisms/match_detail_header/MatchDetailHeader";
import futsalCourtData from "@/data/futsalCourts.json";
import useUserStore from "@/stores/userStore";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { matchRequestApi } from "@/apis/matchApis";

const MatchDetailTemplate = ({
  matchDetailPropsData,
}: {
  matchDetailPropsData: matchDetailPropsDataType;
}) => {
  const userId = useUserStore((state) => state.id);
  const participantData = {
    gameId: matchDetailPropsData.gameId,
    userId: userId,
  };

  const { mutate } = useMutation({
    mutationFn: matchRequestApi,
    onSuccess: () => {
      Swal.fire({
        title: "참여 신청 완료",
        text: "매치장의 수락을 기다려주세요!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
      });
    },
    onError: () => {
      Swal.fire({
        title: "참여 신청 에러",
        html: "참여 신청이 불가능합니다. 죄송합니다.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
    },
  });

  const onButtonClick = () => {
    mutate(participantData);
  };

  const courtData = futsalCourtData.find(
    (court) => court.id === matchDetailPropsData.courtId
  );

  const propData = matchDetailPropsData;
  const gender = `${propData?.gender === 1 ? "남자" : propData?.gender === 2 ? "여자" : "혼성"}`;
  const playerNumber = `${propData?.playerNumber === 10 ? "5vs5" : "6vs6"}`;
  const level = `${propData?.level === "L" ? "취미풋살" : propData?.level === "M" ? "선출포함" : "프로풋살"}`;

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
          <div className="h-16"></div>

          <Footer
            label={`${gender} ∙ ${playerNumber} ∙ ${level} `}
            buttonLabel="매치 참여 신청"
            onButtonClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default MatchDetailTemplate;
