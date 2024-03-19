import React, { useEffect, useState } from "react";
import Header from "@/components/organisms/header/Header";
import WideCard from "../molecules/wide_card/WideCard";
import IconButton from "../atoms/icon_button/IconButton";

const MatchListTemplete = () => {
  // 서버 데이터 저장용
  const [matches, setMatches] = useState<MatchData[]>([]);

  useEffect(() => {
    // 서버에서 데이터 호출
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    // 나중에 usequery 써서 데이터 불러올거
    // 하드코딩 예시(나중에 삭제할거)
    const fetchedMatches = [
      { id: 1, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 2, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 3, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 4, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 5, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 6, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 7, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 8, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 9, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
      { id: 10, bgimg: "bg-[url('/favicon.ico')]", subtext: "오전 10시", maintext: "광주 신화 풋살장", minitext: "남자·5vs5·중 수준", buttonlabel: "인원 6/10" },
    ];
    setMatches(fetchedMatches);
  };

  return (
    <div className="relative">
      <Header label="매치 목록" display="hidden" />
      {matches.map((match) => (
        <WideCard
          key={match.id}
          bgimg={match.bgimg}
          subtext={match.subtext}
          maintext={match.maintext}
          minitext={match.minitext}
          buttonlabel={match.buttonlabel}
        />
      ))}
      <div className="fixed bottom-[4.5rem] right-2">
        <IconButton icon="pen" />
      </div>
    </div>
  );
};

export default MatchListTemplete;
