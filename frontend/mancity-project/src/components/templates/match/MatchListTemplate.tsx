import { forwardRef, useEffect, useState } from "react";
import Header from "@/components/organisms/header/Header";
import WideCard from "../../molecules/wide_card/WideCard";
import FontawsomeIcon from "../../atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "@tanstack/react-query";
import { fetchMatchList } from "@/apis/matchApis";
import dayjs from "dayjs";
import futsalCourtData from "@/data/futsalCourts.json";

const MatchListTemplate = () => {
  // datepicker 관련 지정
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const ExampleCustomInput = forwardRef<
    HTMLButtonElement,
    ExampleCustomInputProps
  >(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
      <div className="flex">
        <span>{value}</span>
        <div className="ml-2">
          <FontawsomeIcon icon="calendar-days" />
        </div>
      </div>
    </button>
  ));

  // 오늘 날짜 저장
  const today = dayjs().format("YYYY-MM-DD");
  // 날짜 형식 변경
  const formatedDatedate = dayjs(selectedDate).format("YYYY-MM-DD");

  // 라우팅 관련 함수
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["fetchMatchList"],
    queryFn: async () => {
      const response = await fetchMatchList(
        dayjs(selectedDate).format("YYYY-MM-DD")
      );
      return response;
    },
  });

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  console.log(formatedDatedate);
  console.log(data);
  return (
    <div>
      <Header
        label="매치 목록"
        headerButton={true}
        backArrow={false}
        buttonLabel="매치등록"
        toWhere="/match/register"
      />
      <div id="glassui" className="flex items-center justify-between p-3 m-3">
        <div className="flex items-center ml-4">
          <p className="text-[1.2rem] text-sofcity font-medium">날짜 선택:</p>
        </div>
        <div className="flex mr-4 font-medium text-[1.2rem] text-sofcity bottom-0">
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
            customInput={<ExampleCustomInput />}
            popperPlacement="top-start"
          />
        </div>
      </div>

      {data &&
        data.map((match: matchDetailPropsDataType) => {
          const courtData = futsalCourtData.find(
            (court) => court.id === match.courtId
          );

          const gender =
            match.gender === 1 ? "남성" : match.gender === 2 ? "여성" : "혼성";
          const playerNumber = match.playerNumber === 10 ? "5vs5" : "6vs6";
          const level =
            match.level === "L"
              ? "취미풋살"
              : match.level === "M"
                ? "선출포함"
                : "프로풋살";
          return (
            <div
              key={match.gameId}
              className="cursor-pointer"
              onClick={() => handleNavigate({ path: `/match/${match.gameId}` })}
            >
              <WideCard
                key={match.gameId}
                // file={match.replayUrl}
                subtext={match.startDate}
                maintext={courtData?.title}
                minitext={`${gender} ∙ ${playerNumber} ∙ ${level} `}
                buttonlabel={`${String(match.participants.length)} / ${match.playerNumber} `}
              />
            </div>
          );
        })}
    </div>
  );
};

export default MatchListTemplate;
