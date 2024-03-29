import Typography from "@/components/atoms/typography/Typography";

// 한국 날짜 설정
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const MatchDetailHeader = ({
  matchDetailPropsData,
  courtData,
}: MatchDetailPropsType) => {
  // 날짜 형식 변경
  const date = dayjs(matchDetailPropsData.startDate).format("M월 D일 (ddd)");

  // 받은 시간을 오전, 오후 확인 후 형식 변경
  const time = matchDetailPropsData.time;
  const formatTime = (time: number) => {
    const isAM = time < 12;
    let formattedHour = time % 12;
    if (formattedHour === 0) {
      formattedHour = 12; // 0시 혹은 12시는 12로 표시
    }
    return isAM ? `오전 ${formattedHour}시` : `오후 ${formattedHour}시`;
  };

  return (
    <div id="glassui" className="flex flex-col justify-between p-3 m-3 ">
      <div className="flex justify-between px-2">
        <div>
          <div>
            <Typography
              label={courtData?.title}
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          <Typography
            label={`${date} ${formatTime(time)}`}
            fontWeight="font-medium"
            textSize="text-base"
          />
        </div>
      </div>

      <div className="text-right px-2">
        <div>
          <Typography
            label="매치장"
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
        <div>
          <Typography
            label={matchDetailPropsData.manager}
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchDetailHeader;
