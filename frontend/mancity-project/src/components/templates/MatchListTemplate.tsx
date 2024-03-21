import { forwardRef, useEffect, useState } from "react";
import Header from "@/components/organisms/header/Header";
import WideCard from "../molecules/wide_card/WideCard";
import FontawsomeIcon from "../atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MatchListTemplate = () => {
  // 서버 데이터 저장용
  const [matches, setMatches] = useState<MatchData[]>([]);
  // datepicker 관련 지정
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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

  // 라우팅 관련 함수
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  useEffect(() => {
    // 서버에서 데이터 호출
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    // 나중에 usequery 써서 데이터 불러올거
    // 하드코딩 예시(나중에 삭제할거)
    const fetchedMatches = [
      {
        id: 1,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 2,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 3,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 4,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 5,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 6,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 7,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 8,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 9,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
      {
        id: 10,
        file: "/src/assets/imgs/mancity_logo.png",
        subtext: "오전 10시",
        maintext: "광주 신화 풋살장",
        minitext: "남자·5vs5·중 수준",
        buttonlabel: "인원 6/10",
      },
    ];
    setMatches(fetchedMatches);
  };

  // // 선택된 날짜에 따라 필터링된 매치 목록을 생성
  // const filteredMatches = matches.filter((match) => {
  // });

  return (
    <div>
      <Header
        label="매치 목록"
        headerButton={true}
        backArrow={false}
        buttonLabel="매치등록"
        toWhere="/match/register"
      />
      <div className="flex items-center justify-between">
        <div
          className="flex items-center ml-4 cursor-pointer"
          onClick={() => handleNavigate({ path: "/match/filter" })}
        >
          <div className="text-[1.5rem] m-1">
            <FontawsomeIcon icon="filter" />
          </div>
          <div className="text-[1.2rem] font-medium">
            <span className="text-sofcity">필터</span>
          </div>
        </div>
        <div className="flex mr-4 font-medium text-[1.2rem] text-sofcity bottom-0">
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
            customInput={<ExampleCustomInput />}
          />
        </div>
      </div>
      {matches.map((match) => (
        <WideCard
          key={match.id}
          file={match.file}
          subtext={match.subtext}
          maintext={match.maintext}
          minitext={match.minitext}
          buttonlabel={match.buttonlabel}
        />
      ))}
    </div>
  );
};

export default MatchListTemplate;
