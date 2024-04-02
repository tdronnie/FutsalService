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
import Dropdown from "@/components/molecules/dropdown/Dropdown";

const MatchListTemplate = () => {
  const [matchFilterData, setMatchFilterData] = useState<matchFilterDataType>({
    date: "",
    gender: 0,
    playerNumber: 0,
    level: "",
  });

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

  // 성별
  const GenderInfo = [
    { value: 0, label: "All" },
    { value: 1, label: "남성" },
    { value: 2, label: "여성" },
    { value: 3, label: "혼성" },
  ];
  const [genderLabel, setGenderLabel] = useState("성별");
  const [genderValue, setGenderValue] = useState(0);

  // 인원

  const RuleInfo = [
    { value: 0, label: "All" },
    { value: 10, label: "5vs5" },
    { value: 12, label: "6vs6" },
  ];
  const [ruleLabel, setRuleLabel] = useState("인원");
  const [ruleValue, setRuleValue] = useState(0);

  // 수준
  const LevelInfo = [
    { value: "", label: "All" },
    { value: "L", label: "취미풋살" },
    { value: "M", label: "선출포함" },
    { value: "H", label: "프로풋살" },
  ];
  const [levelLabel, setLevelLabel] = useState("분류");
  const [levelValue, setLevelValue] = useState("");

  // 입력값을 data 형식에 할당
  useEffect(() => {
    setMatchFilterData({
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
      gender: genderValue,
      playerNumber: ruleValue,
      level: levelValue,
    });
  }, [selectedDate, genderValue, ruleValue, levelValue]);

  // 라우팅 관련 함수
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["fetchMatchList"],
    queryFn: async () => {
      const response = await fetchMatchList(matchFilterData);
      return response;
    },
  });

  useEffect(() => {
    refetch();
  }, [matchFilterData]);

  console.log(matchFilterData);
  // 날짜 형식 변경
  // const formatedDatedate = dayjs(selectedDate).format("YYYY-MM-DD");
  // console.log(formatedDatedate);
  // console.log(data);
  return (
    <div className="flex-col">
      <Header
        label="매치 목록"
        headerButton={true}
        backArrow={false}
        buttonLabel="매치등록"
        toWhere="/match/register"
      />

      {/* 날짜 선택 */}
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
      {/* 필터 */}
      <div id="glassui" className="flex justify-center mx-3 ">
        <div className="flex justify-center w-full ">
          {/* 인원 */}
          <div className="w-full -m-1 ">
            <Dropdown
              // MyTypographyLabel="인원"
              items={RuleInfo}
              position={ruleLabel}
              setPosition={setRuleLabel}
              setNumberValue={setRuleValue}
            />
          </div>
          {/* 성별 */}

          <div className="w-full -m-1">
            <Dropdown
              // MyTypographyLabel="성별"
              items={GenderInfo}
              position={genderLabel}
              setPosition={setGenderLabel}
              setNumberValue={setGenderValue}
            />
          </div>
          {/* 수준 */}
          <div className="w-full -m-1">
            <Dropdown
              // MyTypographyLabel="분류"
              items={LevelInfo}
              position={levelLabel}
              setPosition={setLevelLabel}
              setNumberValue={setLevelValue}
            />
          </div>
        </div>
      </div>

      {/* 매치 카드 리스트 */}
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
