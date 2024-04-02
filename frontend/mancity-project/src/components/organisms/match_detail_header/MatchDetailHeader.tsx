import MyTypography from "@/components/atoms/my_typography/MyTypography";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router";

// 한국 날짜 설정
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const MatchDetailHeader = ({
  matchDetailPropsData,
  courtData,
}: MatchDetailPropsType) => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

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
            <MyTypography
              label={courtData?.title}
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          <MyTypography
            label={`${date} ${formatTime(time)}`}
            fontWeight="font-medium"
            textSize="text-base"
          />
        </div>

        <div
          className="flex cursor-pointer"
          onClick={() => handleNavigate({ path: "/club" })}
        >
          <div className="mr-1">
            <FontawsomeIcon icon="tower-cell" />
          </div>
          <div>
            <MyTypography
              label="용병호출하러가기"
              fontWeight="font-medium"
              textSize="text-sm"
              textColor="text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="px-2 text-right">
        <div>
          <MyTypography
            label="매치장"
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
        <div>
          <MyTypography
            label={String(matchDetailPropsData.managerName)}
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
